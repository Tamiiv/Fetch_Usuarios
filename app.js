// Definición de variables
const url = 'https://jsonplaceholder.typicode.com/users'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalUsuario = new bootstrap.Modal(document.getElementById('modalUsuario'))
const formUsuario = document.querySelector('form')
const name = document.getElementById('name')
const username = document.getElementById('username')
const email = document.getElementById('email')
let opcion = ''

btnCrear.addEventListener('click', ()=>{
    nombre.value = ''
    nombreUsuario.value = ''
    correoElectronico.value = ''
    modalUsuario.show()
    opcion = 'crear'
})

// Funcion para mostrar los resultados
const mostrar = (usuarios) => {
    console.log(usuarios)
    usuarios.forEach(usuario => {
        resultados += `
                        <tr>
                            <td>${usuario.id}</td>
                            <td>${usuario.name}</td>
                            <td>${usuario.username}</td>
                            <td>${usuario.email}</td>
                            <td class="text-center">
                                <a class="btnEditar btn btn-warning">Editar</a>
                                <a class="btnBorrar btn btn-danger">Borrar</a>
                            </td>
                        </tr>
                    `
    })

    contenedor.innerHTML = resultados
}

// Procedimiento Mostrar
fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error))