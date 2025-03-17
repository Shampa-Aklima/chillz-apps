"use client"

import { useState, ChangeEvent } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginModal() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full flex shadow-xl">
        {/* Close button */}
        <button className="absolute top-4 left-4 text-black">
          <X className="w-5 h-5" />
        </button>

        {/* Left side - Login form */}
        <div className="w-1/2 p-10 flex flex-col">
          <div className="mt-6">
            <h1 className="text-4xl font-bold mb-1">Welcome</h1>
            <p className="text-sm text-gray-600 mb-8">We are glad to see you back with us</p>

            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                  className="bg-gray-100 border-0 rounded-md py-3"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  className="bg-gray-100 border-0 rounded-md py-3"
                />
              </div>

              <Button className="w-full bg-black text-white hover:bg-black/90 rounded-md py-6">NEXT</Button>

              <div className="text-center text-sm text-gray-500 my-2">Login with Others</div>

              <button className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
                <span>Sign with Google</span>
              </button>

              <button className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <Image src="/facebook-icon.svg" alt="Facebook" width={20} height={20} />
                <span>Sign with Facebook</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-1/2 bg-black">
          <Image
            src="/login.jpeg"
            alt="Coca Cola Zero Can"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

