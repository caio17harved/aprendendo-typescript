// Import stylesheets
import './style.css';

//declaração do title com string
let title: string = "Myapp";
document.getElementById('app.title').innerHTML = title;


let counter: number = 0;

let intervalId = setInterval(() => {
  counter++;
  let counterDiv = document.getElementById('app.counter').innerHTML = counter.toString()
}, 1000);






for(let counter = 1; counter <=  20; counter++){
  console.log(counter);

if(counter == 20){
for(let counter = 20; counter >= 10; counter--){
      console.log(counter);
    }
  }
}






