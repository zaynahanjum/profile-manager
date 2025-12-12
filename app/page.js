"use client"
import { useState } from "react"
import { loginWithEmail, createAccount } from "./core/auth"
import { useRouter } from "next/navigation"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();


  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-blue-300 p-6 rounded-lg flex flex-col gap-2">
        <p className="text-2xl text-center">Login Page</p>
        <input
          type="email"
          placeholder="email"
          className="p-2 bg-white"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 bg-white"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button
          className="bg-green-600 text-white p-2 text-center"
          onClick={async () => {
            await loginWithEmail(email, password).
              then(router.push("/profile"))
          }
          }>
          Login
        </button>
        <button
          className="bg-blue-800 text-white p-2 text-center"
          onClick={async () => {
            await createAccount(email, password)
          }
          }
        >
          Signup
        </button>
      </div>

    </div>
  )
}