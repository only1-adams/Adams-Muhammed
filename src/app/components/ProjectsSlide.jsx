"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Arrow from "./icons/Arrow";
import ReadMore from "./icons/ReadMore";
import { motion } from "framer-motion";

export default function ProjectsSlide() {
	const containerRef = useRef(null);

	function slideNext() {
		const gap = 1;
		const width = containerRef.current.offsetWidth;

		containerRef.current.scrollBy(width + gap, 0, "smooth");
	}

	function slidePrev() {
		const gap = 3;
		const width = containerRef.current.offsetWidth;

		containerRef.current.scrollBy(-(width + gap), 0, "smooth");
	}

	return (
		<>
			<div className="flex items-center justify-between">
				<h2 className="text-[3.8rem] text-white font-bold">Projects</h2>
				<div className="flex items-center gap-x-8">
					<motion.span
						onClick={slidePrev}
						initial={{ rotate: 180 }}
						whileTap={{ scale: 0.9 }}
						className="cursor-pointer rotate-[180deg] w-[35px] h-[35px] flex items-center justify-center border-white border-[1.5px] rounded-full">
						<Arrow />
					</motion.span>
					<motion.span
						onClick={slideNext}
						whileTap={{ scale: 0.9 }}
						className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center border-white border-[1.5px] rounded-full">
						<Arrow />
					</motion.span>
				</div>
			</div>
			<div ref={containerRef} className="projectsSlide w-full overflow-auto">
				<div className="mt-12 w-max flex gap-x-12">
					<div className="shrink-0 flex flex-col gap-y-10 w-[353px] md:w-[530px]">
						<div className="w-full h-[253px] md:h-[390px] rounded-lg overflow-hidden">
							<Image
								src={"/atspreview.png"}
								height={390}
								width={530}
								alt="ATS preview"
								className="w-full h-full object-cover object-top"
							/>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-[2.5rem] font-bold text-white">
								ATS Labs
							</span>
							<Link
								href={"https://ats-labs.vercel.app/"}
								target="_blank"
								className="py-5 px-20 flex items-center justify-center gap-6 text-2xl font-medium text-white border-[1.5px] border-white rounded-full">
								View
								<span>
									<ReadMore />
								</span>
							</Link>
						</div>
						<p className="text-2xl text-[#F5CFE4] leading-[2.5rem]">
							{`For ATS Labs, a leading Software Development Agency, I took
								charge of the frontend development. This project began with the
								design stage in Figma, where I meticulously crafted the
								website's visual identity. Then, I brought this vision to life
								using Next.js, ensuring a seamless and engaging user experience.
								The result is a dynamic website that showcases ATS Labs'
								expertise and innovation in the software development field.`}
						</p>
					</div>
					<div className="shrink-0 flex flex-col gap-y-10 w-[353px] md:w-[530px]">
						<div className="w-full h-[253px] md:h-[390px] rounded-lg overflow-hidden">
							<Image
								src={"/forumpreview.png"}
								height={390}
								width={530}
								alt="klef9ja preview"
								className="w-full h-full object-cover object-top"
							/>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-[2.5rem] font-bold text-white">
								Ask a Dev
							</span>
							<Link
								href={"https://ask-a-dev-nine.vercel.app/"}
								target="_blank"
								className="py-5 px-20 flex items-center justify-center gap-6 text-2xl font-medium text-white border-[1.5px] border-white rounded-full">
								View
								<span>
									<ReadMore />
								</span>
							</Link>
						</div>
						<p className="text-2xl text-[#F5CFE4] leading-[2.5rem]">
							{`"Ask a Dev" is more than just a side project; it's a testament to my commitment to honing my skills. I tackled both frontend and backend development, employing Next.js for the frontend and Node.js for the backend.

								This web application serves as a platform where developers can seek answers to their burning questions and contribute their expertise. It boasts a range of features, including user-friendly email/password and Google login/sign-up options, intuitive question filtering, real-time notifications, and a robust search functionality.

								Please note that due to the use of a free service, occasional 504 timeout errors may occur. If you encounter this issue, please refresh the page until it loads successfully. Your patience is greatly appreciated.`}
						</p>
					</div>
					<div className="shrink-0 flex flex-col gap-y-10 w-[353px] md:w-[530px]">
						<div className="w-full h-[253px] md:h-[390px] rounded-lg overflow-hidden">
							<Image
								src={"/klef9japreview.png"}
								height={390}
								width={530}
								alt="klef9ja preview"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-[2.5rem] font-bold text-white">
								Klef9ja Blog
							</span>
							<Link
								href={"https://www.klef9jablog.com"}
								target="_blank"
								className="py-5 px-20 flex items-center justify-center gap-6 text-2xl font-medium text-white border-[1.5px] border-white rounded-full">
								View
								<span>
									<ReadMore />
								</span>
							</Link>
						</div>
						<p className="text-2xl text-[#F5CFE4] leading-[2.5rem]">
							{`"Klef9ja Blog" is a dynamic platform that caters to readers and music enthusiasts alike. I played a pivotal role in both frontend and backend development, utilizing my skills in design, and Django for routing and backend functionalities.

								Before diving into development, I meticulously designed the platform in Figma, ensuring a captivating visual experience. To enhance user interactions, I integrated the Alpine.js framework, adding a layer of interactivity to the website.

								"Klef9ja Blog" serves as a hub for news enthusiasts to stay informed and music lovers to discover and download their favorite albums. It's a testament to my passion for creating engaging digital spaces that cater to diverse interests.`}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
