"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Loader from "./Loader";

export default function RootLayoutContent({ children }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		document.body.style.overflow = "auto";
	}, []);

	return (
		<html lang="en">
			<body className="font-custom overflow-hidden">
				{!mounted && <Loader />}
				{/* <Menu /> */}
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
