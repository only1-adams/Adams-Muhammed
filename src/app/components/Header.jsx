import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import HamburgerIcon from "./icons/HamburgerIcon";
import { useMenu } from "./providers/MenuProvider";
import { useSection } from "./providers/SectionProvider";
import XIcon from "./icons/XIcon";

export default function Header() {
	const [{ isOpen }, dispatch] = useMenu();
	const [{ section: sectionToScrollTo }, sectionDispatch] = useSection();

	function changeSection(section) {
		sectionDispatch({
			type: "changeSection",
			payload: section,
		});

		const targetSection = document.getElementById(section);
		targetSection.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}

	return (
		<header className="fixed top-0 bg-primary h-[10rem] md:h-[13rem] w-full px-8 md:px-[2rem] lg:px-[4rem] xl:px-[10rem] flex items-center justify-between z-[3]">
			<Logo />
			<nav className="hidden bg-[#E7D3DE] h-[62px] rounded-[100px] lg:flex items-center gap-[1rem] px-[6px]">
				<button
					onClick={() => changeSection("home")}
					className={`rounded-[94px] text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center ${
						sectionToScrollTo === "home" || sectionToScrollTo === null
							? "bg-primary text-white"
							: "bg-transparent text-primary"
					}`}>
					Home
				</button>
				<button
					onClick={() => changeSection("services")}
					className={`rounded-[94px] text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center ${
						sectionToScrollTo === "services"
							? "bg-primary text-white"
							: "bg-transparent text-primary"
					}`}>
					Services
				</button>
				<button
					onClick={() => changeSection("projects")}
					className={`rounded-[94px] text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center ${
						sectionToScrollTo === "projects"
							? "bg-primary text-white"
							: "bg-transparent text-primary"
					}`}>
					Projects
				</button>
				<button
					onClick={() => changeSection("contact")}
					className={`rounded-[94px] text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center ${
						sectionToScrollTo === "contact"
							? "bg-primary text-white"
							: "bg-transparent text-primary"
					}`}>
					Contact
				</button>
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
