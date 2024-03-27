//Variáveis
const formContainer = document.getElementById("form-mail")
const sendButton = document.getElementById('sendButton')
const inputEmail = document.getElementById('inputEmail')
let greenText;

//Funções
const createText = () =>{
    if(inputEmail.value && !greenText){
        greenText = document.createElement('p')
        greenText.innerHTML = 'Obrigado, entraremos em contato em breve!'
        greenText.style.color = 'green'
        greenText.style.fontSize = '0.8em'
        greenText.style.marginBottom = '20px'
        formContainer.insertBefore(greenText, sendButton)

        setTimeout(() =>{
            greenText.remove()
        }, 2000)
    }
}


//Eventos
sendButton.addEventListener('click', (e) =>{
    e.preventDefault()
    createText()
})

