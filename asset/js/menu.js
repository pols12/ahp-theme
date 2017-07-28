$( document ).ready(function() {
	$(".cross").hide();
	$(".hamburger").click(function() {
		$("#navigation ul").slideToggle("slow", function() {
			$(".hamburger").hide();
			$(".cross").show();
		});
	});

	$(".cross").click(function() {
		$("#navigation ul").slideToggle("slow", function() {
			$(".cross").hide();
			$(".hamburger").show();
		});
	});
});
