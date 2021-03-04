const toggleMenuElements = {
    toggle: document.querySelector(`.toggle`),
    siteNavigation: document.querySelector(`.site-navigation`),
    siteNavigationList: document.querySelector(`.site-navigation__list`),
    socialMedia: document.querySelector(`.social-media`),
    toggleLines: document.querySelectorAll(`.toggle__line`)
}

const returnArrow = document.querySelector(`.return-arrow`)



Textblock([{
     target: ".intro__title",
     minWidth: 344,
     maxWidth: 1180,
     minWidth_FontSize: 2.6,
     maxWidth_FontSize: 11,
     minWidth_LineHeight: 1.33,
     maxWidth_LineHeight: 1.25,
     minWidth_VariableGrade: 366,
     maxWidth_VariableGrade: 300,
     container: "self",
     fontSize_Units: "rem"
}]);

gsap.registerPlugin(ScrollTrigger);

gsap.from(".about__postcard", {
    scrollTrigger: {
        trigger: ".about__image",
        start: "top center",
    },
    y: 200,
    duration: .5
});

// gsap.from(".catering__card", {
//     scrollTrigger: {
//         trigger: ".catering",
//         start: "center bottom",
//     },
//     x: -2000,
//     duration: .6
// });

gsap.to(returnArrow, {
    scrollTrigger: {
        trigger: ".intro__title",
        onEnterBack: () => returnArrow.style.opacity = `0`
    },
});

gsap.to(returnArrow, {
    scrollTrigger: {
        trigger: ".about",
        start: "bottom center",
        onEnter: () => returnArrow.style.opacity = `1`
    },
});

class MenuToggle{
    elements = null
    
    constructor(elements){
        this.toggle = elements.toggle
        this.siteNavigation = elements.siteNavigation
        this.siteNavigationList = elements.siteNavigationList
        this.socialMedia = elements.socialMedia
        this.toggleLines = elements.toggleLines
        this.setup()
    }

    setup() {
    
        this.clickHandler = (evt) => {
            if(!this.siteNavigation.classList.contains(`site-navigation_open`)){
                this.dimmer = document.createElement("div")
                this.dimmer.classList.add(`dimmer`)
                document.querySelector(`body`).appendChild(this.dimmer)
                document.querySelector(`body`).style.overflowX = `hidden`
                this.siteNavigation.classList.toggle(`site-navigation_open`)
                this.toggleLines[0].classList.toggle(`toggle__line_open-1`)
                this.toggleLines[1].classList.toggle(`toggle__line_open-2`)
                this.siteNavigationList.classList.toggle(`site-navigation__list_open`)
                this.socialMedia.classList.toggle(`social-media_open`)
                setTimeout(() => { this.siteNavigation.style.width = `20.6rem` }, 10);
            }
            else{
                this.siteNavigation.style.width = `0`
                this.socialMedia.classList.toggle(`social-media_open`)
                this.dimmer.remove()
                setTimeout(() => { 
                    this.siteNavigation.classList.toggle(`site-navigation_open`)
                    this.toggleLines[0].classList.toggle(`toggle__line_open-1`)
                    this.toggleLines[1].classList.toggle(`toggle__line_open-2`)
                    this.siteNavigationList.classList.toggle(`site-navigation__list_open`)
                    document.querySelector(`body`).style.overflowX = `visible`
                }, 200);                
            }
        }

        this.toggle.addEventListener(`click`, this.clickHandler)
    }
}

class ScrollToTop{
    arrow = null
    
    constructor(arrow){
        this.arrow = arrow
        this.setup()
    }

    setup() {
    
        this.clickHandler = (evt) => {
            this.arrow.style.opacity = `0`
            window.scrollTo(0,0)
        }

        this.arrow.addEventListener(`click`, this.clickHandler)
    }
}

const toggleMenu = new MenuToggle(toggleMenuElements)

const topScroll = new ScrollToTop(returnArrow)

function fixHeader() {

    if(window.innerWidth >= 768){
        toggleMenuElements.siteNavigation.style.width = `unset`
    }
}

window.onresize = fixHeader;