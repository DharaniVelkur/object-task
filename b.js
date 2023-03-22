/*----------1st question----------*/
let obj1={name:"Person 1",age:5};
let obj2={age:5,name:"Person 1"};
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))


/*----------2nd question----------*/
let promise=fetch("https://restcountries.com/v3.1/all");
promise.then((response)=>{
    return response.json();
}).then(value=>{
    for(i=0;i<value.length;i++){
        console.log(value[i].flags);;
    }
});


/*----------3rd question----------*/
let promise1=fetch("https://restcountries.com/v3.1/all");
promise1.then((response)=>{
    return response.json();
}).then(value=>{
    for(i=0;i<value.length;i++){
        console.log(value[i].name.common,value[i].population,value[i].region,value[i].subregion);;
    }
});

