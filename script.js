
window.onload = function() {
  //alert("carregou");
  showProducts();

};

function getProducts(){
  return data["items"];
}

function showProducts(){
  let productDiv = document.getElementById("products-div");
  productDiv.innerHTML =  `${getProducts().map((produto)=>`
  <div class="product-item">
  <img src="${produto["product"]["images"][0]}" class="product-img" />
  <div class="text-name">
    <h3 class="product-name"> ${produto["product"]["name"]}</h3>
  </div>
  <div class="text-price">
    <p class="product-price"> ${Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', {minimumFractionDigits:2, style:'currency',currency:'BRL'})} </p>
  </div>
  </div>
  `).join("")}`
 
}

const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function(e){
  let inputProductName = document.getElementById("product-name").value;
  let inputProductPreco = document.getElementById("product-price").value;
  let inputProductFoto = document.getElementById("product-img").value;

  let novoItem = {
    "product":{
      "name":"",
      "images":[],
      "price":{
        "value":0,
      },
    },
  }

  novoItem["product"]["name"] = inputProductName;
  novoItem["product"]["price"]["value"] = inputProductPreco;
  novoItem["product"]["images"].push(inputProductFoto);

  data["items"].push(novoItem);
  showProducts();
  
  resetForm(document.getElementById("form-add-product"));
  e.preventDefault();

});

function resetForm(form){
  form.reset(); 
}    