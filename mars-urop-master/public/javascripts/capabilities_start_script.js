$(document).ready(function(){

	loadCapabilities();
	loadNav("capabilities");

	var tip = d3.tip()
	 			 .attr("class", "d3_tip")
	 			 .offset([0, -20])
	 			 .direction("w")
	 			 .html(function(d){
	 			 	return "<img width='50' height='50' src=" + d.src + ">";
	 			 });

				  		 var tipInfo = d3.tip()
			  		 			 .attr("class", "d3tip")
			  		 			 .offset([0, 0])
			  		 			 .direction("w")
			  		 			 .html(function(d){
			  		 			 	return "<p>" + d.info + "<p>";
			  		 			 });
	svgCapa.call(tip);
	svgCapa.call(tipInfo);

	var patternInfo = [
			  		 						{
			  		 							id: "aas", 
			  		 							width: 300, 
			  		 							height: 300, 
			  		 							link: "/images/AAS.png", 
			  		 							x: 5, 
			  		 							y: 120
			  		 						}, 

			  		 						{
			  		 							id: "ccs", 
			  		 							width: 400, 
			  		 							height: 400, 
			  		 							link: "/images/CCS.png", 
			  		 							x: 5, 
			  		 							y: 150
			  		 						}, 

			  		 						{
			  		 							id: "lm", 
			  		 							width: 600, 
			  		 							height: 600, 
			  		 							link: "/images/LM.png", 
			  		 							x: 5, 
			  		 							y: 240
			  		 						}, 

			  		 						{
			  		 							id: "lop", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/LOP.png", 
			  		 							x: 5, 
			  		 							y: 270
			  		 						}, 

			  		 						{
			  		 							id: "psm", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/PSM.png", 
			  		 							x: 5, 
			  		 							y: 120
			  		 						}, 

			  		 						{
			  		 							id: "dsh", 
			  		 							width: 400, 
			  		 							height: 400, 
			  		 							link: "/images/DSH.png", 
			  		 							x: 10, 
			  		 							y: 180
			  		 						}, 

			  		 						{
			  		 							id: "ldsh", 
			  		 							width: 600, 
			  		 							height: 600, 
			  		 							link: "/images/LDSH.png", 
			  		 							x: 5, 
			  		 							y: 210
			  		 						},			  		 						

			  		 						{
			  		 							id: "lop1", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/LOP.png", 
			  		 							x: 5, 
			  		 							y: 350
			  		 						}, 

			  		 						{
			  		 							id: "lm1", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/LM.png", 
			  		 							x: 5, 
			  		 							y: 320
			  		 						}, 			  		 						
			  		 						{
			  		 							id: "myd", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/MYD.png", 
			  		 							x: 5, 
			  		 							y: 450
			  		 						}, 			  		 						
			  		 						{
			  		 							id: "hll", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/HLL.png", 
			  		 							x: 5, 
			  		 							y: 180
			  		 						}, 
			  		 						{
			  		 							id: "cps", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/CPS.png", 
			  		 							x: 5, 
			  		 							y: 260
			  		 						}, 
			  		 						{
			  		 							id: "lss", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/LSS.png", 
			  		 							x: 5, 
			  		 							y: 350
			  		 						}, 			
			  		 						{
			  		 							id: "mav", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/MAV.png", 
			  		 							x: 5, 
			  		 							y: 120
			  		 						}, 			
			  		 						{
			  		 							id: "lm2", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/LM.png", 
			  		 							x: 5, 
			  		 							y: 200
			  		 						}, 
			  		 						{
			  		 							id: "av", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/AV.png", 
			  		 							x: 5, 
			  		 							y: 240
			  		 						}, 
			  		 						{
			  		 							id: "lop3", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/LOP.png", 
			  		 							x: 5, 
			  		 							y: 320
			  		 						}, 
			  		 						{
			  		 							id: "lm3", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/LM.png", 
			  		 							x: 5, 
			  		 							y: 350
			  		 						}, 	
			  		 						{
			  		 							id: "myd", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/MYD.png", 
			  		 							x: 5, 
			  		 							y: 430
			  		 						}, 		
			  		 						{
			  		 							id: "sev", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/SEV.png", 
			  		 							x: 5, 
			  		 							y: 460
			  		 						}, 
			  		 						{
			  		 							id: "trr", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/TRR.png", 
			  		 							x: 10, 
			  		 							y: 240
			  		 						}, 
			  		 						{
			  		 							id: "trr1", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "/images/TRR.png", 
			  		 							x: 10, 
			  		 							y: 150
			  		 						}, 
			  		 						{
			  		 							id: "snp", 
			  		 							width: 400, 
			  		 							height: 400, 
			  		 							link: "/images/SNP.png", 
			  		 							x: 12, 
			  		 							y: 180
			  		 						}, 									


			  		 				];



	var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

	var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

	patternInfo.forEach(function(pattern){

				  		 groupExtra.append("defs")
							   .append("pattern")
							   .attr("id", pattern.id)
							   .attr('patternUnits', 'userSpaceOnUse')
							   .attr("width", pattern.width)
							   .attr("height", pattern.height)
							   .append("image")
							   .attr("width", 32)
							   .attr("height", 32)
							   .attr("xlink:href", pattern.link)
							   .attr('x', pattern.x)
			                   .attr('y', pattern.y);

			  		 });

	groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

	groupExtra.append("line")
	 		    .attr("x1", 10)
				.attr("x2", 270)
				.attr("y1", 110)
				.attr("y2", 110)
				.attr("stroke", "green")
				.attr('stroke-width', '5px');

	groupExtra.append("text")
			  .attr("x", 50)
			  .attr("y", 140)
			  .style("font-size", 17)
			  .style('font-family', "sans-serif")
			  .text("Aeroassit System")
			  // .on("mouseenter", function(){
					//          	tip.show({src: aas.src});
			  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 120)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#aas)");

	groupExtra.append("text")
			  .attr("x", 50)
			  .attr("y", 170)
			  .style("font-size", 17)
			  .style('font-family', "sans-serif")
			  .text("Crew Command & Service Module")
			  // .on("mouseenter", function(){
					//          	tip.show({src: ccs.src});
			  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 150)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ccs)");

	groupExtra.append("text")
			  .attr("x", 20)
			  .attr("y", 220)
			  .attr("fill", "orange")
			  .style("font-size", 18)
			  .style('font-family', "sans-serif")
			  .text("Transitional Mission Elements");

	groupExtra.append("line")
	 		    .attr("x1", 10)
				.attr("x2", 270)
				.attr("y1", 230)
				.attr("y2", 230)
				.attr("stroke", "orange")
				.attr('stroke-width', '5px');

	groupExtra.append("text")
			  .attr("x", 50)
			  .attr("y", 260)
			  .style("font-size", 17)
			  .style('font-family', "sans-serif")
			  .text("Lunar Module")
			  // .on("mouseenter", function(){
					//          	tip.show({src: lm.src});
			  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 240)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lm)");

	groupExtra.append("text")
			  .attr("x", 50)
			  .attr("y", 290)
			  .style("font-size", 17)
			  .style('font-family', "sans-serif")
			  .text("Lunar Orbital Outpost")
			  // .on("mouseenter", function(){
					//          	tip.show({src: lop.src});
			  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 270)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lop)");

	// var dom = svgCapa.append("g")
	// 				 .attr("id", "capaDom")
	// 		 		 .attr("width", 700)
	// 		 		 .attr("height",560)
	// 		 		 .attr("transform", "translate(440, 0)")
	// 				 .append("foreignObject")
	// 			     .attr("x", 0)
	// 			     .attr("y", 0)
	// 			     .attr("width", 700)
	// 			     .attr("height", 560);

	// var htmlBody = dom.append("xhtml:body")
	// 				 .style("font-size", "19px")
	// 				 .attr("id", "capaBody")
	// 				 .attr("class", "cap-labels left");

	// var header = htmlBody.append("xhtml:h3")
	// 				 .attr("id", "capaHeader")
	// 				 .style("text-align", "center")
	// 				 .style("padding-top", "20px")
	// 				 .html("MARS ENTRY, DESCENT AND LANDING (EDL)");

	// var text = htmlBody.append("xhtml:p")
					   // .html("EDL technologies are highly interdependent and are generally validated in the context of the sequece of events associated with a particular mission. Before a human mission to the Mars surface, Mars EDL systems would probably require precursor flight tests in the atmosphere of both Earth and Mars. Advances in technology that are developed to support a human mission to the Mars surface would likely facilitate robotic missions to Venus, Titan, or the gas giants (Jupiter, Saturn, Uranus, and Neptune). The development of Mars EDL systems would also facilitate the development of EDL systems for spacecraft returning to Earth from remote destinations in the solar system on high-velocity trajectories.");
			
			var rectArea = svgCapa.append("rect")
						.attr("id", "capaDom")
						.attr("width", 700)
						.attr("height", 300)
						.attr("x", 450)
						.attr("y", 0)
						.attr("fill", "#996633")

			var rectText = svgCapa.append("text")
						.attr("id", "capaHeader")
						.attr("font-family", "sans-serif")
						.attr("font-size", "24px")
						.attr("font-weight", "bold")
						.attr("x", 525)
						.attr("y", 40)
						.text("MARS ENTRY, DESCENT AND LANDING (EDL)");

			svgCapa.append("text")
						.attr("id", "lineOne")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						// .attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 75)
						.text("EDL technologies are highly interdependent and are generally validated in the context of");						
			 
			svgCapa.append("text")
						.attr("id", "lineTwo")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 100)
						.text("the sequence of events associated with a particular mission. Before a human mission to");						
			 
			svgCapa.append("text")
						.attr("id", "lineThree")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 125)
						.text("the Mars surface, Mars EDL systems would probably require precursor flight tests in the");						
			 
			svgCapa.append("text")
						.attr("id", "lineFour")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 150)
						.text("atmosphere of both Earth and Mars. Advances in technology that are developed to");						
		

			svgCapa.append("text")
						.attr("id", "lineFive")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 175)
						.text("support a human mission to the Mars surface would likely facilitate robotic missions to");	


			svgCapa.append("text")
						.attr("id", "lineSix")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 200)
						.text("Venus, Titan, or the gas giants (Jupiter, Saturn, Uranus, and Neptune). The development of");	


			svgCapa.append("text")
						.attr("id", "lineSeven")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 225)
						.text("Mars EDL systems would also facilitate the development of EDL systems for spacecraft");	

			svgCapa.append("text")
						.attr("id", "lineEight")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 250)
						.text("returning to Earth from remote destinations in the solar system on high-velocity trajectories.");	

							



				
	var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
	];




	var coodX = 10;
	var coodY = 300;




	rect.forEach(function(r){

		var rectT = group.append("rect")
					.attr("x", coodX)
					.attr("y", coodY)
					.attr("height", 150)
					.attr("width", 150)
					.attr("fill", r.color)
					.style("opacity", "0.85");
		

		group.append("text")
			 .attr("x", coodX+10)
			 .attr("y", coodY+20)
			 .style("font-family", 'sans-serif')
			 .attr("fill", 'white')
			 .text(r.textTopOne)
			 .on("mouseenter", function(){
					tip.show("url(#TextOne)")
			 })
			 .on("mouseleave", tip.hide);

		group.append("text")
			 .attr("x", coodX+10)
			 .attr("y", coodY+40)
			 .style("font-family", 'sans-serif')
			 .attr("fill", 'white')
			 .text(r.textTopTwo);

		group.append("text")
			 .attr("x", coodX+10)
			 .attr("y", coodY+60)
			 .style("font-family", 'sans-serif')
			 .attr("fill", 'white')
			 .text(r.textTopThree);

		group.append("text")
			 .attr("x", coodX+50)
			 .attr("y", coodY+130)
			 .style("font-family", 'sans-serif')
			 .attr("fill", 'white')
			 .text(r.textBot);

		coodX+=170;
	})
