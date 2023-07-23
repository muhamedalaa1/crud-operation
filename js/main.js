var productNameInput = document.getElementById("pn");
var productPriceInput = document.getElementById("pp");
var productCategoryInput = document.getElementById("pc");
var productDescriptionInput = document.getElementById("pd");

// you must make raf 34an t7t 3leh el products ely 7t3rdha

var myElements = []; 

var index = 0;


if(localStorage.getItem("allProduct") != null){
  myElements = JSON.parse(localStorage.getItem("allProduct"));
  getDisplay();
}

// for adding products 
function getValues(){

// da kda m4 s7 34an el Performance bc el variables saved in memory so we dont need alot of variables

// solution to store it in object cuz all this vars desc one element

var product = {
  name: productNameInput.value,
  price: Number(productPriceInput.value),
  category: productCategoryInput.value,
  description: productDescriptionInput.value,
}


myElements.push(product);

console.log(myElements);

localStorage.setItem("allProduct",JSON.stringify(myElements));

clearValues();
getDisplay();

}


// for cleaning the values from inputs
function clearValues(){


productNameInput.value="";
productPriceInput.value= "";
productCategoryInput.value = "";
productDescriptionInput.value = "";


}



//for displaying the products
function getDisplay(){



    var cartona = "";
    for (var i = 0; i < myElements.length; i++ ) {



        cartona =
          cartona +
          `<tr>
                <td>${myElements[i].name}</td>
                <td>${myElements[i].price}</td>
                <td>${myElements[i].category}</td>
                <td>${myElements[i].description}</td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger" >Delete</button></td>
                <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning" >Update</button></td>
               </tr>`;
    }

   document.getElementById("tablebody").innerHTML = cartona;



}



// for deleting product
function deleteProduct (startElement){

    myElements.splice(startElement,1);
  localStorage.setItem("allProduct", JSON.stringify(myElements));
      getDisplay();
  
}




function searchProduct(term){
  var cartona = "";

  for (var i = 0; i < myElements.length; i++) {
    if (myElements[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
      cartona += `
  <tr>
    <td>${myElements[i].name}</td>
    <td>${myElements[i].price}</td>
    <td>${myElements[i].category}</td>
    <td>${myElements[i].description}</td>
    <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger" >Delete</button></td>
    <td><button  onclick="updateProduct(${i})" class="btn btn-outline-warning" >Update</button></td>
  </tr>
  `;
    }
  }

  document.getElementById("tablebody").innerHTML = cartona;

 
}



function updateProduct(indx) {

  
  productNameInput.value= myElements[indx].name;
  productPriceInput.value = myElements[indx].price;
  productCategoryInput.value = myElements[indx].category;
  productDescriptionInput.value = myElements[indx].description;

  document.getElementById("updateButton").style = "display: block;";
  document.getElementById("addProductButton").style = "display: none;";

  index =indx
  

}



function updateTheValues(){


  


  var product = {
    name: productNameInput.value,
    price: Number(productPriceInput.value),
    category: productCategoryInput.value,
    description: productDescriptionInput.value,
  };
myElements.splice(index, 1, product);

console.log(myElements);

localStorage.setItem("allProduct", JSON.stringify(myElements));

clearValues();
getDisplay();

document.getElementById("addProductButton").style = "display: block;";
document.getElementById("updateButton").style = "display: none;";

}
