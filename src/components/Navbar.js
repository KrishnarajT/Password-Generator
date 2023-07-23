import React, { useEffect } from "react";
import "../input.css";
import "../style.css";
import { themeChange } from "theme-change";

export function Navbar() {
	useEffect(() => {
		themeChange(false);
	}, []);
	return (
		<div className="navbar bg-base-300 rounded-lg">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Link</a>
					</li>
					<li>
						<details>
							<summary>Theme</summary>
							<ul className="p-2 bg-base-100">
								<li data-set-theme="cupcake">
									<a>Light</a>
								</li>
								<li>
									<a data-set-theme="dark">Dark</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	);
}
