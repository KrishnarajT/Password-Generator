import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const Card = (props) => {
	return (
		<div
			className="card w-96 mediumshadow hover:scale-105 transform-gpu duration-200
        hover:shadow-2xl bg-primary hover:bg-primary-focus text-primary-content"
		>
			{/* <figure className="px-10 pt-10">
				<img
					src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
					className="rounded-xl"
				/>
			</figure> */}
			<div className="card-body items-center text-center">
				<h1 className="card-title text-4xl">{props.title}</h1>
				<div className="text-2xl">{props.text}</div>
				<div className="card-actions">
					<button className="btn btn-outline text-xl text-primary-content">
						{props.title} <ArrowUpRightIcon className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
