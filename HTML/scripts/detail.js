const addRelatedProduct = (imageUrl) => {
    const list = document.querySelector('.horizontal-list');
    let item = document.createElement("LI");
    let image = document.createElement("img");
    image.src = imageUrl;
    image.classList.add('list-item-image');
    item.classList.add('list-item');
    item.appendChild(image);
    list.appendChild(item);
}

const getRelatedProducts = () => {
    const images = [
        '../assets/shoe.png',
        '../assets/pants.png',
        '../assets/sweater.png',
        '../assets/shirt.png',
    ];
    images.map(image => addRelatedProduct(image));
}

const goBack = () => {
    window.location.href = '../ShowAll/showAll.html';
}

getRelatedProducts();

const backButton = document.querySelector('.back-icon');
backButton.onclick = goBack;