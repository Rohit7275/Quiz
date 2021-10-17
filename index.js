
/* add animation to radio button */

let check = document.getElementsByClassName("checkmark");
let radioActive = document.querySelectorAll(".option");
let option = document.getElementsByClassName("options");

for(let a = 0 ; a < option.length ; a++) {
  for(let x = 0 ; x < option[a].children.length ; x++) {
    option[a].children[x].addEventListener('click', function() {
      for(let y = 0 ; y < option[a].children.length ; y++) {
        if( y !== x) {
          option[a].children[y].classList.remove("activeRadio");
        }
      } 
      option[a].children[x].classList.add("activeRadio");
    });
  }
}

/* checking answers */

let form = document.querySelector("form");
const correctAnswers = ['A', 'B', 'D', 'B', 'C', 'A', 'A', 'B', 'B', 'C', 'A'];
let submit = document.querySelector(".submitBtn");
let score = 0;
let result = 0;

form.addEventListener('submit', e => {

  /* prevent default submit actions */

  e.preventDefault();

  /* calculate score in percentage */

  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value, form.q11.value];
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]) {
      score = score + 1;
      // console.log(answer);
      // console.log(index);
      // console.log(form.q4.value);
      result = ((score) / (option.length)) * 100;
    }
    // else {
    //   // console.log(answer);
    //   // console.log(index);
    // }

    /* remove display none style from result container */

    document.querySelector(".result").style.display = "block";

    /* scroll window to top */

    window.scrollTo(0, 0);

    /* displaying score in the page*/

    result = parseInt(result);
    let finalscore = document.querySelector(".result span");
    
    let output = 0;
    const timer = setInterval(() => {
      finalscore.textContent = output + "%";
      if(output === result) {
        clearInterval(timer);
      }
      else {
        output++;
      }
    }, 10);
  });

  /* highlighting right answers */
  console.log(option);
  var arr = Array.prototype.slice.call(option);
  console.log(arr);
  // let input = document.querySelectorAll("input");
  arr.forEach((container ,index) => {
    for(let i = 0 ; i < container.children.length ; i++) {
      if(container.children[i].children[1].value === correctAnswers[index]) {
        container.children[i].style.backgroundColor = "#4AC948";
      }
      else if(container.children[i].children[1].value === userAnswers[index]) {
        container.children[i].style.backgroundColor = "#FF4500";
      }
    }
  });
});


let reset = document.querySelector(".resetBtn");
reset.addEventListener('click', () => {
  form.reset();
  // console.log("hi");
  window.location.reload();
  window.scrollTo(0, 0);
});

