function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})


// gsap.from(".page1 h1 .page1 h2", {
//   y: 10,
//   rotate: 10,
//   opacity: 0,
//   delay: 0.3,
//   duration: 0.7
// })
var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h2",
      scroller: ".main",
      //  markers:true,
      start: "top 47%",
      end: "top 20",
      scrub: 1
  }
})
tl.to(".page1 h2", {
  x: -200,
}, "anim")
tl.to(".page1 h1", {
  x: 200,
}, "anim")

var tl3=gsap.from(".navbar h4" ,{
  y:-80,
  opacity:0,
  duration: 0.8,
  delay: 0.3,
  // stagger: 0.3
})

var tl4=gsap.from(".photo" ,{
  x:-80,
  opacity:0,
  duration: 0.8,
  delay: 0.3,
  // stagger: 0.3
})

var tl2=gsap.from(".timeline",{
  y:-80,
 
 
  opacity:0,
  duration: 1,
  delay: 0.3,
  stagger: 1,
  scrollTrigger:{
      trigger: ".timeline-content",
      scroller: ".main",
      // markers: true,
      start: "top 70%",
      end: "top 40%",
      // opacity:0,
      scrub:1,
  }
})


var boxes = document.querySelectorAll(".baxa")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "270px"
        crsr.style.height = "270px"
        crsr.style.borderRadius = "0"
        crsr.style.zIndex = "99"
        crsr.style.backgroundImage = `url(${att})`
        crsr.style.objectFit = "fill"
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})



