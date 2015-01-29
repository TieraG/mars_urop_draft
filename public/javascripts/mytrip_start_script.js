$(document).ready(function(){
	loadMyTrip();
	loadNav("mytrip");


	// var tip = d3.tip()
	//  			 .attr("class", "d3_tip")
	//  			 .offset([0, -20])
	//  			 .direction("w")
	//  			 .html(function(d){
	//  			 	return "<img width='50' height='50' src=" + d.src + ">";
	//  			 });

	// 			  		 var tipInfo = d3.tip()
	// 		  		 			 .attr("class", "d3tip")
	// 		  		 			 .offset([0, 0])
	// 		  		 			 .direction("w")
	// 		  		 			 .html(function(d){
	// 		  		 			 	return "<p>" + d.info + "<p>";
	// 		  		 			 });
	// svgTrip.call(tip);
	// svgTrip.call(tipInfo);

	// var patternInfo = [
	// 		  		 						{
	// 		  		 							id: "aas", 
	// 		  		 							width: 300, 
	// 		  		 							height: 300, 
	// 		  		 							link: "/images/AAS.png", 
	// 		  		 							x: 5, 
	// 		  		 							y: 120
	// 		  		 						}, 

	// 		  		 						{
	// 		  		 							id: "ccs", 
	// 		  		 							width: 400, 
	// 		  		 							height: 400, 
	// 		  		 							link: "/images/CCS.png", 
	// 		  		 							x: 5, 
	// 		  		 							y: 150
	// 		  		 						}, 

	// 		  		 						{
	// 		  		 							id: "lm", 
	// 		  		 							width: 600, 
	// 		  		 							height: 600, 
	// 		  		 							link: "/images/LM.png", 
	// 		  		 							x: 5, 
	// 		  		 							y: 240
	// 		  		 						}, 

	// 		  		 						{
	// 		  		 							id: "snp", 
	// 		  		 							width: 400, 
	// 		  		 							height: 400, 
	// 		  		 							link: "/images/SNP.png", 
	// 		  		 							x: 12, 
	// 		  		 							y: 180
	// 		  		 						}, 									


	// 		  		 				];



	// var group = svgTrip.append("g")
	// 				.attr("id", "TripGroup")
	// 		 		.attr("width", 700)
	// 		 		.attr("height",560)
	// 		 		.attr("transform", "translate(440, 0)");

	// var groupExtra = svgTrip.append("g")
	// 					.attr("id", "TripGroupExtra")
	// 			 		.attr("width", 300)
	// 			 		.attr("height",560)
	// 			 		.attr("transform", "translate(1150, 0)");

	// patternInfo.forEach(function(pattern){

	// 			  		 groupExtra.append("defs")
	// 						   .append("pattern")
	// 						   .attr("id", pattern.id)
	// 						   .attr('patternUnits', 'userSpaceOnUse')
	// 						   .attr("width", pattern.width)
	// 						   .attr("height", pattern.height)
	// 						   .append("image")
	// 						   .attr("width", 32)
	// 						   .attr("height", 32)
	// 						   .attr("xlink:href", pattern.link)
	// 						   .attr('x', pattern.x)
	// 		                   .attr('y', pattern.y);

	// 		  		 });

	// groupExtra.append("text")
	// 				  .attr("x", 20)
	// 				  .attr("y", 100)
	// 				  .attr("fill", "green")
	// 				  .style("font-size", 18)
	// 				  .style('font-family', "sans-serif")
	// 				  .text("Primary Mission Elements");

	// groupExtra.append("line")
	//  		    .attr("x1", 10)
	// 			.attr("x2", 270)
	// 			.attr("y1", 110)
	// 			.attr("y2", 110)
	// 			.attr("stroke", "green")
	// 			.attr('stroke-width', '5px');

})