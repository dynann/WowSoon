import { connectMongoDb } from "@/lib/mongoDB";
import User from "@/models/user";
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google"
import NextAuth from "next-auth";
dotenv.config()

export const authOptions = {
    providers : [
        Credentials({
            //only one credentials providers no id needed
            name: "credentials",
            credentials: {},
            async authorize(credentials){
                const { email, password } = credentials
                try {
                    await connectMongoDb()
                    const user = await User.findOne({email})
                    if(!user){
                        console.log("user not found")
                        return null
                    }
                    
                    const passwordMatch = await bcrypt.compare(password, user.password)
                    if(!passwordMatch){
                        console.log(password)
                        console.log(user.password)
                        console.log("wrong password")
                        return null
                    }
                    return user
                } catch (error){
                    console.log(error)
                }
            }
        }),
        Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
        
    ],
    sessions: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async session({ session, token }){
            if(token){
                session.user = session.user
                session.user.id = token.sub
                session.user.username = token.username
                session.user.email = token.email
                session.user.phone = token.phone
            }
            return session
        },
        async jwt({ token, user }){
            if(user){

                token.username = user.username
                token.email = user.email
                token.phone = user.phone 
            }
            return token
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }