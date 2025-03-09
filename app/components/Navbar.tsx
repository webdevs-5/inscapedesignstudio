import Link from "next/link";

export default function Navbar() {
	return (
		<nav className='flex justify-between items-center px-10 py-6 bg-[#F9F9F9] border-b-2'>
			{/* Logo */}
			<Link href='/'>
				<div className='text-6xl font-bold ms-8'>
					<span className='text-[#333333]'>I</span>
					<span className='text-[#656464] ms-[-7px]'>D</span>
					<span className='text-[#656464] ms-[-14px]'>S</span>
				</div>
			</Link>

			{/* Navigation Links */}
			<ul className='flex space-x-12 text-md font-medium text-black'>
				<li>
					<Link href='/services'>SERVICES</Link>
				</li>
				<li>
					<Link href='/clients'>CLIENTS</Link>
				</li>
				<li>
					<Link href='/projects'>OUR PROJECTS</Link>
				</li>
				<li>
					<Link href='/aboutus'>ABOUT US</Link>
				</li>
				<li>
					<Link href='/blogs'>BLOGS</Link>
				</li>
			</ul>

			{/* Contact Us Button */}
			<Link
				href='/contactus'
				className='bg-[#333333] text-white px-6 py-2 text-lg font-[400] me-8'
			>
				Contact Us
			</Link>
		</nav>
	);
}
