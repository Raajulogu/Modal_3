import gsap from 'gsap';

export const createButtonTimeline = (element: HTMLElement) => {
  const tl = gsap.timeline({ paused: true });
  
  // Initial burst animation
  tl.to(element, {
    scale: 0.95,
    duration: 0.1,
    ease: 'power2.inOut'
  })
  .to(element.querySelector('.particles'), {
    opacity: 1,
    duration: 0.1
  })
  .to(element.querySelectorAll('.particle'), {
    scale: 1,
    opacity: 1,
    duration: 0.4,
    stagger: {
      each: 0.02,
      from: "center"
    },
    ease: 'back.out(2)'
  })
  // Particle explosion
  .to(element.querySelectorAll('.particle'), {
    y: gsap.utils.random(-150, -250, true),
    x: gsap.utils.random(-150, 150, true),
    rotation: gsap.utils.random(-360, 360),
    opacity: 0,
    duration: 0.8,
    ease: 'power4.out',
    stagger: {
      each: 0.02,
      from: "center"
    }
  }, '-=0.3')
  // Button recovery
  .to(element, {
    scale: 1,
    duration: 0.3,
    ease: 'elastic.out(1, 0.5)'
  }, '-=0.5');

  return tl;
};