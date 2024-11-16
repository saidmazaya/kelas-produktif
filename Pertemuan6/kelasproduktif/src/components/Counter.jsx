import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	console.log(count);

	function increment() {
		setCount(count + 1);
	}

	return (
		<div>
			<p>Anda telah menekan tombol sebanyak {count} kali</p>
			<button onClick={increment}>Tekan saya</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	);
}

export default Counter;
