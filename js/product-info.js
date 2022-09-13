getJSONData(PRODUCT_INFO_URL+ localStorage.getItem("id Producto")+EXT_TYPE)
    .then((json)=>mostrarProducto(json.data))

function mostrarProducto(product){
    let htmlImagenes=""
    for(let image of product.images){
         htmlImagenes +=`<img src="${image}" width="300px" height="200px">`
    }
    let divInfoProducto=document.getElementById("info-producto")
    divInfoProducto.innerHTML=`
    <h1>${product.name}</h1>
    <div class="columna-flex">
     <div>
       <h2>Precio:</h2>
       <span> ${product.cost} ${product.currency}</span>
     </div>
     <div>
       <h2>Descripción</h2>
       <p>${product.description}</p>
     </div>
     <div>
       <h2>Categoria:</h2>
       <span>${product.category}</span>
     </div>
     <div>
       <h2>Cantidad de Vendidos:</h2>
       <span>${product.soldCount}</span>
     </div>
     <div>
       <h1>Imagenes Ilustrativas</h1>
       <div class="contenedor-img">
       ${htmlImagenes}
       </div>
     </div>
    </div>
    `
}
