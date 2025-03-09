import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "IDS - Inscape Design Studio",
	description: "An Interior Designer website for all your needs of a desired home.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={poppins.variable}
		>
			<body>
				<Navbar />
				<div className='min-h-screen'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
