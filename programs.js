/*-------1a solution------*/
console.log((function(array){
    let sum='';
    for(let i=0;i<array.length;i++){
        if((array[i]%2)!==0){
            sum=sum+ array[i]+" ";   
        }
    } 
       return sum;
})([10,67,9]));

/*-------1b solution------*/
console.log((function(array_of_strings){
    let sum="";
    for(i=0;i<array_of_strings.length;i++){
       sum=sum+(array_of_strings[i].charAt(0).toUpperCase()+array_of_strings[i].slice(1))+" "
    }
    return sum;
})(["dharani","velkur","hi"]));

 /*-------1c solution------*/
 console.log(function(array){
    let sum=0;
    for(i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
 }([1,2,35,5]))

/*-------1d solution------*/
console.log(function(array){
   let sum=""
    for(i=0;i<array.length;i++){
        let flag=true;
        for(j=2;j<array[i];j++){
            if(array[i]===1){
                flag=false;
                break;
            }
            if(array[i]%j===0){
                flag=false;
                break;
            }
        }
        if(flag===true){
           sum=sum+ array[i]+" "
        }
       
        
    }
    
    return sum;
}([10,7,4,5]));

/*-------1e solution------*/
let array=["dad","12321","dharani"];
for(i=0;i<array.length;i++){
    if(array[i].split("").reverse().join("")===array[i]){
        console.log(array[i]);
    }
}

/*-------1f solution------*/
console.log(function(array1,array2){
   let arr= (array1.concat(array2)).sort((a,b)=>{
        return a-b;
    });
    
    if(arr.length%2===0){
        return (arr[arr.length/2]+arr[(arr.length/2)-1])/2;
    }else{
        return arr[(arr.length-1)/2];
    }
}([1,2],[4,5,6]));


/*-------1g solution------*/
console.log(function(array){
    let set=new Set(array);
    return Array.from(set);
}([1,2,3,4,4,3]));


/*-------3a solution------*/
let odd=(array)=>{
        let sum='';
        for(let i=0;i<array.length;i++){
            if((array[i]%2)!==0){
                sum=sum+ array[i]+" ";   
            }
        } 
           return sum;
    }
console.log(odd([1,2,3]));

/*-------3b solution------*/
let caps=(array_of_strings)=>{
        let sum="";
        for(i=0;i<array_of_strings.length;i++){
           sum=sum+(array_of_strings[i].charAt(0).toUpperCase()+array_of_strings[i].slice(1))+" "
        }
        return sum;
    }
    console.log(caps(['dharani','hatysuayd','hello']))

/*-------3c solution------*/
let sum=(array)=>{
        let sum=0;
        for(i=0;i<array.length;i++){
            sum=sum+array[i];
        }
        return sum;
     }
     console.log(sum([5,4,3]));

/*-------3d solution------*/
let prime=(array)=>{
       let sum=""
        for(i=0;i<array.length;i++){
            let flag=true;
            for(j=2;j<array[i];j++){
                if(array[i]===1){
                    flag=false;
                    break;
                }
                if(array[i]%j===0){
                    flag=false;
                    break;
                }
            }
            if(flag===true){
               sum=sum+ array[i]+" "
            }
           
            
        }
        
        return sum;
    }
    console.log(prime([3,5,6,2]));


