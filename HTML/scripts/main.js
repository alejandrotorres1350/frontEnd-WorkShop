const addCategoryByImage = (imageUrl) => {
    const list = document.querySelector('.horizontal-list-categories');
    let item = document.createElement("LI");
    let image = document.createElement("img");
    image.src = imageUrl;
    image.classList.add('categories-item-image');
    item.classList.add('categories-item');
    item.appendChild(image);
    list.appendChild(item);
}

const addProduct = (imageUrl, title, price) => {
    const list = document.querySelector('.horizontal-list-newProducts');
    let item = document.createElement("LI");
    let image = document.createElement("img");
    let info = document.createElement("div");
    let infoTitle = document.createElement("p");
    let infoPrice = document.createElement("h3");
    infoTitle.innerText = title;
    infoPrice.innerText = price;
    image.src = imageUrl;
    image.classList.add('newProducts-item-image');
    item.classList.add('newProducts-item');
    info.classList.add('newProducts-item-info');
    infoTitle.classList.add('newProducts-item-title');
    infoPrice.classList.add('newProducts-item-price');
    info.appendChild(infoTitle);
    info.appendChild(infoPrice);
    item.appendChild(image);
    item.appendChild(info);
    list.appendChild(item);
}

const getCategories = () => {
    const images = [
        'assets/shoe.png',
        'assets/pants.png',
        'assets/sweater.png',
        'assets/shirt.png',
    ];
    images.map(image => addCategoryByImage(image));
}

const getNewProducts = () => {
    const products = [
        {image: 'assets/shoe.png', title: 'Shoe', price: '$130'},
        {image: 'assets/pants.png', title: 'Pants', price: '$140'},
        {image: 'assets/sweater.png', title: 'Sweater', price: '$160'},
        {image: 'assets/shirt.png', title: 'Shirt', price: '$120'},
    ];
    products.map(product => addProduct(product.image, product.title, product.price));
}

const goToSeeAllPage = () => {
    window.location.href = 'ShowAll/showAll.html';
}

getCategories();
getNewProducts();

const seeAllButtons = [...document.querySelectorAll('.list-seeAll')];
seeAllButtons.map(seeAll => seeAll.onclick = goToSeeAllPage);