var boxInfo = [

						{
							x: 10,
							y: 300,
							fill: "red",
							info: "Technical challenges are ranked high because the technologies needed for a Mars EDL system capable of handling very large payloads (40 to 80 MT) have yet to be identified."
						},
						{
							x: 180,
							y: 300,
							fill: "orange",
							info: "The capability gap is ranked high because the payload capacity of the necessary EDL systems are currently far beyond the capability of existing EDL systems."
						},
						{
							x: 350,
							y: 300,
							fill: "orange",
							info: "Regulatory challenges are ranked low because no regulatory changes are needed."
						},
						{
							x: 520,
							y: 300,
							fill: "green",
							info: "Cost and schedule challenges are ranked high because extraordinary resources and time would be needed to identify suitable technologies, scale them up to the requisite size, and conduct flight testing in the atmosphere of Earth and/or Mars to build confidence that they are safe enough for use on a crewed mission."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 110)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});

	$(document).on("mouseover", "#mars-edl", function(event){

			event.preventDefault();
		
			$("#capaGroup").remove();
			$("#capaGroupExtra").remove();
			$("#capaDom").remove();
			$("#capaHeader").remove();
			$("#lineOne").remove();
			$("#lineTwo").remove();
			$("#lineThree").remove();
			$("#lineFour").remove();
			$("#lineFive").remove();
			$("#lineSix").remove();
			$("#lineSeven").remove();
			$("#lineEight").remove();
			$("#lineNine").remove();

			var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

			var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		patternInfo.forEach(function(pattern){

				  		 groupExtra.append("defs")
							   .append("pattern")
							   .attr("id", pattern.id)
							   .attr('patternUnits', 'userSpaceOnUse')
							   .attr("width", pattern.width)
							   .attr("height", pattern.height)
							   .append("image")
							   .attr("width", 32)
							   .attr("height", 32)
							   .attr("xlink:href", pattern.link)
							   .attr('x', pattern.x)
			                   .attr('y', pattern.y);

			  		 });

			// var dom = svgCapa.append("g")
			// 		 .attr("id", "capaDom")
			//  		 .attr("width", 700)
			//  		 .attr("height",560)
			//  		 .attr("transform", "translate(440, 0)")
			// 		 .append("foreignObject")
			// 	     .attr("x", 0)
			// 	     .attr("y", 0)
			// 	     .attr("width", 700)
			// 	     .attr("height", 560);

			// htmlBody = dom.append("xhtml:body")
			// 				 .style("font-size", "19px")
			// 				 .attr("id", "capaBody")
			// 				 .attr("class", "cap-labels left");

			// header = htmlBody.append("xhtml:h3")
			// 				 .attr("id", "capaHeader")
			// 				 .style("text-align", "center")
			// 				 .style("padding-top", "20px")
			// 				 .html("MARS ENTRY, DESCENT AND LANDING (EDL)");

			// text = htmlBody.append("xhtml:p")
							   // .html("EDL technologies are highly interdependent and are generally validated in the context of the sequence of events associated with a particular mission. Before a human mission to the Mars surface, Mars EDL systems would probably require precursor flight tests in the atmosphere of both Earth and Mars. Advances in technology that are developed to support a human mission to the Mars surface would likely facilitate robotic missions to Venus, Titan, or the gas giants (Jupiter, Saturn, Uranus, and Neptune). The development of Mars EDL systems would also facilitate the development of EDL systems for spacecraft returning to Earth from remote destinations in the solar system on high-velocity trajectories.");
	
			var rectArea = svgCapa.append("rect")
						.attr("id", "capaDom")
						.attr("width", 700)
						.attr("height", 300)
						.attr("x", 450)
						.attr("y", 0)
						.attr("fill", "#996633")

			var rectText = svgCapa.append("text")
						.attr("id", "capaHeader")
						.attr("font-family", "sans-serif")
						.attr("font-size", "24px")
						.attr("font-weight", "bold")
						.attr("x", 525)
						.attr("y", 40)
						.text("MARS ENTRY, DESCENT AND LANDING (EDL)");

			svgCapa.append("text")
						.attr("id", "lineOne")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						// .attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 75)
						.text("EDL technologies are highly interdependent and are generally validated in the context of");						
			 
			svgCapa.append("text")
						.attr("id", "lineTwo")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 100)
						.text("the sequence of events associated with a particular mission. Before a human mission to");						
			 
			svgCapa.append("text")
						.attr("id", "lineThree")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 125)
						.text("the Mars surface, Mars EDL systems would probably require precursor flight tests in the");						
			 
			svgCapa.append("text")
						.attr("id", "lineFour")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 150)
						.text("atmosphere of both Earth and Mars. Advances in technology that are developed to");						
		

			svgCapa.append("text")
						.attr("id", "lineFive")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 175)
						.text("support a human mission to the Mars surface would likely facilitate robotic missions to");	


			svgCapa.append("text")
						.attr("id", "lineSix")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 200)
						.text("Venus, Titan, or the gas giants (Jupiter, Saturn, Uranus, and Neptune). The development of");	


			svgCapa.append("text")
						.attr("id", "lineSeven")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 225)
						.text("Mars EDL systems would also facilitate the development of EDL systems for spacecraft");	

			svgCapa.append("text")
						.attr("id", "lineEight")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 250)
						.text("returning to Earth from remote destinations in the solar system on high-velocity trajectories.");	

			var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var coodX = 10;
			var coodY = 300;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			});
			
var boxInfo = [

						{
							x: 10,
							y: 300,
							fill: "red",
							info: "Technical challenges are ranked high because the technologies needed for a Mars EDL system capable of handling very large payloads (40 to 80 MT) have yet to be identified."
						},
						{
							x: 180,
							y: 300,
							fill: "orange",
							info: "The capability gap is ranked high because the payload capacity of the necessary EDL systems are currently far beyond the capability of existing EDL systems."
						},
						{
							x: 350,
							y: 300,
							fill: "orange",
							info: "Regulatory challenges are ranked low because no regulatory changes are needed."
						},
						{
							x: 520,
							y: 300,
							fill: "green",
							info: "Cost and schedule challenges are ranked high because extraordinary resources and time would be needed to identify suitable technologies, scale them up to the requisite size, and conduct flight testing in the atmosphere of Earth and/or Mars to build confidence that they are safe enough for use on a crewed mission."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 110)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});

			groupExtra.append("text")
							  .attr("x", 20)
							  .attr("y", 100)
							  .attr("fill", "green")
							  .style("font-size", 18)
							  .style('font-family', "sans-serif")
							  .text("Primary Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 110)
						.attr("y2", 110)
						.attr("stroke", "green")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 140)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Aeroassit System");
					  // .on("mouseenter", function(){
							//          	tip.show({src: aas.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 120)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#aas)");

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 170)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Crew Command & Service Module")
					  // .on("mouseenter", function(){
							//          	tip.show({src: ccs.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 150)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ccs)");

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 220)
					  .attr("fill", "orange")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Transitional Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 230)
						.attr("y2", 230)
						.attr("stroke", "orange")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 260)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Module")
					  // .on("mouseenter", function(){
							//          	tip.show({src: lm.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 240)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lm)");

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 290)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Orbital Outpost");
	// 				  .on("mouseenter", function(){
	// 						         	tip.show({src: lop.src});
	// 		  }).on("mouseleave", tip.hide);
			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 270)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lop)");
		});
			

	$(document).on("mouseover", "#radiation", function(event){

			event.preventDefault();

			$("#capaGroup").remove();
			$("#capaGroupExtra").remove();
			$("#capaDom").remove();
			$('#capaHeader').remove();
			$("#lineOne").remove();
			$("#lineTwo").remove();
			$("#lineThree").remove();
			$("#lineFour").remove();
			$("#lineFive").remove();
			$("#lineSix").remove();
			$("#lineSeven").remove();
			$("#lineEight").remove();
			$("#lineNine").remove();


			var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

			var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");
		patternInfo.forEach(function(pattern){

				  		 groupExtra.append("defs")
							   .append("pattern")
							   .attr("id", pattern.id)
							   .attr('patternUnits', 'userSpaceOnUse')
							   .attr("width", pattern.width)
							   .attr("height", pattern.height)
							   .append("image")
							   .attr("width", 32)
							   .attr("height", 32)
							   .attr("xlink:href", pattern.link)
							   .attr('x', pattern.x)
			                   .attr('y', pattern.y);

			  		 });

			// var dom = svgCapa.append("g")
			// 		 .attr("id", "capaDom")
			//  		 .attr("width", 700)
			//  		 .attr("height",560)
			//  		 .attr("transform", "translate(440, 0)")
			// 		 .append("foreignObject")
			// 	     .attr("x", 0)
			// 	     .attr("y", 0)
			// 	     .attr("width", 700)
			// 	     .attr("height", 560);

			// htmlBody = dom.append("xhtml:body")
			// 				 .style("font-size", "19px")
			// 				 .attr("id", "capaBody")
			// 				 .attr("class", "cap-labels left");

			// header = htmlBody.append("xhtml:h3")
			// 				 .attr("id", "capaBody")
			// 				 .style("text-align", "center")
			// 				 .style("padding-top", "20px")
			// 				 .html("RADIATION PROTECTION");

			// text = htmlBody.append("xhtml:p")
							   // .html("Space radiation in the form of ionizing radiation, Social Particle Events (SPEs), and extremely high-energy Galactic Cosmic Rays (GCRs) would be a serious threat to crew health on long-duration missions beyond low Earth orbit (LEO). Overcoming this threat would require advances in all aspects of radiation safety: prediction, risk assessment modeling, total exposure monitoring, and protection. Radiation safety systems reduce or counteract the effects of radiation, and associated standards limit the total dose of a given type of radiation that people are authorized to accumulate over a given period. The overall goal of radiation safety research is to reduce radiation exposure to acceptable levels with as little impact as possible on spacecraft and habitat mass, cost, complexity, and so on.");

			var rectArea = svgCapa.append("rect")
						.attr("id", "capaDom")
						.attr("width", 700)
						.attr("height", 300)
						.attr("x", 450)
						.attr("y", 0)
						.attr("fill", "#996633")

			var rectText = svgCapa.append("text")
						.attr("id", "capaHeader")
						.attr("font-family", "sans-serif")
						.attr("font-size", "24px")
						.attr("font-weight", "bold")
						.attr("x", 650)
						.attr("y", 40)
						.text("RADIATION PROTECTION");

			svgCapa.append("text")
						.attr("id", "lineOne")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						// .attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 75)
						.text("Space radiation in the form of ionizing radiation, Social Particle Events (SPEs), and extremely");						
			 
			svgCapa.append("text")
						.attr("id", "lineTwo")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 100)
						.text("high-energy Galactic Cosmic Rays (GCRs) would be a serious threat to crew health on");						
			 
			svgCapa.append("text")
						.attr("id", "lineThree")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 125)
						.text("long-duration missions beyond low Earth orbit (LEO). Overcoming this threat would");						
			 
			svgCapa.append("text")
						.attr("id", "lineFour")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 150)
						.text("require advances in all aspects of radiation safety: prediction, risk assessment modeling,");						
		

			svgCapa.append("text")
						.attr("id", "lineFive")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 175)
						.text("total exposure monitoring, and protection. Radiation safety systems reduce or counteract");	


			svgCapa.append("text")
						.attr("id", "lineSix")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 200)
						.text("the effects of radiation, and associated standards limit the total dose of a given type of");	


			svgCapa.append("text")
						.attr("id", "lineSeven")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 225)
						.text("radiation that people are authorized to accumulate over a given period. The overall goal of");	

			svgCapa.append("text")
						.attr("id", "lineEight")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 250)
						.text("radiation safety research is to reduce radiation exposure to acceptable levels with as little");	

			svgCapa.append("text")
						.attr("id", "lineNine")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 275)
						.text("impact as possible on spacecraft and habitat mass, cost, complexity, and so on.");	

										
			var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "MEDIUM",
					color: "#FFDE00"
				}
			];

			var coodX = 10;
			var coodY = 330;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			})

