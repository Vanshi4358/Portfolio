//to show the menue//
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu'); // Toggle the 'show-menu' class
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu'); // Remove the 'show-menu' class to close
    });
}
//remove menue moblie//
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction))

//show header//
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)
//email//
const contactForm = document.getElementById('contact-form'),
     contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   emailjs.sendForm('service_ys0imqw','template_cm1n2di','#contact-form','9jEcGcHGzBRKXyjOx')
   .then(() =>{
      contactMessage.textContent = 'Message Sent Successfully '
      setTimeout(() =>{
        contactMessage.textContent = ''
      },5000)

    contactForm.reset()
   }, () =>{
    contactMessage.textContent = 'Message Not Sent (service error)'
   })
} 

contactForm.addEventListener('submit',sendEmail)
//for scroll//
const scrollUp = () =>{
    const scrollUp =document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
//scroll sec active link//
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY
    
    sections.forEach(current =>{
        const sectionHeight =current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass =document.querySelectorAll('.nav__menu a[herf*=' +sectionId+']')
        if(scrollDown >sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
}
const themeButton =document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme ='ri-sun-line'

const selectedTheme =localStorage.getItem('selected-theme')
const selectedIcon =localStorage.getItem('selected-icon')

const getCurrentTheme =() => document.body.contains(darkTheme) ? 'dark' :'light'
const getCurrentIcon =() => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' :'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click' ,() => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme' , getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:400,
})

sr.reveal('.home__perfil ,.about__image,.contact__mail',{origin:'right'})
sr.reveal('.home__name,.home__info,.about__container .section__title-1,.about__info,.contact__social,.contact__data',{origin:'left'})
sr.reveal('.services__card,.projects__card',{interval:100})