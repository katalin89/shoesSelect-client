


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
//