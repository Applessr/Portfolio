'use client';

import Image from "next/image";
import "./globals.css";
import { TypeAnimation } from 'react-type-animation';

export default function HomePage() {

  interface Skill {
    logo: string;
    name: string;
  }

  const skills: Skill[] = [
    {
      logo: 'https://www.svgrepo.com/show/373669/html.svg',
      name: 'HTML'
    },
    {
      logo: 'https://www.svgrepo.com/show/349330/css3.svg',
      name: 'CSS'
    },
    {
      logo: 'https://www.svgrepo.com/show/452202/figma.svg',
      name: 'Figma'
    },
    {
      logo: 'https://www.svgrepo.com/show/374118/tailwind.svg',
      name: 'Tailwind'
    },
    {
      logo: 'https://www.svgrepo.com/show/349419/javascript.svg',
      name: 'Javascript'
    },
    {
      logo: 'https://www.svgrepo.com/show/349540/typescript.svg',
      name: 'Typescript'
    },
    {
      logo: 'https://www.svgrepo.com/show/452092/react.svg',
      name: 'React'
    },
    {
      logo: 'https://www.svgrepo.com/show/306466/next-dot-js.svg',
      name: 'Next.js'
    },
    {
      logo: 'https://www.svgrepo.com/show/376337/node-js.svg',
      name: 'Node.js'
    },
    {
      logo: 'https://www.svgrepo.com/show/373776/light-prisma.svg',
      name: 'Prisma'
    },
    {
      logo: 'https://www.svgrepo.com/show/373701/jest-snapshot.svg',
      name: 'Jest'
    },
    {
      logo: 'https://www.svgrepo.com/show/303251/mysql-logo.svg',
      name: 'MySql'
    },
    {
      logo: 'https://www.svgrepo.com/show/303232/mongodb-logo.svg',
      name: 'MongoDB'
    },
    {
      logo: 'https://www.svgrepo.com/show/452210/git.svg',
      name: 'Git'
    },
  ]

  return (
    <div className="px-8 sm:px-8 md:px-16 w-full max-w-screen-xl mx-auto">
      <div className="mt-0 md:mt-72 hidden md:flex ">
        <Image
          src="https://i.imgur.com/hw3L8oP.jpeg"
          alt="Example Image"
          width={1300}
          height={250}
          className="mx-auto"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
        />
      </div>
      <div className="flex flex-col mt-4 md:flex-row md:items-center md:mt-40 mb-16 gap-6 sm:gap-10">
        <div className="order-2 sm:px-4 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-start">
            Sasita Srisura
          </h1>
          <TypeAnimation
            sequence={[
              'Font-End Developer',
              1000,
              'Back-End Developer',
              1000,
              'Web Developer',
              1000,
              'Full-stack Developer',
            ]}
            wrapper="span"
            speed={50}
            className="text-lg md:text-2xl text-center md:text-start mt-4"
            repeat={Infinity}
          />
          <p className="mt-4 text-center text-sm md:text-base md:text-start">
            A motivated career changer with a determination to excel in software
            development. Having completed coding training, I am eager to apply my
            knowledge, embrace new skills, and continuously adapt to challenges. With
            a passion for learning and self-improvement, I am committed to
            continuously improving my technical skills and am eager to contribute to
            innovative and impactful projects in the tech industry.
          </p>
        </div>
        <div className="flex justify-center md:justify-start order-1">
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60 rounded-full overflow-hidden">
            <Image
              src="https://i.imgur.com/yf3RdEz.jpeg"
              alt="Profile"
              width={250}
              height={250}
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,..."
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mt-10 mb-6 text-center">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 flex flex-col items-center p-4"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 flex justify-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h2 className="text-md sm:text-lg font-medium mt-4">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
