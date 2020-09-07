let button = document.getElementById('my-button');
let i = 1;
console.log(button);

button.onclick = clicker;

function clicker(){
    button.innerHTML=i;
    i ++
}
