import React from 'react';
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";

interface CardProps {
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
    i: number;
}

const Card: React.FC<CardProps> = ({ title, description, src, url, color, i }) => {
    return (
        <div className="cardContainer">
            <div
                className="card"
                style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
            >
                <h2 className="text-lg md:text-2xl">{title}</h2>
                <div className="body">
                    <div className="description hidden md:block">
                        <h1>{description}</h1>
                        <span>
                            <a
                                href={url}
                                className="flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Git hub <FaLongArrowAltRight className="w-5 h-5" />
                            </a>
                        </span>
                    </div>

                    <div className="mediaContainer">
                        <div className="imageContainer hidden md:block">
                            <div className="inner relative w-full h-64">
                                <Image
                                    src={src}
                                    alt={title}
                                    layout="fill"
                                    objectFit="cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="textContainer block md:hidden">
                            <p className="text-sm italic">{description}</p>
                            <span>
                                <a
                                    href={url}
                                    className="flex items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Git hub <FaLongArrowAltRight className="w-5 h-5" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
