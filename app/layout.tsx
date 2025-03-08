import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-montserrat",
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
			className={montserrat.variable}
		>
			<body>
				<Navbar />
				<div className='min-h-screen'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
