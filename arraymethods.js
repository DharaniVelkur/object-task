// Get all the countries from the Asia continent /region using the Filter function

let p=fetch("https://restcountries.com/v3.1/all");
p.then((response)=>{
    return response.json();
}).then(value=>{
        value.filter(element=>{
            return (element.region=="Asia")
        }).forEach(element => {
           console.log((element.name.common));
        });
    })

//Get all the countries with a population of less than 2 lakhs using Filter function
let p1=fetch("https://restcountries.com/v3.1/all");
p1.then((response)=>{
    return response.json();
}).then(value=>{
        value.filter(element=>{
            return (element.population<200000)
        }).forEach(element => {
           console.log((element.name.common));
        });
    })

//Print the following details name, capital, flag using forEach function
let p2=fetch("https://restcountries.com/v3.1/all");
p2.then((response)=>{
    return response.json();
}).then((value)=>{
    value.forEach(element => {
        console.log(`name:${element.name.common}, capital:${element.capital}, flag:${element.flag}`);
    });
})

//Print the total population of countries using reduce function
let p3=fetch("https://restcountries.com/v3.1/all");
p3.then((response)=>{
    return response.json();
}).then((value)=>{
    let array=[]
    value.filter(element=>{
        array.push( element.population);
    })
    let a=array.reduce((a,b)=>{
      return a+b;
    })
    console.log(a);
});


// Print the country which uses US Dollars as currency.
let p4=fetch("https://restcountries.com/v3.1/all");
p4.then((response)=>{
    return response.json();
}).then((value)=>{
    let zrrzy=[];
    value.filter((element)=>{
        if(element.currencies.hasOwnProperty('USD')){
            console.log(element.name.common);
        }
    })
})