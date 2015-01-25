var loadNav = function(phase){

			var svg = d3.select(".nav").append("svg")
								.attr("height", 70)
								.attr("width", 1150)
								.attr("id", "navBar");


			// Home

			 svg.append("a")
		         .attr("xlink:href", "/")
		         .attr("class", "glow")
	 			 .append("rect")
	 			 .attr("x", "6.5%")
		         .attr("y", "25%")
		         .attr("height", 60)
		         .attr("width", 150)
		         .style("fill",  "#86592d");
		         
		      svg.append("a")
		      	 .attr("xlink:href", "/")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "20px")
				 .attr("x", "9.5%")
				 .attr("y", "68.5%")
				 .style("font-weight", "bold")
				 .style("font-family", "BankGothic Md BT")
				 .text("Home");

			//About

			 svg.append("a")
		         .attr("xlink:href", "/about")
		         .attr("class", "glow")
	 			 .append("rect")
	 			 .attr("x", "22.5%")
		         .attr("y", "25%")
		         .attr("height", 60)
		         .attr("width", 150)
		         .style("fill",  function(){
		         	return (phase === "about" ? "grey": "#86592d");
		     });
		         
		      svg.append("a")
		      	 .attr("xlink:href", "/about")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "20px")
				 .attr("x", "25.5%")
				 .attr("y", "68.5%")
				 .style("font-weight", "bold")
				 .style("font-family", "BankGothic Md BT")
				 .text("About");
			
  		 	 // Pathways
			 svg.append("a")
		         .attr("xlink:href", "/pathways")
		         .attr("class", "glow")
	 			 .append("rect")
	 			 .attr("x", "37.5%")
		         .attr("y", "25%")
		         .attr("height", 60)
		         .attr("width", 150)
		         .style("fill", function(){
		         	return (phase === "pathways" ? "grey": "#86592d");
		     }); 

		         
		      svg.append("a")
		      	 .attr("xlink:href", "/pathways")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "20px")
				 .attr("x", "39%")
				 .attr("y", "68.5%")
				 .style("font-weight", "bold")
				 .style("font-family", "BankGothic Md BT")
				 .text("Pathways");


			 // Mission
			 svg.append("a")
		         .attr("xlink:href", "/mission-arm")
		         .attr("class", "glow")
	 			 .append("rect")
	 			 .attr("x", "52.5%")
		         .attr("y", "25%")
		         .attr("height", 60)
		         .attr("width", 150)
		         .style("fill", function(){
		         	return (phase === "mission" ? "grey": "#86592d");
		     }); 

		         
		      svg.append("a")
		      	 .attr("xlink:href", "/mission-arm")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "20px")
				 .attr("x", "55.5%")
				 .attr("y", "68.5%")
				 .style("font-weight", "bold")
				 .style("font-family", "BankGothic Md BT")
				 .text("Mission");

			//Capabilities
			  svg.append("a")
		         .attr("xlink:href", "/capabilities")
		         .attr("class", "glow")
	 			 .append("rect")
	 			 .attr("x", "67.5%")
		         .attr("y", "25%")
		         .attr("height", 60)
		         .attr("width", 150)
		         .style("fill", function(){
		         	return (phase === "capabilities" ? "grey": "#86592d");
		     }); 

		         
		      svg.append("a")
		      	 .attr("xlink:href", "/capabilities")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "20px")
				 .attr("x", "68%")
				 .attr("y", "68.5%")
				 .style("font-weight", "bold")
				 .style("font-family", "BankGothic Md BT")
				 .text("Capabilities");

			//Trip
			  svg.append("a")
		         .attr("xlink:href", "/mytrip")
		         .attr("class", "glow")
	 			 .append("rect")
	 			 .attr("x", "82.5%")
		         .attr("y", "25%")
		         .attr("height", 60)
		         .attr("width", 150)
		         .style("fill", function(){
		         	return (phase === "trip" ? "grey": "#86592d");
		     }); 

		         
		      svg.append("a")
		      	 .attr("xlink:href", "/mytrip")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "20px")
				 .attr("x", "85.5%")
				 .attr("y", "68.5%")
				 .style("font-weight", "bold")
				 .style("font-family", "BankGothic Md BT")
				 .text("My Trip");

 }