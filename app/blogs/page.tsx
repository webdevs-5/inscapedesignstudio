import Link from "next/link";

interface Blog {
	id: string;
	title: string;
	description: string;
}

export default function Blogs() {
	const blogs: Blog[] = [
		{ id: "1", title: "Blog One", description: "Introduction to our first blog." },
		{ id: "2", title: "Blog Two", description: "A deep dive into our second blog." },
		{ id: "3", title: "Blog Three", description: "Exploring new ideas and insights." },
	];

	return (
		<main className='container mx-auto py-10 px-6'>
			<h1 className='text-3xl font-bold mb-6'>Our Blogs</h1>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{blogs.map((blog) => (
					<Link
						key={blog.id}
						href={`/blogs/${blog.id}`}
						className='block p-4 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-lg'
					>
						<h2 className='text-xl font-semibold'>{blog.title}</h2>
						<p className='text-gray-600'>{blog.description}</p>
					</Link>
				))}
			</div>
		</main>
	);
}
