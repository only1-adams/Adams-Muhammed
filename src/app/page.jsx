"use client";
import Image from "next/image";
import Link from "next/link";
import Laptop from "./components/icons/Laptop";
import Git from "./components/icons/Git";
import GitHub from "./components/icons/GitHub";
import Javascript from "./components/icons/Javascript";
import ReactIcon from "./components/icons/ReactIcon";
import NextIcon from "./components/icons/NextIcon";
import VueJs from "./components/icons/VueJs";
import NuxtJs from "./components/icons/NuxtJs";
import Mongodb from "./components/icons/Mongodb";
import Redis from "./components/icons/Redis";
import NodeJs from "./components/icons/NodeJs";
import DockerIcon from "./components/icons/DockerIcon";
import Dots from "./components/icons/Dots";
import HeroSection from "./components/HeroSection";
import FigmaIcon from "./components/icons/FigmaIcon";
import SlackIcon from "./components/icons/SlackIcon";
import ProjectsSlide from "./components/ProjectsSlide";
import Storybook from "./components/icons/Storybook";
import Vitest from "./components/icons/Vitest";
import { useInViewport } from "ahooks";
import { useRef } from "react";

export default function HomePage() {
	const homeRef = useRef(null);
	const servicesRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	const [homeInViewport, homeRatio] = useInViewport(homeRef, {
		threshold: [0, 0.25, 0.5, 0.75, 1],
	});

	return (
		<main className="pt-[10rem]">
			{homeInViewport ? (
				<span className="font-bold text-4xl text-white">
					Yes oh {homeRatio}
				</span>
			) : null}
			<HeroSection ref={homeRef} />
			<section className="mt-16 md:mt-28">
				<div className="flex items-center justify-center gap-5 text-[1.8rem] md:text-[2.6rem] text-white font-bold">
					<h2>Various Tools & Technologies I use</h2>
					<Laptop display={"w-[18px] height-[18px] md:w-[29px] md:h-[30px]"} />
				</div>
				<div className="h-[8.5rem] bg-white mt-10 overflow-hidden w-full">
					<div className="w-max flex items-center h-full gap-x-[7.2rem]">
						<div className="techShowcase flex items-center h-full gap-x-[7.2rem] w-max">
							<FigmaIcon />
							<Git />
							<GitHub />
							<Javascript />
							<ReactIcon />
							<NextIcon />
							<VueJs />
							<NuxtJs />
							<NodeJs />
							<Mongodb />
							<Redis />
							<DockerIcon />
							<SlackIcon />
							<Storybook />
							<Vitest />
						</div>
						<div className="techShowcase flex items-center h-full gap-x-[7.2rem] w-max">
							<FigmaIcon />
							<Git />
							<GitHub />
							<Javascript />
							<ReactIcon />
							<NextIcon />
							<VueJs />
							<NuxtJs />
							<NodeJs />
							<Mongodb />
							<Redis />
							<DockerIcon />
							<SlackIcon />
							<Storybook />
							<Vitest />
						</div>
					</div>
				</div>
			</section>
			<section
				ref={servicesRef}
				id="services"
				className="mt-12 overflow-hidden">
				<div className="w-max flex gap-x-[5px]">
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
				</div>
			</section>
			<section className="mt-12">
				<div className="flex items-center justify-center">
					<h2 className="text-[3.8rem] flex items-center justify-center font-bold text-white text-center w-max relative before:absolute before:bottom-0 before:w-[140%] before:border-t-[2px] before:border-t-white">
						Services
					</h2>
				</div>
				<div className="mt-20 px-8 md:px-[5rem] lg:px-[5rem] xl:px-[12rem] grid lg:grid-cols-2 gap-x-16 gap-y-16">
					<div className="flex flex-col gap-y-7">
						<div className="flex flex-col gap-y-6">
							<span className="inline-block bg-clip-text bg-customGradient text-[6.2rem] font-extrabold font-unbounded text-transparent leading-none">
								01
							</span>
							<span className="text-white text-3xl font-bold">
								Frontend Development
							</span>
						</div>
						<p className="text-2xl text-white font-light leading-[2.5rem]">
							{`In frontend development, my approach incorporates CDD (Component Driven Development) for UI. I meticulously design and test modular components to ensure seamless integration and consistent quality. I also prioritize thorough documentation to provide clarity and ease of maintenance for your team and any future developers. My ultimate goal is to craft exceptional user experiences (UX), offering intuitive design and responsive interfaces for a positive and memorable interaction`}
						</p>
					</div>
					<div className="flex flex-col gap-y-7">
						<div className="flex flex-col gap-y-6">
							<span className="inline-block bg-clip-text bg-customGradient text-[6.2rem] font-extrabold font-unbounded text-transparent leading-none">
								02
							</span>
							<span className="text-white text-3xl font-bold">
								Backend Development
							</span>
						</div>
						<p className="text-2xl text-white font-light leading-[2.5rem]">
							{`For backend development, my toolkit includes Node.js, Express, and MongoDB and more. I harness the power of these technologies to build robust and efficient server-side systems. With a focus on performance and scalability, I ensure that data is securely managed and the application runs seamlessly.

							I also follow rigorous testing procedures to guarantee the reliability of my code, and I take care to thoroughly document it for the benefit of the team and future developers`}
						</p>
					</div>
					<div className="flex flex-col gap-y-7">
						<div className="flex flex-col gap-y-6">
							<span className="inline-block bg-clip-text bg-customGradient text-[6.2rem] font-extrabold font-unbounded text-transparent leading-none">
								03
							</span>
							<span className="text-white text-3xl font-bold">
								UX/UI Design
							</span>
						</div>
						<p className="text-2xl text-white font-light leading-[2.5rem]">
							{`I excel in crafting visually captivating and user-friendly interfaces. My approach combines creativity and usability to ensure that designs resonate with your audience and deliver an exceptional user experience. `}
						</p>
					</div>
					<div className="flex flex-col gap-y-7">
						<div className="flex flex-col gap-y-6">
							<span className="inline-block bg-clip-text bg-customGradient text-[6.2rem] font-extrabold font-unbounded text-transparent leading-none">
								04
							</span>
							<span className="text-white text-3xl font-bold">
								Consultation and Support
							</span>
						</div>
						<p className="text-2xl text-white font-light leading-[2.5rem]">
							{`I offer expert guidance and assistance to help you navigate the digital landscape. Whether you need advice, insights, or troubleshooting, I'm here to ensure that your projects run smoothly. With a focus on clear communication and reliable assistance, I aim to be your trusted partner in achieving your digital goals`}
						</p>
					</div>
				</div>
			</section>
			<section className="mt-12 overflow-hidden">
				<div className="w-max flex gap-x-[5px]">
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
					<Dots />
				</div>
			</section>
			<section
				id="projects"
				ref={projectsRef}
				className="mt-14 md:mt-20 px-8 md:px-[2rem] lg:px-[4rem] xl:px-[10rem]">
				<ProjectsSlide />
			</section>
			<section
				ref={contactRef}
				id="contact"
				className="mt-12 h-[339px] relative">
				<Image
					src={"/get-in-touch.png"}
					width={1280}
					alt="get-in-touch"
					height={339}
					className="w-full h-full object-cover"
				/>
				<div className="absolute w-full h-full top-0 flex flex-col gap-y-7 items-center justify-center">
					<span className="text-3xl font-light text-white">Have an idea?</span>
					<span className="text-[3rem] md:text-[4.5rem] font-bold text-white">
						Let&apos;s talk about it
					</span>
					<Link
						href={"mailto:muhammedadam4544@gmail.com"}
						className="py-5 px-20 flex items-center justify-center gap-6 text-2xl font-medium text-white border-[1.5px] border-white rounded-full bg-primary">
						Get in touch
					</Link>
				</div>
			</section>
		</main>
	);
}
