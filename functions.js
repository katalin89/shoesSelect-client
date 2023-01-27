function createRow(shoes){
    let tr=document.createElement("tr");

    tr.innerHTML=
    `<td>${shoes.id}</td>
    <td>${shoes.model}</td>
    <td>${shoes.material}</td>
    <td>${shoes.culoare}</td>
    <td>${shoes.pret}</td>
    `

    return tr;
}

function attachRows(arr){
    let container=document.querySelector(".container");
    container.innerHTML="";
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }
}

function returnModelele(arr){
    let arrNou;
    for(let i=0;i<arr.length;i++){
        arrNou.appendChild(arr[i].model);
    }
    return arrNou;
}

function returnModel(data,model){
    for(let o=0;i<arr.length;i++){
        if(data[i].marca==marca){
            return data[i].marca;
        }
    }

    retunr -1;
}

function createOptions(modele){
    let models=document.querySelector(".modele");
    for(let i=0;i<modele.length;i++){
        let options=document.createElement('option')
        options.value=modele[i];
        options.textContent=modele[i];

        modele.appendChild(option);
    }
}