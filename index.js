// simple tween:  like css transform: translateX(200px)
gsap.to(".box", { x: 200 });
gsap.from(".circle", { x: 200 });
gsap.to(".rect", { scale: 0.1, duration: 5 });
gsap.from(".stick", {
  rotation: 360,
  x: 200,
  duration: 5,
});

// The default for transform-origin is 50% 50%.
// See what happens when we change the origin
// before rotation.

gsap.to(".origin_50_50", {
  transformOrigin: "50% 50%",
  rotation: 30,
});

gsap.to(".origin_0_0", {
  transformOrigin: "0% 0%",
  rotation: 30,
});

gsap.to(".origin_0_100", {
  transformOrigin: "0% 100%",
  rotation: 30,
});

gsap.to(".origin_100_100", {
  transformOrigin: "100% 100%",
  rotation: 30,
});

gsap.to(".origin_100_0", {
  transformOrigin: "100% 0%",
  rotation: 30,
});

gsap.to(".origin_default", {
  rotation: 30,
});
