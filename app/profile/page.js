"use client"
import { useState } from "react"
import createProfile from "../core/profileLogic"
import { useRouter } from "next/navigation"

export default function profilePage() {
    const router = useRouter();
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-blue-300 p-6 rounded-lg flex flex-col gap-2">
                <p className="text-2xl text-center">Profile Page</p>
                <input
                    type="text"
                    placeholder="Name"
                    className="p-2 bg-white"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <input
                    type="number"
                    placeholder="Age"
                    className="p-2 bg-white"
                    onChange={(e) => {
                        setAge(e.target.value)
                    }}
                />
                <input
                    type="text"
                    placeholder="City"
                    className="p-2 bg-white"
                    onChange={(e) => {
                        setCity(e.target.value)
                    }}
                />

                <button
                    className="bg-green-600 text-white p-2 text-center"
                    onClick={async () => {
                        await createProfile(name, age, city);
                        router.push("/dashboard")
                    }}
                >
                    Create Profile
                </button>
            </div>
        </div>
    )
}