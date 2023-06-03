class Components {
    constructor(id_name, name, img, classify, info) {
        this.id_name = id_name;
        this.name = name;
        this.img = img;
        this.classify = classify;
        this.info = info;
    }
    setID_name(id_name) {
        this.id_name = id_name;
    }
    getID_name(id_name) {
        thí.id_name = id_name;
    }
}

let electric = [];

function init() {
    if (window.localStorage.getItem('electric') == null) {
        electric = [{ id_name: "5", name: "resistor", img: "image/dientro.jpg", classify: "linh kiện thụ động", info: "còn hàng" }];
        window.localStorage.setItem('electric', JSON.stringify(electric));
    }
    else {
        electric = JSON.parse(window.localStorage.getItem('electric'));
    }
}

function renderComponents(data) {
    let htmls = data.map(function (components) {
        return `
            <tr>
                <td class="hide">${components.id_name}</td>
                <td>${components.name}</td>
                <td>
                    <img class='img' src='${components.img}' alt='' />
                </td>
                
                <td>${components.classify}</td>
                <td>${components.info}</td>
                <td>
                    <button class='click' onclick='removeComponents("${components.name}" )'>Remove</button>
                    <button class='click' onclick='editComponents("${components.name}" )'>Edit</button>
                </td>
            </tr>
        `
    })
    document.getElementById('list-components').innerHTML = htmls.join('')
}

function editComponents(name) {
    let result = electric.filter(function (elt) {
        return elt.name == name;
    })
    document.getElementById("id_name").value = result[0].id_name;
    document.getElementById("name").value = result[0].name;
    document.getElementById("img").value = result[0].img;
    document.getElementById("classify").value = result[0].classify;
    document.getElementById("info").value = result[0].info;
    document.getElementById("id_name").disabled = true;

}

function updateComponents() {
    let id_name = document.getElementById("id_name").value;
    for (let i = 0; i < electric.length; i++) {
        if (id_name == electric[i].id_name) {
            electric[i].name = document.getElementById("name").value;
            electric[i].img = document.getElementById("img").value;
            electric[i].classify = document.getElementById("classify").value;
            electric[i].info = document.getElementById("info").value;
        }
    }
    window.localStorage.setItem('electric', JSON.stringify(electric))
    renderComponents(electric);
}

function addComponents() {
    let id_name = document.getElementById('id_name').value;
    let name = document.getElementById('name').value;
    let img = document.getElementById('img').value;
    let classify = document.getElementById('classify').value;
    let info = document.getElementById('info').value;
    let newComponents = new Components(id_name, name, img, classify, info);
    electric.push(newComponents);
    window.localStorage.setItem('electric', JSON.stringify(electric))
    renderComponents(electric);
}

function search() {
    let keyword = document.getElementById('keyword').value;
    let result = electric.filter(function (elt) {
        return elt.name.toLowerCase().includes(keyword.toLowerCase()),
            elt.classify.toLowerCase().includes(keyword.toLowerCase()),
            elt.info.toLowerCase().includes(keyword.toLowerCase())
    })
    renderComponents(result)
}

function remove() {
    let name = document.getElementById('findComponents').value;
    let result = electric.filter(function (elt) {
        return elt.name != name;
    })
    window.localStorage.setItem('electric', JSON.stringify(result));
    renderComponents(result)
}

function removeComponents(name) {
    let confirmed = window.confirm('Are you sure ? ');
    if (confirmed == true) {
        let result = electric.filter(function (elt) {
            return elt.name != name;
        })
        window.localStorage.setItem('electric', JSON.stringify(result))
        renderComponents(result)
    }
}

init();
renderComponents(electric);