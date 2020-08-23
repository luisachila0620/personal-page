import React from "react";

//create your first component
export function Home() {
	return (
		<div className="imagen-fondo">
			<img
				src="https://i.pinimg.com/originals/74/61/a0/7461a0d7be9806dc855c9ab793e65aba.jpg"
				className="card-img"
				alt="military image"
			/>
			<div className="parrafos">
				<h5 className="card-title">
					WE HONOR AND RESPECT THE SACRIFICE OUR TROOPS MAKE.
				</h5>
				<p className="card-text">
					THIS IS A WEBSITE TO HONOR OUR TROOPS AND FALLEN HEROS IN
					THE NAME OF FREEDOM.
				</p>
				<p className="card-text">Last updated 3 mins ago</p>
			</div>
		</div>
	);
}
