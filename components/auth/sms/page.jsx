'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SmsPage(){
    const router = useRouter()
    const {data: session} = useSession()
    const [signIn, setIsSignedIn] = useState(false)
    useEffect(() => {
        if(session){
            setIsSignedIn(true)
        } else {
            setIsSignedIn(false)
        }
    }, [session])

  
    
    
    const handleOTP =  () => {
        if(signIn){
            router.push('/home')
        }
    }

    return (
        <div>
            <h1>
                {session? (
                    <div>
                        <h1>Hello please confirm ur sms</h1>
                        <button className="mb-3 px-2 py1 justify-center bg-white text-black" onClick={handleOTP}> confirm</button>
                    </div>
                ) : (
                    <h1>
                        <h1>
                            go back to sign in
                        </h1>
                    </h1>
                )}
            </h1>
        </div>
    )
}