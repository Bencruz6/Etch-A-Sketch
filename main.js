const cont = document.getElementById("container");

createGrid(64);
function createGrid(n){

if (cont) {
    cont.innerHTML="";

    for (let i = 1; i <= n; ++i) {

    
        const col = document.createElement("div");
        col.id = "col";

        createRow(col);

        cont.appendChild(col);



    }

    function createRow(col) {
        let j = 1;
        while (j <= n) {
            const d1 = document.createElement("div")
            d1.classList.add("d");
            d1.addEventListener("mouseover", () => {
                
                d1.style.backgroundColor = `rgb(${Math.floor(Math.random()*128)},${Math.floor(Math.random()*128)},${Math.floor(Math.random()*128)})`;
                
            })
            col.appendChild(d1);
            j++;
        }


    }






}
else {
    console.log("not found")
}

}

const btn = document.getElementById("btn");
// 
btn.addEventListener("click", () => {

    let x = 'x';
    while (isNaN(x) || x>100 ) {
         x=prompt("Enter the number of rows for the new sketch pad (0-80) (only figures!)");
         console.log(x);
    }

    createGrid(x);
    

})