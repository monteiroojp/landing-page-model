document.addEventListener('DOMContentLoaded', function() {
    //Variaveis
    const sectionDestinos = document.querySelector('section#destinos');
    const sectionPacotes = document.querySelector('section#pacotes');
    const sectionContatos = document.querySelector('section#contatos');

    const destinosButton = document.getElementById('destinosButton');
    const pacotesButton = document.getElementById('pacotesButton');
    const contatosButton = document.getElementById('contatosButton');

    const headerButton = document.getElementById("headerButton")

    //Eventos e chamadas
    destinosButton.addEventListener('click', () =>{
        sectionDestinos.scrollIntoView({behavior: 'smooth'})
    })
    pacotesButton.addEventListener('click', () =>{
        sectionPacotes.scrollIntoView({behavior: 'smooth'})
    })
    contatosButton.addEventListener('click', () =>{
        sectionContatos.scrollIntoView({behavior: 'smooth'})
    })
headerButton.addEventListener("click", () =>{
    sectionPacotes.scrollIntoView({behavior:'smooth'})
})
})