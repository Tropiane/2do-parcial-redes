const productSection = document.getElementById("catalogo");

async function getData(url){
    try {
        const response = await fetch(url);
        
        if(!response.ok){
            throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(`Error al obtener los datos: ${error}`);
    }
}

async function createProductCard(){
    const data = await getData("http://localhost:3000/api").then((data) => data);
    console.log(data);
    if(!data || data.length === 0){
        productSection.innerHTML = "<p>No se encontraron productos</p>";
        return;
    }

    data.forEach((product)=>{
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
        <h3>${product.nombre}</h3>
        <img src="${product?.imagen}">
        <p>${product.descripcion}</p>
        <button>Comprar</button>
        `;
        productSection.appendChild(productCard);
    })
}

createProductCard();