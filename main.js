

const huits = document.querySelectorAll('.huit');

let minutes = 24;
let secondes = 0;



const timer = setInterval(()=>{
  let tmp = "";
  if (minutes < 10) {
    tmp += "0" + minutes;
  } else {
    tmp += minutes;
  }
  if (secondes < 10) {
    tmp += "0" + secondes
  } else {
    tmp += secondes;
  }

  for (let i = 0; i < huits.length; i++) {
    const huit = huits[i];
    const number = tmp[i];
  }

  if (secondes === 0) {
    if (minutes === 0) {
      clearInterval(timer);
    } else {
      minutes --;
      secondes = 59;
    }
  } else {
    secondes --;
  }
}, 1);