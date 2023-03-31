let para=document.querySelector("#hid");
let btn=document.querySelector("button");
let pattern=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/ig;
btn.addEventListener("click",check);
function check(event) {
    let inp=document.querySelector("input").value;
    if(pattern.test(inp)){
        console.log("done");
    }else{
        event.preventDefault();
        para.style.display="block";
    }
}