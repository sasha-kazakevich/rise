$(function () {

	$("#slider1").responsiveSlides({
		auto: false,
		nav: true,
		speed: 500,
		maxwidth: 800,
		pager: true,
		namespace: "centered-btns"
	});

	$("body").keydown(function(ev){
			switch(ev.which){
				case 39 : $(".centered-btns_nav.next").click();break;
				case 37 : $(".centered-btns_nav.prev").click();break;
			}
	});
});

(function(){
	var all = document.getElementsByClassName("all"),
		li = document.getElementsByClassName("li"),
		body = document.body,
		footProj = document.getElementById("foot-proj"),
		footer = document.getElementById("footer");

	function clickMenu(e){
		if (e.target.getAttribute("data") !== null) {
		var data = e.target.getAttribute("data");
		if (data === "5"){
			$(e.target.getAttribute("data-slider")).click();
		}
		if (data === "0"){
			body.style.background = "url('img/fon.png')";
			body.style.backgroundSize = "cover";
			body.style.backgroundColor = "#00312d";
			footProj.style.display = "block";
			footer.style.display = "none";
		}else {
			document.body.style.background = "url('img/Grey.jpg')";
			footProj.style.display = "none";
			footer.style.display = "flex";
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



