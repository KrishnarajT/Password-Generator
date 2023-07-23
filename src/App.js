import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { themeChange } from "theme-change";

function App() {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<>
			<Navbar />
			<div className="App text-3xl text-black p-4 bg-base-100">
				hiiii
				
				<div className="flex flex-row gap-4 m-4 text-primary-content">
					This is a test
				</div>
				<button class="btn">Button</button>
				<div className="card bg-primary">
					<div className="card-body">ghiu</div>
				</div>
				{/* <button
				class="btn btn-primary btn-sm"
				data-toggle-theme="light, dark"
				data-act-class="ACTIVECLASS"
                >
				ASDF
			</button> */}
				<select
					data-choose-theme
					className="select-bordered select bg-primary text-primary-content rounded-full m-4"
				>
					<option value="business">Default</option>
					<option value="mytheme">Default</option>
					<option value="dark">Dark</option>
					<option value="cupcake">Pink</option>
				</select>
				
				<div className="mockup-browser border bg-base-300">
					<div className="mockup-browser-toolbar">
						<div className="input">https://daisyui.com</div>
					</div>
					<div className="flex justify-center px-4 py-16 bg-base-200">
						Hello!
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
