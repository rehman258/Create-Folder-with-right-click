$(function(){
	$("#boxarea").contextmenu(function(event){
		event.preventDefault()
		$(".forchose").slideDown()
		var forpos =  $(".forchose").outerWidth();
		var x = event.pageX
		var y = event.pageY
		$(".forchose").css({
          "left": x +"px",
          "top": y+ "px"
		 })
	})
	$(window).click(function(){
		$(".forchose").slideUp()	
	})

	$(".newfolder").click(function(){
		$(".foradd").fadeIn()
	})

	var i = 0;
	$(".create").click(function(){
		i++;
		$("#boxarea").append("<div class='fortest'><p class = 'fortittle'></p></div>");
		$(".foradd").slideUp()
		$(".fortittle").html($("#inp").val());
		console.log(i);
		$(".fortest").click(function(){
		    $(".fortest").animate({
		      "height":"500px",
		      "width":"1110px"
		    },1000)
	    })
	})

	$(".back").click(function(){
      $(".foradd").fadeOut()
	})
	$("#boxarea").click(function(){
		$(".fortest").css({
		      "height":"35px",
		      "width":"250px"
		    })
	})

	
})