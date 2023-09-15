import "./globals.css";
import RootLayoutContent from "./components/RootLayoutContent";

export const metadata = {
	title: "Adams Muhammed || Software Engineer & UX/UI Designer",
	description:
		"A passionate Software Engineer with a knack for Frontend Development",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-custom overflow-hidden">
				<RootLayoutContent>{children}</RootLayoutContent>
			</body>
		</html>
	);
}
