"use client"

import { useState, useEffect } from "react";
import { fetchProfile } from "../core/profileLogic"

export default function Dashboardpage() {
    const [details, setDetails] = useState("");
    useEffect(() => {
        const handleFetch = async () => {
            const result = await fetchProfile();
            const temp = result.map((event) => ({
                ...event.data(),
            }));
            setDetails(temp[0]);
        };

        handleFetch();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-blue-300 p-6 rounded-lg flex flex-col gap-2 text-md font-medium">
                    <p className="text-2xl text-center">Dashboard</p>

                {details ? (
                    <>
                        <p>Name: {details.name}</p>
                        <p>Age: {details.age}</p>
                        <p>City: {details.city}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

        </div>
    );
}