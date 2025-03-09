import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
	return (
		<footer className='bg-[#1F1F1F] text-white py-10 px-6 mt-6'>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start'>
				{/* Logo Section */}
				<div className='text-center md:text-left ps-24'>
					<div className='text-9xl font-bold'>
						<span className='text-white'>I</span>
						<span className='text-gray-500 ms-[-12px]'>D</span>
						<span className='text-gray-500 ms-[-24px]'>S</span>
					</div>
					<p className='text-lg flex justify-center'>I DESIGN STUDIO</p>
				</div>

				{/* Navigation Links */}
				<ul className='text-center space-y-3 pt-6 md:mt-0 md:text-left'>
					<li>
						<Link href='/aboutus'>
							<span className='hover:text-gray-400'>ABOUT US</span>
						</Link>
					</li>
					<li>
						<Link href='/services'>
							<span className='hover:text-gray-400'>SERVICES</span>
						</Link>
					</li>
					<li>
						<Link href='/clients'>
							<span className='hover:text-gray-400'>CLIENTS</span>
						</Link>
					</li>
					<li>
						<Link href='/contactus'>
							<span className='hover:text-gray-400'>CONTACT US</span>
						</Link>
					</li>
				</ul>

				{/* Contact Details */}
				<div className='text-center mt-6 md:mt-0 md:text-left pe-36 pt-5'>
					<p className='flex items-center gap-2'>
						<MdPhone className='text-lg' /> Business Query: +91-7799853334
					</p>
					<p className='flex items-center gap-2 mt-2'>
						<MdPhone className='text-lg' /> Career Info: +91-8522888057
					</p>
					<p className='flex items-center gap-2 mt-2'>
						<MdEmail className='text-lg' /> bdm@wdesignstudio.in
					</p>

					{/* Social Icons */}
					<div className='flex justify-center md:justify-start gap-1 mt-4'>
						<span className='bg-white w-7 h-7 rounded-2xl flex justify-center items-center'>
							<FaFacebook className='text-lg text-black cursor-pointer hover:text-gray-400' />
						</span>
						<span className='bg-white w-7 h-7 rounded-2xl flex justify-center items-center'>
							<FaInstagram className='text-lg text-black cursor-pointer hover:text-gray-400' />
						</span>
						<span className='bg-white w-7 h-7 rounded-2xl flex justify-center items-center'>
							<FaLinkedin className='text-lg text-black cursor-pointer hover:text-gray-400' />
						</span>
					</div>
				</div>
			</div>

			{/* Copyright Section */}
			<div className='text-center text-sm mt-8 p-4 flex flex-row-reverse items-end'>
				Copyright 2024 • I Design Studio • All Rights Reserved
			</div>
		</footer>
	);
}
