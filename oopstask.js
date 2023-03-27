/*------------------1st pblm-------------*/
class Movie{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    setPG(arr){
        let arr1=[];
        for(let element of arr){
            if(element[2]==='PG'){
                arr1.push(element[0]);
            }
        }
        return arr1;
    }
   
 }
let film=new Movie("Casino Royale","Eon Productions","PG13")
let film2=new Movie("dharani","vs");
let arr=[Object.values(film),Object.values(film2)]
console.log(film.setPG(arr));

/*------------------3rd pblm-------------*/
class Person{
    constructor(name,age,gender,qualification){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.qualification=qualification;
    }
}
let person=new Person("rohan",24,"male",{
    tenth:"9.7",
    inter:"976",
    engg:"civil"
})
console.log(person.qualification);

/*------------------4th pblm-------------*/
class Price{
    constructor(kms){
        this.kms=kms;
    }

}
let uber=new Price(30);
let price_for_1km=10;
console.log(`The price for ${uber.kms} kms is ${uber.kms*price_for_1km} rupees`);
