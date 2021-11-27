function downloadFile() {
	let link = document.createElement('a');
	document.body.appendChild(link);
	link.download = 'devNow_6.js';
    let file = readFile('/src/bin/lib/devNow_6.js', (data) => {
        link.href = 'data:text/plain; charset=utf-8,' + encodeURIComponent(data);
        link.click();
        document.body.removeChild(link);
    });
}
