const cont = document.getElementById("container");



if (cont) {

    for (let i = 1; i <= 16; ++i) {

        const col = document.createElement("div");
        col.id = "col";

        createRow(col);
       
        cont.appendChild(col);



    }

    function createRow(col) {
        let j = 1;
        while (j <= 16) {
            const d1 = document.createElement("div")
            d1.id = "d";
            d1.addEventListener("mouseover",()=>{
                d1.style.backgroundColor="grey";
            })
            col.appendChild(d1);
            j++;
        }


    }






}
else {
    console.log("not found")
}


const btn=document.getElementById("btn");