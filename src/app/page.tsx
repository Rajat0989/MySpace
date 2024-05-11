"use client"

import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignOutButton, SignedOut } from "@clerk/nextjs"
import { api } from "../../convex/_generated/api"
import { useMutation, useQuery } from "convex/react"

export default function Home() {

  const getFiles = useQuery(api.files.getFiles)
  const createFile = useMutation(api.files.createFile)

  return (
    <div className="h-screen w-full flex flex-col justify-around items-center">
      <SignedIn>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      <Button
        onClick={() => {
          createFile({
            name: "test",
          })
        }}
      >
        Click Me
      </Button>
    </div>
  )
}
