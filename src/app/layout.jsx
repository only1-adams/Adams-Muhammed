import { Bricolage_Grotesque, Unbounded } from "next/font/google";
import "./globals.css";
import RootLayoutContent from "./components/RootLayoutContent";

const Bricolage = Bricolage_Grotesque({
	weight: ["variable"],
	variable: "--font-bricolage",
	preload: false,
});

const UnboundedFont = Unbounded({
	weight: ["variable"],
	variable: "--font-unbounded",
	preload: false,
});

export const metadata = {
	title: "Adams Muhammed || Software Engineer & UX/UI Designer",
	description:
		"A passionate Software Engineer with a knack for Frontend Development",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`font-custom  overflow-hidden ${Bricolage.variable} ${UnboundedFont.variable}`}>
				<RootLayoutContent>{children}</RootLayoutContent>
			</body>
		</html>
	);
}
