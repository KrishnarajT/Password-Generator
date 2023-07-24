import React, { useEffect } from "react";
import "../input.css";
import "../style.css";
import { themeChange } from "theme-change";
// import the sun icon from heroicons
import {
	SunIcon,
	MoonIcon,
	BookmarkIcon,
	DevicePhoneMobileIcon,
	HomeModernIcon,
	HomeIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
	useEffect(() => {
		themeChange(false);
	}, []);
	return (
		<div className="navbar bg-secondary rounded-xl text-secondary-content">
			<div className="">
				<NavLink to={"/home"}>
					<a className="btn btn-ghost normal-case text-xl" href=".">
						Krishnaraj
					</a>
				</NavLink>
			</div>
			<div className="flex-row justify-center flex-1">
				<ul className="menu menu-horizontal px-1">
					<li>
						<NavLink to={"/projects"} id="contact_element">
							<BookmarkIcon className="w-5 h-5" />
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink to={"/about"} id="contact_element">
							<InformationCircleIcon className="w-5 h-5" />
							About
						</NavLink>
					</li>
					<li>
						<NavLink to={"/contact"} id="contact_element">
							<DevicePhoneMobileIcon className="w-5 h-5" />
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
			<div>
				<ul className="menu menu-horizontal px-1">
					<li>
						<details>
							<summary>Theme</summary>
							<ul className="p-2 bg-base-100">
								<li data-set-theme="cupcake">
									<a>
										<SunIcon className="w-5 h-5" />
										Light
									</a>
								</li>
								<li>
									<a data-set-theme="black">
										<MoonIcon className="w-5 h-4" />
										Dark
									</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	);
}
