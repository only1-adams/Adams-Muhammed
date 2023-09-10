import React from "react";

export default function Loader() {
	return (
		<div className="z-[9999] fixed top-0 bg-primary w-full h-full flex items-center justify-center">
			<div className="loader">
				<span></span>
			</div>
		</div>
	);
}
