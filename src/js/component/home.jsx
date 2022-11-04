import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";




//create your first component
const Home = (props) => {
	return (
		<>
        <Navbar/>
		<div className="container">
		<div className="row">
		<Jumbotron/>
		<Cards
		Img={"https://picsum.photos/id/16/367/267"}
		Title={"Montañas"}
		Text={"Free Tour"}
		/>
		<Cards
			Img={"https://picsum.photos/id/20/367/267"}
			Title={"Class"}
			Text={"Random Class"}
		/>
		<Cards
			Img={"https://picsum.photos/id/24/367/267"}
			Title={"Books"}
			Text={"Free Books"}
		/>
		<Cards
			Img={"https://picsum.photos/id/43/367/267"}
			Title={"Photos"}
			Text={"Free Photos Studio"}
		/>
		</div>
		</div>	 
		<br/>  
		<Footer/>
		</>
		
	);
};

export default Home;
