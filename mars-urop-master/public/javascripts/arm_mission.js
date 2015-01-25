$(document).ready(function(){

		$('.canvas').empty();
	


		var svg = d3.select(".canvas")
						.append("svg")
						.attr("height", 400)
						.attr("width", 1200)
						// .attr("height", 350)
						// .attr("width", 1100)
						.attr("id", "arm_mission");
						// .attr("transform","rotate(90 215,600)");


		
			
		// ROW ONE

		$("#mydRect1").css("opacity", "0.1");
		$("#lssRect1").css("opacity", "0.1");
		$("#motRect1").css("opacity", "0.1");
		$("#sevRect1").css("opacity", "0.1");

		$("#cpsRect1").css("opacity", "0.1");
		$("#lmRect1").css("opacity", "0.1");
		$("#lopRect1").css("opacity", "0.1");


		$("#apRect1").css("opacity", "0.1");
		$("#trrRect1").css("opacity", "0.1");
		$("#snpRect1").css("opacity", "0.1");
		$("#aasRect1").css("opacity", "0.1");
		$("#psmRect1").css("opacity", "0.1");
		$("#dshRect1").css("opacity", "0.1");
		$("#ldshRect1").css("opacity", "0.1");
		$("#mavRect1").css("opacity", "0.1");

		// ROW TWO

		$("#arvRect2").css("opacity", "0.1");
		$("#lssRect2").css("opacity", "0.1");

		$("#cpsRect2").css("opacity", "0.1");
		$("#lmRect2").css("opacity", "0.1");
		$("#lopRect2").css("opacity", "0.1");

		$("#trrRect2").css("opacity", "0.1");
		$("#snpRect2").css("opacity", "0.1");
		$("#psmRect2").css("opacity", "0.1");
		$("#aasRect2").css("opacity", "0.1");
		$("#dshRect2").css("opacity", "0.1");
		$("#ldshRect2").css("opacity", "0.1");
		$("#mavRect2").css("opacity", "0.1");



		// ROW THREE

		$("#arvRect3").css("opacity", "0.1");
		$("#mydRect3").css("opacity", "0.1");
		$("#lssRect3").css("opacity", "0.1");
		$("#motRect3").css("opacity", "0.1");
		$("#sevRect3").css("opacity", "0.1");

		$("#cpsRect3").css("opacity", "0.1");
		$("#lmRect3").css("opacity", "0.1");
		$("#lopRect3").css("opacity", "0.1");


		// Add tool tips
		var count = 1;
		for (var i=0; i<3; i++){
			rectInfo.forEach(function(rect){
				var attr = $("#"+rect.id+count).attr('style');
				$("#"+ rect.id+count).attr("title", rect.info);
			});
			count+=1;
		}

		//Side Bar
		// svgSide.append("text")
		// 	.attr("x", -350)
		// 	.attr("y", 625)
		// 	.text("This is text");

		// BOTTOM TEXT
		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 650)
			.attr("transform", "rotate(90 215,600)")
			.text("ASTERIOD RETRIEVAL VEHICLE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 600)
			.attr("transform", "rotate(90 215,600)")
			.text("MULTI-YEAR DEEP SPACE HABITAT");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 560)
			.attr("transform", "rotate(90 215,600)")
			.text("LARGE STORAGE STAGE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 510)
			.attr("transform", "rotate(90 215,600)")
			.text("MARS ORBIT TRANSFER VEHICLE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 470)
			.attr("transform", "rotate(90 215,600)")
			.text("SPACE EXPLORATION VEHICLE");

		////////

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 390)
			.attr("transform", "rotate(90 215,600)")
			.text("CRYOGENIC PROPULSION SYSTEM");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 350)
			.attr("transform", "rotate(90 215,600)")
			.text("LUNAR MODULE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 310)
			.attr("transform", "rotate(90 215,600)")
			.text("LUNAR ORBITAL OUTPOST");

		////////

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 220)
			.attr("transform", "rotate(90 215,600)")
			.text("HEAVY LIFT LAUNCH VEHICLE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 170)
			.attr("transform", "rotate(90 215,600)")
			.text("ADVANCED PROPULSION");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 130)
			.attr("transform", "rotate(90 215,600)")
			.text("TELE-ROBOTIC ROVERS");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 90)
			.attr("transform", "rotate(90 215,600)")
			.text("SURFACE NUCLEAR POWER");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 50)
			.attr("transform", "rotate(90 215,600)")
			.text("ADVANCED EVA");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 10)
			.attr("transform", "rotate(90 215,600)")
			.text("PRESSURIZED SURFACE MOBILITY");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", -40)
			.attr("transform", "rotate(90 215,600)")
			.text("AERO ASSIT SYSTEM");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", -90)
			.attr("transform", "rotate(90 215,600)")
			.text("CREW COMMAND AND SERVICE MODULE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", -130)
			.attr("transform", "rotate(90 215,600)")
			.text("DEEP SPACE HABITATION");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", -170)
			.attr("transform", "rotate(90 215,600)")
			.text("LONG DURATION SURFACE HABITAT");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", -210)
			.attr("transform", "rotate(90 215,600)")
			.text("MARS ASCENT VEHICLE");

		$(document).tooltip({

  			content: function () {
              return $(this).prop('title');
          	}, 

          	tooltipClass: "tooltip"
		});
	});

// });


		
		