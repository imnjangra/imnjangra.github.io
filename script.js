setTimeout(function(){
            $('.preloader p').addClass('loaded').text('loaded');
            $('.line_loader').addClass('loaded');
            setTimeout(function(){ $('.preloader').addClass('preloader_hide'); },200);
            setTimeout(function(){ $('.overlay , .overlay2').addClass('change');
                setTimeout(function(){ $('.overlay , .overlay2 , .preloader').fadeOut(); },1000);
            },600);
        },650);


function scrollToTop() {
  $("body,html").animate({
    scrollTop: 0
  }, "1000");
}
			
var projOneIsOpen = false;
function expandProjOne () {
				if (projOneIsOpen) {
					$("#content").css({
						"transition": "border-radius 600ms ease-in-out, transform 600ms ease-in-out",
						"border-radius": "0",
						"transform": "scale(1)",
						"overflow-y": "scroll"
					});
					$("#project-one-full").css({
						"top": "100%",
						"box-shadow": "none",
						"transition": "top 450ms cubic-bezier(.17,.01,.98,.26), box-shadow 450ms cubic-bezier(.17,.01,.98,.26)"
					});
					$("#nav").css({
						"top": "0",
						"transition": "top 500ms ease-out"
					});
					$(".web-img").css({
						"animation": "none"
					});
					$(".project-card-full").css({
						"visibility": "hidden",
						"transition": "top 600ms cubic-bezier(.49,.08,.42,.99), visibility 1ms 500ms linear"
					});
					projOneIsOpen = false;
				} else {
					$("#content").css({
						"transition": "border-radius 450ms cubic-bezier(.22,.03,.32,.88), transform 450ms cubic-bezier(.22,.03,.32,.88)",
						"border-radius": "10px",
						"transform": "scale(0.75)",
						"overflow-y": "hidden"
					});
					$("#project-one-full").css({
						"top": "5%",
						"box-shadow": "box-shadow: 0px 0px 60px 0px black;",
						"transition": "top 450ms cubic-bezier(.22,.03,.32,.88), box-shadow 450ms cubic-bezier(.22,.03,.32,.88)"
					});
					$("#nav").css({
						"top": "-100%",
						"transition": "top 500ms ease-in"
					});
					$(".web-img").css({
						"animation": "website-scroll 15s ease-in-out infinite"
					});
					$(".project-card-full").css({
						"visibility": "visible",
						"transition": "top 450ms cubic-bezier(.49,.08,.42,.99), visibility 1ms linear"
					});
					projOneIsOpen = true;
				}
      };
      
			var projTwoIsOpen = false;
			function expandProjTwo () {
				if (projTwoIsOpen) {
					$("#content").css({
						"transition": "border-radius 600ms ease-in-out, transform 600ms ease-in-out",
						"border-radius": "0",
						"transform": "scale(1)",
						"overflow-y": "scroll"
					});
					$("#project-two-full").css({
						"top": "100%",
						"box-shadow": "none",
						"transition": "top 450ms cubic-bezier(.17,.01,.98,.26), box-shadow 450ms cubic-bezier(.17,.01,.98,.26)"
					});
					$("#nav").css({
						"top": "0",
						"transition": "top 500ms ease-out"
					});
					$(".web-img").css({
						"animation": "none"
					});
					$(".project-card-full").css({
						"visibility": "hidden",
						"transition": "top 600ms cubic-bezier(.49,.08,.42,.99), visibility 1ms 500ms linear"
					});
					projTwoIsOpen = false;
				} else {
					$("#content").css({
						"transition": "border-radius 450ms cubic-bezier(.22,.03,.32,.88), transform 450ms cubic-bezier(.22,.03,.32,.88)",
						"border-radius": "10px",
						"transform": "scale(0.75)",
						"overflow-y": "hidden"
					});
					$("#project-two-full").css({
						"top": "5%",
						"box-shadow": "box-shadow: 0px 0px 60px 0px black;",
						"transition": "top 450ms cubic-bezier(.22,.03,.32,.88), box-shadow 450ms cubic-bezier(.22,.03,.32,.88)"
					});
					$("#nav").css({
						"top": "-100%",
						"transition": "top 500ms ease-in"
					});
					$(".web-img").css({
						"animation": "website-scroll 15s ease-in-out infinite"
					});
					$(".project-card-full").css({
						"visibility": "visible",
						"transition": "top 450ms cubic-bezier(.49,.08,.42,.99), visibility 1ms linear"
					});
					projTwoIsOpen = true;
				}
      };

			var projThreeIsOpen = false;
			function expandProjThree () {
				if (projThreeIsOpen) {
					$("#content").css({
						"transition": "border-radius 600ms ease-in-out, transform 600ms ease-in-out",
						"border-radius": "0",
						"transform": "scale(1)",
						"overflow-y": "scroll"
					});
					$("#project-three-full").css({
						"top": "100%",
						"box-shadow": "none",
						"transition": "top 450ms cubic-bezier(.17,.01,.98,.26), box-shadow 450ms cubic-bezier(.17,.01,.98,.26)"
					});
					$("#nav").css({
						"top": "0",
						"transition": "top 500ms ease-out"
					});
					$(".web-img").css({
						"animation": "none"
					});
					$(".project-card-full").css({
						"visibility": "hidden",
						"transition": "top 600ms cubic-bezier(.49,.08,.42,.99), visibility 1ms 500ms linear"
					});
					projThreeIsOpen = false;
				} else {
					$("#content").css({
						"transition": "border-radius 450ms cubic-bezier(.22,.03,.32,.88), transform 450ms cubic-bezier(.22,.03,.32,.88)",
						"border-radius": "10px",
						"transform": "scale(0.75)",
						"overflow-y": "hidden"
					});
					$("#project-three-full").css({
						"top": "5%",
						"box-shadow": "box-shadow: 0px 0px 60px 0px black;",
						"transition": "top 450ms cubic-bezier(.22,.03,.32,.88), box-shadow 450ms cubic-bezier(.22,.03,.32,.88)"
					});
					$("#nav").css({
						"top": "-100%",
						"transition": "top 500ms ease-in"
					});
					$(".web-img").css({
						"animation": "website-scroll 15s ease-in-out infinite"
					});
					$(".project-card-full").css({
						"visibility": "visible",
						"transition": "top 450ms cubic-bezier(.49,.08,.42,.99), visibility 1ms linear"
					});
					projThreeIsOpen = true;
				}
      };


      	var projFourIsOpen = false;
			function expandProjFour () {
				if (projFourIsOpen) {
					$("#content").css({
						"transition": "border-radius 600ms ease-in-out, transform 600ms ease-in-out",
						"border-radius": "0",
						"transform": "scale(1)",
						"overflow-y": "scroll"
					});
					$("#project-four-full").css({
						"top": "100%",
						"box-shadow": "none",
						"transition": "top 450ms cubic-bezier(.17,.01,.98,.26), box-shadow 450ms cubic-bezier(.17,.01,.98,.26)"
					});
					$("#nav").css({
						"top": "0",
						"transition": "top 500ms ease-out"
					});
					$(".web-img").css({
						"animation": "none"
					});
					$(".project-card-full").css({
						"visibility": "hidden",
						"transition": "top 600ms cubic-bezier(.49,.08,.42,.99), visibility 1ms 500ms linear"
					});
					projFourIsOpen = false;
				} else {
					$("#content").css({
						"transition": "border-radius 450ms cubic-bezier(.22,.03,.32,.88), transform 450ms cubic-bezier(.22,.03,.32,.88)",
						"border-radius": "10px",
						"transform": "scale(0.75)",
						"overflow-y": "hidden"
					});
					$("#project-four-full").css({
						"top": "5%",
						"box-shadow": "box-shadow: 0px 0px 60px 0px black;",
						"transition": "top 450ms cubic-bezier(.22,.03,.32,.88), box-shadow 450ms cubic-bezier(.22,.03,.32,.88)"
					});
					$("#nav").css({
						"top": "-100%",
						"transition": "top 500ms ease-in"
					});
					$(".web-img").css({
						"animation": "website-scroll 15s ease-in-out infinite"
					});
					$(".project-card-full").css({
						"visibility": "visible",
						"transition": "top 450ms cubic-bezier(.49,.08,.42,.99), visibility 1ms linear"
					});
					projFourIsOpen = true;
				}
      };
      
  
      function darkMode() {
    	  var beginning = document.documentElement.style;
    	  var getClass = beginning.getPropertyValue('--dark-outer');

    	  if (getClass === "#f3f3f4") {
    	    beginning.setProperty("--dark-outer", "#1a1831");
    	    beginning.setProperty("--light-outer", "#f3f3f4");
    	    beginning.setProperty("--dark-inner", "#100e1d");
					beginning.setProperty("--dark-inner-alt", "rgb(0, 0, 0, 0.1)");
    	    beginning.setProperty("--light-inner", "#bababa");
					beginning.setProperty("--light-inner-alt", "rgb(255, 255, 255, 0.1)");
    	    beginning.setProperty("--toggle-position", "25px");
    	    beginning.setProperty("--rotate", "0deg");
    	  } else {
    	    beginning.setProperty("--dark-outer", "#f3f3f4");
    	    beginning.setProperty("--light-outer", "#1a1831");
    	    beginning.setProperty("--dark-inner", "#bababa");
					beginning.setProperty("--dark-inner-alt", "rgb(255, 255, 255, 0.1)");
    	    beginning.setProperty("--light-inner", "#100e1d");
					beginning.setProperty("--light-inner-alt", "rgb(0, 0, 0, 0.1)");
    	    beginning.setProperty("--toggle-position", "0px");
    	    beginning.setProperty("--rotate", "180deg");
    	  }
    	}

			var menuIsOpen = false;
    	function menuTrigger() {
    	  if (menuIsOpen) {
    	    $("body,html").css({
						"left": "0"
					});
					$(".menu-bg-1").css({
						"left": "-100%"
					});
					$("#menu-content").css({
						"visibility": "hidden",
						"opacity": "0",
						"transition": "opacity 300ms 10ms ease-in-out, visibility 300ms 1000ms ease, transform 300ms ease-in, top 1ms 1300ms linear",
						"transform": "translateX(-100px)",
						"top": "-100%"
					});
					$("#menu-state-1").css({
						"transform": "none"
					});
					$("#menu-state-2").css({
						"transform": "none"
					});
					$("#menu-tag").css({
						"transform": "translateY(0px)",
						"opacity": "1"
					});
					$("#close-tag").css({
						"transform": "translateY(20px) translateX(50px)",
						"opacity": "0"
					});
					menuIsOpen = false;
    	  } else {
    	    $("body,html").css({
						"left": "100%"
					});
					$(".menu-bg-1").css({
						"left": "0"
					});
					$("#menu-content").css({
						"visibility": "visible",
						"opacity": "1",
						"transition": "opacity 1000ms 300ms ease-in-out, visibility 300ms ease, transform 700ms 200ms ease-out, top 1ms linear",
						"transform": "translateX(0)",
						"top": "0"
					});
					$("#menu-state-1").css({
						"transform": "rotate(45deg)"
					});
					$("#menu-state-2").css({
						"transform": "rotate(135deg)"
					});
					$("#menu-tag").css({
						"transform": "translateY(-20px)",
						"opacity": "0"
					});
					$("#close-tag").css({
						"transform": "translateY(0px) translateX(50px)",
						"opacity": "1"
					});
					menuIsOpen = true;
    	  }
    	}

    	function fSmall() {
    	  var beginning = document.documentElement.style;
    	  document.getElementById("f-small").style.background = "var(--light-outer)";
    	  document.getElementById("f-small").style.color = "var(--dark-outer)";
    	  document.getElementById("f-small").style.transform = "scale(1.2)";
    	  document.getElementById("f-medium").style.background = "var(--dark-outer)";
    	  document.getElementById("f-medium").style.color = "var(--light-inner)";
    	  document.getElementById("f-medium").style.transform = "scale(1)";
    	  document.getElementById("f-large").style.background = "var(--dark-outer)";
    	  document.getElementById("f-large").style.color = "var(--light-inner)";
    	  document.getElementById("f-large").style.transform = "scale(1)";
    	  beginning.setProperty("--p-mult", "1");
    	}

    	function fMedium() {
    	  var beginning = document.documentElement.style;
    	  document.getElementById("f-medium").style.background = "var(--light-outer)";
    	  document.getElementById("f-medium").style.color = "var(--dark-outer)";
    	  document.getElementById("f-medium").style.transform = "scale(1.2)";
    	  document.getElementById("f-small").style.background = "var(--dark-outer)";
    	  document.getElementById("f-small").style.color = "var(--light-inner)";
    	  document.getElementById("f-small").style.transform = "scale(1)";
    	  document.getElementById("f-large").style.background = "var(--dark-outer)";
    	  document.getElementById("f-large").style.color = "var(--light-inner)";
    	  document.getElementById("f-large").style.transform = "scale(1)";
    	  beginning.setProperty("--p-mult", "1.2");
    	}

    	function fLarge() {
    	  var beginning = document.documentElement.style;
    	  document.getElementById("f-large").style.background = "var(--light-outer)";
    	  document.getElementById("f-large").style.color = "var(--dark-outer)";
    	  document.getElementById("f-large").style.transform = "scale(1.2)";
    	  document.getElementById("f-medium").style.background = "var(--dark-outer)";
    	  document.getElementById("f-medium").style.color = "var(--light-inner)";
    	  document.getElementById("f-medium").style.transform = "scale(1)";
    	  document.getElementById("f-small").style.background = "var(--dark-outer)";
    	  document.getElementById("f-small").style.color = "var(--light-inner)";
    	  document.getElementById("f-small").style.transform = "scale(1)";
    	  beginning.setProperty("--p-mult", "1.4");
    	}
      
      function readMore() {
    	  var beginning = document.documentElement.style;
    	  var getClass = beginning.getPropertyValue('--read-more-rotate');

    	  if (getClass === "rotate(180deg)") {
        	beginning.setProperty('--read-more-rotate', "rotate(0deg)");
    	    document.getElementById("extra-par").style.maxHeight = "0";
    	  } else {
    	    beginning.setProperty('--read-more-rotate', "rotate(180deg)");
    	    document.getElementById("extra-par").style.maxHeight = "300px";
    	  }
    	}
      fetch("./header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });







const loadingAnimationTime = 2000

const showMainAnimation = (parent) => {
  const boxContainer = document.createElement("div");
  boxContainer.style.overflow = "hidden";
  const box = document.createElement("div");
  box.classList.add("box", "flex");
  parent.appendChild(boxContainer);
  boxContainer.appendChild(box);
  const quote = ["Simple", "is", "the", "new", "sexy"];
  let delay = 0;
  // Add all the words
  for (let word in quote){
    let text = document.createElement("span");
    text.textContent = quote[word];
    text.classList.add("animate-slideup");
    delay = delay + 22;
    text.style.animationDelay = delay + "ms";
    box.appendChild(text);
  }
  const lastAnimationTime = 1000 + delay; // in ms
  // Add full stop
  let text = document.createElement("div");
  text.classList.add("fs", "flex");
  text.style.animationDelay = lastAnimationTime - 100 + "ms";
  box.appendChild(text);
};

const revealCurtain = (parent) => {
  const curtain = document.createElement("div");
  curtain.classList.add("flex", "curtain");
  parent.appendChild(curtain);
  const progressBar = document.createElement("div");
  progressBar.classList.add("progressBar");
  curtain.appendChild(progressBar);
  progressBar.classList.add("progressGrow-animation");  
  return curtain;
};

const init = () => {
  const container = document.getElementById("main");
  const curtain = revealCurtain(container);
  setTimeout(() => {
    container.removeChild(curtain);
    showMainAnimation(container);
  }, loadingAnimationTime + 100)
};

init();

  
