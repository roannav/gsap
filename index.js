// simple tween:  like css transform: translateX(200px)
gsap.to(".box", { x: 200 });
gsap.from(".circle", { x: 200 });
gsap.to(".rect", { scale: 0.1, duration: 5 });
gsap.from(".stick", {
  rotation: 360,
  x: 200,
  duration: 5,
});