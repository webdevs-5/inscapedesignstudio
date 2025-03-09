"use client";

import axios from "axios";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaMapMarkerAlt,
	FaPhoneAlt,
} from "react-icons/fa";

interface FormData {
	name: string;
	email: string;
	phone: string;
}

export default function Contactus() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		console.log("submit...");
		try {
			const response = await axios.post(
				"https://script.google.com/macros/s/AKfycby0IOXl4T6IZpkVjlpTWcdfrl62SCrK0qAhCEQhEi3VsV2OpXRVkZ8VZonGSWFXaxKuOg/exec",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const res = response.data;
			console.log(res);

			// Reset form
			setFormData({
				name: "",
				email: "",
				phone: "",
			});

			alert(res.status === "success" ? "Data saved successfully!" : "Error saving data.");
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("Error submitting form. Please try again.");
		}
	};

	useEffect(() => {
		// Any client-only code can go here
	}, []);

	return (
		<div>
			<div className='flex flex-col justify-center items-center my-10'>
				<h1 className='text-7xl font-bold mb-10'>
					<i>Let&#39;s Start A New Project</i>
				</h1>
				<div className='w-[625px] text-lg'>
					W Design Studio is a premium Interior Design & Architecture firm, well known for designing
					T-Hub, India&#39;s largest incubator space and many state-of-the art Office Interior
					design, Retail Space design & Premium Home Interior design.
				</div>
			</div>
			<div className='flex justify-center items-center mt-20 ms-50'>
				{/* Contact Details Section */}
				<div className='p-18 rounded-4xl border-1 border-[#999999] w-1/2 text-lg'>
					<div className='mb-4 flex items-center'>
						<FaPhoneAlt className='mr-4 text-gray-600' />
						<span>+91-7799853334</span>
					</div>
					<div className='mb-4 flex items-center'>
						<FaEnvelope className='mr-4 text-gray-600' />
						<span>bdm@wdesignstudio.in</span>
					</div>
					<div className='mb-10 flex items-center'>
						<FaMapMarkerAlt className='mr-4 text-gray-600' />
						<span>
							Plot No: 1193, 8-2-293/82/A, Road Number 59, Jubilee Hills, Hyderabad, Telangana
							500033
						</span>
					</div>
					<div className='flex space-x-4 mt-4'>
						<FaFacebook className='text-gray-600 cursor-pointer' />
						<FaInstagram className='text-gray-600 cursor-pointer' />
						<FaLinkedin className='text-gray-600 cursor-pointer' />
					</div>
				</div>
				<div className='w-1/2 ms-20'>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col justify-center'
					>
						<label
							htmlFor='name'
							className='mb-4 cursor-pointer'
						>
							Enter Your Name:
						</label>
						<input
							id='name'
							type='text'
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							className='px-3 py-2 mb-4 border-1 border-[#69727D] w-[400px] focus:outline-none focus:border-black'
						/>
						<label
							htmlFor='email'
							className='mb-4 cursor-pointer'
						>
							Enter Your Email: <span className='text-red-500'>*</span>
						</label>
						<input
							id='email'
							type='email'
							name='email'
							value={formData.email}
							onChange={handleInputChange}
							required
							className='px-3 py-2 mb-4 border-1 border-[#69727D] w-[400px] focus:outline-none focus:border-black'
						/>
						<label
							htmlFor='phone'
							className='mb-4 cursor-pointer'
						>
							Phone Number: <span className='text-red-500'>*</span>
						</label>
						<input
							id='phone'
							type='tel'
							name='phone'
							value={formData.phone}
							onChange={handleInputChange}
							required
							className='px-3 py-2 mb-4 border-1 border-[#69727D] w-[400px] focus:outline-none focus:border-black'
						/>
						<button
							type='submit'
							className='bg-[#333333] text-white px-4 py-2 font-[400] w-[100px] cursor-pointer mt-4'
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
