let text = document.querySelector(".insideInput");
let btn = document.querySelector(".btn");
let out = document.querySelector(".out");
let score = document.querySelector(".score");

let ques = 0;
let correct = 0;

btn.addEventListener('click', ()=>{
    let val = text.value;
    val = val.trim();
    let start = 0;
    let end = val.length-1;
    ques += 1;
    while(start < end){
        if(val.charAt(start) != val.charAt(end)){
            score.innerText = `Score: ${correct} out of ${ques}`;
            out.innerText = "Oops!! Wrong.";
            out.style.color = "#E21717";
            return;
        }
        start += 1;
        end -= 1;
    }
    out.innerText = "Yeah!! You Got That Right.";
    out.style.color = "#EDC126";
    correct += 1;
    score.innerText = `Score: ${correct} out of ${ques}`;
});

function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}