'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const target = e.target as HTMLFormElement;

        emailjs
            .sendForm('service_zv7z5ke', 'template_wv24bjp', target , 'x77H_bpnGuCQcWTrZ')
            .then(
                (result) => {
                    console.log(result);
                    Swal.fire({
                        title: 'Message Sent!',
                        text: 'Your message was sent successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    })
                    setFormData({ name: '', email: '', message: '' })
                },
                (error) => {
                    Swal.fire({
                        title: 'Error!',
                        text: 'There was an error sending your message. Please try again later.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    })
                    console.error(error.text)
                }
            )
    }

    return (
        <div className="max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] mx-auto p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
                Contact Me
            </h1>
            <h2 className="text-lg sm:text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-8">
                Interested in working together or have a question? Don&apos;t hesitate to contact me. I&apos;m open to new opportunities and collaborations. Let&apos;s connect!
            </h2>
            <div className="mb-6 flex flex-col items-center">
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
            </div>
            <div className="flex gap-4 mb-8 justify-center flex-wrap">
                {/* Social Icons */}
                <div className="w-12 h-12 rounded-full border overflow-hidden flex justify-center items-center mb-2">
                    <a href="https://line.me/ti/p/ekoySmyAd6" target="_blank" rel="noopener noreferrer">
                        <Image src="https://www.svgrepo.com/show/452049/line.svg" alt="Line" width={30} height={30} />
                    </a>
                </div>
                <div className="w-12 h-12 rounded-full border overflow-hidden flex justify-center items-center mb-2">
                    <a href="https://wa.me/qr/3LRHSUEFVJ7YC1" target="_blank" rel="noopener noreferrer">
                        <Image src="https://www.svgrepo.com/show/382712/whatsapp-whats-app.svg" alt="WhatsApp" width={30} height={30} />
                    </a>
                </div>
                <div className="w-12 h-12 rounded-full border overflow-hidden flex justify-center items-center mb-2">
                    <a href="https://www.linkedin.com/in/sasita-srisura-14300133a/" target="_blank" rel="noopener noreferrer">
                        <Image src="https://www.svgrepo.com/show/450202/linkedin.svg" alt="LinkedIn" width={30} height={30} />
                    </a>
                </div>
                <div className="w-12 h-12 rounded-full border overflow-hidden flex justify-center items-center mb-2">
                    <a href="https://github.com/Applessr" target="_blank" rel="noopener noreferrer">
                        <Image src="https://www.svgrepo.com/show/391458/github.svg" alt="GitHub" width={30} height={30} />
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-8 py-3 bg-[#2882ab] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactPage
