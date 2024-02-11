import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import clsx from 'clsx';
import { BsLink45Deg, BsGithub } from 'react-icons/bs';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { baseUrl } from '../seo.config';
import data from '@/data/projects.js';

const DELAY_CLASSES = ['', 'delay-200', 'delay-500', 'delay-1000'];

function Project({ project, index }) {
  const [isLoading, setLoading] = useState(true);
  const { title, description, techUsed, github, link, image } = project;

  return (
    <Card as="li">
      <div className="aspect-w-16 aspect-h-9 group relative z-10 flex h-56 w-full items-center justify-center transition duration-500 dark:ring-0 tab:h-80 md:group-hover:scale-110 lg:h-64">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          className={clsx(
            `h-full w-full object-contain duration-1000 ease-in-out ${DELAY_CLASSES[index]}`,
            isLoading ? 'blur-lg' : 'blur-0'
          )}
          height="300"
          width="500"
          placeholder="blur"
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h2 className="z-10 mt-6 font-heading text-xl tracking-wider text-zinc-800 dark:text-zinc-100">{title}</h2>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-100/80 opacity-0 transition dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl md:group-hover:scale-100 md:group-hover:opacity-100" />
      <div className="z-10 pt-2">
        {techUsed.map((item, i) => (
          <span key={i} className="mr-2 inline-flex rounded-md font-poppins text-sm font-medium text-indigo-500/80 dark:text-indigo-400/70">
            {item}
            {i !== techUsed.length - 1 && <span className="mr-2 text-zinc-400 dark:text-zinc-500">|</span>}
          </span>
        ))}
      </div>
      <Card.Description className="">{description}</Card.Description>
      <p className="relative z-10 mt-4 flex items-center space-x-4 font-poppins text-xs font-medium text-zinc-500 transition dark:text-zinc-200">
        {github && (
          <Link href={github} className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-300 md:hover:text-indigo-500">
            <BsGithub className="h-[0.9rem] w-[0.9rem] flex-none fill-current transition" />
            <span className="ml-2">Source Code</span>
          </Link>
        )}
        {link && (
          <Link href={link} className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-300 md:hover:text-indigo-500">
            <BsLink45Deg className="h-4 w-4 flex-none fill-current transition" />
            <span className="-ml-4">Live Demo</span>
          </Link>
        )}
      </p>
    </Card>
  );
}

export default function ProjectsIndex() {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagSelect = (tag) => setSelectedTag(tag === selectedTag ? null : tag);
  const filteredProjects = selectedTag ? data.filter((project) => project.techUsed.includes(selectedTag)) : data;

  return (
    <>
      <NextSeo
        title="Projects"
        description="A collection of projects I've worked on."
        canonical={`${baseUrl}projects/`}
        openGraph={{
          url: `${baseUrl}projects/`,
          title: 'Projects',
          description: "A collection of projects I've worked on.",
          images: [{ url: `${baseUrl}api/og?title=Projects`, width: 1200, height: 600, alt: `Projects | Sonthep Simmalee` }],
        }}
      />
      <SimpleLayout
        preTitle="Welcome to our"
        title=" My Project"
        intro="where we combine sleek design with powerful functionality to create a captivating user experience. This project serves as the gateway to our application, providing users with an enticing glimpse into what awaits them."
      >
        <div className="flex mb-6 space-x-4">
          {['React', 'Tailwind CSS', 'Next.js', 'API', 'Flutter', 'Clerk'].map((tag) => (
            <button
              key={tag}
              className={`text-sm font-medium rounded-md py-1 px-2 ${selectedTag === tag ? 'bg-indigo-500 text-white' : 'bg-white text-indigo-500'}`}
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <ul role="list" className="grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-2">
          {filteredProjects.map((project, index) => <Project key={index} project={project} index={index} />)}
        </ul>
      </SimpleLayout>
    </>
  );
}
