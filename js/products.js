function mostrarProductosCategoria(categoria){
  getJSONData(PRODUCTS_URL+categoria+EXT_TYPE)
    .then(result =>{
      if(result.status==="ok"){
        mostrarProductos(result.data.products)
      }
      else{
        alert("No se pudo cargar la categoria seleccionada")
      }

    })
}
function mostrarProductos(products){
    let productsListDiv = document.getElementById("products_list")
    for (let product of products){
        productsListDiv.innerHTML+=`
          <div>
            <h3>${product.name} ${product.currency} ${product.cost}</h3>
            <span>${product.soldCount} Vendidos</span>
            <p class="products_description">${product.description}</p>
            <img src="${product.image}" class="products_img">

          </div>
        `

    }
    
}
window.addEventListener("load",function(){
    mostrarProductosCategoria(localStorage.getItem("catID"))
})
