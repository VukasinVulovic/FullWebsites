let tags = document.getElementsByTagName('code');
for(tag of tags) {
    tag.onclick = (element) => {
        let command = element.target.innerText;
        let start = command.slice(0, command.indexOf('(')+1);
        let middle = element.target.title;
        let end = command.slice(command.indexOf(';')-1);
        if(middle) {
            end = ``;
            start = middle;
        }
        let whole = start + end;
        console.log(whole);
        let src = 'https://cdn.jsdelivr.net/gh/VukasinW/devNowJS/devNow_6_preivew.js';
        if(middle.slice(0, 1) == '%') {
            open(middle.slice(1), 'pp');
        } else {
            open(`javascript:(function () {document.write('<body><script type="text/javascript" src="${src}"></script></body>'); setTimeout(() => {let ret = ${whole}; document.body.innerHTML += '<p>' + ret || '' + '</p>'; }, 100);})();`, 'pp', 'width=400, height=400');
        }
    }
}

let searchable_items = [], searchable_tags = [];
for(let tag of document.getElementsByTagName('code')) {
    searchable_items.push(tag.innerHTML);
    searchable_tags.push(tag);
}

function searchElement() {
    let value = grab('search_bar', 'class')[0].value;
    for(let tag of searchable_tags) {
        tag.style = '';
    }
    if(value != '') {
        let found = search(value, searchable_items, false);
        if(found.length > 0) {
            for(let item of found) {
                for(let tag of searchable_tags) {
                    if(tag.innerHTML == item) {
                        tag.style.backgroundColor = 'rgb(223, 156, 0)';
                        tag.style.color = 'rgb(255, 255, 255)';
                    }
                }
            }
        } else {
            console.table('Item not found... :(');
            for(let tag of searchable_tags) {
                tag.style = '';
            }
        }
    }
}
