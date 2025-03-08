export default function Home() {
	return (
		<main>
			{/* Video Section */}
			<div className='flex justify-center mt-10'>
				<video
					className='w-full max-w-5xl rounded-lg shadow-lg'
					autoPlay
					loop
					muted
					playsInline
				>
					<source
						src='https://wdesignstudio.in/wp-content/uploads/2024/07/Untitled-design-9.mp4'
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>
			</div>
		</main>
	);
}
