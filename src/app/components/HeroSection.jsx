"use client";
import React from "react";
import Link from "next/link";
import ReadMore from "./icons/ReadMore";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
	return (
		<section className="px-8 md:px-[2rem] lg:px-[4rem] xl:px-[10rem] pt-[2rem] md:pt-[5rem] lg:pt-[7.5rem]">
			<div className="relative z-[2]">
				<motion.h1
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ ease: "linear", duration: 0.4 }}
					className="heroText text-[3.5rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[6rem] font-extrabold font-unbounded text-[#FAEDF4]">
					PROVIDING WORLD CLASS SOLUTIONS
				</motion.h1>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ ease: "linear", duration: 0.3, delay: 0.2 }}
					id="roundImage"
					className="w-[34px] h-[34px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full border-white border-[1.5px] overflow-hidden absolute bottom-[10px] md:bottom-[8px] lg:bottom-[15px] xl:bottom-[17px] right-[10%] md:right-[49%] lg:right-[49%] xl:right-[50%]">
					<Image
						className="w-full h-full"
						src={"/my-image.png"}
						width={60}
						height={60}
						alt="Adams Muhammed's Image"
					/>
				</motion.div>
			</div>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: "linear", duration: 0.3, delay: 0.4 }}
				className="text-2xl text-white font-light leading-[2.5rem] md:pr-24 mt-5">
				I am a passionate software engineer with 3+ years of experience, I
				specialize in frontend development with a strong passion for writing
				clean and efficient code. With experience in Vue.js, Nuxt.js, React.js,
				Next.js, Node.js, MongoDB and a touch of Django, I possess a diverse
				skill set to tackle various development challenges and I enjoy
				leveraging best practices to solve problems and always ensure thorough
				testing of my code....
			</motion.p>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: "linear", duration: 0.3, delay: 0.6 }}
				className="mt-8 flex items-center gap-x-8">
				<Link
					href={"/"}
					className="py-5 px-5 md:px-20 flex items-center justify-center gap-6 text-2xl font-medium text-white border-[1.5px] border-white rounded-full">
					Read More
					<span>
						<ReadMore />
					</span>
				</Link>
				<Link
					href={"/"}
					className="py-5 px-5 md:px-20 flex items-center justify-center gap-6 text-2xl font-medium text-white border-[1.5px] border-white rounded-full">
					Download Resume
				</Link>
			</motion.div>
		</section>
	);
}
