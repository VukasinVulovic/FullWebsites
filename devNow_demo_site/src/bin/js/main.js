function setup() {
    readFile('/src/bin/projects/config.json', (data) => {
        let config_file = JSON.parse(data).projects;
        for(let i = 0; i < config_file.length; i++) {
            let project = config_file[i];
            grab('wrapper', 'class')[0].innerHTML += 
            `<div class="tile" onclick="run('src/bin/projects/${project.folder}/index.html')">
                <img src="src/bin/projects/${project.folder}/thumbnail.png" style="width:100%">
                <div class="tile-text">
                    <h4><b>${project.name}</b></h4> 
                    <p>${project.description}</p> 
                </div>
            </div>`;
            if(i%3 == 0 && i != 0) {
                grab('wrapper', 'class')[0].innerHTML += '<br>';
            }
        }
    });
}

function run(path) {
    open(path, '');
}

function loop() {
    // if(config_file != '') {
    //     print(config_file[0]);
    // }
}

