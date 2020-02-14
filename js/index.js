function typeWriter(texto){    const textoArray = texto.innerHTML.split("")
        texto.innerHTML = ""
        textoArray.forEach((letra, i) => {
            setTimeout(() => texto.innerHTML  += letra, 75 * i)
    })
    }
    
    const title = document.querySelector("h1")
    typeWriter(title)