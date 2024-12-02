import RegisterPage from "@/components/auth/register/page";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Register(){
    const getSession = await getServerSession()
    if(getSession){
        redirect('/home')
    }
    return <RegisterPage/>
}