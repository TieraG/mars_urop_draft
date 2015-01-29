var loadIndex = function(){

		   var svg = d3.select(".canvas")
		 			   .append("svg")
		 			   .attr("id", "home-svg")
	 				   .attr("height", "1050")
	 				   .attr("width", "100%")
	 				   .attr("id", "main_page");

	 		// Title box
	 		svg.append("rect")
	 			.attr("x", "25%")
	 			.attr("y", "8%")
	 			.attr("width", "50%")
	 			.attr("height", "11%")
	 			.attr("fill", "#000000")
	 			.attr("fill-opacity", "0");

	 		svg.append("text")
				 .attr("font-size", "50px")
				 .attr("x", "12%")
				 .attr("y", "12%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 //.style("color", "red")
				 .text("PATHWAYS TO EXPLORATION"); 

			svg.append("text")
				 .attr("class", "sub")
				 .attr("font-size", "18px")
				 .attr("x", "36%")
				 .attr("y", "15%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("Technical Analysis and"); 

			svg.append("text")
				.attr("class", "sub")
				.attr("font-size", "18px")
				.attr("x", "34.5%")
				.attr("y", "17%")
				.attr("fill", "white")
				.style("font-weight", "bold")
				.text("Affordability Assessment");


			var dom = svg.append("g")
			 		 .attr("width", 1100)
			 		 .attr("height",450)
			 		 .attr("transform", "translate(0, 205)")
					 .append("foreignObject")
				     .attr("x", 0)
				     .attr("y", 0)
				     .attr("width", "1100")
				     .attr("height", "440");

			var htmlBody = dom.append("xhtml:body")
							 .attr("id", "capa")
							 .style("font-size", "18px")
							 .style("font-family", "sans-serif")
							 .style("font-weight", "bold")
							 .style("text-align", "left")

		//	var text = htmlBody.append("xhtml:p")
		//					   .html("Sending humans to destinations beyond low Earth orbit (LEO) is a technologically, programmatically, and politically complicated endeavor. Given the complexity of human space exploration, as well as the fact that U.S. goals in HSF have changed on time scales much shorter than the time it takes to accomplish those goals, it makes sense to decompose an HSF program into smaller building blocks. This also has the advantage that those building blocks can be assembled in various configurations, allowing for the changes in goals that we experience as a nation to be addressed without analysis ab initio. A “capability-based” approach to space exploration focuses research and technology development resources on systems and capabilities that are expected to be of value in the future, with no particular mission or set of missions in mind. The process of selecting future missions then tends to favor those missions that can make use of the systems and capabilities that have been developed. A “flexible-path” approach is a more sophisticated version of capability-based planning that takes into consideration what destinations might be desirable. By contrast, a pathway-based approach would commit the U.S. HSF program to a pathway with a specific sequence of missions normally of increasing difficulty and complexity that target specific exploration goals that are typically tied to various destinations that humans may explore. A pathway approach would facilitate continuity of development of required systems for increased capability and efficiency. This website tends to describe the content of the 2014 National Research Council Report 'Pathways to Exploration: Rationales and Approaches for a U.S. Program of Human Space Exploration'.");

		//Leave The Atmosphere Here
			svg.append("rect")
				.attr("x", "10%")
				.attr("y", "35%")
				.attr("width", "80%")
				.attr("height", "5%")
				.attr("rx", 10)         // set the x corner curve radius
    			.attr("ry", 10)       // set the y corner curve radius
				.attr("fill", "#000000");

	 		svg.append("a")
		         .attr("xlink:href", "/about")
	 			 .append("rect")
	 			 .attr("x", "10%")
	 			 .attr("y", "35%")
	 			 .attr("width", "80%")
		         .attr("height", "5%")
		         .attr("rx", 10)
		         .attr("ry", 10)
		         .style("fill", "#000000");

 			svg.append("text")
				 .attr("font-size", "23px")
				 .attr("x", "30%")
				 .attr("y", "38%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("Leave The Atmosphere Here");



	 		// Pathways
	 		 svg.append("rect")
	 		   	.attr("x", "0%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "30%")
	 			.attr("fill", "#000000")
	 			.attr("fill-opacity", "0.8");


	 		svg.append("a")
		         .attr("xlink:href", "/pathways")
	 			 .append("circle")
	 			 .attr("cx", "11%")
		         .attr("cy", "65%")
		         .attr("r", "5%")
		         .attr("stroke", "white")
		         .attr("stroke-width", "3")
		         .style("fill", "#86592d");
		        

		    svg.append("a")
		         .attr("xlink:href", "/pathways")
		    	 .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "50px")
				 .attr("x", "9.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("1"); 

		    svg.append("text")
				 .attr("font-size", "23px")
				 .attr("x", "4%")
				 .attr("y", "73%")
				 .attr("fill","white")
				 .style("font-weight", "bold")
				 .text("Pathways");

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "1%")
				 .attr("y", "78%")
				 .attr("fill","white")
				 .style("font-weight", "bold")
				 .text("Discover the three"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "1%")
				 .attr("y", "81%")
				 .attr("fill","white")
				 .style("font-weight", "bold")
				 .text("proposed pathways");  

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "1%")
				 .attr("y", "84%")
				 .attr("fill","white")				 
				 .style("font-weight", "bold")
				 .text("for a mission");   
	 			
			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "1%")
				 .attr("y", "87%")
				 .attr("fill","white")				
				 .style("font-weight", "bold")
				 .text("to the Mars Surface"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "1%")
				 .attr("y", "90%")
				 .attr("fill","white")
				 .style("font-weight", "bold")
				 .text("and their properties"); 

	 		// Mission Elements
	 		 svg.append("rect")
	 		   	.attr("x", "25%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "30%")
	 			.attr("fill-opacity", "0.8")
	 			.attr("fill", "#000000");

	 		  svg.append("a")
		         .attr("xlink:href", "/mission-arm")
	 			 .append("circle")
	 			 .attr("cx", "36%")
		         .attr("cy", "65%")
		         .attr("r", "5%")
		         .attr("stroke", "white")
		         .attr("stroke-width", "3")
		         .style("fill", "#86592d"); 

		         
		      svg.append("a")
		      	 .attr("xlink:href", "/mission-arm")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "50px")
				 .attr("x", "34.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("2"); 

		     svg.append("text")
				 .attr("font-size", "23px")
				 .attr("x", "29.5%")
				 .attr("y", "73%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("Mission"); 

		     svg.append("text")
				 .attr("font-size", "23px")
				 .attr("x", "28.5%")
				 .attr("y", "75%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("Elements"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "26%")
				 .attr("y", "78%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("Discover the 11"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "26%")
				 .attr("y", "81%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("Mission Elements");  

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "26%")
				 .attr("y", "84%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("involved in the");   
	 			
	 		svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "26%")
				 .attr("y", "87%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("space exploration");

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "26%")
				 .attr("y", "90%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("towards Mars");

	 		// Capabilities
	 		 svg.append("rect")
	 		   	.attr("x", "50%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "30%")
	 			.attr("fill-opacity", "0.8")
	 			.attr("fill", "#000000");

	 		 svg.append("a")
	 		 	 .attr("xlink:href", "/capabilities")
	 			 .append("circle")
	 			 .attr("cx", "61%")
		         .attr("cy", "65%")
		         .attr("r", "5%")
		         .attr("stroke", "white")
		         .attr("stroke-width", "3")
		         .style("fill", "#86592d");

		     svg.append("a")
		     	 .attr("xlink:href", "/capabilities")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "50px")
				 .attr("x", "59.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("3"); 

		    svg.append("text")
				 .attr("font-size", "23px")
				 .attr("x", "52%")
				 .attr("y", "73%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("Capabilities"); 


			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "51%")
				 .attr("y", "78%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("Discover the 10 key"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "51%")
				 .attr("y", "81%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("capabilities needed");  

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "51%")
				 .attr("y", "84%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("to be developed to");   
	 			
	 		svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "51%")
				 .attr("y", "87%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("reach Mars and");

	 		svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "51%")
				 .attr("y", "90%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("their challenges");

	 		// Trip to Mars
	 		var trip = svg.append("rect")
	 		   	.attr("x", "75%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "30%")
	 			.attr("fill-opacity", "0.8")
	 			.attr("fill", "#000000");

	 		svg.append("circle")
		     	 .attr("xlink:href", "/mytrip")
	 			 .attr("cx", "86%")
		         .attr("cy", "65%")
		         .attr("r", "5%")
		         .attr("stroke", "white")
		         .attr("stroke-width", "3")
		         .style("fill", "#86592d");

		    svg.append("text")
		     	 .attr("xlink:href", "/mytrip")
		    	 .attr('class', 'number')
				 .attr("font-size", "50px")
				 .attr("x", "84.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("4"); 

		    
		    svg.append("text")
				 .attr("font-size", "23px")
				 .attr("x", "79%")
				 .attr("y", "73%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("My Trip"); 

		    svg.append("text")
				 .attr("font-size", "23px")
				 .attr("x", "79%")
				 .attr("y", "75%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("To Mars"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "76%")
				 .attr("y", "78%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("Plan your own trip"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "76%")
				 .attr("y", "81%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("to Mars dealing with");  

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "76%")
				 .attr("y", "84%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("budget, pathways"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "76%")
				 .attr("y", "87%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("and different"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "14px")
				 .attr("x", "76%")
				 .attr("y", "90%")
				 .attr("fill", "white")
				 .style("font-weight", "bold")
				 .text("scenarios"); 


		     
	 			
}