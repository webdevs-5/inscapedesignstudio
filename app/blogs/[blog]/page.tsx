import { notFound } from "next/navigation";

interface Blog {
	id: string;
	title: string;
	content: string;
}

const blogs: Blog[] = [
	{ id: "1", title: "Blog One", content: "This is the full content of Blog One." },
	{ id: "2", title: "Blog Two", content: "This is the full content of Blog Two." },
	{ id: "3", title: "Blog Three", content: "This is the full content of Blog Three." },
];

export default function BlogPage({ params }: { params: { id: string } }) {
	const blog = blogs.find((b) => b.id === params.id);

	if (!blog) {
		notFound(); // Show a 404 page if the blog is not found
	}

	return (
		<main className='container mx-auto py-10 px-6'>
			<h1 className='text-3xl font-bold mb-4'>{blog?.title}</h1>
			<p className='text-gray-700'>{blog?.content}</p>
		</main>
	);
}
