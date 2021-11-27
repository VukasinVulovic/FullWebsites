(() => {
    const p = location.href.replace(/http:\/\/192.168.1.2:69\/\?/g, '');
    const product = p.split('product=')[1];
    const span = document.querySelector('.info');
    switch(product) {
        case 'host':  
            span.innerHTML = 'Website hosting one one of the most premium servers(home PC) and on the fastest optical internet connection(200Mbps)';   
            break;
        case 'buisness': 
            span.innerHTML = 'If you want to start a business and are a lazy peice of shit, order this.';
            break;
        case 'secure': 
            span.innerHTML = 'Does your web designer not know how to make a secure site?<br>Than let me fix the issue.';
            break;
        default: 
            span.innerHTML = 'This will be the best experience of your pathetic mortal life.';
    }
})();