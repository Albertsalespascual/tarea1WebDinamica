let maxNum = 4;
let minNum = 1;
const file = '/ejercicio1/media/img/image'
function cambiarImagen(){
    const randomNum = (Math.floor((Math.random()*(maxNum-minNum+1))+minNum));
    document.getElementById('paisaje').setAttribute('src',`${file}${randomNum}.jpg`);
   
}
document.getElementById('paisaje').addEventListener("click",cambiarImagen);
   
