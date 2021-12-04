(() => {
    let cards = [
        {
            title: 'Pizza Margarita',
            image: './assets/images/products/pizzas/margarita.jpg',
            info: 'It was this chef who invented a dish called "Pizza Margherita", to honour the Queen and the Kindgom of Italy.',
            price: '4<sup>99</sup>RSD <small> 30cm </small>',
            link: '/product/?title=Pizza%20Margarita&image=pizzas/margarita.jpg'         
        },
        {
            title: 'Panini Sandwich',
            image: './assets/images/products/sandwiches/panini.jpg',
            info: 'A panini or panino is a sandwich made with Italian bread, usually served warmed by grilling or toasting.<br>In many English-speaking countries,<br>the name panini is given to a grilled sandwich made from any type of bread.',
            price: '1<sup>99</sup>RSD <small> per item </small>',
            link: '/product/?title=Panini%20Sandwich&image=sandwiches/panini.jpg'         
        },
        {
            title: 'Chocolate Frappe',
            image: './assets/images/products/drinks/frappe_coffee.jpg',
            info: 'A frappé coffee, Greek frappé, Nescafé frappé, or just frappé is a Greek iced coffee drink made from instant coffee, water, sugar, and milk.',
            price: '3<sup>99</sup>RSD <small> 400ml </small>',
            link: '/product/?title=Chocolate%20Frappe&image=drinks/frappe_coffee.jpg'         
        }
    ];

    function createCard(card) {
        const li = document.createElement('li');
        li.setAttribute('class', 'card');

        const img = document.createElement('img');
        img.setAttribute('class', 'image');
        img.alt = card['title'];
        img.src = card['image'];
        li.appendChild(img);

        const div = document.createElement('div');
        div.setAttribute('class', 'text');

        const h1 = document.createElement('h1');
        h1.setAttribute('class', 'title');
        h1.innerHTML = card['title'];
        div.appendChild(h1);

        const p = document.createElement('p');
        p.setAttribute('class', 'info');
        p.innerHTML = card['info'];
        div.appendChild(p);

        div.innerHTML += '<hr>';

        const span = document.createElement('span');
        span.setAttribute('class', 'price');
        span.innerHTML = card['price'];
        div.appendChild(span);

        const button = document.createElement('button');
        button.setAttribute('class', 'cartBtn');
        button.innerHTML = 'Add To Cart <i class="fas fa-cart-plus"></i>';
        div.appendChild(button);

        const a = document.createElement('a');
        a.setAttribute('class', 'infoLink');
        a.href = card['link'];
        a.target = '_blank';
        a.innerHTML = 'More info';
        div.appendChild(a);

        li.appendChild(div);
        return li;
    }

    cards = cards.map(card => createCard(card));

    scrollTo(0, 0);
    document.querySelector('.cards').appendChild(cards[0]);

    let i = 0;
    let prev = 0;

    const userScroll = e => {
        if(e.deltaY > 0) {
            if(i < cards.length - 1)
                i++;
            else
                document.body.style.overflowY = 'auto';
        } else if(i > 0) {
            document.body.style.overflowY = 'hidden';
            scrollTo(0, 0);
            i--;
        }
        
        if(prev === i)
            return;
        
        document.querySelector('.cards').innerHTML = '';
        document.querySelector('.cards').appendChild(cards[i]);
        prev = i;
    }

    window.addEventListener('wheel', userScroll);

    const nav_icons = [
        {
            icon: '<i class="fas fa-pizza-slice"></i>',
            name: 'Pizzas'
        }, 
        {
            icon: '<i class="fa fa-hamburger" title="Sandwiches"></i>',
            name: 'Sandwiches'
        }, 
        {
            icon: '<i class="fa fa-cocktail" title="Drinks"></i>',
            name: 'Drinks'
        }
    ]; 

    const sizeChanged = e => {
        if(window.innerWidth/window.innerHeight < 2) {
            document.querySelector('.cards .card').style.flexFlow = 'wrap';
            
            let i = 0;
            document.querySelectorAll('.navBar .navItem a').forEach(item => {
                if(item.getAttribute('href') !== '/' && item.getAttribute('href') !== '/cart')
                    item.innerHTML = nav_icons[i++].icon;
            });
        } else {
            document.querySelector('.cards .card').style.flexFlow = '';
            
            let i = 0;
            document.querySelectorAll('.navBar .navItem a').forEach(item => {
                if(item.getAttribute('href') !== '/' && item.getAttribute('href') !== '/cart')
                    item.innerHTML = nav_icons[i++].name;
            });
        }
    }

    window.addEventListener('resize', sizeChanged);
    window.addEventListener('orientationchange', sizeChanged);
    sizeChanged();

    // let supportsPassive = false;
    
    // try {
    //     window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    //         get: function () { supportsPassive = true; } 
    //     }));
    // } catch(e) {}

    // const scroll = x => window.scrollBy(0, window.innerHeight * (x ? -1 : 1));

    // function onScroll(e) {
    //     scroll(e.deltaY > 0);
    //     e.preventDefault()
    // }

    // window.addEventListener('DOMMouseScroll', onScroll, false); // older FF
    // window.addEventListener('onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel', onScroll, supportsPassive ? { passive: false } : false); // modern desktop
    // window.addEventListener('touchmove', onScroll, supportsPassive ? { passive: false } : false); // mobile

})();