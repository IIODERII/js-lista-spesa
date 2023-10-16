const listaSpesa = [] ;

const msg = document.querySelector('.list');

let product
do{
    product = prompt('Aggiungi un prodotto alla lista della spesa')
    listaSpesa.push(product)

}while(product.toLowerCase() !== 'stop');


listaSpesa.splice(listaSpesa.length-1, 1);

for (let i = 0; i < listaSpesa.length; i++) {
    msg.innerHTML += '<li>' + listaSpesa[i] + '</li>'
}