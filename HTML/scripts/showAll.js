let isGrid = true;

const addProductGrid = (imageUrl, title, price) => {
    const list = document.querySelector('.list-container-grid');
    let item = document.createElement("LI");
    let image = document.createElement("img");
    let info = document.createElement("div");
    let infoTitle = document.createElement("p");
    let infoPrice = document.createElement("h3");
    infoTitle.innerText = title;
    infoPrice.innerText = price;
    image.src = imageUrl;
    image.classList.add('list-item-grid-image');
    item.classList.add('list-item-grid');
    info.classList.add('list-item-grid-info');
    infoTitle.classList.add('list-item-title');
    infoPrice.classList.add('list-item-price');
    info.appendChild(infoTitle);
    info.appendChild(infoPrice);
    item.appendChild(image);
    item.appendChild(info);
    item.onclick = goToDetailPage;
    list.appendChild(item);
}

const getAllStars = () => {
    let rating = document.createElement("div");
    rating.classList.add('rating');
    for(let i=0; i<5;i++){
        let starImage = document.createElement("img");
        starImage.src = '../assets/star.png';
        starImage.classList.add('ratingImages');
        rating.appendChild(starImage);
    }
    return rating;
}

const addProduct = (imageUrl, title, price) => {
    const list = document.querySelector('.list-container');
    let item = document.createElement("LI");
    let image = document.createElement("img");
    let info = document.createElement("div");
    let infoTitle = document.createElement("p");
    let infoPrice = document.createElement("h3");
    let rating = getAllStars();
    infoTitle.innerText = title;
    infoPrice.innerText = price;
    image.src = imageUrl;
    image.classList.add('list-item-image');
    item.classList.add('list-item');
    info.classList.add('list-item-info');
    infoTitle.classList.add('list-item-title');
    infoPrice.classList.add('list-item-price');
    info.appendChild(infoTitle);
    info.appendChild(infoPrice);
    info.appendChild(rating);
    item.appendChild(image);
    item.appendChild(info);
    item.onclick = goToDetailPage;
    list.appendChild(item);
}

const getProducts = () => {
    const products = [
        {image: '../assets/shoe.png', title: 'Shoe 1', price: '$130'},
        {image: '../assets/shoe2.png', title: 'Shoe 2', price: '$120'},
        {image: '../assets/shoe3.png', title: 'Shoe 3', price: '$110'},
        {image: '../assets/shoe4.png', title: 'Shoe 4', price: '$150'},
        {image: '../assets/shoe5.png', title: 'Shoe 5', price: '$140'},
        {image: '../assets/shoe.png', title: 'Shoe 6', price: '$160'},
        {image: '../assets/shoe5.png', title: 'Shoe 7', price: '$170'},
        {image: '../assets/shoe4.png', title: 'Shoe 8', price: '$230'},
        {image: '../assets/shoe3.png', title: 'Shoe 9', price: '$140'},
        {image: '../assets/shoe2.png', title: 'Shoe 10', price: '$110'},
        {image: '../assets/shoe.png', title: 'Shoe 11', price: '$100'},
        {image: '../assets/shoe2.png', title: 'Shoe 12', price: '$120'},
        {image: '../assets/shoe3.png', title: 'Shoe 13', price: '$130'},
        {image: '../assets/shoe4.png', title: 'Shoe 14', price: '$530'},
        {image: '../assets/shoe5.png', title: 'Shoe 15', price: '$131'},
        {image: '../assets/shoe2.png', title: 'Shoe 16', price: '$330'},
        {image: '../assets/shoe3.png', title: 'Shoe 17', price: '$120'},
        {image: '../assets/shoe4.png', title: 'Shoe 18', price: '$430'},
        {image: '../assets/shoe.png', title: 'Shoe 19', price: '$530'},
        {image: '../assets/shoe2.png', title: 'Shoe 20', price: '$130'},
        
    ];
    products.map(product => isGrid ? addProductGrid(product.image, product.title, product.price) : addProduct(product.image, product.title, product.price));
}

const chageGridView = () => { 
    isGrid = !isGrid;
    let newClass = isGrid ? 'list-container-grid' : 'list-container';
    let oldClass = isGrid ?  'list-container' : 'list-container-grid';
    const list = document.querySelector(`.${oldClass}`);
    list.innerHTML = '';
    list.classList.remove(oldClass);
    list.classList.add(newClass);
    let filterIcon = isGrid ?  '../assets/grid-icon.png' : '../assets/list-icon.png';
    const gridImage = document.querySelector('.grid-filter');
    gridImage.src = filterIcon;
    getProducts();
}

const goToDetailPage = () => {
    window.location.href = '../ProductDetail/ProductDetail.html';
}

const goBack = () => {
    window.location.href = '../index.html';
}

getProducts();

const gridFilterButton = document.querySelector('.grid-filter');
gridFilterButton.onclick = chageGridView;

const backButton = document.querySelector('.back-icon');
backButton.onclick = goBack;