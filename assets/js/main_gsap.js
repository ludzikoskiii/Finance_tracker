gsap.registerPlugin(ScrollToPlugin);

const header_a = document.querySelectorAll(".header_a");
  
header_a.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        gsap.to(window, {duration: 1,scrollTo:{y:"#hero_reff" + (index + 1), offsetY:90}});
});
});

gsap.to("html", {"--creator_block_color":"#43B4EC",yoyo:true,repeat:20,durationL: 1});