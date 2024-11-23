'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const AboutPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [certificateImage, setCertificateImage] = useState('');

    const openModal = (image: string) => {
        setCertificateImage(image);
        setIsModalOpen(true);
    };

    const experiences = [
        {
            time: 'July 2023 to November 2024',
            title: 'CodeCamp#18: Fullstack JavaScript',
            org: 'Software Park Thailand',
            desc: `Intensive training program covering fullstack web development, including front-end and back-end development with JavaScript, React, Node.js, and database integration.`,
            certificateImage: 'https://i.imgur.com/your-certificate-image1.jpg', 
        },
        {
            time: 'May 2023 to July 2024',
            title: 'Basics of Programming',
            org: 'Tech Up',
            desc: `Entry-level course focusing on programming fundamentals, problem-solving, and essential coding skills for building a strong foundation in software development.`,
            certificateImage: 'https://i.imgur.com/iiTsXYk.png', 
        },
        {
            time: 'May 2023 to September 2023',
            title: 'General Tour Guide Training',
            org: 'Suan Sunandha Rajabhat University, Udon Thani Campus',
            desc: `Participated in comprehensive training focused on enhancing tour guiding skills, cultural communication, and customer service.`,
            certificateImage: 'https://i.imgur.com/d74HjDK.jpeg', 
        },
        {
            time: '2019 to 2023',
            title: 'Bachelor of Arts (Western Languages)',
            org: 'Faculty of Humanities and Social Sciences',
            desc: `Major: Spanish | Minor: Tourism`,
            certificateImage: 'https://i.imgur.com/4ANPl3l.jpeg', 
        },
    ];

    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="max-w-screen-xl mx-auto py-10 px-6 lg:px-12 flex flex-col items-center">
            {/* Title Section */}
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                About Me
            </h1>

            {/* Profile Section */}
            <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg">
                    <Image
                        src="https://i.imgur.com/yf3RdEz.jpeg"
                        alt="Profile"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,..."
                    />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Sasita Srisura
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Apple</p>
            </div>

            {/* Personal Information Section */}
            <div className="mt-10 bg-gray-50 dark:bg-[#1d1c1c] lg:w-[70%] shadow-md rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Personal Information
                </h2>
                <div>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong>Name:</strong> Sasita Srisura
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong>Nickname:</strong> Apple
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong>Nationality:</strong> Thai
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong>Languages:</strong> Thai, English, Chinese, Spanish
                    </p>
                </div>
                <div>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong>Address:</strong> Saraburi, Thailand
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong>Email:</strong>{' '}
                        <a
                            href="mailto:Sasita_ssr@kkumail.com"
                            className="text-blue-500 hover:underline"
                        >
                            Sasita_ssr@kkumail.com
                        </a>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong>Github:</strong>{' '}
                        <a
                            href="https://github.com/Applessr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Applessr
                        </a>
                    </p>
                </div>

                {/* Download Resume Button */}
                <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                    <a
                        href="https://drive.google.com/file/d/16YoopP41qG6LP5a39YRQS6BzFZeEay5D/view?usp=drive_link"
                        download
                        className="bg-[#2882ab] text-white px-4 py-2 rounded-lg hover:bg-[#2882aba3] focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        My Resume
                    </a>
                </div>
            </div>

            {/* Experience and Education Section */}
            <div className="mt-10 bg-gray-50 dark:bg-[#1d1c1c] shadow-md rounded-lg p-6 lg:w-[70%]">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Experience and Education
                </h2>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {experiences.map((item, index) => (
                        <li key={index}>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10`}>
                                <time className="font-mono italic">{item.time}</time>
                                <div className="text-lg font-black">{item.title}</div>
                                <div className="text-sm font-black">{item.org}</div>
                                <h1>{item.desc}</h1>
                                {/* ปุ่มดู Certificate */}
                                <button
                                    onClick={() => openModal(item.certificateImage)}
                                    className="mt-2 bg-[#2882ab] text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                >
                                    Certificate
                                </button>
                            </div>
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Modal Section */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg w-80 md:w-full relative">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-red-500"
                        >
                            ✕
                        </button>
                        {/* Certificate Image */}
                        <div className="relative w-full h-52 md:w-full md:h-96">
                            <Image
                                src={certificateImage}
                                alt="Certificate"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutPage;