var boxInfo = [

						{
							x: 10,
							y: 300,
							fill: "red",
							info: "Technical challenges are ranked high because a suitable approach for providing adequate radiation safety has yet to be identified."
						},
						{
							x: 180,
							y: 300,
							fill: "orange",
							info: "The capability gap is ranked high because the ability to provide the level of radiation safety required for a human mission to the Mars surface is so far beyond the state of the art. "
						},
						{
							x: 350,
							y: 300,
							fill: "orange",
							info: "Regulatory challenges are ranked medium because part of the solution may be to relax current radiation exposure limits (based on greater knowledge of the human health effects of the radiation environment in space and on the Mars surface and/or a reconsideration of the level of acceptable risk)."
						},
						{
							x: 520,
							y: 300,
							fill: "green",
							info: "Cost and schedule challenges are ranked medium because the time and resources necessary to develop adequate radiation safety systems are substantial."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 110)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 110)
						.attr("y2", 110)
						.attr("stroke", "green")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 140)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Pressurized Surface Mobility")
					  // .on("mouseenter", function(){
							//          	tip.show({src: psm.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 120)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#psm)");

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 170)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Crew Command & Service Module")
					  // .on("mouseenter", function(){
							//          	tip.show({src: ccs.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 150)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ccs)");

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 200)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Deep Space Habitation")
					  // .on("mouseenter", function(){
							//          	tip.show({src: dsh.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 180)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#dsh)");

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 230)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Long Duration Surface Habitat")
					  // .on("mouseenter", function(){
							//          	tip.show({src: ldsh.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 210)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ldsh)");

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 300)
					  .attr("fill", "orange")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Transitional Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 310)
						.attr("y2", 310)
						.attr("stroke", "orange")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 340)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Module")
					  // .on("mouseenter", function(){
							//          	tip.show({src: lm.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 320)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lm1)");

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 370)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Orbital Outpost")
					  // .on("mouseenter", function(){
							//          	tip.show({src: lop.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 350)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lop1)");

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 430)
					  .attr("fill", "red")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Dead-end Mission Elements");



			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 440)
						.attr("y2", 440)
						.attr("stroke", "red")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 470)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Multi-year Deep Space Habitat")
					  // .on("mouseenter", function(){
							//          	tip.show({src: myd.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 450)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#myd)");
	});

	$(document).on("mouseover", "#propulsion", function(event){

			event.preventDefault();

			$("#capaGroup").remove();
			$("#capaGroupExtra").remove();
			$("#capaDom").remove();
			$("#capaHeader").remove();
			$("#lineOne").remove();
			$("#lineTwo").remove();
			$("#lineThree").remove();
			$("#lineFour").remove();
			$("#lineFive").remove();
			$("#lineSix").remove();
			$("#lineSeven").remove();
			$("#lineEight").remove();
			$("#lineNine").remove();



			var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

			var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

			// var dom = svgCapa.append("g")
			// 		 .attr("id", "capaDom")
			//  		 .attr("width", 700)
			//  		 .attr("height",560)
			//  		 .attr("transform", "translate(440, 0)")
			// 		 .append("foreignObject")
			// 	     .attr("x", 0)
			// 	     .attr("y", 0)
			// 	     .attr("width", 700)
			// 	     .attr("height", 560);


			// htmlBody = dom.append("xhtml:body")
			// 				 .style("font-size", "20px")
			// 				 .attr("class", "cap-labels left");

			// header = htmlBody.append("xhtml:h3")
			// 				 .style("text-align", "center")
			// 				 .style("padding-top", "20px")
			// 				 .html("IN-SPACE PROPULSION AND POWER");

			// text = htmlBody.append("xhtml:p")
							// .html("Fission surface power and four types of in-space propulsion systems were assessed:");

			var rectArea = svgCapa.append("rect")
						.attr("id", "capaDom")
						.attr("width", 700)
						.attr("height", 100)
						.attr("x", 450)
						.attr("y", 0)
						.attr("fill", "#996633")

			var rectText = svgCapa.append("text")
						.attr("id", "capaHeader")
						.attr("font-family", "sans-serif")
						.attr("font-size", "24px")
						.attr("font-weight", "bold")
						.attr("x", 600)
						.attr("y", 40)
						.text("IN-SPACE PROPULSION AND POWER");

			svgCapa.append("text")
						.attr("id", "lineOne")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 75)
						.text("Fission surface power and four types of in-space propulsion systems were assessed:");						
			 




			// FISSION
			group.append("text")
				 .attr("x", "180px")
				 .attr("y", "120px")
				 .attr('font-size', '18px')
				 .attr('font-family', 'sans-serif')
				 .attr('font-weight', 'bold')
				 .text("Fission Power");

			group.append("text")
				 .attr("x", "630px")
				 .attr("y", "120px")
				 .attr('font-size', '18px')
				 .attr('font-family', 'sans-serif')
				 .attr('font-weight', 'bold')
				 .text("In Space Cyrogenic Propulsion");

			group.append("text")
				 .attr("x", "150px")
				 .attr("y", "260px")
				 .attr('font-size', '18px')
				 .attr('font-family', 'sans-serif')
				 .attr('font-weight', 'bold')
				 .text("Nuclear Electric Propulsion");

			group.append("text")
				 .attr("x", "650")
				 .attr("y", "260")
				 .attr('font-size', '18px')
				 .attr('font-family', 'sans-serif')
				 .attr('font-weight', 'bold')
				 .text("Nuclear Thermal Propulsion");

			group.append("text")
				 .attr("x", "150px")
				 .attr("y", "400px")
				 .attr('font-size', '18px')
				 .attr('font-family', 'sans-serif')
				 .attr('font-weight', 'bold')
				 .text("Solar Electric Propulsion");

			var rect1 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "COST & ",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var rect2 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST & ",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var rect3 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "COST & ",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var rect4 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "COST & ",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var rect5 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST & ",
					textTopTwo: "SCHEDULE  ",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var coodX = 0;
			var coodY = 130;
			
			rect1.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 100)
							.attr("width", 110)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("id", "fissionText")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("id", "fissionText")
					 .attr("x", coodX+10)
					 .attr("y", coodY+35)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("id", "fissionText")
					 .attr("x", coodX+10)
					 .attr("y", coodY+50)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("id", "fissionText")				
					 .attr("x", coodX+35)
					 .attr("y", coodY+80)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=120;
			});
			
			coodX+=30;

