
// function addComponents() {
//     let name = document.getElementById(name).value;
//     let img = document.getElementById(img).value;
//     let classify = document.getElementById(classify).value;
//     let info = document.getElementById(info).value;
//     let components = new Components(name, img, classify, info)
//     manage.addComponents(components);
//     manage.showList();
//     clear();
// }
// function clear() {
//     document.getElementById(name).value = '';
//     document.getElementById(img).value = '';
//     document.getElementById(classify).value = '';
//     document.getElementById(info).value = '';
// }
// function deleteComponents(id) {
//     manage.delete(id);
//     manage.showList();
// }

// let componentsId = 0;
// function editComponents(id) {
//     let components = manage.findComponentsById(id);
//     document.getElementById(name).value = components.name;
//     document.getElementById(img).value = components.img;
//     document.getElementById(classify).value = components.classify;
//     document.getElementById(info).value = components.info;
//     componentsId = id;
// }
// function updateComponents() {
//     let name = document.getElementById(name).value;
//     let img = document.getElementById(img).value;
//     let classify = document.getElementById(classify).value;
//     let info = document.getElementById(info).value;
//     let components = manage.findListById(componentsId);
//     manage.edit(components, name, img, classify, info);
//     manage.showList();
//     clear();
// }

// let arr =[components];
// let electric = new Components( 'điện trở', 'image/dientro.jpg', 'Rdfdfd','sadasdasdasdasdasdasdas' );
// let manage = new ComponentsManagement(arr);
// manage.showList();
