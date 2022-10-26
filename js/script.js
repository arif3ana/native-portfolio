AOS.init({
	once: true
});
gsap.registerPlugin(TextPlugin);
gsap.to('.tagline', {duration: 3, delay: 1.5, text: 'i build and develop websites'});
gsap.from('.main-text', {duration: 1, y: -100, opacity: 0, ease: 'bounce'});