var boxInfo = [

						{
							x: 5,
							y: 130,
							fill: "red",
							info: "Technical challenges are ranked medium because of extensive experience with reactor technologies although some new technologies would be needed to provide reliable, long-term operation in space and on the surface of Mars."
						},
						{
							x: 125,
							y: 130,
							fill: "orange",
							info: "The capability gap is ranked medium because, despite past accomplishment in nuclear power technology in general and space nuclear power in particular, it has been almost 50 years since a U.S. space nuclear power program succeeded in conducting a flight test of a fission power reactor."
						},
						{
							x: 245,
							y: 130,
							fill: "orange",
							info: "Regulatory challenges are ranked medium because of the difficulty of completing the regulatory process that has been established to obtain launch approval."
						},
						{
							x: 365,
							y: 130,
							fill: "green",
							info: "Cost and schedule challenges are ranked high because of the extraordinary resources and time that would be required to develop an operational reactor system and obtain the necessary launch approvals."
						}, 
						{
							x: 170,
							y: 20,
							fill: "purple",
							info: "Fission Power (100kW): a long-term source of thermal energy. A complete space power system converts the thermal energy produced by the reactor into electricity."
						},
						{
							x: 170,
							y: 200,
							fill: "purple",
							info: "Nuclear Electric Propulsion: Electric propulsion systems are used extensively on Earth-orbiting satellites and on some robotic science missions. Electric propulsion systems accelerate ions to very high velocities. NEP systems would use about 10 percent of the fuel that a cryogenic propulsion system would use to produce an equivalent change in spacecraft velocity."
						},
						{
							x: 170,
							y: 380,
							fill: "purple",
							info: "Solar Electric Propulsion: All electric propulsion systems to date have been powered by solar energy, and that will remain the case until space nuclear power systems are developed. SEP is commonly used in orbital spacecraft."
						},
						{
							x: 680,
							y: 20,
							fill: "purple",
							info: "In Space Cyrogenic Propulsion: proposes the use of existing RL-10-B2 engines for all three of the major in-space propulsion modules (the trans-Mars injection module for the trip to Mars, the Mars orbit insertion module, and the trans-Earth injection module for the trip home. Key requirements include low-loss, long-term storage and in-space transfer of cryogenic fuels and oxidizers."
						},
						{
							x: 680,
							y: 200,
							fill: "purple",
							info: "Nuclear Thermal Propulsion: generate high thrust by using a nuclear fission reactor to heat a propellant (typically hydrogen) to very high temperatures. The propellant gases are then expanded through a nozzle to produce thrust."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 100)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});


			rect2.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 100)
							.attr("width", 110)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("id", "fissionText")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("id", "fissionText")				
					 .attr("x", coodX+10)
					 .attr("y", coodY+35)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("id", "fissionText")
					 .attr("x", coodX+10)
					 .attr("y", coodY+50)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("id", "fissionText")				
					 .attr("x", coodX+35)
					 .attr("y", coodY+80)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '9')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=120;
			});

	
			var coodX = 0;
			var coodY = 270;


			rect3.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 100)
							.attr("width", 110)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("id", "fissionText")				
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("id", "fissionText")				
					 .attr("x", coodX+10)
					 .attr("y", coodY+35)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("id", "fissionText")				
					 .attr("x", coodX+10)
					 .attr("y", coodY+50)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("id", "fissionText")				
					 .attr("x", coodX+35)
					 .attr("y", coodY+80)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '9')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=120;
			});

			coodX+=30;
var boxInfo = [

						{
							x: 5,
							y: 270,
							fill: "red",
							info: "Technical challenges are ranked high because a suitable approach for providing adequate radiation safety has yet to be identified."
						},
						{
							x: 125,
							y: 270,
							fill: "orange",
							info: "The capability gap is ranked high because the ability to provide the level of radiation safety required for a human mission to the Mars surface is so far beyond the state of the art. "
						},
						{
							x: 245,
							y: 270,
							fill: "orange",
							info: "Regulatory challenges are ranked medium because part of the solution may be to relax current radiation exposure limits (based on greater knowledge of the human health effects of the radiation environment in space and on the Mars surface and/or a reconsideration of the level of acceptable risk)."
						},
						{
							x: 365,
							y: 270,
							fill: "green",
							info: "Cost and schedule challenges are ranked medium because the time and resources necessary to develop adequate radiation safety systems are substantial."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 100)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});

			rect4.forEach(function(r){

					var rectT = group.append("rect")
								.attr("x", coodX)
								.attr("y", coodY)
								.attr("height", 100)
								.attr("width", 110)
								.attr("fill", r.color)
								.style("opacity", "0.85");

					group.append("text")
					 	 .attr("id", "fissionText")									
						 .attr("x", coodX+10)
						 .attr("y", coodY+20)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopOne);

					group.append("text")
						 .attr("id", "fissionText")				
						 .attr("x", coodX+10)
						 .attr("y", coodY+35)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopTwo);

					group.append("text")
						 .attr("id", "fissionText")									
						 .attr("x", coodX+10)
						 .attr("y", coodY+50)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopThree);

					group.append("text")
						 .attr("id", "fissionText")				
						 .attr("x", coodX+35)
						 .attr("y", coodY+80)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '9')
						 .attr("fill", 'white')
						 .text(r.textBot);

					coodX+=120;
				});
var boxInfo = [

						{
							x: 515,
							y: 130,
							fill: "red",
							info: "Technical challenges are ranked medium because, although high-performance in-space cryogenic propulsion systems are already operational, new technologies are needed for in-space fuel-handling and long-term storage."
						},
						{
							x: 635,
							y: 130,
							fill: "orange",
							info: "The capability gap is ranked medium because of the improvements needed to extend the in-space storage and operational lifetime of existing systems."
						},
						{
							x: 755,
							y: 130,
							fill: "orange",
							info: "Regulatory challenges are ranked low because no regulatory changes are needed."
						},
						{
							x: 875,
							y: 130,
							fill: "green",
							info: "Cost and schedule challenges are ranked high because of the long time that will likely be required to develop the ability to store cryogenic fuel in space for years at a time."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 100)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});
			
			var coodX = 0;
			var coodY = 410;

			rect5.forEach(function(r){

					var rectT = group.append("rect")
								.attr("x", coodX)
								.attr("y", coodY)
								.attr("height", 100)
								.attr("width", 110)
								.attr("fill", r.color)
								.style("opacity", "0.85");

					group.append("text")
						 .attr("id", "fissionText")								
						 .attr("x", coodX+10)
						 .attr("y", coodY+20)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopOne);

					group.append("text")
					 	 .attr("id", "fissionText")									
						 .attr("x", coodX+10)
						 .attr("y", coodY+35)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopTwo);

					group.append("text")
						 .attr("id", "fissionText")								
						 .attr("x", coodX+10)
						 .attr("y", coodY+50)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopThree);

					group.append("text")
						 .attr("id", "fissionText")								
						 .attr("x", coodX+35)
						 .attr("y", coodY+80)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '9')
						 .attr("fill", 'white')
						 .text(r.textBot);

					coodX+=120;
				});
