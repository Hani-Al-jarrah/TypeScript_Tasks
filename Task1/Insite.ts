// interface Person {
//     name: string;
//     age: number;
//     greet(): void; 
// }

// const user: Person = {
//     name: "Hani",
//     age: 22,
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// };

// user.greet(); 
///////////////
interface Car {
    brand: string;
    model: string;
    year: number;
}

const myCar: Car = {
    brand: "Kia",
    model: "Cerato",
    year: 2006
};

console.log(myCar.brand); 


//////////////

// const products = [
//     { name: "Laptop", description: "High-performance laptop with 16GB RAM.", price: 1200 },
//     { name: "Smartphone", description: "Latest smartphone with amazing camera.", price: 800 },
//     { name: "Headphones", description: "Noise-canceling wireless headphones.", price: 250 }
// ];


// function loadProducts():void{

//     let div1 = document.getElementById("products");

//     if(div1 ){
//         div1.innerHTML="";
//     products.forEach(element => {


//         div1.innerHTML +=`
//             <strong> name: </strong> ${element.name}<br>
//             <strong> description: </strong> ${element.description}<br>
//             <strong> price: </strong> ${element.price}<br>
//             <hr>
            
//             `

//     });
// }
// }

// document.getElementById("btn")?.addEventListener("mouseover", loadProducts);










// ----------------------------------------------
// 1️ Defining an Interface in TypeScript
// ----------------------------------------------
// This interface defines a blueprint for a Product object.
// interface Product {
//     name: string;        
//     description: string; 
//     price: number;       
//   }
  
//   // Example object that follows the Product interface
//   const singleProduct: Product = {
//     name: "Laptop",
//     description: "A high-end gaming laptop with powerful features.",
//     price: 2000
//   };
  
//   console.log("Single Product:", singleProduct); // Output to console
  
  // ----------------------------------------------
  // 2️ Defining an Object Structure Using Interfaces
  // ----------------------------------------------
  //&&&&
   // ----------------------------------------------
  // 3️ Defining an Array Inside an Interface
  // ----------------------------------------------
  // This interface defines a Store that contains an array of products.
  // This interface includes an array of product names.

//   interface Store {
//     storeName: string;   
//     products: Product[]; 
//   }
  
//   // Example store object
//   const myStore: Store = {
//     storeName: "Tech Shop",
//     products: [
//       { name: "Laptop", description: "Gaming Laptop", price: 1500 },
//       { name: "Mouse", description: "Wireless Mouse", price: 50 }
//     ]
//   };
  
//   console.log("Store Details:", myStore); // Output store details
  
//   // ----------------------------------------------
//   // 4️ Define an Array of Objects & Load It into HTML
//   // ----------------------------------------------
//   // Creating an array of products using the Product interface
//   const products: Product[] = [
//     { name: "Laptop", description: "High-end gaming laptop", price: 2000 },
//     { name: "Smartphone", description: "Latest model smartphone", price: 999 },
//     { name: "Headphones", description: "Noise-canceling headphones", price: 150 }
//   ];
  
//   /**
//    * Function to load products dynamically into the HTML page.
//    * It finds the product list container and adds each product as a list item.
//    */
//   function loadProducts(): void {
//     const productList = document.getElementById("product-list"); // Get the UL element
  
//     if (productList) {
//       productList.innerHTML = ""; // Clear previous content before adding new items
  
//       // Loop through each product and create list items dynamically
//       products.forEach((product) => {
//         const li = document.createElement("li"); // Create a list item
//         li.innerHTML = `<strong>${product.name}</strong>: ${product.description} - 
//                         <span style="color: green;">$${product.price}</span>`;
//         productList.appendChild(li); // Append the list item to the UL
//       });
//     }
//   }
  
