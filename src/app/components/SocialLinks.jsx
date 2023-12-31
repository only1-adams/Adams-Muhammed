import React from "react";
import Behance from "./icons/Behance";
import Twitter from "./icons/Twitter";
import LinkedIn from "./icons/LinkedIn";
import Link from "next/link";
import GithubSocial from "./icons/GithubSocial";

export default function SocialLinks({ displayClass }) {
	return (
		<div className={`items-center gap-x-[4.1rem] ${displayClass}`}>
			<Link target="_blank" href={"https://github.com/only1-adams"}>
				<GithubSocial />
			</Link>
			<Link target="_blank" href={"https://www.behance.net/muhammedadams"}>
				<Behance />
			</Link>
			<Link target="_blank" href={"https://twitter.com/only1_adams"}>
				<Twitter />
			</Link>
			<Link
				target="_blank"
				href={"https://www.linkedin.com/in/adams-muhammed-399474218/"}>
				<LinkedIn />
			</Link>
		</div>
	);
}
