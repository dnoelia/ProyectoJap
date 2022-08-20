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
    fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
        .then(response =>response.json())
        .then(response=>mostrarProductos(response.products))
})
