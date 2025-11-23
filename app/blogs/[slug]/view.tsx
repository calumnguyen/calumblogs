"use client";

import { useEffect } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
	useEffect(() => {
		// For now, we'll just log the view
		// You can add an API endpoint later if needed
		console.log("View reported for:", slug);
	}, [slug]);

	return null;
};

