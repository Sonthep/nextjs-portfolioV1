import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { NextSeo } from 'next-seo'
import { FaAddressCard } from "react-icons/fa";
import Birthday from "@/images/birthday.png"
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiFirebase,
  SiJupyter,
  SiFlask,
  SiPostgresql,
} from 'react-icons/si'
import { useState } from 'react';
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import portraitImage from '@/images/profile.jpg'
import { baseUrl } from '../seo.config'
import thailandIcon from '@/images/thailand.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          className,
          'group inline-flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 hover:scale-110 hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500'
        )}
      >
        <Icon className="mr-3 h-[1.2rem] w-[1.2rem] flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

const Intro = () => {
  const [showSections, setShowSections] = useState(false);

  const toggleSections = () => {
    setShowSections(!showSections);
  };

  return (
    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 md:text-justify tracking-tight md:tracking-wide ">
      <p>
        Imagine a child mesmerized by the glow of a computer screen, 
        curiosity sparking a lifelong love affair with technology. That 
        child was me. From my early days in the middle school computer club, 
        where I thrived and represented the school in academic competitions, 
        to earning a prestigious scholarship from Her Royal Highness Princess 
        Maha Chakri Sirindhorn to study computer engineering at Rajamangala 
        University of Technology Thanyaburi, my journey has been fueled by a 
        relentless passion for innovation.
      </p>
      {showSections && (
        <>
          <p>
            But my world wasn&apos;t just lines of code and textbooks. As an avid 
            gamer, I was captivated by the intricate challenges hidden within virtual 
            worlds. This desire to find the best way became the bridge that led me to 
            coding. Fueled by friendly Python competitions with friends, I discovered 
            the exhilarating thrill of solving problems and expressing myself through 
            lines of code. It was a spark that ignited a fire, propelling me to explore 
            diverse languages and tools.
          </p>
          <p>
            Today, I&apos;m not just a coder, I&apos;m a self-driven learner, constantly 
            seeking new frontiers in the ever-evolving tech landscape. New frameworks and 
            technologies beckon, each offering opportunities to expand my knowledge and 
            tackle real-world challenges with innovative solutions. This insatiable curiosity 
            and drive to create define my journey, and I&apos;m excited to see where it takes me next.
          </p>
        </>
      )}
      <Button
        className="py-1"
        onClick={toggleSections}
      >
        {showSections ? 'Hide Sections' : 'See more'}
      </Button>
    </div>
  );
};

function Skills({ className, icon: Icon, children }) {
  return (
    <li>
      <div className="group inline-flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 hover:scale-110 dark:text-zinc-200">
        <Icon
          className={clsx(
            className,
            'mr-3 h-[1.2rem] w-[1.2rem] fill-indigo-500/70 dark:fill-indigo-300'
          )}
        />
        <span className="ml-4">{children}</span>
      </div>
    </li>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About"
        description="I'm a front end web developer and designer. I live in India, where I break things and learn fast."
        canonical={`${baseUrl}about/`}
        openGraph={{
          url: `${baseUrl}about/`,
          title: 'About',
          description:
            "I'm a front end web developer and designer. I live in India, where I break things and learn fast.",
          images: [
            {
              url: `${baseUrl}api/og?title=About`,
              width: 1200,
              height: 600,
              alt: `Blog | Sonthep Simmalee`,
            },
          ],
        }}
      />
      <Container className=" mt-16 sm:mt-32 ">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex justify-center lg:col-span-5">
            <div className="pt-2 lg:pl-10">
              <div className="max-w-xs px-2.5 ">
                <Image
                  src={portraitImage}
                  alt="Avatar Image of Sonthep Simmalee"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="transition duration-500 hover:scale-110 rounded-full  border-solid ring-neutral-100 ring-[10px] "
                  priority
                />
              </div>
            </div>
          </div>
          <div className="lg:order-first lg:col-span-7 lg:row-span-2">
            <h1 className="font-heading text-4xl tracking-wider text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m{' '}
              <span
                className="animate-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text
            text-transparent dark:from-purple-400 dark:via-indigo-400
            dark:to-pink-400"
              >
                Sonthep Simmalee.
              </span>
              <div className='flex flex-row'>
                <p>
                  I live in Udonthani
                </p>
                <div> <Image
                  src={thailandIcon}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                /></div>
              </div>
              <p>Thailand</p>
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 md:text-justify tracking-tight md:tracking-wide ">
           <div>
           <Intro/>
           </div>
              <div className="flex justify-center pt-8 md:hidden">
                <Button href="/projects" className="py-2">
                  See my projects
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden font-poppins lg:col-span-5 lg:block lg:pl-10">
            <div className="flex justify-center ml-10 ">
              <ul role="list" className="space-y-3 tracking-tight text-zinc-600 dark:text-zinc-400">
                <div className='flex flex-row gap-3'> <Image
                  src={Birthday}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                /><span> 4 Jun 1999</span></div>
                <div className='flex flex-row gap-3'><FaAddressCard className='w-14 h-14' /><div>33 Village No. 6, Mak Ya Subdistrict, Nong Wua So District, Udon Thani Province 41360</div></div>
                
                <Button href="/resume" className="py-1">
                  See my resume
                </Button>
              </ul>
            </div>
          </div>
          <div className="lg:hidden"></div>
        </div>
      </Container>
    </>
  )
}
