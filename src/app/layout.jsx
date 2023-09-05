import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
	title: "Adams Muhammed || Software Engineer & UX/UI Designer",
	description:
		"A passionate Software Engineer with a knack for Frontend Development",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-custom">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
