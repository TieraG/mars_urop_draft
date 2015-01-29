$(document).ready(function(){
loadMyTrip = function(){
	var svg = d3.select(".canvas")
		 			   .append("svg")
		 			   .attr("id", "trip-svg")
	 				   .attr("height", "1050")
	 				   .attr("width", "100%")
	 				   .attr("id", "main_page");


	var svgSideBar = svg.append("rect")
						.attr("id", "sidebar")
						.attr("x", "0")
						.attr("y", "0")
						.attr("height", "100%")
						.attr("width", "400")
						.attr("fill", "#000000");

					svg.append("text")
						.attr("id", "sidebarHeader")
						.attr("x", "30")
						.attr("y", "30")
						.attr("font-family", "BankGothic Md BT")
						.attr("font-size", "40px")
						.attr("fill", "white")
						.text("International");

					svg.append("text")
						.attr("id", "sidebarHeader")
						.attr("x", "40")
						.attr("y", "70")
						.attr("font-family", "BankGothic Md BT")
						.attr("font-size", "40px")
						.attr("fill", "white")
						.text("Cooperation");

					svg.append("rect")
						.attr("x", "90")
						.attr("y", "100")
						.attr("height", "75")
						.attr("width", "200")
						.attr("fill", "grey");

					svg.append("line")
						.attr("x1", "30")
						.attr("y1", "130")
						.attr("x2", "350")
						.attr("y2", "130")
						.attr("fill-opacity", "0.8")
						.attr("stroke", "grey")
						.attr("stroke-width", 3);

					svg.append("line")
						.attr("x1", "30")
						.attr("y1", "150")
						.attr("x2", "350")
						.attr("y2", "150")
						.attr("stroke", "grey")
						.attr("stroke-width", 3);

					svg.append("text")
						.attr("id", "sidebarHeader")
						.attr("font-family", "BankGothic Md BT")
						.attr("font-size", "24px")
						.attr("x", "130")
						.attr("y", "145")
						.attr("fill", "black")
						.text("Partners")

					svg.append("text")
						.attr("font-family", "BankGothic Md BT")
						.attr("font-size", "20px")
						.attr("x", "150")
						.attr("y", "250")
						.attr("fill", "white")
						.text("ESA");

					svg.append("circle")
						.attr("id", "esa")
						.attr("fill", "white")
						.attr("cx", "100")
						.attr("cy", "245")
						.attr("r", "12");
	 				   
	 				svg.append("text")
	 					.attr("font-family", "BankGothic Md BT")
	 					.attr("font-size", "20px")
	 					.attr("x", "150")
	 					.attr("y", "300")
	 					.attr("fill", "white")
	 					.text("JAXA");

					svg.append("circle")
						.attr("id", "jaxa")
						.attr("fill", "white")
						.attr("cx", "100")
						.attr("cy", "295")
						.attr("r", "12");

	 				svg.append("text")
	 					.attr("font-family", "BankGothic Md BT")
	 					.attr("font-size", "20px")
	 					.attr("x", "150")
	 					.attr("y", "350")
	 					.attr("fill", "white")
	 					.text("CSA");

					svg.append("circle")
						.attr("id", "csa")
						.attr("fill", "white")
						.attr("cx", "100")
						.attr("cy", "345")
						.attr("r", "12");


	var svgOptions = svg.append("rect")
						.attr("id", "options")
						.attr("x", "450")
						.attr("y", "0")
						.attr("height", "100%")
						.attr("width", "400")
						.attr("fill", "#996633");

					svg.append("text")
						.attr("font-family", "BankGothic Md BT")
						.attr("font-size", "50px")
						.attr("x", "500")
						.attr("y", "100")
						.attr("fill", "white")
						.text("Scenarios");


					svg.append("text")
						.attr("font-family", "BankGothic Md BT")
						.attr("font-size", "20px")
						.attr("x", "550")
						.attr("y", "250")
						.attr("fill", "white")
						.text("Schedule Driven");

					svg.append("circle")
						.attr("id", "sched")
						.attr("fill", "white")
						.attr("cx", "500")
						.attr("cy", "245")
						.attr("r", "12");
	 				   
	 				svg.append("text")
	 					.attr("font-family", "BankGothic Md BT")
	 					.attr("font-size", "20px")
	 					.attr("x", "550")
	 					.attr("y", "300")
	 					.attr("fill", "white")
	 					.text("Budget Driven");

					svg.append("circle")
						.attr("id", "budg")
						.attr("fill", "white")
						.attr("cx", "500")
						.attr("cy", "295")
						.attr("r", "12");

	 				svg.append("text")
	 					.attr("font-family", "BankGothic Md BT")
	 					.attr("font-size", "20px")
	 					.attr("x", "550")
	 					.attr("y", "350")
	 					.attr("fill", "white")
	 					.text("Operationally Viable");

					svg.append("circle")
						.attr("id", "ops")
						.attr("fill", "white")
						.attr("cx", "500")
						.attr("cy", "345")
						.attr("r", "12");			

					svg.append("defs")
						.attr("x", "750")
						.attr("y", "100")
						.attr()


}


			
// $(document).on("mouseover", "#ops", function(event){

// 	// event.preventDefault();

// 	// $("trip-svg").remove();

// 	 		svg.append("rect")
// 	 			.attr("id", "rectImage")
// 	 			.attr("height", "300")
// 	 			.attr("width", "100")
// 	 			.attr("x", "850")
// 	 			.attr("y", "200")
// 	 			.attr("fill", "red");
});