function main() {
    const query = new URLSearchParams(location.search);

    const title_element = document.getElementById('title');
    const image_element = document.getElementById('product_image');

    const title = query.get('title');
    const image = query.get('image');

    if(!title) {
        title_element.innerHTML = 'No product title provided!!!';
        return;
    }

    if(!image) {
        title_element.innerHTML = 'No product image provided!!!';
        return;
    }
    
    title_element.innerHTML = title;
    image_element.src = `../assets/images/products/${image}`;
}

window.onload = main;