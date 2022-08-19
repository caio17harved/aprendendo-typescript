// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log("ola mundo");

//laços
for(let i = 1; i <=  10; i++){
  console.log(i);
}

//lqços e condicionais
for(let i = 1; i <= 10; i++){
  if(i%2==0){
    console.log("Os numeros para são:" + " "+ i)
  }
}


