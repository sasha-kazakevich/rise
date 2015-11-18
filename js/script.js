$(function () {

	$("#slider1").responsiveSlides({
		auto: false,
		nav: true,
		speed: 500,
		maxwidth: 800,
		pager: true,
		namespace: "centered-btns"
	});

});

(function(){
	var all = document.getElementsByClassName("all"),
		li = document.getElementsByClassName("li");

	function clickMenu(e){
		if (e.target.getAttribute("data") !== null) {
		var data = e.target.getAttribute("data");
		if (data === "4"){
			$(e.target.getAttribute("data-slider")).click();
		}
		for (var i = 0;i < all.length;i++){
			all[i].style.display = "none";
			}
		all[+data].style.display = "block";
		for (var i=0;i<li.length;i++){
			li[i].classList.remove("active");
			}
		if (e.target.tagName === "LI") {
			e.target.classList.add("active");
		}
	}
}

document.querySelector("body").addEventListener("click", clickMenu, false);

})();



