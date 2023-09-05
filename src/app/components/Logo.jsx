import React from "react";

export default function Logo({ alignment }) {
	return (
		<div className={`flex flex-col  gap-y-[2px] ${alignment}`}>
			<span className="font-medium text-[1.97rem] text-customWhite">
				Adams Muhammed
			</span>
			<span className="text-[1.2rem] text-secondary">
				Software Engineer & UX/UI Designer
			</span>
		</div>
	);
}
