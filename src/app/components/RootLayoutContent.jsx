"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Loader from "./Loader";
import MenuProvider from "./providers/MenuProvider";

export default function RootLayoutContent({ children }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		document.body.style.overflow = "auto";
	}, []);

	return (
		<MenuProvider>
			{!mounted && <Loader />}
			<Menu />
			<Header />
			{children}
			<Footer />
		</MenuProvider>
	);
}
