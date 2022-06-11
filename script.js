console.clear();
gsap.config({trialWarn: false});
gsap.registerPlugin(MorphSVGPlugin);
gsap.to("#start", {
  morphSVG: "#end",
  ease: "sine.inOut",
  yoyo: true,
  repeat: -1,
  repeatDelay: 2
});
