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

// const toggleButton = document.querySelector(`.toggle`)
// const siteNavigation = document.querySelector(`.site-navigation`)
// const siteNavigationList = document.querySelector(`.site-navigation__list`)
// const socialMedia = document.querySelector(`.social-media`)
const toggleMenuElements = {
    toggle: document.querySelector(`.toggle`),
    siteNavigation: document.querySelector(`.site-navigation`),
    siteNavigationList: document.querySelector(`.site-navigation__list`),
    socialMedia: document.querySelector(`.social-media`),
    toggleLines: document.querySelectorAll(`.toggle__line`)
}

class MenuToggle{
    toggleMenuElements = null
    
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
            this.toggleLines[0].classList.toggle(`toggle__line_open-1`)
            this.toggleLines[1].classList.toggle(`toggle__line_open-2`)
            this.siteNavigation.classList.toggle(`site-navigation_open`)
            this.siteNavigationList.classList.toggle(`site-navigation__list_open`)
            this.socialMedia.classList.toggle(`social-media_open`)
        }

        this.toggle.addEventListener(`click`, this.clickHandler)
    }
}

const toggleMenu = new MenuToggle(toggleMenuElements)