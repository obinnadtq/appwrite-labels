import { account } from "@/appwrite";
import { CarGallery } from "@/components/CarGallery";
import { Models } from "appwrite";
import React, { useEffect, useState } from "react";

export default function Gallery() {
  const [userData, setUserData] = useState<Models.User<Models.Preferences>>();
  useEffect(() => {
    (async () => {
      try {
        const userData = await account.get();
        setUserData(userData)
      }
      catch (e) {
        await account.createAnonymousSession();
      }
    })()
  }, [])

  const handleUserSubscription = async () => {
    try {
      const response = await fetch(`/api/updateLabels`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userData?.$id })
      })
      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
      }
      else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (userData?.labels && !userData.labels.includes('subscriber')) {
    return (
      <div className="flex h-full flex-col justify-center items-center">
        <p className="text-2xl mb-5 font-bold"> You do not have access to view this page</p>
        <button className="bg-fuchsia-200" onClick={handleUserSubscription}>Click to subscribe</button>
      </div>
    )
  }
  else {
    return (
      <div className="m-auto">
        <CarGallery />
      </div>
    )
  }
}
