function api(path,method,body=null){
    const url="http://localhost:8080/api/v1/"+path;

    const options={
        method,
        headers:{
            'Content-Type':'application/json;charset=utf-8',

        },
        mode:"cors"
    };

    if(body!==null){
        options.body=JSON.stringify(body);

    }
    return fetch(url,options);
} 

async function getAllShoes(){
    let data=await api("shoes",'GET');

    data=await data.json();

    return data;
}

async function getAllModels(){

    let data=await api("shoes/marci",'GET');

    data=await data.json();

    return data;

}

async function getAllShoesByModel(model){
    let data=await api(`shoes/${model}`,"GET");
    data=await data.json();
    console.log("data1:"+data);
    
    return data;
}
