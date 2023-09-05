import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

export default function Footer() {
	return (
		<footer className="py-10 md:px-[2rem] lg:px-[4rem] xl:px-[10rem]">
			<div className="flex flex-col gap-y-8 md:flex-row items-center justify-center md:justify-between">
				<Logo
					alignment={
						"items-center justify-center md:items-start md:justify-start"
					}
				/>
				<SocialLinks displayClass={"flex"} />
			</div>
			<p className="mt-5 text-2xl text-white text-center md:text-left font-light">
				Copyright &copy; 2023 - Adams Muhammed
			</p>
		</footer>
	);
}
