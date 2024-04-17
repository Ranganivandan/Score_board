var t1 = gsap.timeline();
t1.from("#simle1,#card1h1", {
  y: -200,
  x: -50,
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});

t1.from("#smile2,#card2h2", {
  y: -200,
  x: -50,
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});

t1.from("#vs", {
  y: -200,
  x: -50,
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});

t1.from("#back1,#next1,#back,#next", {
  y: -200,
  x: -50,
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});

t1.from("#reset", {
  y: -200,
  x: -50,
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});
