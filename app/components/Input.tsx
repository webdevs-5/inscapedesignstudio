interface InputData {
	label: string;
	name: string;
	type: string;
	value: string;
	onChange: () => {};
	isRequired: boolean;
}

type Params = Promise<InputData>;

export default async function Input({ params }: { params: Params }) {
	const { label, name, type, value, onChange, isRequired } = await params;

	return (
		<div>
			<label>{label}</label>
			<input
				name={name}
				type={type}
				value={value}
				required={isRequired}
			/>
		</div>
	);
}
