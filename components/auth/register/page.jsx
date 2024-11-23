'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
export default function RegisterPage(){

  const router = useRouter()
  const [user, setUser] = useState([])
  const [isSignIn, setIsSignIn] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  })

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if(storedUser){
      setUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  useEffect(() => {
    if(isSignIn){
      router.push('/login')
    }
  })
 

  console.log(isSignIn)
  //handle input change
  const HandleInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]:value })
  } 

  //handle submission function 
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!formData.username || !formData.email || !formData.phone || !formData.password ){
      console.log('form must be filled')
      return 
    }

    setUser([...user, formData])
    setFormData({ username: '', email: '', phone: '', password: ''})
    setIsSignIn(true)
    console.log('successfully signin in')
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

        { !isSignIn ? (
           <form className="flex flex-col min-w-full justify-center items-center pt-5" onSubmit={handleSubmit}>
           <div className="flex justify-center flex-col mb-2 w-full max-w-xs rounded-full">
               <input type="text" name="username" placeholder="username" value={formData.username} onChange={HandleInput} className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none mb-2"/>
               <input type="email" name="email" placeholder="email" value={formData.email} onChange={HandleInput} className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none mb-2"/>
               <input type="text" name="phone" placeholder="phone" value={formData.phone} onChange={HandleInput} className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none mb-2"/>
               <input type="password" name="password" placeholder="password" value={formData.password} onChange={HandleInput} className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center border-none mb-2"/>
          </div>
         <button  className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center ">Continue</button>
       </form>
        ) : (
          <div>
            <h1>
              you are already signed in
            </h1>
          </div>
        ) }
       
      </div>
    )
}