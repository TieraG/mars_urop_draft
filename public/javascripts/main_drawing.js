	
var loadMainPage = function(){


		
		////////////////// Paths

		 var svg =  d3.select(".canvas").append("svg")
			  		  .attr("height", "430px")
					  .attr("width", 550)
					  .attr("id", "pathways");

			  		 var shift = ($(window).width() / 30); 

			  		 var tip = d3.tip()
			  		 			 .attr("class", "d3_tip")
			  		 			 .offset([50, 5])
			  		 			 .direction("e")
			  		 			 .html(function(d){
			  		 			 	return "<p>" + d.info + "<p>";
			  		 			 });

			  		 svg.call(tip);

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
			  		 							id: "asteroid", 
			  		 							width: 600, 
			  		 							height: 600, 
			  		 							link: "/images/asteroid.png", 
			  		 							x: 380 + shift, 
			  		 							y: 3
			  		 						}, 

			  		 						{
			  		 							id: "l2", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/L2.png", 
			  		 							x: 180 + shift, 
			  		 							y: 150
			  		 						}, 

			  		 						{
			  		 							id: "moon", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/moon.png", 
			  		 							x: 180 + shift, 
			  		 							y: 300
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
						  		 	inner: "purple",
						  		 	middle: "#0099FF",
						  		 	outer: "#E65C00",
						  		 	info: "<b><u>International Space Station</u></b><br><br>The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. It is a modular structure whose first component was launched in 1998. Now the largest artificial body in orbit, it can often be seen with the naked eye from Earth."
						  		 },

						  		 {
						  		 	cx: 230 + shift,
						  		 	cy: 53,
						  		 	r: 40,
						  		 	fill: "url(#arm)",
						  		 	inner: "#E65C00",
						  		 	info: "<b><u>Asteroid Redirect Mission</u></b><br><br><b><u>Description</u></b>: Scientific study (sample collection) on a 7- to 10-meter asteroid taken from its native orbit to the lunar vicinity by a robotic mission.<br><br><b><u>Duration:</u></b> up to 6 days on the surface.<br><br><b><u>Crew:</u></b> 2"
						  		 },

						  		 {
						  		 	cx: 430 + shift,
						  		 	cy: 53,
						  		 	r: 40,
						  		 	fill: "url(#asteroid)",
						  		 	inner: "purple",
						  		 	info: "<b><u>Asteroid in Native Orbit</u></b><br><br><b><u>Description:</u></b> Asteroid of scientific interest beyond cislunar space. Important scientific returns and development of deep space navigation, low gravity foreign body exploration technologies.<br><br><b><u>Duration:</u></b> 60 to 130 day transit, 14-day mission at the asteroid.<br><br><b><u>Crew:</u></b> 4"
						  		 },

						  		{
						  		 	cx: 230 + shift,
						  		 	cy: 200,
						  		 	r: 40,
						  		 	fill: "url(#l2)",
						  		 	inner: "purple",
						  		 	info: "<b><u>Earth-Moon L2</u></b><br><br><u><b>Description:</b></u> Provide technologies and techniques that could enable crews to survive on long-duration deep space missions. Observations of the far side of the Moon or support to lunar surface activities.<br><br><u><b>Duration:</b></u> 6 months (minimum).<br><br><u><b>Crew:</b></u> 4 or more"
						  		 },

						  		 {
						  		 	cx: 230 + shift,
						  		 	cy: 350,
						  		 	r: 40,
						  		 	fill: "url(#moon)",
						  		 	inner: "purple",
						  		 	middle: "#0099FF",
						  		 	info: "<u><b>Lunar Surface Sortie</b></u><br><br><b><u>Description:</u></b> Scientific exploration. Develop required assets and techniques for martian surface exploration using nearest and most realistic celestial body with short return times.<br><br><u><b>Duration:</b></u> 28 days<br><br><u><b>Crew:</b></u> 4 <br><hr><br><u><b>Lunar Surface Outpost</b></u><br><br><b><u>Description:</u></b> Extension of the Lunar Surface Sortie Mission, with long duration surface assets. Scientific exploration and experiment and testing of Mars-focused technologies.<br><br><u><b>Duration:</b></u> 6 months<br><br><u><b>Crew:</b></u> 4<br><br>"
						  		 },

						  		 {
						  		 	cx: 430 + shift,
						  		 	cy: 200,
						  		 	r: 40,
						  		 	fill: "url(#moonmars)",
						  		 	inner: "purple",
						  		 	middle: "#E65C00",
						  		 	info: "<b><u>Mars Moon</u></b><br><br><u><b>Description:</b></u> Similar to a crewed mission to Mars but without challenges of entry, descent and landing (EDL) and ascent from Mars, because low gravity bodies.<br><br><u><b>Duration:</b></u> 60 days at Phobos and Deimos, 2 months Mars orbit, 700-day mission total."
						  		 },

						  		 {
						  		 	cx: 430 + shift,
						  		 	cy: 350,
						  		 	r: 40,
						  		 	fill: "url(#marsurface)",
						  		 	inner: "purple",
						  		 	middle: "#0099FF",
						  		 	outer: "#E65C00",
						  		 	info: "<b><u>Mars Surface</u></b><br><br><u><b>Description:</b></u> Horizon of the Human exploration.<br><br><u><b>Duration:</b></u> 6 months transfer to Mars orbit, 6 months on surface."
						  		 }

			  		 ]

			  		 circleInfo.forEach(function(circle){

				  		 svg.append("circle")
					         .attr("cx", circle.cx)
					         .attr("cy", circle.cy)
					         .attr("r", 40)
					         .style("fill", circle.fill)       
					         .style("stroke", circle.inner)     
					         .style("stroke-width", 5)
					         .on("mouseenter", function(){
					         	tip.show(circle);
					         })
					         .on("mouseleave", tip.hide);

					    if (circle.middle){
					    	 svg.append("circle")
						         .attr("cx", circle.cx)
						         .attr("cy", circle.cy)
						         .attr("r", 45)
						         .style("fill", "transparent")       
						         .style("stroke", circle.middle)     
						         .style("stroke-width", 5)
						         .on("mouseenter", function(){
						         	tip.show(circle)
						         })
					         	 .on("mouseleave", tip.hide);
					    }

					    if (circle.outer){
					    	 svg.append("circle")
						         .attr("cx", circle.cx)
						         .attr("cy", circle.cy)
						         .attr("r", 50)
						         .style("fill", "transparent")       
						         .style("stroke", circle.outer)     
						         .style("stroke-width", 5)
						         .on("mouseenter", function(){
						         	tip.show(circle)
						         })
					             .on("mouseleave", tip.hide);
					    }
						   
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
											.attr("x1", 110 + shift)
											.attr("y1", 200)
											.attr("x2", 180 + shift)
											.attr("y2", 70)
											.attr("stroke", "#E65C00")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowOrange)");

					var issToLtwo = svg.append("line")
											.attr("x1", 100 + shift)
											.attr("y1", 200)
											.attr("x2", 172 + shift)
											.attr("y2", 200)
											.attr("stroke", "purple")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowPurple)");

					var issToMoon = svg.append("line")
											.attr("x1", 105 + shift)
											.attr("y1", 205)
											.attr("x2", 177 + shift)
											.attr("y2", 340)
											.attr("stroke", "#0099FF")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowBlue)");

					var armToMarsmoon = svg.append("line")
											.attr("x1", 270 + shift)
											.attr("y1", 53)
											.attr("x2", 375 + shift)
											.attr("y2", 180)
											.attr("stroke", "#E65C00")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowOrange)");

					var marsmoonToMarsOne = svg.append("line")
											.attr("x1", 420 + shift)
											.attr("y1", 245)
											.attr("x2", 420 + shift)
											.attr("y2", 284)
											.attr("stroke", "#E65C00")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowOrange)");
					var marsmoonToMarsTwo = svg.append("line")
											.attr("x1", 440 + shift)
											.attr("y1", 240)
											.attr("x2", 440 + shift)
											.attr("y2", 295)
											.attr("stroke", "purple")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowPurple)");

					var ltwoToAsteriod = svg.append("line")
											.attr("x1", 270 + shift)
											.attr("y1", 200)
											.attr("x2", 380 + shift)
											.attr("y2", 60)
											.attr("stroke", "purple")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowPurple)");

					var moonToMarsurface = svg.append("line")
											.attr("x1", 275 + shift)
											.attr("y1", 350)
											.attr("x2", 370 + shift)
											.attr("y2", 350)
											.attr("stroke", "#0099FF")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowBlue)");

					var moonToMasrmoon = svg.append("line")
											.attr("x1", 270 + shift)
											.attr("y1", 350)
											.attr("x2", 380 + shift)
											.attr("y2", 210)
											.attr("stroke", "purple")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowPurple)");

					var asteriodToMoon = svg.append("line")
											.attr("x1", 395 + shift)
											.attr("y1", 70)
											.attr("x2", 220 + shift)
											.attr("y2", 300)
											.attr("stroke", "purple")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowPurple)");
					// Labels

					var issText = svg.append("text")
									 .attr("font-size", "13px")
									 .attr("x", 30 + shift)
									 .attr("y", 280)
									 .text("LEO/ISS");

					var armText = svg.append("text")
									 .attr("font-size", "13px")
									 .attr("x", 150 + shift)
									 .attr("y", 53)
									 .text("ARM");

					var ltwoText = svg.append("text")
									 .attr("font-size", "13px")
									 .attr("x", 150 + shift)
									 .attr("y", 170)
									 .text("E-M L2");

					var moonText = svg.append("text")
									 .attr("font-size", "13px")
					
					var moonTextOne = moonText.append("tspan");
					var moonTextTwo = moonText.append("tspan");
					var moonTextThree = moonText.append("tspan");

					moonTextOne.attr("x", 70 + shift)
							   .attr("y", 370)
							   .text("LUNAR SORTIE");

					moonTextTwo.attr("x", 70 + shift) 
							   .attr("y", 385)
							   .text("&");

					moonTextThree.attr("x", 70 + shift)
							   .attr("y", 400)
							   .text("LUNAR OUTPOST");

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

					var asteriodText = svg.append("text")
									 .attr("font-size", "13px")
				
					asteriodText.append("tspan")
							   .attr("x", 320 + shift)
							   .attr("y", 20)
							   .text("ASTERIOD");

					asteriodText.append("tspan")
							   .attr("x", 320 + shift)
							   .attr("y", 35)
							   .text("IN NATIVE");

					asteriodText.append("tspan")
							   .attr("x", 320 + shift)
							   .attr("y", 50)
							   .text("ORBIT");
		//////////////////////////////////////////////////


		var svgData = d3.select(".canvas")
		  					.append("svg")
		  					.attr("id", "drm")
		  					.attr("height", "430px")
		  					.attr("width", 600);

			  									 


			  	var groupOne = svgData.append("g").attr("transform", "translate(100, 100)");
			  	var groupTwo = svgData.append("g").attr("transform", "translate(100, 100)");
			  	var groupThree = svgData.append("g").attr("transform", "translate(100, 100)");


			  	var rowOne = [{lineOne: "Asteriod", lineTwo: "Redirect", lineThree: "Mission"}, {lineOne: "Martian", lineTwo: "Moons"}, {lineOne: "Mars", lineTwo: "Surface"}];

			  	var rowTwo = [{lineOne: "Lunar", lineTwo: "Surface", lineThree: "Sortie"}, {lineOne: "Lunar", lineTwo: "Surface", lineThree: "Outpost"}, {lineOne: "Mars", lineTwo: "Surface"}];

			  	var rowThree = [{lineOne: "Earth", lineTwo: "Moon", lineThree: "L2"}, {lineOne: "Asteriod in", lineTwo: "Native", lineThree: "Orbit"}, {lineOne: "Lunar", lineTwo: "Surface", lineThree: "Sortie"}, {lineOne: "Lunar", lineTwo: "Surface", lineThree: "Outpost"}, {lineOne: "Martians", lineTwo: "Moons"}, {lineOne: "Mars", lineTwo: "Surface"}];

			  	var descripOne = groupOne.append("text").attr("font-size", "14px")

				var desOneOne = descripOne.append("tspan");
				var desOneTwo = descripOne.append("tspan");
				var desOneThree = descripOne.append("tspan");


				desOneOne.attr("x", -50).attr("y", 25).text("ARM");
				desOneTwo.attr("x", -50).attr("y", 40).text("TO");
				desOneThree.attr("x", -50).attr("y", 55).text("MARS");

				var descripTwo = groupTwo.append("text").attr("font-size", "14px")

				var desTwoOne = descripTwo.append("tspan");
				var desTwoTwo = descripTwo.append("tspan");
				var desTwoThree = descripTwo.append("tspan");

				

				desTwoOne.attr("x", -50).attr("y", 125).text("MOON");
				desTwoTwo.attr("x", -50).attr("y", 140).text("TO");
				desTwoThree.attr("x", -50).attr("y", 155).text("MARS");

				var descripThree = groupThree.append("text").attr("font-size", "14px")

				var desThreeOne = descripThree.append("tspan");
				var desThreeTwo = descripThree.append("tspan");
				var pathwayLabel = descripThree.append("tspan");
				var drmLabel = descripThree.append("tspan");

				


				desThreeOne.attr("x", -80).attr("y", 225).text("ENHANCED");
				desThreeTwo.attr("x", -85).attr("y", 240).text("EXPLORATION");
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
							  			.attr("y", 15)
							  			.attr("font-size", "11px")
							  			.text(function(d){return d.lineOne})

				var textLineTwo = groupOne.selectAll(".one")
							  		.data(rowOne)
							  		.enter()
							  			.append("text")
							  			.attr("x", function(d, i){return 25 + i*80})
							  			.attr("y", 30)
							  			.attr("font-size", "11px")
							  			.text(function(d){
							  				if (d.lineTwo){
							  					return d.lineTwo
							  				} else {
							  					return "";
							  				}
							  			});

				var rectTwo = groupTwo.selectAll(".rect2")
			  						.data(rowOne)
							  		.enter()
						  		 	.append("rect")
						  		 	.attr("width", 70)
									.attr("height", 70)
									.attr("x", function(d, i){return 20 + i*80})
									.attr("y", 100)
									.style("fill", function(d,i){
										if (i == 2){
											return "grey"
										} 

										return "transparent";
									})
									.style("stroke", "black")
						 			.style("stroke-width", 3);

				var textLineTwoOne = groupTwo.selectAll(".two")
							  		.data(rowTwo)
							  		.enter()
							  			.append("text")
							  			.attr("x", function(d, i){return 25 + i*80})
							  			.attr("y", 120)
							  			.attr("font-size", "11px")
							  			.text(function(d){return d.lineOne});

				var textLineTwoTwo = groupTwo.selectAll(".two")
							  		.data(rowTwo)
							  		.enter()
							  			.append("text")
							  			.attr("x", function(d, i){return 25 + i*80})
							  			.attr("y", 135)
							  			.attr("font-size", "11px")
							  			.text(function(d){
							  				if (d.lineTwo){
							  					return d.lineTwo
							  				} else {
							  					return "";
							  				}
							  			});

				var textLineTwoThree = groupTwo.selectAll(".two")
										  		.data(rowTwo)
										  		.enter()
										  			.append("text")
										  			.attr("x", function(d, i){return 25 + i*80})
										  			.attr("y", 150)
										  			.attr("font-size", "11px")
										  			.text(function(d){
										  				if (d.lineThree){
										  					return d.lineThree
										  				} else {
										  					return "";
										  				}
										  			});

				var rectThree = groupThree.selectAll(".rect3")
			  						.data(rowThree)
							  		.enter()
						  		 	.append("rect")
						  		 	.attr("width", 70)
									.attr("height", 70)
									.attr("x", function(d, i){return 20 + i*80})
									.attr("y", 200)
									.style("fill", function(d,i){
										if (i == 5){
											return "grey"
										} 

										return "transparent";
									})
									.style("stroke", "black")
						 			.style("stroke-width", 3);	

				var textLineThreeOne = groupThree.selectAll(".three")
							  		.data(rowThree)
							  		.enter()
							  			.append("text")
							  			.attr("x", function(d, i){return 25 + i*80})
							  			.attr("y", 220)
							  			.attr("font-size", "11px")
							  			.text(function(d){return d.lineOne});

				var textLineThreeTwo = groupThree.selectAll(".three")
										  		.data(rowThree)
										  		.enter()
										  			.append("text")
										  			.attr("x", function(d, i){return 25 + i*80})
										  			.attr("y", 235)
										  			.attr("font-size", "11px")
										  			.text(function(d){
										  				if (d.lineTwo){
										  					return d.lineTwo
										  				} else {
										  					return "";
										  				}
										  			});

				var textLineThreeThree = groupThree.selectAll(".three")
										  		.data(rowThree)
										  		.enter()
										  			.append("text")
										  			.attr("x", function(d, i){return 25 + i*80})
										  			.attr("y", 250)
										  			.attr("font-size", "11px")
										  			.text(function(d){
										  				if (d.lineThree){
										  					return d.lineThree
										  				} else {
										  					return "";
										  				}
										  			});


		/////////////////////////////////////////////////

		var svgChart = d3.select(".chart")
			  						.append("svg")
			  						.attr('id', "chart")
			  						.attr("height", "500px")
			  						.attr("width", 1150);

			  		 var tipBar = d3.tip()
			  		 			 .attr("class", "d3_tip")
			  		 			 .offset([20, -5])
			  		 			 .direction("w")
			  		 			 .html(function(d){
			  		 			 	return "<p>" + d.info + "<p>";
			  		 			 });

			  		 svgChart.call(tipBar);

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
							  .attr("y", -75)
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
							  .attr("y", -75)
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
							  .attr("y", -75)
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

					// Bar chart labels

					var bar_chart_data = [

						{
							x: 750,
							y: -25,
							fill: "red",
							info: "Elements which have requirements other than what needed for a Mars surface mission and are extraneous to the direct goal of landing humans on Mars."
						},
						{
							x: 750,
							y: 75,
							fill: "orange",
							info: "Elements that are in the technological development path of a primary element."
						},
						{
							x: 750,
							y: 175,
							fill: "green",
							info: "Mission elements needed for a mars surface Mission."
						}
					];

					bar_chart_data.forEach(function(bar){

						groupLabels.append("rect")
									.attr("width", 40)
								    .attr("height", 40)
									.attr("x", bar.x)
									.attr("y", bar.y)
									.attr('fill', bar.fill)
									.on("mouseenter", function(){
					         				tipBar.show(bar);
					         		})
					         		.on("mouseleave", tipBar.hide);
					});
					

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

			  		var armDataTwoOne = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 3, attr: "dead_mission" }
			  		]

			  		var armDataTwoTwo = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 3, attr: "dead_mission" }
			  		]

			  		var armDataTwoThree = [ 
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
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 3, attr: "dead_mission" }
			  		]

			  		var armDataThreeOne = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"}
			  		]

			  		var armDataThreeTwo = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 2, attr: "translational"},
			  			{type: 3, attr: "dead_mission" }
			  		]

			  		var armDataThreeThree = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission" }

			  		]

			  		var armDataThreeFour = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission" }
			  		]

			  		var armDataThreeFive = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission" }
			  		]

			  		var armDataThreeSix = [ 
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
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission" }
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


					groupTwoOne.selectAll("rect")
			  				   .data(armDataTwoOne)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 300)
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

					groupTwoTwo.selectAll("rect")
			  				   .data(armDataTwoTwo)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 300 + 30)
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

					groupTwoThree.selectAll("rect")
			  				   .data(armDataTwoThree)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 300 + 60)
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

					groupThreeOne.selectAll("rect")
			  				   .data(armDataThreeOne)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 500 )
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


					groupThreeTwo.selectAll("rect")
			  				   .data(armDataThreeTwo)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 500 + 30)
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

					groupThreeThree.selectAll("rect")
			  				   .data(armDataThreeThree)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 500 + 60)
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

					groupThreeFour.selectAll("rect")
			  				   .data(armDataThreeFour)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 500 + 90)
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

					groupThreeFive.selectAll("rect")
			  				   .data(armDataThreeFive)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 500 + 120)
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

					groupThreeSix.selectAll("rect")
			  				   .data(armDataThreeSix)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 500 + 150)
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
