// let function10=setTimeout(function(callback){
//     document.getElementById('id1').innerHTML="10";
// },1000)

// let function9=setTimeout(function(){
//     document.getElementById('id1').innerHTML="9";
// },2000)
// function10()
let function10=(callback)=>{
    setTimeout(()=>{document.getElementById("id1").innerHTML="10"},1000)
    callback();
}
let function9=()=>{
    setTimeout(()=>{document.getElementById("id1").innerHTML="9"},2000)
    setTimeout(()=>{document.getElementById("id1").innerHTML="8"},3000)
    setTimeout(()=>{document.getElementById("id1").innerHTML="7"},4000)
    setTimeout(()=>{document.getElementById("id1").innerHTML="6"},5000)
    setTimeout(()=>{document.getElementById("id1").innerHTML="5"},6000)
    setTimeout(()=>{document.getElementById("id1").innerHTML="4"},7000)
    setTimeout(()=>{document.getElementById("id1").innerHTML="3"},8000)
    setTimeout(()=>{document.getElementById("id1").innerHTML="2"},9000)
    setTimeout(()=>{document.getElementById("id1").innerHTML="1"},10000)
    setTimeout(()=>{document.getElementById("id1").innerHTML="HAPPY INDEPENDENCE DAY"},11000)
}
function10(function9);

// let function8=function(){
//     return "8";
// }
// let function7=function(){
//     return "7";
// }
// let function6=function(){
//     return "6";
// }
// let function5=function(){
//     return "5";
// }
// let function4=function(){
//     return "4";
// }
// let function3=function(){
//     return "3";
// }

// let promise=new Promise((resolve,reject)=>{
//     setTimeout(resolve(document.getElementById('id1').innerHTML="10"),1000)
// })
// promise.then(()=>{
//    return new Promise((resolve,reject)=>{
//         setTimeout(resolve(document.getElementById('id1').innerHTML="9"),2000)
//     })
// })