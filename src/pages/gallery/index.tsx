import { account, storage } from "@/appwrite";
import { AppwriteException, Models } from "appwrite";
import React, { useEffect, useState } from "react";

export default function Gallery() {
  const [imageFiles, setImageFiles] = useState<Models.File[]>([]);
  const [errorCode, setErrorCode] = useState<number>();

  useEffect(() => {
    (async () => {
      try {
        await account.get();
      }
      catch (e) {
        await account.createAnonymousSession();
      }
    })()
  }, [])

  useEffect(() => {
    const getCarImages = async () => {
      try {
        const fileList = await storage.listFiles(process.env.BUCKET_ID!);;
        setImageFiles(fileList.files);
      }
      catch (error: any) {
        if (error instanceof AppwriteException) {
          setErrorCode(error.code);
        }
      }
    }
    getCarImages();
  }, [])

  const images = imageFiles?.map(x => {
    const imagePreview = storage.getFilePreview(x.bucketId, x.$id);
    return (
      <li key={imagePreview.href} className="mt-4"><img src={imagePreview.href} width="256" className="h-40" /></li>
    )
  });

  return (
    <>
      {images &&
        <ul className="flex flex-wrap">{images}</ul>
      }
      {errorCode === 401 &&
        (<div className="flex h-full flex-col justify-center items-center">
          <h1 className="text-4xl mb-5 font-bold"> You are not subscribed</h1>
        </div>
        )}
    </>
  )
}
