let ordenarAscendente=true
 



let ordenarPorRelevancia=false

let filtroMinimo=13500

let filtroMaximo=undefined


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

function compararProductos(product1,product2){
  if(ordenarAscendente === false){
    let temporal=product1
    product1=product2
    product2=temporal
  }
  let valor1
  let valor2
  if (ordenarPorRelevancia===true){
   valor1=product1.soldCount
   valor2=product2.soldCount
  }else{
    valor1=product1.cost
    valor2=product2.cost
  }
  if(valor1 > valor2 ){
    return 1
  }else if (valor1 < valor2){
    return -1
  }else{
    return 0
  }
}
   


function mostrarProductos(products){
    let productsListDiv = document.getElementById("products_list")
    let productosOrdenados=products
      .filter((product)=>!(product.cost<filtroMinimo))
      .filter((product)=>!(product.cost>filtroMaximo))
      .sort(compararProductos)
    productsListDiv.innerHTML=""
    for (let product of productosOrdenados){
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

function cargarProductos(){
  mostrarProductosCategoria(localStorage.getItem("catID"))
}

window.addEventListener("load",function(){
    cargarProductos()
    document.getElementById("precioAsc").addEventListener("click",()=>{
      ordenarPorRelevancia=false
      ordenarAscendente=true
      cargarProductos()
    })
    document.getElementById("precioDesc").addEventListener("click",()=>{
      ordenarPorRelevancia=false
      ordenarAscendente=false
      cargarProductos()
    })
    document.getElementById("relevanciaDesc").addEventListener("click",()=>{
      ordenarPorRelevancia=true
      ordenarAscendente=false
      cargarProductos()
    })
    document.getElementById("filtrarPrecio").addEventListener("click",()=>{
      let minimo=document.getElementById("filtroPrecioMin").value
      let maximo=document.getElementById("filtroPrecioMax").value
      if(minimo===""){
        filtroMinimo=undefined
      }else{
        filtroMinimo=minimo
      }
      if(maximo===""){
        filtroMaximo=undefined
      }else{
        filtroMaximo=maximo
      }
      cargarProductos()
    })
})
