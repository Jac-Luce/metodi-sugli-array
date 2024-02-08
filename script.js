/* Your API key: S7apuVvCDdfWAUYDkr1R2l9We4ai3BcEJ9XC2WnaL8l8VIB0Ge9sHltU */

/* https://api.pexels.com/v1/search?query=INSERISCIQUERY */



function createImg() {

    fetch('https://api.pexels.com/v1/search?query=flowers' , {
     headers:{
        Authorization : 'S7apuVvCDdfWAUYDkr1R2l9We4ai3BcEJ9XC2WnaL8l8VIB0Ge9sHltU',
     }
    })
    .then(response => response.json())
    .then (json => {
        let photo = json.photos;
        for (let i = 0; i < photo.length ; i++) {
            let element = photo[i];
            let images = document.getElementById("images");
            images.classList.remove('d-none');
            let card = document.createElement('div');
            card.classList=['card'];
            let cardBody = document.createElement('div');
            cardBody.classList = ['card-body'];
            let newImages = document.createElement('img')
            newImages.src = element.src.small;
            cardBody.appendChild(newImages);
            card.appendChild(cardBody);
            images.appendChild(card);
        }
    })
}






/*
function createImg(query) {

    fetch('https://api.pexels.com/v1/search?query=' + query , {
     headers:{
        Authorization : 'S7apuVvCDdfWAUYDkr1R2l9We4ai3BcEJ9XC2WnaL8l8VIB0Ge9sHltU',
     }
    })
    .then(response => response.json())
    .then (json => {
        
        let images = document.getElementById("images");
        images.classList.remove('d-none');
        let card = document.createElement('div');
        card.classList=['card'];
        let cardBody = document.createElement('div');
        cardBody.classList = ['card-body'];
        let newImages = document.createElement('img')
        newImages.src = json.photos[0].src.small;
        cardBody.appendChild(newImages);
        card.appendChild(cardBody);
        images.appendChild(card);
    })
}
*/
let button = document.getElementById('search');
button.addEventListener('click', createImg);