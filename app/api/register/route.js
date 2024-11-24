import { connectMongoDb } from '@/lib/mongoDB'
import User from '@/models/user'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
export async function POST(req) {
    try {
        const { username, email, phone, password} = await req.json()
        const hashedPassword = await bcrypt.hash(password, 10)
        await connectMongoDb() //wait for the connection 
        await User.create({ username, email, phone, password:hashedPassword })
        return NextResponse.json({message: "user registered"}, {status: 200})
    } catch (error){
        console.log(error)
        return NextResponse.json({message: "error"}, {status: 500})
    }
}