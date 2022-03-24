const cards = document.getElementById('cards');
const tablas = document.getElementById('tabla');


let tabla = document.getElementById('tabla');

const consumirApli = async()=>{
    const res = await fetch('data/Bd.json');
    const data = await res.json();
    data.forEach(item =>{
        cards.innerHTML+=
        `
        <div class="col-12 col-md-4">
            <div class="card text-center">
                <img src="${item.logoMarca}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.marca}</h5>
                    <p class="card-text">${item.MotivoVisita}</p>
                    <a href="#" class="btn btn-primary">Historico</a>
                </div>
            </div>
        </div>
        `


        // `
        // <tr>
        //     <td>${item.id}</td>
        // </tr>
        // <tr>
        //     <td>${item.placa}</td>
        // </tr>
        // <tr>
        //     <td>${item.marca}</td>
        // </tr>
        // <tr>
        //     <td>${item.logoMarca}</td>
        // </tr>
        // <tr>
        //     <td>${item.modelo}</td>
        // </tr>
        // <tr>
        //     <td>${item.propietario}</td>
        // </tr>
        // <tr>
        //     <td>${item.FecVisitas}</td>
        // </tr>
        // <tr>
        //     <td>${item.MotivoVisita}</td>
        // </tr>
        // <tr>
        //     <td>${item.articulosComprados}</td>
        // </tr>
        // <tr>
        //     <td>${item.fecCompr}</td>
        // </tr>
        // <tr>
        //     <td>${item.valorCompra}</td>
        // </tr>
        // `
    });
    console.log(data);
}

consumirApli();