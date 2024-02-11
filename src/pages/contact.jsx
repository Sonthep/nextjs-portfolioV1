// pages/contact.js
import { FaMapMarkerAlt } from "react-icons/fa";
import { NextSeo } from 'next-seo';
import { Container } from '@/components/Container';
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import ContactImage from "@/images/contactImage.png"

export default function Contact() {
    
  return (
    <>
      <NextSeo
        title="Contact"
        description="Get in touch with us."
        canonical={`${process.env.baseUrl}contact/`}
      />
      <Container className="mt-16">
        
              <div className="max-w-2xl mx-auto">
                  <h1 className="text-3xl font-bold mb-8 text-zinc-800 dark:text-zinc-200 text-center">Contact Me</h1>
                  <div className="flex justify-center">
                      <Image
                          src={ContactImage}
                          width={500}
                          height={500}
                          alt="Picture of the author"
                      />
                  </div>
          <div className='space-y-4  text-zinc-800 dark:text-zinc-200 fill-slate-700'>
            <div className="flex flex-row gap-4 "><FaSquarePhone  className="w-4 h4 md:w-6 md:h-6 "/> <p> 064-563-9903</p></div>
            <div className="flex flex-row gap-4 "><MdEmail className="w-4 h4 md:w-6 md:h-6 " /><p> sonthep.simmalee@gmail.com</p></div>
            <div className="flex flex-row gap-4 "><FaMapMarkerAlt className="w-4 h4 md:w-6 md:h-6 " /><p>Address: 33 Village No. 6, Mak Ya Subdistrict, Nong Wua So District, Udon Thani Province 41360 Thailand</p></div>
          </div>
        </div>
      </Container>
    </>
  );
}
