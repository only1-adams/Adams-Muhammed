import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import HamburgerIcon from "./icons/HamburgerIcon";

export default function Header() {
	return (
		<header className="fixed top-0 bg-primary h-[10rem] md:h-[13rem] w-full px-8 md:px-[2rem] lg:px-[4rem] xl:px-[10rem] flex items-center justify-between z-[3]">
			<Logo />
			<nav className="hidden bg-[#E7D3DE] h-[62px] rounded-[100px] lg:flex items-center gap-[1rem] px-[6px]">
				<Link
					href={"/"}
					className="rounded-[94px] bg-primary text-white text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center">
					Home
				</Link>
				<Link
					href={"/"}
					className="rounded-[94px]  text-primary text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center">
					About
				</Link>
				<Link
					href={"/"}
					className="rounded-[94px]  text-primary text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center">
					Projects
				</Link>
				<Link
					href={"/"}
					className="rounded-[94px]  text-primary text-2xl font-semibold px-[24px] h-[50px] flex items-center justify-center">
					Contact
				</Link>
			</nav>
			<SocialLinks displayClass={"hidden lg:flex"} />
			<span className="lg:hidden">
				<HamburgerIcon />
			</span>
		</header>
	);
}
