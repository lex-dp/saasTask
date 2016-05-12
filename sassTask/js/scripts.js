 $(document).ready(function(){
	
	$("#radio").buttonset();
	
	 $('#radio input[type="radio"]').on("change", function(event){
            var status = $(this).attr("id");		
			var color;
			
			if(status == "one") {
				color = "#DD7586";
			}else if(status == "two") {
				color = "#E515A4";
			}else if(status == "three") {
				color = "red";
			}else {
				color = "black";
			}
			
			var change = $(".brand-name").css("color", color);
		});

	$(".select").selectmenu({
		width: 244,
		icons: {
				button: "ui-icon-carat-1-s"
			}		
	});
	
	
	$(".selectSize").selectmenu({
		change: function(event, ui) {
			var newImage;
			if(ui.item.label === "1024") {
				newImage = "image2";
			}else if (ui.item.label === "768") {
				newImage = "image5";
			}else {
				newImage = "image3";
			}
			$(".banner img").attr("src", "images/"+ newImage + ".jpg");
		}	
	});
	
	
	$(".content").find(".size768").on("click", function(){
		var $ulStatus = $(".content").find("ul");
		if($ulStatus.is(":hidden")) {
			$ulStatus.slideDown(500);
		}else {
			$ulStatus.slideUp(500);
		}
	});
});