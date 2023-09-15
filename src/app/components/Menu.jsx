import Link from "next/link";
import React from "react";
import MenuLine from "./icons/MenuLine";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import { useMenu } from "./providers/MenuProvider";

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Menu() {
	const [{ isOpen }, dispatch] = useMenu();

	return (
		<motion.div
			initial={false}
			animate={isOpen ? "open" : "closed"}
			variants={{
				open: {
					scale: 1,
					opacity: 1,
				},
				closed: {
					scale: 0.5,
					opacity: 0,
				},
			}}
			style={{ pointerEvents: isOpen ? "auto" : "none" }}
			className="z-[4] px-8 py-7 fixed top-[10rem] md:top-[13rem] lg:hidden w-full h-full bg-primary overflow-hidden">
			<motion.ul
				variants={{
					open: {
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.7,
							staggerChildren: 0.05,
							delayChildren: 0.3,
						},
					},
					closed: {
						transition: {
							type: "spring",
							bounce: 0,
							duration: 0.3,
						},
					},
				}}
				className="flex flex-col gap-y-12">
				<motion.li
					onClick={() => dispatch({ type: "isOpen", payload: false })}
					variants={itemVariants}
					className="text-[3.5rem] font-extrabold text-white">
					<Link href={"/?section=home"}>Home</Link>
				</motion.li>
				<motion.li
					onClick={() => dispatch({ type: "isOpen", payload: false })}
					variants={itemVariants}
					className="text-[3.5rem] font-extrabold text-white">
					<Link href={"/?section=services"}>Services</Link>
				</motion.li>
				<motion.li
					onClick={() => dispatch({ type: "isOpen", payload: false })}
					variants={itemVariants}
					className="text-[3.5rem] font-extrabold text-white">
					<Link href={"/?section=projects"}>Projects</Link>
				</motion.li>
				<motion.li
					onClick={() => dispatch({ type: "isOpen", payload: false })}
					variants={itemVariants}
					className="text-[3.5rem] font-extrabold text-white">
					<Link href={"/?section=contact"}>Contact</Link>
				</motion.li>
			</motion.ul>
			<div className="w-full flex items-center gap-x-[1rem] mt-10 overflow-hidden">
				<span className="shrink-0">
					<MenuLine />
				</span>
				<span className="shrink-0">
					<MenuLine />
				</span>
				<span className="shrink-0">
					<MenuLine />
				</span>
				<span className="shrink-0">
					<MenuLine />
				</span>
				<span className="shrink-0">
					<MenuLine />
				</span>
				<span className="shrink-0">
					<MenuLine />
				</span>
				<span className="shrink-0">
					<MenuLine />
				</span>
				<span className="shrink-0">
					<MenuLine />
				</span>
				<span className="shrink-0">
					<MenuLine />
				</span>
			</div>
			<SocialLinks displayClass={"flex mt-12"} />
		</motion.div>
	);
}
