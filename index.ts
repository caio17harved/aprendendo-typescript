// Import stylesheets
import './style.css';

//declaração do title com string
let title: string = "Myapp"
const appDiv: HTMLElement = document.getElementById('app');
//dentro do h1 colocando o template string 
appDiv.innerHTML = `
<h1>${title}</h1>
<hr/>
<p>Paragrafo qualquer</p>
`;


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




