const bodyEl = document.querySelector("body");


bodyEl.addEventListener("mousemove", (evente) => {
    const xpos = evente.offsetX;
    const ypos = evente.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xpos + "px";
    spanEl.style.top = ypos + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px" 
    spanEl.style.height = size + "px" 
    bodyEl.appendChild(spanEl);
    setTimeout(() =>{
        spanEl.remove();
    }, 3000);
});