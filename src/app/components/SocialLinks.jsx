import React from "react";
import Behance from "./icons/Behance";
import Twitter from "./icons/Twitter";
import LinkedIn from "./icons/LinkedIn";
import Link from "next/link";

export default function SocialLinks({ displayClass }) {
	return (
		<div className={`items-center gap-x-[4.1rem] ${displayClass}`}>
			<Link href={"/"}>
				<Behance />
			</Link>
			<Link href={"/"}>
				<Twitter />
			</Link>
			<Link href={"/"}>
				<LinkedIn />
			</Link>
		</div>
	);
}
