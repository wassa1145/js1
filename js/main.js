const products = [
	{ id: 1, title: 'Notebook', price: 2000 },
	{ id: 2, title: 'Mouse', price: 20 },
	{ id: 3, title: 'Keyboard', price: 200 },
	{ id: 4, title: 'Gamepad', price: 50 },
];
// Функция для форматирования верстки каждого товара
const renderProduct = (item, img = 'images/product1.jpg') => {
	const { title, price } = item;
	return `<div class="product-item">
		<image src=${img} alt=${title} class="product-image">
		<h3>${title}</h3>
		<p>${price}</p>
		<button class="buy-btn">Купить</button>
	</div>`;
}	
const renderPage = list => {
	const img = 'images/product1.jpg'
	const productsList = list.map(item => renderProduct(item, img));
	// запятая после каждого товара выводилась, из-за того, что мы передавали массив, чтобы это исправить нужно массив преобразовать в строку.
	document.querySelector('.products').innerHTML = productsList.join(' ');
};

renderPage(products);

