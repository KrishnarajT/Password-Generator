import React, { useContext } from "react";
import "../css/Home.css";
import { ReactComponent as PassSVGLight } from "../assets/undraw_fingerprint_login_re_t71l.svg";
import { ReactComponent as PassSVGDark } from "../assets/undraw_fingerprint_login_re_t71l.svg";
import Card from "../components/Card";

import { ReactComponent as Blob } from "../assets/blurry-gradient-haikei.svg";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	console.log(theme);
	return (
		<div className="min-h-screen">
			<div className="flex flex-row justify-between p-8">
				<div
					className={
						theme === "light"
							? "flex flex-col items-start align-middle justify-center svgthing"
							: "flex flex-col items-start align-middle justify-center svgthingdark"
					}
				>
					<div className="text-9xl titillium">
						Generate your Own Secure Passwords!
					</div>
					<button
						className="btn btn-secondary rounded-full mt-20 text-5xl p-6 w-96 h-32 rubik shadow-xl"
						onClick={() => {
							window.location.href = "#def";
						}}
					>
						Try
					</button>
				</div>
				{theme === "light" ? <PassSVGLight /> : <PassSVGDark />}
			</div>
			<div className="flex justify-start p-4 m-2">
				<div className="text-3xl p-4 w-3/6">
					Tired of using the same password for everything? Annoyed at
					having to add symbols and Numbers to your passwords? Why not
					make your own unique password that is easy to remember and
					secure!
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
			<section id="def" className="">
				<div className="flex flex-row gap-12 p-4 justify-center">
					<Card id="randomcard" text={""} title={"Random"} />
					<Card id="hashedcard" text={""} title={"Hashed"} />
					<Card id="mastercard" text={""} title={"Master"} />
				</div>
			</section>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
};

export default Home;
