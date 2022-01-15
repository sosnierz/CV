// active nav when web is scroll
console.log('k');
const topSection3 = $('section.projects')

 $(document).on('scroll', function(){

// all sections
const windowHeight = $(window).height();
const scrollValue = $(this).scrollTop();
const topSection2 = $('section.about-me').offset().top;
const sectionHeight2 = $('section.about-me').outerHeight();
const topSection3 = $('section.projects').offset().top;
const sectionHeight3 = $('section.projects').outerHeight();
const topSection4 = $('section.skills').offset().top;
const sectionHeight4 = $('section.skills').outerHeight();
const topSection5 = $('section.experiences').offset().top;
const sectionHeight5 = $('section.experiences').outerHeight();

// left navigation scroll 
if(scrollValue< 500){
    $('.nav-menu a').not('.nav-menu a.nav0').removeClass('activeNav');
    $('.nav-menu a.nav0').addClass('activeNav');    
}
if(scrollValue > topSection2 +sectionHeight2 - windowHeight) {
    $('.nav-menu a').not('.nav-menu a.nav1').removeClass('activeNav');
    $('.nav-menu a.nav1').addClass('activeNav');   
}
if(scrollValue > topSection3 +sectionHeight3 - windowHeight) {
    $('.nav-menu a').not('.nav-menu a.nav2').removeClass('activeNav');
    $('.nav-menu a.nav2').addClass('activeNav');   

}
if(scrollValue > topSection4 +sectionHeight4 - windowHeight) {
    $('.nav-menu a').not('.nav-menu a.nav3').removeClass('activeNav');
    $('.nav-menu a.nav3').addClass('activeNav');   
}
if(scrollValue > topSection5 +sectionHeight5 - windowHeight) {
    $('.nav-menu a').not('.nav-menu a.nav4').removeClass('activeNav');
    $('.nav-menu a.nav4').addClass('activeNav');   
    $('.nav-menu a.nav5').addClass('activeNav');   
}


// all projects
const $hall = $('.project.hall');
const topProjHall = $hall.offset().top;
const hallHeight = $hall.outerHeight();
const $shop = $('.project.shop');
const topProjShop = $shop.offset().top;
const shopHeight = $shop.outerHeight();
const $cv = $('.project.cv')
const topProjCv = $cv.offset().top;
const cvHeight = $cv.outerHeight();

// projects show up
if (scrollValue > topProjHall + hallHeight - windowHeight) {
    $hall.addClass('active');
}
if (scrollValue > topProjShop + shopHeight - windowHeight) {
    $shop.addClass('active');
}
if (scrollValue > topProjCv + cvHeight - windowHeight) {
    $cv.addClass('active');
}

if (scrollValue < 1000) {
    $('project').removeClass('active');
}

// visible skills
const topSkills = $('section.skills').offset().top;
const skillsHeight = $('section.skills').outerHeight();
const $liSkills = $('.skills ul li');
if (scrollValue > topSkills + skillsHeight - windowHeight) {
    $liSkills.each(function(i){
        setTimeout(() => { 
            $(this).attr("style", "visibility: visible ")
        }, i*300);
       
    })
}

// experiences show
const topExper = $('section.experiences').offset().top;
const expersHeight = $('section.experiences').outerHeight();
const $experience = $('article.experience');
if (scrollValue > topExper+ expersHeight - windowHeight) {
    $experience.each(function(i){
        setTimeout(() => { 
            $(this).attr("style", "transform: scale(1) ")
        }, i*300);
       
    })

}

 })


// click navigation
$('.nav-menu a').on('click', function () {
    const goTo = "[data-section=" + $(this).attr('class') + "]";
    $("html,body").animate({
        scrollTop: $(goTo).offset().top
    })
})



    
