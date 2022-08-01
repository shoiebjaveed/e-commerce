const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]

const parentNode = document.getElementById('music-list');

window.addEventListener('load', () => {
    console.log('loaded');

    productsArr.forEach(data => {
        const displayProduct =
            `<div>
                <h3>${data.title}</h3>
                <div class="image-container">
                <img class="product-images" src=${data.imageUrl} alt="">
                </div>
                <div class="product-details">
                <span>$<span>${data.price}</span></span>
                <button class="product-button" type='button'>ADD TO CART</button>
                </div>
                </div>`
        parentNode.innerHTML += displayProduct
    });
})