var boxInfo = [

						{
							x: 5,
							y: 410,
							fill: "red",
							info: "Technical challenges are ranked low because SEP systems are well developed and have a long history of operation in space."
						},
						{
							x: 125,
							y: 410,
							fill: "orange",
							info: "The capability gap is ranked high because the power level of state-of-the-art systems is far below the power level needed for a crewed spacecraft transiting to and from Mars."
						},
						{
							x: 245,
							y: 410,
							fill: "orange",
							info: "Regulatory challenges are ranked low because no regulatory changes are needed."
						},
						{
							x: 365,
							y: 410,
							fill: "green",
							info: "Cost and schedule challenges are ranked high because extraordinary resources and time would be needed to close the capability gap."
						}, 
						{
							x: 515,
							y: 270,
							fill: "red",
							info: "Technical challenges are ranked medium because the NERVA program developed most of the technologies that would be needed by an operational NTP system."
						},
						{
							x: 635,
							y: 270,
							fill: "orange",
							info: "The capability gap is ranked medium; the NERVA program tested a full-scale system, but the state-of-the-art has degraded somewhat during the ensuing 40 years."
						},
						{
							x: 755,
							y: 270,
							fill: "orange",
							info: "Regulatory challenges are ranked high because it would be technically and politically difficult to develop test facilities for a large nuclear rocket program."
						},
						{
							x: 875,
							y: 270,
							fill: "green",
							info: "Cost and schedule challenges are ranked high because it would be extraordinary expensive and time-consuming just to repeat the NERVA work of the past, let alone proceed with development of an operational system."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 100)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});
	});

	$(document).on("mouseover", "#heavy", function(event){

			event.preventDefault();

			$("#capaGroup").remove();
			$("#capaGroupExtra").remove();
			$("#capaDom").remove();
			$("#capaHeader").remove();
			$("#lineOne").remove();
			$("#lineTwo").remove();
			$("#lineThree").remove();
			$("#lineFour").remove();
			$("#lineFive").remove();
			$("#lineSix").remove();
			$("#lineSeven").remove();
			$("#lineEight").remove();
			$("#lineNine").remove();

			var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

			var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

			patternInfo.forEach(function(pattern){

				  		 groupExtra.append("defs")
							   .append("pattern")
							   .attr("id", pattern.id)
							   .attr('patternUnits', 'userSpaceOnUse')
							   .attr("width", pattern.width)
							   .attr("height", pattern.height)
							   .append("image")
							   .attr("width", 32)
							   .attr("height", 32)
							   .attr("xlink:href", pattern.link)
							   .attr('x', pattern.x)
			                   .attr('y', pattern.y);

			  		 });

			// var dom = svgCapa.append("g")
			// 		 .attr("id", "capaDom")
			//  		 .attr("width", 700)
			//  		 .attr("height",560)
			//  		 .attr("transform", "translate(440, 0)")
			// 		 .append("foreignObject")
			// 	     .attr("x", 0)
			// 	     .attr("y", 0)
			// 	     .attr("width", 700)
			// 	     .attr("height", 560);

			// htmlBody = dom.append("xhtml:body")
			// 				 .style("font-size", "19px")
			// 				 .attr("class", "cap-labels left");

			// header = htmlBody.append("xhtml:h3")
			// 				 .style("text-align", "center")
			// 				 .style("padding-top", "20px")
			// 				 .html("HEAVY LIFT LAUNCH VEHICLE");

			// text = htmlBody.append("xhtml:p")
							   // .html("Heavy-lift launch systems (that is, launch systems with a payload capability of about 50 MT or more to LEO) reduce the number of launches required for human exploration missions beyond LEO. The large payload capacity, in terms of mass and volume, enable the launch of larger vehicle elements as single units, which reduces or eliminates the need for on orbit assembly and attendant integration and test risk on orbit. Two heavy-lift launch systems are currently under development in the United States: the NASA SLS and the SpaceX Falcon Heavy.");
			
			var rectArea = svgCapa.append("rect")
						.attr("id", "capaDom")
						.attr("width", 700)
						.attr("height", 300)
						.attr("x", 450)
						.attr("y", 0)
						.attr("fill", "#996633")

			var rectText = svgCapa.append("text")
						.attr("id", "capaHeader")
						.attr("font-family", "sans-serif")
						.attr("font-size", "24px")
						.attr("font-weight", "bold")
						.attr("x", 650)
						.attr("y", 40)
						.text("HEAVY LIFT LAUNCH VEHICLE");

			svgCapa.append("text")
						.attr("id", "lineOne")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						// .attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 75)
						.text("Heavy-lift launch systems (that is, launch systems with a payload capability of about 50 MT");						
			 
			svgCapa.append("text")
						.attr("id", "lineTwo")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 100)
						.text("or more to LEO) reduce the number of launches required for human exploration missions");						
			 
			svgCapa.append("text")
						.attr("id", "lineThree")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 125)
						.text("beyond LEO. The large payload capacity, in terms of mass and volume, enable the launch");						
			 
			svgCapa.append("text")
						.attr("id", "lineFour")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 150)
						.text("of larger vehicle elements as single units, which reduces or eliminates the need for on orbit");						
		

			svgCapa.append("text")
						.attr("id", "lineFive")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 175)
						.text("assembly and attendant integration and test risk on orbit. Two heavy-lift launch systems");	


			svgCapa.append("text")
						.attr("id", "lineSix")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 200)
						.text("are currently under development in the United States: the NASA SLS and the SpaceX");	


			svgCapa.append("text")
						.attr("id", "lineSeven")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 225)
						.text("Falcon Heavy.");	

		
			group.append("text")
				 .attr("x", "10")
				 .attr("y", "290")
				 .attr('font-size', '13')
				 .attr('font-family', 'sans-serif')
				 .text("SLS HEAVY LIFT LAUNCH VEHICLE");

			group.append("text")
				 .attr("id", "FalconHeavy")
				 .attr("x", "10")
				 .attr("y", "435")
				 .attr('font-size', '13')
				 .attr('font-family', 'sans-serif')
				 .text("FALCON HEAVY LIFT LAUNCH VEHICLE");

			var rect1 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST & ",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var rect2 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST & ",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "LOW",
					color: "#00FF00"
				}
			];

			var coodX = 10;
			var coodY = 300;


			rect1.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 100)
							.attr("width", 110)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("id", "fissionText")								
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("id", "fissionText")								
					 .attr("x", coodX+10)
					 .attr("y", coodY+35)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("id", "fissionText")								
					 .attr("x", coodX+10)
					 .attr("y", coodY+50)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("id", "fissionText")								
					 .attr("x", coodX+35)
					 .attr("y", coodY+80)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '9')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=120;
			});
			
			coodX=10;
			coodY=450

			rect2.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 100)
							.attr("width", 110)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("id", "fissionText")								
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("id", "fissionText")				
					 .attr("x", coodX+10)
					 .attr("y", coodY+35)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("id", "fissionText")				
					 .attr("x", coodX+10)
					 .attr("y", coodY+50)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("id", "fissionText")								
					 .attr("x", coodX+35)
					 .attr("y", coodY+80)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '9')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=120;
			});

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 110)
						.attr("y2", 110)
						.attr("stroke", "green")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 140)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Aeroassit System")
					  .on("mouseenter", function(){
							         	tip.show({src: aas.src});
					  }).on("mouseleave", tip.hide);


			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 120)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#aas)");

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 170)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Crew Command & Service Module")
					  // .on("mouseenter", function(){
							//          	tip.show({src: ccs.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 150)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ccs)");

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 200)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Heavy Lift Launch Vehicle")
					  // .on("mouseenter", function(){
							//          	tip.show({src: hll.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 180)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#hll)");

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 240)
					  .attr("fill", "orange")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Transitional Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 250)
						.attr("y2", 250)
						.attr("stroke", "orange")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 280)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Cyrogenic Propulsion System")
					  // .on("mouseenter", function(){
							//          	tip.show({src: cps.src});
					  // }).on("mouseleave", tip.hide);
			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 260)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#cps)");
	
			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 330)
					  .attr("fill", "red")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Dead-end Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 340)
						.attr("y2", 340)
						.attr("stroke", "red")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 370)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Large Storable Stage")
					  // .on("mouseenter", function(){
							//          	tip.show({src: lss.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 350)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lss)");
	});

	$(document).on("mouseover", "#planetary", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();
		$("#capaHeader").remove();
		$("#lineOne").remove();
		$("#lineTwo").remove();
		$("#lineThree").remove();
		$("#lineFour").remove();
		$("#lineFive").remove();
		$("#lineSix").remove();
		$("#lineSeven").remove();
		$("#lineEight").remove();
		$("#lineNine").remove();

		var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		patternInfo.forEach(function(pattern){

				  		 groupExtra.append("defs")
							   .append("pattern")
							   .attr("id", pattern.id)
							   .attr('patternUnits', 'userSpaceOnUse')
							   .attr("width", pattern.width)
							   .attr("height", pattern.height)
							   .append("image")
							   .attr("width", 32)
							   .attr("height", 32)
							   .attr("xlink:href", pattern.link)
							   .attr('x', pattern.x)
			                   .attr('y', pattern.y);

			  		 });

		// var dom = svgCapa.append("g")
		// 			 .attr("id", "capaDom")
		// 	 		 .attr("width", 700)
		// 	 		 .attr("height",560)
		// 	 		 .attr("transform", "translate(440, 0)")
		// 			 .append("foreignObject")
		// 		     .attr("x", 0)
		// 		     .attr("y", 0)
		// 		     .attr("width", 700)
		// 		     .attr("height", 560);

		
		// htmlBody = dom.append("xhtml:body")
		// 				 .style("font-size", "19px")
		// 				 .attr("class", "cap-labels left");

		// header = htmlBody.append("xhtml:h3")
		// 				 .style("text-align", "center")
		// 				 .style("padding-top", "20px")
		// 				 .html("PLANETARY ASCENT PROPULSION");

		// text = htmlBody.append("xhtml:p")
						   // .html("The required characteristics of an ascent propulsion system are absolute reliability after a long period of dormancy, high-to-medium thrust levels, and high efficiency. The Mars Design Reference Architecture (DRA) 5.0 study did not include detailed analysis of the Mars ascent vehicle. However, based on prior studies, the DRA 5.0 ascent propulsion system would be fueled by liquid methane and liquid oxygen. One mission concept would reduce launch mass on Earth and the mass of landed systems on Mars by relying on ISRU systems to produce liquid oxygen on Mars; liquid methane would be brought from Earth. NASA is not working on an ascent propulsion system that is scalable for human transportation.");

			var rectArea = svgCapa.append("rect")
						.attr("id", "capaDom")
						.attr("width", 700)
						.attr("height", 300)
						.attr("x", 450)
						.attr("y", 0)
						.attr("fill", "#996633")

			var rectText = svgCapa.append("text")
						.attr("id", "capaHeader")
						.attr("font-family", "sans-serif")
						.attr("font-size", "24px")
						.attr("font-weight", "bold")
						.attr("x", 600)
						.attr("y", 40)
						.text("PLANETARY ASCENT PROPULSION");

			svgCapa.append("text")
						.attr("id", "lineOne")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						// .attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 75)
						.text("The required characteristics of an ascent propulsion system are absolute reliability after a long");						
			 
			svgCapa.append("text")
						.attr("id", "lineTwo")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 100)
						.text("period of dormancy, high-to-medium thrust levels, and high efficiency. The Mars Design");						
			 
			svgCapa.append("text")
						.attr("id", "lineThree")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 125)
						.text("Reference Architecture (DRA) 5.0 study did not include detailed analysis of the Mars ascent");						
			 
			svgCapa.append("text")
						.attr("id", "lineFour")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 150)
						.text("vehicle. However, based on prior studies, the DRA 5.0 ascent propulsion system would be");						
		

			svgCapa.append("text")
						.attr("id", "lineFive")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 175)
						.text("fueled by liquid methane and liquid oxygen. One mission concept would reduce launch");	


			svgCapa.append("text")
						.attr("id", "lineSix")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 200)
						.text("mass on Earth and the mass of landed systems on Mars by relying on ISRU systems");	


			svgCapa.append("text")
						.attr("id", "lineSeven")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 225)
						.text("to produce liquid oxygen on Mars; liquid methane would be brought from Earth. NASA");	

			svgCapa.append("text")
						.attr("id", "lineEight")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 250)
						.text("is not working on an ascent propulsion system that is scalable for human transportation.");	


		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var coodX = 10;
			var coodY = 330;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			});

