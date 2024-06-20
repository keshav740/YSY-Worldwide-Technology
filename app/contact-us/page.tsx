import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center mt-20 py-10">
        <div className="px-4 py-10 sm:px-8 md:px-20">
          <Image
            src="/cn.webp"
            alt="Ai Ml"
            width={1500}
            height={500}
            style={{ maxHeight: "600px", height: "auto" }}
            className="rounded-lg"
          />
        </div>
    </div>
    </>
  )
}

export default ContactUs