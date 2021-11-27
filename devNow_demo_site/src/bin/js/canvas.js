let selector = '/';

function setup() {
    createCanvas(undefined, undefined, 0, 0, [50]);
    selector = urlParamaters(location.href)[0].value;
    console.log(selector);
    switch(selector) {
        case 'refresh':
            addText('help', 'Click on the page to refresh the canvas.', 20, '#ffffff');
            rectangleEl((WIDTH/2)-50, (HEIGHT/2)-50, 100, 100, 0, [255]);
            circleEl(100, 100, 10, 0, [255, 0, 0]);
            window.onclick = () => { refresh(); }
        break;
        case 'circle':
            circleEl(WIDTH/2, HEIGHT/2, 50, 0, [200, 200, 0]);
        break;
        case 'rectangle':
            rectangleEl((WIDTH/2)-50, (HEIGHT/2)-50, 100, 100, 0, [200, 0, 50]);
        break;
        case 'line':
            lineEl([0, 0], [WIDTH, HEIGHT], 10, [255, 255, 255]);
        break;
        case 'collision':
            let pos = [[pointerX, pointerY], [100, 100]];
            let size = [[80, 80], [50, 50]];
            setInterval(() => {
                refresh();
                pos[0][0] = pointerX;
                pos[0][1] = pointerY;
                rectangleEl(pos[0][0], pos[0][1], size[0][0], size[0][1], 0, [200, 0, 50]);
                rectangleEl(pos[1][0], pos[1][1], size[1][0], size[1][1], 0, [200, 0]);
                if(collisionDetectionCanvas(pos[0], pos[1], size[0], size[1], 0)) {
                    addText('coll', 'Collision!', 40, '#ffffff');
                } else {
                    addText('coll', 'No collision.', 40, '#ffffff');
                }
            }, 10);
        break;
        case 'image':
            imageEl((WIDTH/2)-100, (HEIGHT/2)-50, 200, 100, '/src/images/canvas_image.jpg');
        break;
        case 'capture':
            addText('coll', 'Allow the website to use your camera...', 40, '#ffffff');
            let src = capture(CAMERA);
            setInterval(() => { 
                refresh(); 
                CANVAS.drawImage(src, 200, 200);
            }, 10);    
        break;
        case 'read_file':
            readFile('https://www.w3.org/TR/PNG/iso_8859-1.txt', (data) => {
                addText('result', data.toString(), 20, '#ffffff');
            });
        break;
        default:
            document.write('<h1>Error 404, demo not found. Sorry. :(</h1>');
    }
}
        
function loop() {
}