var boxInfo = [

						{
							x: 10,
							y: 300,
							fill: "red",
							info: "Technical challenges are ranked medium because of past experience with lunar ascent engines and existing in-space propulsion systems provide a solid foundation for developing the technologies needed for Mars. In addition, new technologies are needed for long-term storage of cryogenic fuels."
						},
						{
							x: 180,
							y: 300,
							fill: "orange",
							info: "The capability gap is ranked medium because of the improvements needed to advance available technologies enough to provide the power needed ascent from Mars."
						},
						{
							x: 350,
							y: 300,
							fill: "orange",
							info: "Regulatory challenges are ranked low because no regulatory changes are needed."
						},
						{
							x: 520,
							y: 300,
							fill: "green",
							info: " Cost and schedule challenges are ranked high because of the long time that will likely be required to develop the ability to store cryogenic fuel in-space for years at a time."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 110)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 110)
						.attr("y2", 110)
						.attr("stroke", "green")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 140)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Mars Ascent Vehicle")
					  // .on("mouseenter", function(){
							//          	tip.show({src: mav.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 120)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#mav)");
			
			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 180)
					  .attr("fill", "orange")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Transitional Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 190)
						.attr("y2", 190)
						.attr("stroke", "orange")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 220)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Module")
					  // .on("mouseenter", function(){
							//          	tip.show({src: lm.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 200)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lm2)");
			
	});
	
	$(document).on("mouseover", "#eclss", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();
		$("#capaHeader").remove();
		$("#lineOne").remove();
		$("#lineTwo").remove();
		$("#lineThree").remove();
		$("#lineFour").remove();
		$("#lineFive").remove();
		$("#lineSix").remove();
		$("#lineSeven").remove();
		$("#lineEight").remove();
		$("#lineNine").remove();


		var group = svgCapa.append("g")
				.attr("id", "capaGroup")
		 		.attr("width", 700)
		 		.attr("height",560)
		 		.attr("transform", "translate(440, 0)");

		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

	patternInfo.forEach(function(pattern){

				  		 groupExtra.append("defs")
							   .append("pattern")
							   .attr("id", pattern.id)
							   .attr('patternUnits', 'userSpaceOnUse')
							   .attr("width", pattern.width)
							   .attr("height", pattern.height)
							   .append("image")
							   .attr("width", 32)
							   .attr("height", 32)
							   .attr("xlink:href", pattern.link)
							   .attr('x', pattern.x)
			                   .attr('y', pattern.y);

			  		 });

		// var dom = svgCapa.append("g")
		// 		 .attr("id", "capaDom")
		//  		 .attr("width", 700)
		//  		 .attr("height",560)
		//  		 .attr("transform", "translate(440, 0)")
		// 		 .append("foreignObject")
		// 	     .attr("x", 0)
		// 	     .attr("y", 0)
		// 	     .attr("width", 700)
		// 	     .attr("height", 560);

		// htmlBody = dom.append("xhtml:body")
		// 				 .style("font-size", "19px")
		// 				 .attr("class", "cap-labels left");

		// header = htmlBody.append("xhtml:h3")
		// 				 .style("text-align", "center")
		// 				 .style("padding-top", "20px")
		// 				 .html("ENVIRONMENTAL CONTROL AND LIFE SUPPORT SYSTEM");

		// text = htmlBody.append("xhtml:p")
						   // .html("The ECLSS maintains a safe atmosphere by monitoring and controlling partial pressures of nitrogen, oxygen, carbon dioxide, methane, hydrogen, and water vapor; maintaining total cabin pressure; filtering out particles and microorganisms; and distributing air. The ECLSS also provides potable water and performs habitation functions, such as food preparation and production, hygiene, collection and stabilization of metabolic waste, laundry services, and trash recycling. ECLSS waste management subsystems safeguard crew health, recover resources, and protect planetary surfaces.");

			var rectArea = svgCapa.append("rect")
						.attr("id", "capaDom")
						.attr("width", 700)
						.attr("height", 300)
						.attr("x", 450)
						.attr("y", 0)
						.attr("fill", "#996633")

			var rectText = svgCapa.append("text")
						.attr("id", "capaHeader")
						.attr("font-family", "sans-serif")
						.attr("font-size", "24px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 40)
						.text("ENVIRONMENTAL CONTROL AND LIFE SUPPORT SYSTEM");

			svgCapa.append("text")
						.attr("id", "lineOne")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						// .attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 75)
						.text("The ECLSS maintains a safe atmosphere by monitoring and controlling partial pressures of");						
			 
			svgCapa.append("text")
						.attr("id", "lineTwo")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 100)
						.text("nitrogen, oxygen, carbon dioxide, methane, hydrogen, and water vapor; maintaining total");						
			 
			svgCapa.append("text")
						.attr("id", "lineThree")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 125)
						.text("cabin pressure; filtering out particles and microorganisms; and distributing air. The ECLSS");						
			 
			svgCapa.append("text")
						.attr("id", "lineFour")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 150)
						.text("also provides potable water and performs habitation functions, such as food preparation and");						
		

			svgCapa.append("text")
						.attr("id", "lineFive")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 175)
						.text("production, hygiene, collection and stabilization of metabolic waste, laundry services, and");	


			svgCapa.append("text")
						.attr("id", "lineSix")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 200)
						.text("trash recycling. ECLSS waste management subsystems safeguard crew health, recover");	


			svgCapa.append("text")
						.attr("id", "lineSeven")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 225)
						.text("resources, and protect planetary surfaces.");	

	
		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var coodX = 10;
			var coodY = 300;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
		});

var boxInfo = [

						{
							x: 10,
							y: 300,
							fill: "red",
							info: "Technical challenges are ranked medium because ECLSS technologies and systems are already operational."
						},
						{
							x: 180,
							y: 300,
							fill: "orange",
							info: " The capability gap is ranked high because of the substantial improvements that are needed to extend the lifetime and increase the reliability of existing technologies and systems."
						},
						{
							x: 350,
							y: 300,
							fill: "orange",
							info: "Regulatory challenges are ranked low because no regulatory changes are needed."
						},
						{
							x: 520,
							y: 300,
							fill: "green",
							info: "Cost and schedule challenges are ranked high because extraordinary resources and time would be needed develop and validate the performance of closed-loop ECLSS systems that will operate reliably over long time periods in space and on the surface of Mars."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 110)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});

		groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 110)
					.attr("y2", 110)
					.attr("stroke", "green")
					.attr('stroke-width', '5px');



		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 140)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Pressurized Surface Mobility")
				  .on("mouseenter", function(){
							         	tip.show({src: psm.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 120)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#psm)");


		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 170)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Crew Command & Service Module")
				  // .on("mouseenter", function(){
							         	// tip.show({src: ccs.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 150)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ccs)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 200)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Deep Space Habitation")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: dsh.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 180)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#dsh)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 230)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Long Duration Surface Habitat")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: ldsh.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 210)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ldsh)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 260)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Advanced EVA")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: av.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 240)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#av)");





		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 300)
				  .attr("fill", "orange")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Transitional Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 280)
					.attr("y1", 310)
					.attr("y2", 310)
					.attr("stroke", "orange")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 340)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Orbital Outpost")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: lop.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 320)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lop3)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 370)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Module")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: lm.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 350)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lm3)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 410)
				  .attr("fill", "red")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Dead-end Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 420)
					.attr("y2", 420)
					.attr("stroke", "red")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 450)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Multi-year Deep Space Habitat")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: myd.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 430)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#myd)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 480)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Space Exploration Vehicle")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: sev.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 460)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#sev)");

	});

	$(document).on("mouseover", "#habitats", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();
		$("#capaHeader").remove();
		$("#lineOne").remove();
		$("#lineTwo").remove();
		$("#lineThree").remove();
		$("#lineFour").remove();
		$("#lineFive").remove();
		$("#lineSix").remove();
		$("#lineSeven").remove();
		$("#lineEight").remove();
		$("#lineNine").remove();

		var group = svgCapa.append("g")
				.attr("id", "capaGroup")
		 		.attr("width", 700)
		 		.attr("height",560)
		 		.attr("transform", "translate(440, 0)");

		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		patternInfo.forEach(function(pattern){

				  		 groupExtra.append("defs")
							   .append("pattern")
							   .attr("id", pattern.id)
							   .attr('patternUnits', 'userSpaceOnUse')
							   .attr("width", pattern.width)
							   .attr("height", pattern.height)
							   .append("image")
							   .attr("width", 32)
							   .attr("height", 32)
							   .attr("xlink:href", pattern.link)
							   .attr('x', pattern.x)
			                   .attr('y', pattern.y);

			  		 });

		// var dom = svgCapa.append("g")
		// 		 .attr("id", "capaDom")
		//  		 .attr("width", 700)
		//  		 .attr("height",560)
		//  		 .attr("transform", "translate(440, 0)")
		// 		 .append("foreignObject")
		// 	     .attr("x", 0)
		// 	     .attr("y", 0)
		// 	     .attr("width", 700)
		// 	     .attr("height", 560);
	    
		// htmlBody = dom.append("xhtml:body")
		// 				 .style("font-size", "19px")
		// 				 .attr("class", "cap-labels left");

		// header = htmlBody.append("xhtml:h3")
		// 				 .style("text-align", "center")
		// 				 .style("padding-top", "20px")
		// 				 .html("HABITATS");

		// text = htmlBody.append("xhtml:p")
						   // .html("All human missions to space require a pressurized and safe environment in which crews can live and work productively. Habitats of interest include short-term in-space habitats, such as the Orion Multipurpose Crew Vehicle; long-term in-space habitats, such as the ISS and the transit habitats for long-duration missions; and surface habitats for missions to the surface of the Moon or Mars. All types of habitats for space exploration have some common requirements and other distinct requirements, based on the environments in which they operate, mission duration, the number of crew, and mission goals.");


			var rectArea = svgCapa.append("rect")
						.attr("id", "capaDom")
						.attr("width", 700)
						.attr("height", 300)
						.attr("x", 450)
						.attr("y", 0)
						.attr("fill", "#996633")

			var rectText = svgCapa.append("text")
						.attr("id", "capaHeader")
						.attr("font-family", "sans-serif")
						.attr("font-size", "24px")
						.attr("font-weight", "bold")
						.attr("x", 700)
						.attr("y", 40)
						.text("HABITATS");

			svgCapa.append("text")
						.attr("id", "lineOne")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						// .attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 75)
						.text("All human missions to space require a pressurized and safe environment in which crews can");						
			 
			svgCapa.append("text")
						.attr("id", "lineTwo")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 100)
						.text("live and work productively. Habitats of interest include short-term in-space habitats,");						
			 
			svgCapa.append("text")
						.attr("id", "lineThree")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 125)
						.text("such as the Orion Multipurpose Crew Vehicle; long-term in-space habitats, such as the");						
			 
			svgCapa.append("text")
						.attr("id", "lineFour")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 150)
						.text("ISS and the transit habitats for long-duration missions; and surface habitats for");						
		

			svgCapa.append("text")
						.attr("id", "lineFive")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 175)
						.text("missions to the surface of the Moon or Mars. All types of habitats for space exploration");	


			svgCapa.append("text")
						.attr("id", "lineSix")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 200)
						.text("have some common requirements and other distinct requirements, based on the");	


			svgCapa.append("text")
						.attr("id", "lineSeven")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 225)
						.text("environments in which they operate, mission duration, number of crew, and mission goals.");	


		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "MEDIUM",
					color: "#FFDE00"
				}
			];

			var coodX = 10;
			var coodY = 350;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			});

