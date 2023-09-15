import { Bricolage_Grotesque, Unbounded } from "next/font/google";
import RootLayoutContent from "./components/RootLayoutContent";
import "./globals.css";

const Bricolage = Bricolage_Grotesque({
	weight: ["variable"],
	variable: "--font-bricolage",
	subsets: ["latin"],
});

const UnboundedFont = Unbounded({
	weight: ["variable"],
	variable: "--font-unbounded",
	subsets: ["latin"],
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
