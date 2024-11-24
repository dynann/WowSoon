'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function RegisterPage(){


  //?? old authentication function
  // const router = useRouter()
  // const [user, setUser] = useState([])
  // const [isSignIn, setIsSignIn] = useState(false)
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   phone: '',
  //   password: '',
  // })

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user')
  //   if(storedUser){
  //     setUser(JSON.parse(storedUser))
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(user))
  // }, [user])

  // useEffect(() => {
  //   if(isSignIn){
  //     router.push('/login')
  //   }
  // })
 

  // console.log(isSignIn)
  // //handle input change
  // const HandleInput = (e) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]:value })
  // } 

  // //handle submission function 
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if(!formData.username || !formData.email || !formData.phone || !formData.password ){
  //     console.log('form must be filled')
  //     return 
  //   }

  //   setUser([...user, formData])
  //   setFormData({ username: '', email: '', phone: '', password: ''})
  //   setIsSignIn(true)
  //   console.log('successfully signin in')
  // }

  //!! new authentication with Next Auth 
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!username || !email || !phone || !password ){
      console.log('form must be filled')
      return
    }
 
    try {
      //check whether user already exists  
      const resUserExists = await fetch('/api/userExists', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email})
      })
      const { user } = await resUserExists.json()
      if(user){
        setError("user already exist")
        return
      }


      //fetch register api route from
      //register and add to database
      const res = await fetch('/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username, email, phone, password
        })
      })
      if(res.ok){
        e.target.reset()
        router.push("/login") //todo push back and refresh the route
        router.refresh()
      } else {
        setError(res.json().message)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

     
    return (
        <div className=" relative p-8 flex flex-col space-y-4 items-center ">
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
          <h1 className="text-white text-3xl font-bold">WOWSOON</h1>
          {/* logo section */}
        </div>
           <form className="flex flex-col min-w-full justify-center items-center pt-5" onSubmit={handleSubmit}>
           <div className="flex justify-center flex-col mb-2 w-full max-w-xs rounded-full">
               <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none mb-2"/>
               <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none mb-2"/>
               <input type="text" placeholder="phone" onChange={(e) => setPhone(e.target.value)} className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none mb-2"/>
               <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none mb-2"/>
          </div>
         <button type="submit"  className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center ">Continue</button>
       </form>
       <Link href={"/login"}>
          {" "}
          already have account <span>login </span>{" "}
        </Link>
       {error && (
          <div>
            {error}
          </div>
       )}
      </div>
    )
}