var loadPathwaysARM = function(){
	var svg = d3.select(".canvas")
						.append("svg")
						.attr("height", "430px")
						.attr("width", 550)
						.attr("id", "pathways");

			  		 var shift = ($(window).width() / 30); 

			  		 // Path info

			  		 var patternInfo = [
			  		 						{
			  		 							id: "iss", 
			  		 							width: 300, 
			  		 							height: 300, 
			  		 							link: "/images/ISS.png", 
			  		 							x: 0 + shift, 
			  		 							y: 150
			  		 						}, 

			  		 						{
			  		 							id: "arm", 
			  		 							width: 400, 
			  		 							height: 400, 
			  		 							link: "/images/ARM.png", 
			  		 							x: 180 + shift, 
			  		 							y: 3
			  		 						},


			  		 						{
			  		 							id: "moonmars", 
			  		 							width: 600, 
			  		 							height: 600, 
			  		 							link: "/images/moonmars.png", 
			  		 							x: 380 + shift, 
			  		 							y: 150
			  		 						}, 

			  		 						{
			  		 							id: "marsurface", 
			  		 							width: 600, 
			  		 							height: 600, 
			  		 							link: "/images/marsurface.png", 
			  		 							x: 380 + shift, 
			  		 							y: 300
			  		 						}
			  		 				];

			  		 patternInfo.forEach(function(pattern){

				  		 svg.append("defs")
							   .append("pattern")
							   .attr("id", pattern.id)
							   .attr('patternUnits', 'userSpaceOnUse')
							   .attr("width", pattern.width)
							   .attr("height", pattern.height)
							   .append("image")
							   .attr("width", 100)
							   .attr("height", 100)
							   .attr("xlink:href", pattern.link)
							   .attr('x', pattern.x)
			                   .attr('y', pattern.y);

			  		 });

			  		 var circleInfo = [

						  		 {
						  		 	cx: 60 + shift,
						  		 	cy: 200,
						  		 	r: 40,
						  		 	fill: "url(#iss)",
						  		 	inner: "#E65C00"
						  		 },

						  		 {
						  		 	cx: 230 + shift,
						  		 	cy: 53,
						  		 	r: 40,
						  		 	fill: "url(#arm)",
						  		 	inner: "#E65C00"
						  		 },

						  		 {
						  		 	cx: 430 + shift,
						  		 	cy: 200,
						  		 	r: 40,
						  		 	fill: "url(#moonmars)",
						  		 	inner: "#E65C00"
						  		 },

						  		 {
						  		 	cx: 430 + shift,
						  		 	cy: 350,
						  		 	r: 40,
						  		 	fill: "url(#marsurface)",
						  		 	inner: "#E65C00"
						  		 }

			  		 ]

			  		 circleInfo.forEach(function(circle){

				  		 svg.append("circle")
					         .attr("cx", circle.cx)
					         .attr("cy", circle.cy)
					         .attr("r", 40)
					         .style("fill", circle.fill)       
					         .style("stroke", circle.inner)     
					         .style("stroke-width", 5);
					  });

			  		 // Paths

			  		svg.append("defs")
			  		 	.append("marker")
			  		 	.attr("fill", "#E65C00")
			  		 	.attr("id", "arrowOrange")
			  		 	.attr("viewBox", "0 0 10 10")
			  		 	.attr("refX", "1")
			  		 	.attr("refY", "5")
			  		 	.attr("markerWidth", "3")
			  		 	.attr("markerHeight", "3")
			  		 	.attr("orient", "auto")
			  		 	.append("path")
			  		 	.attr("d", "M 0 0 L 10 5 L 0 10 z");

			  		svg.append("marker")
			  		 	.attr("fill", "purple")
			  		 	.attr("id", "arrowPurple")
			  		 	.attr("viewBox", "0 0 10 10")
			  		 	.attr("refX", "1")
			  		 	.attr("refY", "5")
			  		 	.attr("markerWidth", "3")
			  		 	.attr("markerHeight", "3")
			  		 	.attr("orient", "auto")
			  		 	.append("path")
			  		 	.attr("d", "M 0 0 L 10 5 L 0 10 z");

			  		svg.append("marker")
			  		 	.attr("fill", "#0099FF")
			  		 	.attr("id", "arrowBlue")
			  		 	.attr("viewBox", "0 0 10 10")
			  		 	.attr("refX", "1")
			  		 	.attr("refY", "5")
			  		 	.attr("markerWidth", "3")
			  		 	.attr("markerHeight", "3")
			  		 	.attr("orient", "auto")
			  		 	.append("path")
			  		 	.attr("d", "M 0 0 L 10 5 L 0 10 z");

			  		 var issToArm = svg.append("line")
											.attr("x1", 100 + shift)
											.attr("y1", 200)
											.attr("x2", 180 + shift)
											.attr("y2", 70)
											.attr("stroke", "#E65C00")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowOrange)");


					var armToMarsmoon = svg.append("line")
											.attr("x1", 270 + shift)
											.attr("y1", 53)
											.attr("x2", 380 + shift)
											.attr("y2", 180)
											.attr("stroke", "#E65C00")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowOrange)");

					var marsmoonToMarsOne = svg.append("line")
											.attr("x1", 420 + shift)
											.attr("y1", 240)
											.attr("x2", 420 + shift)
											.attr("y2", 295)
											.attr("stroke", "#E65C00")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowOrange)");
					
					
					// Labels

					var issText = svg.append("text")
									 .attr("font-size", "13px")
									 .attr("x", 30 + shift)
									 .attr("y", 280)
									 .text("LEO/ISS");

					var marsText = svg.append("text")
									 .attr("font-size", "13px")
									 .attr("x", 150 + shift)
									 .attr("y", 53)
									 .text("ARM");


					var moonText = svg.append("text")
									 .attr("font-size", "13px")
					
					

					var marsText = svg.append("text")
									 .attr("font-size", "13px")
				
					marsText.append("tspan")
							   .attr("x", 320 + shift)
							   .attr("y", 370)
							   .text("MARS");

					marsText.append("tspan")
							   .attr("x", 320 + shift)
							   .attr("y", 390)
							   .text("SURFACE");

					var marsmoonText = svg.append("text")
									 .attr("font-size", "13px")
				
					marsmoonText.append("tspan")
							   .attr("x", 300 + shift)
							   .attr("y", 220)
							   .text("MARTIAN");

					marsmoonText.append("tspan")
							   .attr("x", 300 + shift)
							   .attr("y", 235)
							   .text("MOONS");

}

