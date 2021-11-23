var tl = new TimelineMax({onUpdate:updatePercentage});
var t2 = new TimelineMax({onUpdate:updatePercentage});
var t3 = new TimelineMax({onUpdate:updatePercentage});
var t4 = new TimelineMax({onUpdate:updatePercentage});
var t5 = new TimelineMax({onUpdate:updatePercentage});
var t6 = new TimelineMax({onUpdate:updatePercentage});
var t7 = new TimelineMax({onUpdate:updatePercentage});
var t8 = new TimelineMax({onUpdate:updatePercentage});

const controller = new ScrollMagic.Controller();


t2.from('#upper_right_polygon', 5, {x:170, opacity: 0,ease: Power4.easeInOut}, "=-.7");
t2.from('#lower_left_polygon', 5, {x:-100, opacity: 0, ease: Power4.easeInOut}, "=-.7");
tl.from('blockquote', 1, {x:300, opacity: 0});
tl.from('span', .5, { width: 0}, "=-.7");
t3.from('#About', .5, {x:-800, opacity: 0});
t4.from('#education', .5, {x:800, opacity: 0});
t4.from('.study', .5, {x:300, opacity: 0});
t5.from('.hobbies-image',.5,{x:-500,opacity:0});
t6.from('.hobbies-title',.5,{x:500,opacity:0});
t7.from('.project-image',.5,{x:800,opacity:0});
t8.from('.question-image',.5,{x:-800,opacity:0});

const scene = new ScrollMagic.Scene({
  triggerElement: ".object",
            triggerHook: "0.3",
            duration: "100%"
            
})
//   .setPin(".quote")
  .setTween(tl)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".object",
            triggerHook: "0.5",
            duration: "100%"
})
//   .setPin(".object")
  .setTween(t2)
		.addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement:"#lower_left_polygon",
  triggerHook:"0.7",
  duration:"100%"
})
.setTween(t3)
.addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement:".see_more",
  triggerHook:"0.7",
  duration:"100%"
})
.setTween(t4)
.addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement:".study",
  triggerHook:"0.4",
  duration:"100%"
})
.setTween(t5)
.addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement:".study",
  triggerHook:"0.4",
  duration:"100%"
})
.setTween(t6)
.addTo(controller);

const scene7 = new ScrollMagic.Scene({
  triggerElement:".hobbies-title",
  triggerHook:"0.4",
  duration:"100%"
})
.setTween(t7)
.addTo(controller);

const scene8 = new ScrollMagic.Scene({
  triggerElement:".project-image",
  triggerHook:"0.3",
  duration:"100%"
})
.setTween(t8)
.addTo(controller);




function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}
