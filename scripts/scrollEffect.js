
const myObserver = new IntersectionObserver((Entries) =>{
    Entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})


const sections = document.querySelectorAll('.hidden')

sections.forEach((section) =>{
    myObserver.observe(section)
})
