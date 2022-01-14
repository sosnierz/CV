// active nav when web is scroll
console.log('k')
 function changeNav() {
    const scrollValue = $(document).scrollTop();
    const height2 = $('section.about-me').offset().top;
    const height3 = $('section.projects').offset().top;
    const height4 = $('section.skills').offset().top;
    const height5 = $('section.experiences').offset().top;
    const height6 = $('section.contact').offset().top;

    console.log(scrollValue.toFixed(), height2.toFixed(), height3.toFixed(), height4.toFixed())

    if (scrollValue < height2) {
        $('nav.nav-menu li a').not('nav.nav-menu li a.nav0').removeClass('activeNav');
        $('nav.nav-menu li a.nav0').addClass('activeNav');
    } else if (scrollValue < height3) {
        $('nav.nav-menu li a').not('nav.nav-menu li a.nav1').removeClass('activeNav');
        $('nav.nav-menu li a.nav1').addClass('activeNav');
    } else if (scrollValue < height4) {
        $('nav.nav-menu li a').not('nav.nav-menu li a.nav2').removeClass('activeNav');
        $('nav.nav-menu li a.nav2').addClass('activeNav');
    } else if (scrollValue < height5) {
        $('nav.nav-menu li a').not('nav.nav-menu li a.nav3').removeClass('activeNav');
        $('nav.nav-menu li a.nav3').addClass('activeNav');
    }   else if (scrollValue < height6) {
        $('nav.nav-menu li a').not('nav.nav-menu li a.nav4').removeClass('activeNav');
        $('nav.nav-menu li a.nav4').addClass('activeNav');
    } else {
        $('nav.nav-menu li a').not('nav.nav-menu li a.nav5').removeClass('activeNav');
        $('nav.nav-menu li a.nav5').addClass('activeNav');
    }
}
 
$(document).on("scroll", changeNav)