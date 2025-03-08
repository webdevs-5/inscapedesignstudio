import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./page.module.css";

interface Blog {
	id: string;
	title: string;
	content: string;
}

type Params = Promise<{ id: string }>;

const blogs: Blog[] = [
	{ id: "1", title: "Blog One", content: "This is the full content of Blog One." },
	{ id: "2", title: "Blog Two", content: "This is the full content of Blog Two." },
	{ id: "3", title: "Blog Three", content: "This is the full content of Blog Three." },
];

export default async function BlogPage({ params }: { params: Params }) {
	const { id } = await params;
	const blog = blogs.find(async (b) => b.id === id);

	if (!blog) {
		notFound(); // Show a 404 page if the blog is not found
	}

	return (
		<main className='container mx-auto py-10 px-6'>
			<div>
				<a href='/blogs' className='text-blue-500 hover:underline'><FaArrowLeft className={styles.arrowIcon} /></a>
			</div>
			<h1 className='text-3xl font-bold mb-4'>{blog?.title}</h1>
			<p className='text-gray-700'>{blog?.content}</p>
		</main>
	);
}
