////////////////////////Q1//////////////////////////////////////////////////////////////////////////////////
// interface Persone {
//     name:string,
//     age:number,

// };
// const Hani:Persone={
//     name:"Hani",
//     age:22,
// }
// if(Hani.age>18){
//     console.log("True")
// }
// else{
//     console.log("False")
// }

///////////////////////Q2////////////////////////////////////////////////////////////////////////////////////

// interface Teacher {
//     name:string,
//     subject:string[],


// };
// const Moh:Teacher={
//     name:"Hani",
//     subject:["Math" , "Science" , "Chemistry"],
// }
// console.log(`Name: ${Moh.name} , Subjects: ${Moh.subject}`)

//////////////////////Q3//////////////////////////////////////////////////////////////////////////////////////

// interface Products{
// name : any ,
// price : any ,
// quantity : any

// }

// let Fruits:Products[]=[
//     {name : "Apple", price : 10,quantity:10,},
//     {name : "Orange",price:4, quantity:20},
//     {name:"Banana" , price:15, quantity:15}
// ]

// Fruits.forEach(element => {
//     if(element.quantity>5)
//         {element.price*=0.015 

//         }
//         console.log(element.price)
// });

//////////////////////Q4///////////////////////////////////////////////////////////////////////////////////////

interface Products {
    name: any,
    Description: any,
    price: any,
    quantity: any
}

function store() {
    var Pname = (document.getElementById('name') as HTMLInputElement)?.value;
    var Pdescription = (document.getElementById("description") as HTMLInputElement)?.value;
    var Pprice = (document.getElementById("price") as HTMLInputElement)?.value;
    var Pquantity = (document.getElementById("quantity") as HTMLInputElement)?.value;

    localStorage.setItem("Pname", Pname);
    localStorage.setItem("Pdescription", Pdescription);
    localStorage.setItem("Pprice", Pprice);
    localStorage.setItem("Pquantity", Pquantity);

    store1();
}


function store1() {


    var productList = document.getElementById("productList");
    if (productList) {
        productList.innerHTML += `${localStorage.getItem("Pname")}
    ${localStorage.getItem("Pdescription")}
    ${localStorage.getItem("Pprice")}
    ${localStorage.getItem("Pquantity")}`
    }
}