//creating a function to close the chart UI.

let c = document.querySelector("#close");
c.addEventListener("click", () =>{
    document.querySelector(".container").remove()
})

