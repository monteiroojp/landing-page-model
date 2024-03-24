const headerDiv = document.querySelector('header')
const nextButton = document.getElementById('next-button')
const previousButton = document.getElementById('previous-button')
let indexImg = 0

const imagens = [
    {imgSrc: 'imagens/slider1.jpeg'},
    {imgSrc: 'imagens/slider2.jpeg'},
    {imgSrc: 'imagens/slider3.jpeg'}
]


const sliderShow = (direction) => {
    if (direction == 'next'){
        indexImg++
        if(indexImg > imagens.length - 1){
            indexImg = 0
        }
    }

    else if(direction == 'previous'){
        indexImg --
        if(indexImg < 0){
            indexImg = imagens.length -1
        }
    }

    headerDiv.style.backgroundImage = `url(../${imagens[indexImg].imgSrc})`
}


nextButton.addEventListener('click', () =>{
   sliderShow('next')
})
previousButton.addEventListener('click', () =>{
    sliderShow('previous')
})
