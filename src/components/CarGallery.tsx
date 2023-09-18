import Image from 'next/image';
import React from 'react';


export const CarGallery = () => {
  return (
    <>
      <div className="flex flex-row">
        <Image src="/1.jpeg" alt={''} width="256" height="256" />
        <Image src="/2.jpeg" alt={''} width="256" height="256" />
        <Image src="/3.jpeg" alt={''} width="256" height="256" />
        <Image src="/4.jpeg" alt={''} width="256" height="256" />
      </div>
      <div className="flex flex-row mt-4">
        <Image src="/5.jpeg" alt={''} width="256" height="256" />
        <Image src="/6.jpeg" alt={''} width="256" height="256" />
        <Image src="/7.jpeg" alt={''} width="256" height="256" />
        <Image src="/8.jpeg" alt={''} width="256" height="256" />
      </div>
      <div className="flex flex-row mt-4">
        <Image src="/9.jpeg" alt={''} width="256" height="256" />
        <Image src="/10.jpeg" alt={''} width="256" height="256" />
        <Image src="/11.jpeg" alt={''} width="256" height="256" />
        <Image src="/12.jpeg" alt={''} width="256" height="256" />
      </div>
      <div className="flex flex-row mt-4">
        <Image src="/13.jpeg" alt={''} width="256" height="256" />
        <Image src="/14.jpeg" alt={''} width="256" height="256" />
        <Image src="/15.jpeg" alt={''} width="256" height="256" />
        <Image src="/16.jpeg" alt={''} width="256" height="256" />
      </div>
    </>

  )
}