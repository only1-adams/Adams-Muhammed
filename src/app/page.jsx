import Image from "next/image";
import Link from "next/link";
import ReadMore from "./components/icons/ReadMore";
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

export default function HomePage() {
	return (
		<main className="pt-[10rem]">
			<section className="px-8 md:px-[2rem] lg:px-[4rem] xl:px-[10rem] pt-[2rem] md:pt-[5rem] lg:pt-[7.5rem]">
				<div className="relative">
					<h1 className="text-[3.5rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[6rem] font-extrabold font-unbounded text-[#FAEDF4]">
						PROVIDING WORLD CLASS SOLUTIONS
					</h1>
					<div
						id="roundImage"
						className="w-[34px] h-[34px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full border-white border-[1.5px] overflow-hidden absolute bottom-[10px] md:bottom-[8px] lg:bottom-[15px] xl:bottom-[17px] right-[10%] md:right-[49%] lg:right-[49%] xl:right-[50%]">
						<Image
							className="w-full h-full"
							src={"/my-image.png"}
							width={60}
							height={60}
							alt="Adams Muhammed's Image"
						/>
					</div>
				</div>
				<p className="text-2xl text-white font-light leading-[2.5rem] md:pr-24 mt-5">
					I am a passionate software engineer with 3+ years of experience, I
					specialize in frontend development with a strong passion for writing
					clean and efficient code. With experience in Vue.js, Nuxt.js,
					React.js, Next.js, Node.js, MongoDB and a touch of Django, I possess a
					diverse skill set to tackle various development challenges and I enjoy
					leveraging best practices to solve problems and always ensure thorough
					testing of my code....
				</p>
				<div className="mt-8 flex items-center gap-x-8">
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
				</div>
			</section>
			<section className="mt-16 md:mt-28">
				<div className="flex items-center justify-center gap-5 text-[1.8rem] md:text-[2.6rem] text-white font-bold">
					<h2>Various Tools & Technologies I use</h2>
					<Laptop display={"w-[18px] height-[18px] md:w-[29px] md:h-[30px]"} />
				</div>
				<div className="h-[8.5rem] bg-white mt-10 overflow-hidden w-full">
					<div className="w-max flex items-center h-full gap-x-[7.2rem]">
						<div className="techShowcase flex items-center h-full gap-x-[7.2rem] w-max">
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
						</div>
						<div className="techShowcase flex items-center h-full gap-x-[7.2rem] w-max">
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
						</div>
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
							I am a passionate software engineer with 3+ years of experience, I
							specialize in frontend development with a strong passion for
							writing clean and efficient code. With experience in Vue.js,
							Nuxt.js, React.js, Next.js, Node.js, MongoDB and a touch of
							Django, I possess a diverse skill set to tackle various
							development challenges and I enjoy leveraging best practices to
							solve problems and always ensure thorough testing of my code....
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
							I am a passionate software engineer with 3+ years of experience, I
							specialize in frontend development with a strong passion for
							writing clean and efficient code. With experience in Vue.js,
							Nuxt.js, React.js, Next.js, Node.js, MongoDB and a touch of
							Django, I possess a diverse skill set to tackle various
							development challenges and I enjoy leveraging best practices to
							solve problems and always ensure thorough testing of my code....
						</p>
					</div>
					<div className="flex flex-col gap-y-7">
						<div className="flex flex-col gap-y-6">
							<span className="inline-block bg-clip-text bg-customGradient text-[6.2rem] font-extrabold font-unbounded text-transparent leading-none">
								03
							</span>
							<span className="text-white text-3xl font-bold">UX Design</span>
						</div>
						<p className="text-2xl text-white font-light leading-[2.5rem]">
							I am a passionate software engineer with 3+ years of experience, I
							specialize in frontend development with a strong passion for
							writing clean and efficient code. With experience in Vue.js,
							Nuxt.js, React.js, Next.js, Node.js, MongoDB and a touch of
							Django, I possess a diverse skill set to tackle various
							development challenges and I enjoy leveraging best practices to
							solve problems and always ensure thorough testing of my code....
						</p>
					</div>
					<div className="flex flex-col gap-y-7">
						<div className="flex flex-col gap-y-6">
							<span className="inline-block bg-clip-text bg-customGradient text-[6.2rem] font-extrabold font-unbounded text-transparent leading-none">
								04
							</span>
							<span className="text-white text-3xl font-bold">UI Design</span>
						</div>
						<p className="text-2xl text-white font-light leading-[2.5rem]">
							I am a passionate software engineer with 3+ years of experience, I
							specialize in frontend development with a strong passion for
							writing clean and efficient code. With experience in Vue.js,
							Nuxt.js, React.js, Next.js, Node.js, MongoDB and a touch of
							Django, I possess a diverse skill set to tackle various
							development challenges and I enjoy leveraging best practices to
							solve problems and always ensure thorough testing of my code....
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
			<section className="mt-14 md:mt-20 px-8 md:px-[2rem] lg:px-[4rem] xl:px-[10rem]">
				<h2 className="text-[3.8rem] text-white font-bold">Projects</h2>
				<div className="w-full overflow-auto">
					<div className="mt-12 w-max flex gap-x-12">
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
									href={"/"}
									className="py-5 px-20 flex items-center justify-center gap-6 text-2xl font-medium text-white border-[1.5px] border-white rounded-full">
									View
									<span>
										<ReadMore />
									</span>
								</Link>
							</div>
							<p className="text-2xl text-[#F5CFE4] leading-[2.5rem]">
								I am a passionate software engineer with 3+ years of experience,
								I specialize in frontend development with a strong passion for
								writing clean and efficient code. With experience in Vue.js,
								Nuxt.js, React.js, Next.js, Node.js, MongoDB and a touch of
								Django, I possess a diverse skill set to tackle various
								development challenges and I enjoy leveraging best practices to
								solve problems and always ensure thorough testing of my code....
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
									href={"/"}
									className="py-5 px-20 flex items-center justify-center gap-6 text-2xl font-medium text-white border-[1.5px] border-white rounded-full">
									View
									<span>
										<ReadMore />
									</span>
								</Link>
							</div>
							<p className="text-2xl text-[#F5CFE4] leading-[2.5rem]">
								I am a passionate software engineer with 3+ years of experience,
								I specialize in frontend development with a strong passion for
								writing clean and efficient code. With experience in Vue.js,
								Nuxt.js, React.js, Next.js, Node.js, MongoDB and a touch of
								Django, I possess a diverse skill set to tackle various
								development challenges and I enjoy leveraging best practices to
								solve problems and always ensure thorough testing of my code....
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-12 h-[339px] relative">
				<Image
					src={"/get-in-touch.png"}
					width={1280}
					alt="get-in-touch"
					height={339}
					className="w-full h-full object-cover"
				/>
				<div className="absolute w-full h-full top-0 flex flex-col gap-y-7 items-center justify-center">
					<span className="text-3xl font-light text-white">Have an idea?</span>
					<span className="text-[4.5rem] font-bold text-white">
						Let&apos;s talk about it
					</span>
					<Link
						href={"/"}
						className="py-5 px-20 flex items-center justify-center gap-6 text-2xl font-medium text-white border-[1.5px] border-white rounded-full bg-primary">
						Get in touch
					</Link>
				</div>
			</section>
		</main>
	);
}
