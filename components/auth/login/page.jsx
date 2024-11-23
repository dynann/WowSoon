'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage(){


  const router = useRouter()
  const [formData, setFormData ] = useState({
    username: '',
    password: '',
  })
  const [users, setUsers] = useState([])

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if(storedUser){
      setUsers(JSON.parse(storedUser))

    }
  }, [])

  console.log(users)
  //handle input 
  const handleInput = (e) => {
    const  { name, value } = e.target
    setFormData({
      ...formData, [name]: value
    })
  }

  //handle login
  const handleSingIn = (e) => {
    e.preventDefault()
    const user = users.find((user) => 
      user.username === formData.username &&
      user.password === formData.password
    )

    if (user){
      console.log('login successfully')
      router.push('/')
    } else {
      console.log('invalid username and pasword')
    }
  }



 
    return(
        <div className=" relative p-8 flex flex-col space-y-4 items-center">
        <div className="mt-16 flex flex-col items-center">
          <div className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
              {/* logo section */}
            <div className="relative">
              <div
                className="w-6 h-8 bg-primary absolute left-0 transform -rotate-45"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)" }}
              ></div>
              <div
                className="w-4 h-6 bg-primary absolute right-0 transform rotate-45"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%, 0 100%)" }}
              ></div>
            </div>
          </div>
          <h1 className="text-white text-3xl font-bold"> WOWSOON </h1>
          {/* logo section */}
        </div>
        <form className="flex flex-col min-w-full justify-center items-center pt-5" onSubmit={handleSingIn}>
            <div className="flex justify-center flex-col mb-2 w-full max-w-xs rounded-full">
                <input type="text" placeholder="username" name="username" value={formData.username} onChange={handleInput} className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none mb-2"/>
                <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleInput} className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none"/>
           </div>
          <button type="submit" className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center ">sign in</button>
        </form>
        
        <div>
            <p> do not have account account <Link href="/register" className="bold" > sing up </Link> </p>
        </div>
      </div>
    )
}