var loadDRMARM = function(){
	var svgData = d3.select(".canvas")
		  					.append("svg")
		  					.attr("id", "drm")
		  					.attr("height", "430px")
		  					.attr("width", 600);

			  									 


			  	var groupOne = svgData.append("g").attr("transform", "translate(100, 100)");
			  	var groupTwo = svgData.append("g").attr("transform", "translate(100, 100)");
			  	var groupThree = svgData.append("g").attr("transform", "translate(100, 100)");


			  	var rowOne = [{lineOne: "Asteriod", lineTwo: "Redirect", lineThree: "Mission"}, {lineOne: "Martian", lineTwo: "Moons"}, {lineOne: "Mars", lineTwo: "Surface"}];

			  	
			  	var descripOne = groupOne.append("text").attr("font-size", "14px")

				var desOneOne = descripOne.append("tspan");
				var desOneTwo = descripOne.append("tspan");
				var desOneThree = descripOne.append("tspan");

				desOneOne.attr("x", -50).attr("y", 225).text("ARM");
				desOneTwo.attr("x", -50).attr("y", 240).text("TO");
				desOneThree.attr("x", -50).attr("y", 255).text("MARS");

				var descripTwo = groupTwo.append("text").attr("font-size", "14px")

				var descripThree = groupThree.append("text").attr("font-size", "14px")

				var desThreeOne = descripThree.append("tspan");
				var desThreeTwo = descripThree.append("tspan");
				var pathwayLabel = descripThree.append("tspan");
				var drmLabel = descripThree.append("tspan");


				
				pathwayLabel.attr("x", -80).attr("y", 300).text("PATHWAY");
				drmLabel.attr("x", 150).attr("y", 300).text("DESIGN REFERENCE MISSION (DRM)");


				var linePathway = groupThree.append("line")
											.attr("x1", -85)
											.attr("y1", 280)
											.attr("x2", 10)
											.attr("y2", 280)
											.attr("stroke", "grey")
											.attr("stroke-width", 6);

				var drmLine = groupThree.append("line")
											.attr("x1", 20)
											.attr("y1", 280)
											.attr("x2", 492)
											.attr("y2", 280)
											.attr("stroke", "grey")
											.attr("stroke-width", 6);


			  	var rectOne = groupOne.selectAll(".rect1")
			  						.data(rowOne)
							  		.enter()
						  		 	.append("rect")
						  		 	.attr("width", 70)
									.attr("height", 70)
									.attr("x", function(d, i){return 20 + i*80})
									.attr("y", 200)
									.style("fill", function(d,i){
										if (i == 2){
											return "grey"
										} 

										return "transparent";
									})
									.style("stroke", "black")
						 			.style("stroke-width", 3);

				var textLineOne = groupOne.selectAll(".one")
							  		.data(rowOne)
							  		.enter()
							  			.append("text")
							  			.attr("x", function(d, i){return 25 + i*80})
							  			.attr("y", 215)
							  			.attr("font-size", "11px")
							  			.text(function(d){return d.lineOne})

				var textLineTwo = groupOne.selectAll(".one")
							  		.data(rowOne)
							  		.enter()
							  			.append("text")
							  			.attr("x", function(d, i){return 25 + i*80})
							  			.attr("y", 230)
							  			.attr("font-size", "11px")
							  			.text(function(d){
							  				if (d.lineTwo){
							  					return d.lineTwo
							  				} else {
							  					return "";
							  				}
							  			});

				/// Append ARM Text

				svgData.append("rect")
						.attr("x", 15)
						.attr("y", 20)
						.attr("stroke", "black")
						.attr("stroke-width", 2)
						.attr("width", 570)
						.attr("height", 270)
						.attr("fill", "grey");
						
				var text = svgData.append("text").attr("font-size", 14);

					text.append("tspan")
						.attr("x", 80)
						.attr("y", 60)
						.style("font-weight", "bold")
						.style("text-decoration", "underline")
						.text("Asteriod Redirect Mission (ARM) To Mars");

					text.append("tspan")
						.attr("x", 35)
						.attr("y", 100)
						.text("This pathway leverages the initial demonstration of the SLS and Orion systems in");
						
					text.append("tspan")
						.attr("x", 35)
						.attr("y", 120)
						.text(" cislunar space via the ARM and then takes the direct path of prioritizing activity in the");

					text.append("tspan")
						.attr("x", 35)
						.attr("y", 140)
						.text("Mars vicinity by focuing on exploring the moons of Mars, followed by a Mars landing.");

					text.append("tspan")
						.attr("x", 35)
						.attr("y", 180)
						.style('font-weight', 'bold')
						.style("text-decoration", "underline")
						.text("Desirable Properties:");

					text.append("tspan")
						.attr("x", 35)
						.attr("y", 200)
						.text("- Affordability");
					
					text.append("tspan")
						.attr("x", 35)
						.attr("y", 220)
						.text("- Duration of the program");

					text.append("tspan")
						.attr("x", 370)
						.attr("y", 180)
						.style('font-weight', 'bold')
						.style("text-decoration", "underline")
						.text("Undesirable Properties:");

					text.append("tspan")
						.attr("x", 370)
						.attr("y", 200)
						.text("- Highest development risk");
					
					text.append("tspan")
						.attr("x", 370)
						.attr("y", 220)
						.text("- Unsatisfactory operational tempo");
					
}

