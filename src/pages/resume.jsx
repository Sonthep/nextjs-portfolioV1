import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import Logo52 from '@/images/logo52.jpg';
import { DownloadLink } from '@/components/DownloadPDF';
import { BsGithub } from 'react-icons/bs';
import { MdEmail, MdOutlineWork } from 'react-icons/md';
import {
  SiFreecodecamp,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiFirebase,
  SiStrapi,
  SiStripe,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import portraitImage from '@/images/avatar.png';
import rmutt from '@/images/rmuttImage.png';
import { baseUrl } from '../seo.config';

const DownloadTranscript = ({ pdfUrl, displayText }) => (
  <DownloadLink pdfUrl={pdfUrl} displayText={displayText} />
);

const DownloadTranscriptM = ({ pdfUrl, displayText }) => (
  <DownloadLink pdfUrl={pdfUrl} displayText={displayText} />
);

const SocialLink = ({ className, href, children, icon: Icon }) => (
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
);

const Skills = ({ className, icon: Icon, children }) => (
  <li>
    <div className="group inline-flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 hover:scale-110 dark:text-zinc-200">
      <Icon className={clsx(className, 'mr-3 h-[1.2rem] w-[1.2rem] fill-indigo-500/70 dark:fill-indigo-300')} />
      <span className="ml-4">{children}</span>
    </div>
  </li>
);

export default function Resume() {
  return (
    <>
      <NextSeo
        title="Resume"
        description="I'm a front end web developer and designer. I live in India, where I break things and learn fast."
        canonical={`${baseUrl}resume/`}
        openGraph={{
          url: `${baseUrl}resume/`,
          title: 'Resume',
          description:
            "I'm a front end web developer and designer. I live in India, where I break things and learn fast.",
          images: [
            {
              url: `${baseUrl}api/og?title=About`,
              width: 1200,
              height: 600,
              alt: `Blog | Sonthep`,
            },
          ],
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex justify-center lg:col-span-5">
            <div className="pt-2 lg:pl-10">
              <div className="max-w-xs px-2.5">
                <Image
                  src={portraitImage}
                  alt="Avatar Image of Sonthep Simmalee"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="transition duration-500 hover:scale-110 rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="lg:order-first lg:col-span-7 lg:row-span-2">
            <h1 className="font-heading text-4xl tracking-wider text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m{' '}
              <span className="animate-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent dark:from-purple-400 dark:via-indigo-400 dark:to-pink-400">
                Sonthep Simmalee.
              </span>{' '}
              <br /> I&apos;m{' '}
              <span className="bg-gradient-to-r from-green-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent dark:from-green-400 dark:via-indigo-400 dark:to-pink-400">
                Computer Engineer.
              </span>
              <br /> I&apos;m{' '}
              <span className="bg-gradient-to-r from-red-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent dark:from-purple-400 dark:via-indigo-400 dark:to-pink-400">
                Front-end Developer.
              </span>
            </h1>
            <div className="mt-6 space-y-7 text-base  md:text-justify text-zinc-600 dark:text-zinc-400">
              <h1 className="text-center text-[30px] font-bold uppercase">certifications</h1>
              <div className="flex flex-row items-center gap-2 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="m-10 border rounded-full items-center">
                  <SiFreecodecamp className="w-10 h-10 m-2" />
                </div>
                <div className="text_section my-10">
                  <h1 className="font-bold text-[20px]">Front End Development Libraries </h1>
                  <h2 className="font-medium">freeCodeCamp</h2>
                  <p>February 2024</p>
                  <a target="_blank" href="https://www.freecodecamp.org/certification/Sonthep/front-end-development-libraries" className="text-indigo-500 hover:underline">Link</a>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="m-10 border rounded-full items-center">
                  <SiFreecodecamp className="w-10 h-10 m-2" />
                </div>
                <div className="text_section my-10">
                  <h1 className="font-bold text-[20px]">Responsive Web Design </h1>
                  <h2 className="font-medium">freeCodeCamp</h2>
                  <p>February 2024</p>
                  <a target="_blank" href="https://www.freecodecamp.org/certification/Sonthep/responsive-web-design" className="text-indigo-500 hover:underline">Link</a>
                </div>
              </div>
              <h1 className="text-center text-[30px] font-bold uppercase">Experience</h1>
              <div className="flex flex-row items-center gap-2 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="m-10 border rounded-full items-center">
                  <MdOutlineWork className="w-10 h-10 m-2 fill-blue-400 dark:fill-white" />
                </div>
                <div className="text_section my-10">
                  <h1 className="font-bold text-[20px]">Front End Developer Intern</h1>
                  <h2 className="font-medium">Coding advisor</h2>
                  <p>July 2021 – October 2021 / Bangkok</p>
                </div>
              </div>

              <div>
                <h1 className="text-center text-[30px] font-bold mb-10">EDUCATION</h1>
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <Image className="w-full h-auto rounded-t-xl bg-white" src={rmutt} alt="Image Description" />
                  <div className="p-4 md:p-5">
                    <span className="text-[20px] font-bold">Computer Engineer</span>
                    <span> / 2018 - 2022</span>
                    <p className="text-lg">Bachelor of Engineering</p>
                    <p className="mt-1 mb-4 text-gray-500 dark:text-gray-400">Rajamangala University of Technology Thanyaburi</p>
                    <Button className="py-1">
                      <DownloadTranscript pdfUrl="https://raw.githubusercontent.com/Sonthep/pdf_file/main/Transcript.pdf" displayText="Download Transcript" />
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <Image className="w-full h-auto rounded-t-xl" src={Logo52} alt="Image Description" />
                  <div className="p-4 md:p-5">
                    <span className="text-lg font-bold">Science-Mathematics</span>
                    <span> / 2015 - 2018</span>
                    <p>High School</p>
                    <p className="mt-1 mb-4 text-gray-500 dark:text-gray-400">Ratchaprachanukroh 52</p>
                    <Button className="py-1">
                      <DownloadTranscriptM pdfUrl="https://raw.githubusercontent.com/Sonthep/pdf_file/main/TranscriptM.pdf" displayText="Download Transcript" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="cursor-default">
                <span className="font-poppins text-[30px] font-bold tracking-widest flex justify-center">SKILLS</span>
                <ul role="list" className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 font-poppins md:grid-cols-3">
                  <Skills icon={SiJavascript} className="fill-yellow-400">Javascript</Skills>
                  <Skills icon={SiReact} className="fill-blue-400">React</Skills>
                  <Skills icon={SiNextdotjs} className="fill-black">Next.js</Skills>
                  <Skills icon={SiTailwindcss} className="fill-blue-400">Tailwind</Skills>
                  <Skills icon={SiPython}>Python</Skills>
                  <Skills icon={SiFirebase} className="fill-yellow-400">Firebase</Skills>
                  <Skills icon={TbApi} className="fill-blue-400">API</Skills>
                  <Skills icon={SiStrapi} className="fill-blue-400">Strapi</Skills>
                  <Skills icon={SiStripe} className="bg-blue-500 fill-white rounded-sm p-1">Stripe</Skills>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden font-poppins lg:col-span-5 lg:block lg:pl-10">
            <div className="flex justify-center">
              <ul role="list" className="space-y-6">
                <SocialLink href="https://github.com/Sonthep" icon={BsGithub}>
                  https://github.com/Sonthep
                </SocialLink>
                <SocialLink href="mailto:sonthep.simmalee@gmail.com" icon={MdEmail}>
                  sonthep.simmalee@gmail.com
                </SocialLink>
                <Button href="/projects" className="py-2">
                  See my projects
                </Button>
              </ul>
            </div>
          </div>
          <div className="lg:hidden"></div>
        </div>
      </Container>
    </>
  );
}
