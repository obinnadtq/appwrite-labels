import React, { useEffect } from "react";
import { account } from "../appwrite";

export default function Home() {
  useEffect(() => {
    (async () => {
      try {
        await account.get()
      }
      catch (e) {
        await account.createAnonymousSession();
      }
    })()
  }, [])

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h1 className="text-4xl mb-5 font-bold"> Welcome to the Car Gallery Application</h1>
    </div>
  )
}
