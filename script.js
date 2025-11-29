function createGrid(quantity){
    const grid=document.querySelector(".grid");
    grid.innerHTML="";
    for(let a=1;a<=(quantity*quantity);a++){
        const box=document.createElement("div");
        box.classList.add("box");
        box.style.flexBasis=`calc(100%/${quantity})`;
        box.style.aspectRatio="1/1";
        grid.appendChild(box);
    }

    const container=document.querySelectorAll(".box");
    container.forEach(box =>{
        box.addEventListener("mouseenter",()=> {
            let red=Math.floor(Math.random()*256);
            let green=Math.floor(Math.random()*256);
            let blue=Math.floor(Math.random()*256);
            box.style.backgroundColor =`rgb(${red},${green},${blue})`;
        });
    });
}
createGrid(16);

const clear=document.querySelector(".clear");
clear.addEventListener("click",() =>{
    let input=prompt("Enter a number between 1 to 50 (16 is default value)");
    while(input<1 || input>50) input=prompt("Please Enter a number between 1 to 50");
    createGrid(input);
})