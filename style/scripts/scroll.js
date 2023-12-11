gsap.registerPlugin(ScrollTrigger);



const timeline = gsap.timeline();

timeline.from('.banner-catalog_title', {
    y:150,
    skewY:5,
    duration:1.2
}).from('.banner-catalog_text', {
    letterSpacing:-10,
    opacity:0,
    duration:1.6
}).from('.banner-form', {
    x:-100,
    skewY:-4,
    opacity:0,
    duration:2
}).from('.header-nav', {
    letterSpacing:10,
    opacity:0,
    y:-120,
    skewY:-13,
    duration:1
});
