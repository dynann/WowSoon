
import LoginPage from "@/components/auth/login/page";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Login(){
    const session = await getServerSession(authOptions)
    if(session){
        redirect("/home")
    }
    return <LoginPage/>
}