
let btnAdd=document.querySelector(".add");
let inp1=document.getElementById('model');
let inp2=document.getElementById('material');
let inp3=document.getElementById('culoare');
let inp4=document.getElementById('pret');

let listContainer=document.querySelector(".container");

getAllShoes().then(data=>
    {
        console.log("data:"+data);
        attachRows(data);
    }
    );  


let model=document.querySelector(".modele");
model.addEventListener("change",(e)=>{
    getAllShoesByModel(model.value).then((data)=>{
        console.log(model.value);
        attachRows(data);
            console.log("data:"+data);
        
    })
})


btnAdd.addEventListener("click",()=>{
    let pantof={model:inp1.value,material:inp2.value,culoare:inp3.value,pret:+inp4.value};
    addShoes(pantof).then(data=>{
        let container=document.querySelector(".container");
        let s=createRow(data);

        container.appendChild(s);
    })

})

let containerSlect=document.querySelector(".modele");
getAllModels().then(data=>{
    creteOptions(data);
})