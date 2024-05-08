import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
	title: "Camptraveler",
	description: "Travel app landing page using Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/x-icon" href="/camp.svg" sizes="any" />
			</head>
			<body>
				<Navbar />
				<main className="relative overflow-hidden">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
