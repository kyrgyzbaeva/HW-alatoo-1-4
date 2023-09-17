let newImage = document.querySelector("img");
let count = 0;
newImage.onclick = () => {
    if(count % 2 == 0){
        newImage.setAttribute("src","images/logo.jpg");
    } else {
        newImage.setAttribute("src","images/mem-2-1024x683.jpg");
    }
    count ++;
}



const clicker = document.getElementById('clicker');

clicker.addEventListener('click', () => {
    const name = prompt('Please, write your name.');
  
    if(!name) {
      alert('Besides, the wrong value was entered');
      return;
    }
  
    alert(`Welcome, ${name}!`);
});