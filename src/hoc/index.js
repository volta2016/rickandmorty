import { useState } from "react";

export const withCounter = (Component) => (otherProps) => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter((prev) => prev + 1);
	};
	const decrement = () => {
		setCounter((prev) => prev - 1);
	};

	return (
		<Component
			counter={counter}
			increment={increment}
			decrement={decrement}
			{...otherProps}
		/>
	);
};
