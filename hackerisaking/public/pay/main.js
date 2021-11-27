(() => {
    const p = location.href.replace(/http:\/\/192.168.1.2:69\/\?/g, '');
    const product = p.split('product=')[1];
    switch(product) {
        case 'hosting':     
            desSet('King Hacker hosting');
            imgSet('./src/images/server.jpg');
            createButtons('Pay $420 for 1 month', 'Pay $621 for 4 months');
            break;
        case 'buisness': 
            desSet('King Hacker buisness starter');    
            imgSet('./src/images/buisness.jpg');
            createButtons('Pay $69 for 1 month', 'G̸̼̺̏̓̈ͅȉ̷͈̺͋v̴̩̯͇̂e̷̖͎͂͝ ̵̡̢̫̈́̀͠s̵̨̘̔̄o̶̖̻͋͝ù̶̜͊l̴͇͋̄̈');
            break;
        case 'secure': 
            desSet('King Hacker site secure');    
            imgSet('./src/images/secure.png', 180);
            createButtons('$999', '$3 for 333 months');
            break;
        default: 
            desSet('King Hacker Appreciation Subscription');     
            imgSet('./src/images/crown.png');
            createButtons('Pay $69 for 1 month', '$42 for 12 minutes');
    }
})();

function desSet(text) {
    const span = document.querySelector('.description');
    span.innerHTML = text;
}

function imgSet(src, width=250, height=180) {
    const img = document.querySelector('.image');
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
    img.src = src;
}

function createButtons(one, two) {
    const form = document.querySelector('.form');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button1.setAttribute('class', 'checkout');
    button2.setAttribute('class', 'checkout');
    button1.innerHTML = one;
    button2.innerHTML = two;
    form.appendChild(button1);
    form.appendChild(button2);
}