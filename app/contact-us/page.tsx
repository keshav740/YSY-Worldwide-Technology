import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Contact - YSY WorldWide Technology",
  description:
    "We would love to hear from you. Whether you have a question about our services, need assistance, or just want to talk, we are here to help. Get in touch. contact ysy worldwide technology. world best web and app development company. world's best compliance and ml , ai service providing company",
};


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