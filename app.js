let counter = 0;
const counter_screen = document.querySelector(".counter");
const decrese_btn = document.querySelector(".decrese");
const reset_btn = document.querySelector(".reset");
const increse_btn = document.querySelector(".increse");

function reset() {
    counter_screen.innerHTML= 0;
    ;
}

decrese_btn.addEventListener('click', ()=>{
    counter_screen.innerHTML= counter--;
});

increse_btn.addEventListener('click', ()=>{
    counter_screen.innerHTML= counter++;

});

reset_btn.addEventListener('click', ()=>{
    reset();
});

