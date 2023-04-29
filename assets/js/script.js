//Arreglo de objetos a desplegar
let propiedades = [
    {name: "Acogedor departamento", img: "https://imgar.zonapropcdn.com/avisos/1/00/45/52/13/91/1200x1200/1712783987.jpg", rooms: 2, m2: 60, detail: "Bonito departamento con gran vista"},
    {name: "Bonita casa", img: "https://th.bing.com/th/id/R.e3093e7d547f041b1d27eb54f5a8b660?rik=YWTsrFFzB4xNbg&pid=ImgRaw&r=0", rooms: 4, m2: 150, detail: "Comoda casa ideal para familia"},
    {name: "Depto a inaugurar", img: "https://www.construyehogar.com/wp-content/uploads/2015/07/Dise%C3%B1o-de-sala-de-departamento-peque%C3%B1o.jpg", rooms: 2, m2: 55, detail: "Pequeño departamento ideal para home office"},
    {name: "Casa en condominio", img: "https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2018/10/row-of-townhomes.jpg?fit=1024%2C684&ssl=1", rooms: 3, m2: 100, detail: "Casa pequeña en condominio tranquilo"},
    {name: "Departamento Studio", img: "https://www.lamansiondelasideas.com/wp-content/uploads/2017/04/5-Decoracion-de-apartamentos-con-habitacion-en-gris.jpg", rooms: 1, m2: 40, detail: "Departamento Home Studio ideal para teletrabajo"},
    {name: "Lindo departamento", img: "https://www.nyhabitat.com/picture-ny-apt/18079/18079D01.jpg", rooms: 2, m2: 58, detail: "Departamento nuevo en exclusivo condominio"},
    {name: "Amplio departamento", img: "https://th.bing.com/th/id/R.25e8c60076408aba7d04bb9ff6d60088?rik=2PmgK%2fQV6p1ClA&riu=http%3a%2f%2fwww.proartenterijer.com%2fuploads%2fuploaded_pictures%2f_content_products%2f1200x550%2fadaptation-of-the-apartment-52.jpg&ehk=9bdhv2pGSwZNuX7v2O6aU4F0BBjD8370MaHl4eYFK4M%3d&risl=&pid=ImgRaw&r=0", rooms: 4, m2: 120, detail: "Departamento nuevo con gran terraza"},
];

//Ejecucion inicial para desplegar todos los objetos del arreglo
sendPropiedades();

//Se asocia el filtro de busqueda a la funcion de despliegue de los objetos
const btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    const inputRooms = document.querySelector('#inputRooms').value;
    const inputMinM2 = document.querySelector('#inputMinM2').value;
    const inputMaxM2 = document.querySelector('#inputMaxM2').value;
    if(inputRooms == "" || inputMinM2 == "" || inputMaxM2 == ""){
        alert("Faltan campos por ingresar.")
    }
    else {
        let nrooms = [Number(inputRooms)];
        let maxm2 = Number(inputMaxM2);
        let minm2 = Number(inputMinM2);
        console.log(nrooms,minm2,maxm2);
        sendPropiedades(nrooms,minm2,maxm2);
    }
})

//Funcion principal del despliegue de los objetos con parametros y valores por defecto para primera ejecucion
function sendPropiedades(nrooms=propiedades.map(propiedad => propiedad.rooms), minm2 = -1, maxm2 = 100000) {
    let html = "";
    const products = document.querySelector('#products');
    for (let propiedad of propiedades) {
        if( nrooms.includes(propiedad.rooms) && propiedad.m2 >= minm2 && propiedad.m2 <= maxm2 ) {
            html += `
            <div class="card">
                <img src=${propiedad.img} alt=${propiedad.name} class="card-img-top">
                <div class="card-body">
                    <h5>${propiedad.name}</h5>
                    <p class="card-text">Cuartos: ${propiedad.rooms}</p>
                    <p class="card-text">Superficie: ${propiedad.m2}m2</p>
                    <p class="card-text">${propiedad.detail}</p>
                    <a href="#" class="btn btn-light">Ver más</a>
                </div>
            </div>
            `}
        };
    if (html == ""){
        products.innerHTML = `<p class="no-results">No hay resultados que coincidan con su búsqueda</p>`;
    }
    else {
        products.innerHTML = html;
    }
};