var boxInfo = [

						{
							x: 10,
							y: 300,
							fill: "red",
							info: "Technical challenges are ranked medium because NASA has extensive experience in designing and building habitats in LEO, culminating with the ISS."
						},
						{
							x: 180,
							y: 300,
							fill: "orange",
							info: "The capability gap is ranked medium because substantial improvements are needed to extend the lifetime and increase the reliability of existing technologies and systems and to assure that habitat systems work as expected in the partial gravity of the Moon and/or Mars."
						},
						{
							x: 350,
							y: 300,
							fill: "orange",
							info: "Regulatory challenges are ranked low because no regulatory changes are needed."
						},
						{
							x: 520,
							y: 300,
							fill: "green",
							info: "Cost and schedule challenges are ranked medium because substantial resources and time would be needed to upgrade and validate the performance of habitat systems that will operate reliably over long time periods in space and on the surface of Mars."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 110)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 110)
						.attr("y2", 110)
						.attr("stroke", "green")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 140)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Pressurized Surface Mobility")
					  // .on("mouseenter", function(){
							// 	         	tip.show({src: psm.src});
						 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 120)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#psm)");			

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 170)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Crew Command & Service Module")
					  // .on("mouseenter", function(){
							// 	         	tip.show({src: ccs.src});
						 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 150)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ccs)");					  

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 200)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Deep Space Habitation")
					  // .on("mouseenter", function(){
							// 	         	tip.show({src: dsh.src});
						 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 180)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#dsh)");


			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 230)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Long Duration Surface Habitat")
					  // .on("mouseenter", function(){
							// 	         	tip.show({src: ldsh.src});
						 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 210)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ldsh)");

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 260)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Tele-robotic Rovers")
					  // .on("mouseenter", function(){
							// 	         	tip.show({src: trr.src});
						 //  }).on("mouseleave", tip.hide);
					  
			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 240)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#trr)");

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 300)
					  .attr("fill", "orange")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Transitional Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 280)
						.attr("y1", 310)
						.attr("y2", 310)
						.attr("stroke", "orange")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 340)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Orbital Outpost")
					  // .on("mouseenter", function(){
							// 	         	tip.show({src: lop.src});
						 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 320)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lop3)");

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 370)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Module")
					  // .on("mouseenter", function(){
							// 	         	tip.show({src: lm.src});
						 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 350)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lm3)");

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 410)
					  .attr("fill", "red")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Dead-end Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 420)
						.attr("y2", 420)
						.attr("stroke", "red")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 450)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Multi-year Deep Space Habitat")
					  // .on("mouseenter", function(){
							// 	         	tip.show({src: myd.src});
						 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 430)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#myd)");

			groupExtra.append("text")
					  .attr("x", 50)
					  .attr("y", 480)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Space Exploration Vehicle")
					  // .on("mouseenter", function(){
							// 	         	tip.show({src: sev.src});
						 //  }).on("mouseleave", tip.hide);


			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 460)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#sev)");
		
	});
	
	$(document).on("mouseover", "#eva-suits", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();
		$("#capaHeader").remove();
		$("#lineOne").remove();
		$("#lineTwo").remove();
		$("#lineThree").remove();
		$("#lineFour").remove();
		$("#lineFive").remove();
		$("#lineSix").remove();
		$("#lineSeven").remove();
		$("#lineEight").remove();
		$("#lineNine").remove();

		var group = svgCapa.append("g")
				.attr("id", "capaGroup")
		 		.attr("width", 700)
		 		.attr("height",560)
		 		.attr("transform", "translate(440, 0)");

		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		patternInfo.forEach(function(pattern){

				  		 groupExtra.append("defs")
							   .append("pattern")
							   .attr("id", pattern.id)
							   .attr('patternUnits', 'userSpaceOnUse')
							   .attr("width", pattern.width)
							   .attr("height", pattern.height)
							   .append("image")
							   .attr("width", 32)
							   .attr("height", 32)
							   .attr("xlink:href", pattern.link)
							   .attr('x', pattern.x)
			                   .attr('y', pattern.y);

			  		 });

		// var dom = svgCapa.append("g")
		// 		 .attr("id", "capaDom")
		//  		 .attr("width", 700)
		//  		 .attr("height",560)
		//  		 .attr("transform", "translate(440, 0)")
		// 		 .append("foreignObject")
		// 	     .attr("x", 0)
		// 	     .attr("y", 0)
		// 	     .attr("width", 700)
		// 	     .attr("height", 560);

		// htmlBody = dom.append("xhtml:body")
		// 				 .style("font-size", "19px")
		// 				 .attr("class", "cap-labels left");

		// header = htmlBody.append("xhtml:h3")
		// 				 .style("text-align", "center")
		// 				 .style("padding-top", "20px")
		// 				 .html("EXTRAVEHICULAR ACTIVITY (EVA) SUITS");

		// text = htmlBody.append("xhtml:p")
						   // .html("EVA suits can be viewed as individualized spacecraft. Key performance characteristics of EVA suits include mobility, pressurization, environmental protection (protection from heat, radiation, and micrometeoroids), portable life support (oxygen supply and carbon dioxide removal), ease of donning and doffing the suit, emergency capabilities, range of sizing, operational reliability, durability, sensory capabilities, data management, adaptability, level of articulation, and the forces and torques that an astronaut must apply to conduct assigned tasks. EVA suits are needed in microgravity (during in-space operations) and partial gravity (on the surface of the Moon or Mars).");

			var rectArea = svgCapa.append("rect")
						.attr("id", "capaDom")
						.attr("width", 700)
						.attr("height", 300)
						.attr("x", 450)
						.attr("y", 0)
						.attr("fill", "#996633")

			var rectText = svgCapa.append("text")
						.attr("id", "capaHeader")
						.attr("font-family", "sans-serif")
						.attr("font-size", "24px")
						.attr("font-weight", "bold")
						.attr("x", 550)
						.attr("y", 40)
						.text("EXTRAVEHICULAR ACTIVITY (EVA) SUITS");

			svgCapa.append("text")
						.attr("id", "lineOne")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						// .attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 75)
						.text("EVA suits can be viewed as individualized spacecraft. Key performance characteristics of");						
			 
			svgCapa.append("text")
						.attr("id", "lineTwo")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 100)
						.text("EVA suits include mobility, pressurization, environmental protection (protection from");						
			 
			svgCapa.append("text")
						.attr("id", "lineThree")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 125)
						.text("heat, radiation, and micrometeoroids), portable life support (oxygen supply and carbon");						
			 
			svgCapa.append("text")
						.attr("id", "lineFour")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 150)
						.text("dioxide removal), ease of donning and doffing the suit, emergency capabilities,");						
		

			svgCapa.append("text")
						.attr("id", "lineFive")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 175)
						.text("range of sizing, operational reliability, durability, sensory capabilities, data");	


			svgCapa.append("text")
						.attr("id", "lineSix")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 200)
						.text("management, adaptability, level of articulation, and the forces and torques that an astronaut");	


			svgCapa.append("text")
						.attr("id", "lineSeven")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 225)
						.text("must apply to conduct assigned tasks. EVA suits are needed in microgravity (during in-space");	
		
			svgCapa.append("text")
						.attr("id", "lineEight")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 250)
						.text("operations) and partial gravity (on the surface of the Moon or Mars).");	

		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "MEDIUM",
					color: "#FFDE00"
				}
			];

			var coodX = 10;
			var coodY = 280;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+80)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			});

var boxInfo = [

						{
							x: 10,
							y: 300,
							fill: "red",
							info: "Technical challenges are ranked low because substantial research and experience with EVA suits in space and, to a lesser extent, on the surface of the Moon."
						},
						{
							x: 180,
							y: 300,
							fill: "orange",
							info: "The capability gap is ranked medium because of the advances needed to accommodate the long duration of a human mission to the Mars surface during transit and on the surface."
						},
						{
							x: 350,
							y: 300,
							fill: "orange",
							info: "Regulatory challenges are ranked low because no regulatory changes are needed."
						},
						{
							x: 520,
							y: 300,
							fill: "green",
							info: "Cost and schedule challenges are ranked medium because substantial resources and time would be needed to close the capability gap."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 110)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});

		groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 110)
					.attr("y2", 110)
					.attr("stroke", "green")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 140)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Pressurized Surface Mobility")
				  .on("mouseenter", function(){
							         	tip.show({src: psm.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 120)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#psm)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 170)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Crew Command & Service Module")
				  .on("mouseenter", function(){
							         	tip.show({src: ccs.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 150)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ccs)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 200)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Deep Space Habitation")
				  .on("mouseenter", function(){
							         	tip.show({src: dsh.src});
					  }).on("mouseleave", tip.hide);	

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 180)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#dsh)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 230)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Long Duration Surface Habitat")
				  // .on("mouseenter", function(){
							         	// tip.show({src: ldsh.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 210)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ldsh)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 260)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Advanced EVA")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: av.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 240)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#av)");


		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 300)
				  .attr("fill", "orange")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Transitional Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 280)
					.attr("y1", 310)
					.attr("y2", 310)
					.attr("stroke", "orange")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 340)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Orbital Outpost")
				  // .on("mouseenter", function(){
							         	// tip.show({src: lop.src});
					  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 320)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lop3)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 370)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Module")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: lm.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 350)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lm3)");

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 410)
				  .attr("fill", "red")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Dead-end Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 420)
					.attr("y2", 420)
					.attr("stroke", "red")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 450)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Multi-year Deep Space Habitat")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: myd.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 430)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#myd)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 480)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Space Exploration Vehicle")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: sev.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 460)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#sev)");
	});

	$(document).on("mouseover", "#crew", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();
		$("#capaHeader").remove();
		$("#lineOne").remove();
		$("#lineTwo").remove();
		$("#lineThree").remove();
		$("#lineFour").remove();
		$("#lineFive").remove();
		$("#lineSix").remove();
		$("#lineSeven").remove();
		$("#lineEight").remove();
		$("#lineNine").remove();

		var group = svgCapa.append("g")
				.attr("id", "capaGroup")
		 		.attr("width", 700)
		 		.attr("height",560)
		 		.attr("transform", "translate(440, 0)");


		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		patternInfo.forEach(function(pattern){

				  		 groupExtra.append("defs")
							   .append("pattern")
							   .attr("id", pattern.id)
							   .attr('patternUnits', 'userSpaceOnUse')
							   .attr("width", pattern.width)
							   .attr("height", pattern.height)
							   .append("image")
							   .attr("width", 32)
							   .attr("height", 32)
							   .attr("xlink:href", pattern.link)
							   .attr('x', pattern.x)
			                   .attr('y', pattern.y);

			  		 });

		// var dom = svgCapa.append("g")
		// 		 .attr("id", "capaDom")
		//  		 .attr("width", 700)
		//  		 .attr("height",560)
		//  		 .attr("transform", "translate(440, 0)")
		// 		 .append("foreignObject")
		// 	     .attr("x", 0)
		// 	     .attr("y", 0)
		// 	     .attr("width", 700)
		// 	     .attr("height", 560);

		// htmlBody = dom.append("xhtml:body")
		// 				 .style("font-size", "19px")
		// 				 .attr("class", "cap-labels left");

		// header = htmlBody.append("xhtml:h3")
		// 				 .style("text-align", "center")
		// 				 .style("padding-top", "20px")
		// 				 .html("CREW HEALTH");

		// text = htmlBody.append("xhtml:p")
						   // .html("The ability to maintain crew health during long-duration exposure to the space environment is critical for the success of human missions to Mars and other distant destinations. Both physiological and psychosocial issues present medical threats to crew well-being during extended missions. NASA and the international community have a basic understanding of physiological problems associated with long exposure to microgravity, and they have been executing a methodical plan to reduce the effects of identified issues (most notably, bone loss, muscular and cardiovascular deconditioning, and neurosensory decrements) and to screen for as-yet-unidentified problems that may exist.");

			var rectArea = svgCapa.append("rect")
						.attr("id", "capaDom")
						.attr("width", 700)
						.attr("height", 300)
						.attr("x", 450)
						.attr("y", 0)
						.attr("fill", "#996633")

			var rectText = svgCapa.append("text")
						.attr("id", "capaHeader")
						.attr("font-family", "sans-serif")
						.attr("font-size", "24px")
						.attr("font-weight", "bold")
						.attr("x", 550)
						.attr("y", 40)
						.text("CREW HEALTH");

			svgCapa.append("text")
						.attr("id", "lineOne")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						// .attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 75)
						.text("The ability to maintain crew health during long-duration exposure to the space environment");						
			 
			svgCapa.append("text")
						.attr("id", "lineTwo")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 100)
						.text("is critical for the success of human missions to Mars and other distant destinations. Both");						
			 
			svgCapa.append("text")
						.attr("id", "lineThree")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 125)
						.text("physiological and psychosocial issues present medical threats to crew well-being during");						
			 
			svgCapa.append("text")
						.attr("id", "lineFour")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 150)
						.text("extended missions. NASA and the international community have a basic understanding");						
		

			svgCapa.append("text")
						.attr("id", "lineFive")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 175)
						.text("of physiological problems associated with long exposure to microgravity, and they have");	


			svgCapa.append("text")
						.attr("id", "lineSix")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 200)
						.text("been executing a methodical plan to reduce the effects of identified issues (most notably,");	


			svgCapa.append("text")
						.attr("id", "lineSeven")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 225)
						.text("bone loss, muscular and cardiovascular deconditioning, and neurosensory decrements)");	
		
			svgCapa.append("text")
						.attr("id", "lineEight")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 250)
						.text("and to screen for as-yet-unidentified problems that may exist.");	

	
		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "MEDIUM",
					color: "#FFDE00"
				}
			];

			var coodX = 10;
			var coodY = 330;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			});

