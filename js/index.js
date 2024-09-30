// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
fetch('https://randomuser.me/api/')
.then(response => {
    return response.json()
})
.then(data => {
    //manipulamos la respuesta
    console.log(data);
    renderizarDatosUsuario(data);
});

    function renderizarDatosUsuario(data) {
        /* -------------------------------- CONSIGNA 1 -------------------------------- */
        // Aquí deben desarrollar una función que muestre en pantalla:
        // la foto, el nombre completo del usuario y su email.
        // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    let src
    let firstName, lastName
    let email
    for (let i = 0; i< data.results.length; i++){
             src = data.results[i].picture.large;
             firstName = data.results[i].name.first;
             lastName = data.results[i].name.last;
             email = data.results[i].email;
        }
        
        const div =  document.querySelector('.tarjeta')
        const img = document.createElement('img')
        img.setAttribute('src', src)
        div.appendChild(img)
        div.appendChild(document.createElement('hr'))

        const nombre = document.createElement('p')
        nombre.classList.add('nombre')
        nombre.innerText = `Nombre: ${firstName+ " " + lastName}`
        div.appendChild(nombre)
        // const hr = document.createElement('hr')
        div.appendChild(document.createElement('hr'))
        const correo = document.createElement('p')
        correo.classList.add('email')
        correo.innerText = `Email: ${email}`
        div.appendChild(correo)
        
    }

/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.
        const random = document.querySelector('#random')
        random.addEventListener('click', () => {
            fetch('https://randomuser.me/api/')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log(data);
                btn(data);
            });
        })


        function btn(data) {
            let src
            let firstName, lastName
            let email
            for (let i = 0; i< data.results.length; i++){
                     src = data.results[i].picture.large;
                     firstName = data.results[i].name.first;
                     lastName = data.results[i].name.last;
                     email = data.results[i].email;
                }
                const img = document.querySelector('img')
                img.setAttribute('src', src)
                const nombre = document.querySelector('.nombre')
                nombre.innerText = `Nombre: ${firstName+ " " + lastName}`
                const correo = document.querySelector('.email')
                correo.innerText = `Email: ${email}`
        }