var loadCumulativeARM = function(){

		var svgChart = d3.select(".chart")
			  						.append("svg")
			  						.attr('id', "chart")
			  						.attr("height", "500px")
			  						.attr("width", 1150 );

			  		var groupOneOne = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupOneTwo = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupOneThree = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");

			  		var groupLabels = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");

			  		// Labels

			  		groupLabels.append("line")
								.attr("x1", 100)
								.attr("y1", -60)
								.attr("x2", 230)
								.attr("y2", -60)
								.attr("stroke", "grey")
								.attr("stroke-width", 6);

					groupLabels.append("text")
							  .attr("x", 120)
							  .attr("y", -80)
							  .attr("font-size", "14px")
							  .text("ARM TO MARS");

					groupLabels.append("line")
								.attr("x1", 280)
								.attr("y1", -60)
								.attr("x2", 410)
								.attr("y2", -60)
								.attr("stroke", "grey")
								.attr("stroke-width", 6);

					groupLabels.append("text")
							  .attr("x", 290)
							  .attr("y", -80)
							  .attr("font-size", "14px")
							  .text("MOON TO MARS");

					groupLabels.append("line")
								.attr("x1", 480)
								.attr("y1", -60)
								.attr("x2", 670)
								.attr("y2", -60)
								.attr("stroke", "grey")
								.attr("stroke-width", 6);

					groupLabels.append("line")
								.attr("x1", 0)
								.attr("y1", 350)
								.attr("x2", 670)
								.attr("y2", 350)
								.attr("stroke", "grey")
								.attr("stroke-width", 6);

					groupLabels.append("text")
							  .attr("x", 490)
							  .attr("y", -80)
							  .attr("font-size", "14px")
							  .text("ENHANCED EXPLORATION");

					groupLabels.append("text")
							  .attr("x", 220)
							  .attr("y", 380)
							  .attr("font-size", "14px")
							  .text("CULMULATIVE NUMBER OF ELEMENTS");

					groupLabels.append("text")
							  .attr("x", 800)
							  .attr("y", 0)
							  .attr("font-size", "14px")
							  .text("DEAD-END MISSION ELEMENT");

					groupLabels.append("text")
							  .attr("x", 795)
							  .attr("y", 100)
							  .attr("font-size", "14px")
							  .text("TRANSITIONAL MISSION ELEMENT");

					groupLabels.append("text")
							  .attr("x", 800)
							  .attr("y", 200)
							  .attr("font-size", "14px")
							  .text("PRIMARY MISSION ELEMENT");

					groupLabels.append("rect")
						      .attr("width", 40)
						      .attr("height", 40)
							  .attr("x", 750)
							  .attr("y", -25)
							  .attr('fill', 'red');

					groupLabels.append("rect")
						      .attr("width", 40)
						      .attr("height", 40)
							  .attr("x", 750)
							  .attr("y", 75)
							  .attr('fill', 'orange');

					groupLabels.append("rect")
						      .attr("width", 40)
						      .attr("height", 40)
							  .attr("x", 750)
							  .attr("y", 175)
							  .attr('fill', 'green');
							  


			  		var groupTwoOne = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupTwoTwo = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupTwoThree = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");

			  	

			  		var groupThreeOne = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupThreeTwo = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupThreeThree = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupThreeFour = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupThreeFive = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupThreeSix = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");

			 
			  		var armDataOneOne = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 3, attr: "dead_mission" }

			  		]

			  		var armDataOneTwo = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission"},
			  			{type: 3, attr: "dead_mission"}
			  		]

			  		var armDataOneThree = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission"},
			  			{type: 3, attr: "dead_mission"},
			  			{type: 3, attr: "dead_mission"}

			  		]

			  		

			  		

			  		groupOneOne.selectAll("rect")
			  				   .data(armDataOneOne)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 120)
									.attr("y", function(d, i){return 300 - i*20})
									.style("fill", function(d,i){
										if (d.type === 3){
											return "red"
										} else if (d.type === 2) {
											return "orange"
										} else {
											return "green"
										}
									});

					groupOneTwo.selectAll("rect")
			  				   .data(armDataOneTwo)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 120 + 30)
									.attr("y", function(d, i){return 300 - i*20})
									.style("fill", function(d,i){
										if (d.type === 3){
											return "red"
										} else if (d.type === 2) {
											return "orange"
										} else {
											return "green"
										}
									});

					groupOneThree.selectAll("rect")
			  				   .data(armDataOneThree)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 120 + 60)
									.attr("y", function(d, i){return 300 - i*20})
									.style("fill", function(d,i){
										if (d.type === 3){
											return "red"
										} else if (d.type === 2) {
											return "orange"
										} else {
											return "green"
										}
									});
}

var loadARM = function(){
	loadPathwaysARM();
	loadDRMARM();
	loadCumulativeARM();
}