var boxInfo = [

						{
							x: 10,
							y: 300,
							fill: "red",
							info: "Technical challenges are ranked medium because final solutions to many physiological and psychosocial threats to crew health have yet to be identified."
						},
						{
							x: 180,
							y: 300,
							fill: "orange",
							info: "The capability gap is ranked medium because solutions to some issues are rather well defined, but others still require substantial research."
						},
						{
							x: 350,
							y: 300,
							fill: "orange",
							info: "Regulatory challenges are ranked medium because new standards may be needed as research into physiological and psychosocial issues continues, particularly given the results of a recent report on ethical issues associated with HSF.81"
						},
						{
							x: 520,
							y: 300,
							fill: "green",
							info: "Cost and schedule challenges are ranked medium because substantial resources and time would be needed to overcome the technical and regulatory challenges and to close the capability gap."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 110)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});

		groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 110)
					.attr("y2", 110)
					.attr("stroke", "green")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 140)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Pressurized Surface Mobility")
				  .on("mouseenter", function(){
							         	tip.show({src: psm.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 120)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#psm)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 170)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Crew Command & Service Module")
				  .on("mouseenter", function(){
							         	tip.show({src: ccs.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 150)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ccs)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 200)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Deep Space Habitation")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: dsh.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 180)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#dsh)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 230)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Long Duration Surface Habitat")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: ldsh.src});
					 //  }).on("mouseleave", tip.hide);	

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 210)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#ldsh)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 260)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Advanced EVA")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: av.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 240)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#av)");


		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 300)
				  .attr("fill", "orange")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Transitional Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 280)
					.attr("y1", 310)
					.attr("y2", 310)
					.attr("stroke", "orange")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 340)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Orbital Outpost")
				  // .on("mouseenter", function(){
						// 	         	tip.show({src: lop.src});
					 //  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 320)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lop3)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 370)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Module")
				  .on("mouseenter", function(){
							         	tip.show({src: lm.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 350)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#lm3)");

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 410)
				  .attr("fill", "red")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Dead-end Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 420)
					.attr("y2", 420)
					.attr("stroke", "red")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 450)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Multi-year Deep Space Habitat")
				  .on("mouseenter", function(){
							         	tip.show({src: myd.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 430)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#myd)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 480)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Space Exploration Vehicle")
				  .on("mouseenter", function(){
							         	tip.show({src: sev.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 460)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#sev)");
	});
	
	$(document).on("mouseover", "#isru", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();
		$("#capaHeader").remove();
		$("#lineOne").remove();
		$("#lineTwo").remove();
		$("#lineThree").remove();
		$("#lineFour").remove();
		$("#lineFive").remove();
		$("#lineSix").remove();
		$("#lineSeven").remove();
		$("#lineEight").remove();
		$("#lineNine").remove();

		var group = svgCapa.append("g")
				.attr("id", "capaGroup")
		 		.attr("width", 700)
		 		.attr("height",560)
		 		.attr("transform", "translate(440, 0)");

		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		patternInfo.forEach(function(pattern){

				  		 groupExtra.append("defs")
							   .append("pattern")
							   .attr("id", pattern.id)
							   .attr('patternUnits', 'userSpaceOnUse')
							   .attr("width", pattern.width)
							   .attr("height", pattern.height)
							   .append("image")
							   .attr("width", 32)
							   .attr("height", 32)
							   .attr("xlink:href", pattern.link)
							   .attr('x', pattern.x)
			                   .attr('y', pattern.y);

			  		 });

		// var dom = svgCapa.append("g")
		// 		 .attr("id", "capaDom")
		//  		 .attr("width", 700)
		//  		 .attr("height",560)
		//  		 .attr("transform", "translate(440, 0)")
		// 		 .append("foreignObject")
		// 	     .attr("x", 0)
		// 	     .attr("y", 0)
		// 	     .attr("width", 700)
		// 	     .attr("height", 560);

		// htmlBody = dom.append("xhtml:body")
		// 				 .style("font-size", "19px")
		// 				 .attr("class", "cap-labels left");

		// header = htmlBody.append("xhtml:h3")
		// 				 .style("text-align", "center")
		// 				 .style("padding-top", "20px")
		// 				 .html("IN SITU RESOURCE UTILIZATION (MARS ATMOSPHERE)");

		// text = htmlBody.append("xhtml:p")
						   // .html("ISRU refers to the use of natural resources found on the Moon, Mars, or an asteroid to support space science or exploration missions. Resources of interest include water, volatile substances implanted by solar wind in surface rocks, metals, minerals, and the atmosphere (for missions to Mars). ISRU systems can potentially transform there resources into materials needed for life support, propellant, manufacturing, and construction. Without an ISRU capability, a human mission to the Mars surface would need to carry all the propellant, air, food, water, radiation shielding, and so on from Earth.");

			var rectArea = svgCapa.append("rect")
						.attr("id", "capaDom")
						.attr("width", 700)
						.attr("height", 300)
						.attr("x", 450)
						.attr("y", 0)
						.attr("fill", "#996633")

			var rectText = svgCapa.append("text")
						.attr("id", "capaHeader")
						.attr("font-family", "sans-serif")
						.attr("font-size", "24px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 40)
						.text("IN SITU RESOURCE UTILIZATION (MARS ATMOSPHERE)");

			svgCapa.append("text")
						.attr("id", "lineOne")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						// .attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 75)
						.text("ISRU refers to the use of natural resources found on the Moon, Mars, or an asteroid to");						
			 
			svgCapa.append("text")
						.attr("id", "lineTwo")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 100)
						.text("support space science or exploration missions. Resources of interest include water,");						
			 
			svgCapa.append("text")
						.attr("id", "lineThree")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 125)
						.text("volatile substances implanted by solar wind in surface rocks, metals, minerals, and the");						
			 
			svgCapa.append("text")
						.attr("id", "lineFour")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 150)
						.text("atmosphere (for missions to Mars). ISRU systems can potentially transform there resources");						
		

			svgCapa.append("text")
						.attr("id", "lineFive")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 175)
						.text("into materials needed for life support, propellant, manufacturing, and construction.");	


			svgCapa.append("text")
						.attr("id", "lineSix")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 200)
						.text("Without an ISRU capability, a human mission to the Mars surface would need to carry all");	


			svgCapa.append("text")
						.attr("id", "lineSeven")
						.attr("font-family", "sans-serif")
						.attr("font-size", "16px")
						.attr("font-weight", "bold")
						.attr("x", 450)
						.attr("y", 225)
						.text("the propellant, air, food, water, radiation shielding, and so on from Earth.");	
		

		
		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "MEDIUM",
					color: "#FFDE00"
				}
			];

			var coodX = 10;
			var coodY = 330;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
		});

var boxInfo = [

						{
							x: 10,
							y: 300,
							fill: "red",
							info: "Technical challenges are ranked low because technologies to achieve the ISRU capabilities described above have been demonstrated on Earth."
						},
						{
							x: 180,
							y: 300,
							fill: "orange",
							info: "The capability gap is ranked high because there is a large gap between the capabilities of the small-scale experiments completed to date and the development of a full-scale operational system capable of reliable operation during long-term exposure to the partial gravity, dust, atmosphere, and radiation environment found on the surface of Mars."
						},
						{
							x: 350,
							y: 300,
							fill: "orange",
							info: "Regulatory challenges are ranked low because no regulatory changes are needed."
						},
						{
							x: 520,
							y: 300,
							fill: "green",
							info: "Cost and schedule challenges are ranked medium because substantial resources and time would be needed to close the capability gap."
						}
					];

					boxInfo.forEach(function(info){

						group.append("rect")
									.attr("width", 100)
								    .attr("height", 110)
									.attr("x", info.x)
									.attr("y", info.y)
									.attr('fill', info.fill)
									.attr("fill-opacity", 0)
									.on("mouseenter", function(){
					         				tipInfo.show(info);
					         		})
					         		.on("mouseleave", tipInfo.hide);
					});

		groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 110)
					.attr("y2", 110)
					.attr("stroke", "green")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 140)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Mars Ascent Vehicle")
				  // .on("mouseenter", function(){
						// 	        tip.show({src: mav.src});
				  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 120)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#mav)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 170)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Tele-robotic Rovers")
				  // .on("mouseenter", function(){
						// 	        tip.show({src: trr.src});
				  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 150)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#trr1)");

		groupExtra.append("text")
				  .attr("x", 50)
				  .attr("y", 200)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Surface Nuclear Power")
				  // .on("mouseenter", function(){
						// 	        tip.show({src: snp.src});
				  // }).on("mouseleave", tip.hide);

			groupExtra.append("rect")
					  .attr("x", 13)
					  .attr("y", 180)
					  .attr("height", 30)
					  .attr("width", 30)
					  .attr("fill", "url(#snp)");

	});
});