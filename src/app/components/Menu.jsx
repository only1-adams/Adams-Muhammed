import Link from "next/link";
import React from "react";

export default function Menu() {
	return (
		<div className="z-[4] px-8 py-7 fixed top-[10rem] md:top-[13rem] lg:hidden w-full h-full bg-primary">
			<ul>
				<li className="text-[3.5rem] font-extrabold text-white">
					<Link href={"/"}>Home</Link>
				</li>
			</ul>
		</div>
	);
}
