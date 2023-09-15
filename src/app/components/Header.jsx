import Link from "next/link";
import React, { useEffect } from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import HamburgerIcon from "./icons/HamburgerIcon";
import { useMenu } from "./providers/MenuProvider";
import XIcon from "./icons/XIcon";
import { useSearchParams } from "next/navigation";

export default function Header() {
	const [{ isOpen }, dispatch] = useMenu();
	const params = useSearchParams();

	const sectionToScrollTo = params.get("section");

	useEffect(() => {
		const targetSection = document.getElementById(sectionToScrollTo);
		targetSection.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}, [params, sectionToScrollTo]);

	return (
		<header className="fixed top-0 bg-primary h-[10rem] md:h-[13rem] w-full px-8 md:px-[2rem] lg:px-[4rem] xl:px-[10rem] flex items-center justify-between z-[3]">
			<Logo />
			<nav className="hidden bg-[#E7D3DE] h-[62px] rounded-[100px] lg:flex items-center gap-[1rem] px-[6px]">
				<Link
					href={"/?section=home"}
					className={`rounded-[94px] text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center ${
						sectionToScrollTo === "home"
							? "bg-primary text-white"
							: "bg-transparent text-primary"
					}`}>
					Home
				</Link>
				<Link
					href={"/?section=services"}
					className={`rounded-[94px] text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center ${
						sectionToScrollTo === "services"
							? "bg-primary text-white"
							: "bg-transparent text-primary"
					}`}>
					Services
				</Link>
				<Link
					href={"/?section=projects"}
					className={`rounded-[94px] text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center ${
						sectionToScrollTo === "projects"
							? "bg-primary text-white"
							: "bg-transparent text-primary"
					}`}>
					Projects
				</Link>
				<Link
					href={"/?section=contact"}
					className={`rounded-[94px] text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center ${
						sectionToScrollTo === "contact"
							? "bg-primary text-white"
							: "bg-transparent text-primary"
					}`}>
					Contact
				</Link>
			</nav>
			<SocialLinks displayClass={"hidden lg:flex"} />
			<span
				onClick={() => dispatch({ type: "isOpen", payload: !isOpen })}
				className="lg:hidden cursor-pointer">
				{isOpen ? <XIcon /> : <HamburgerIcon />}
			</span>
		</header>
	);
}
