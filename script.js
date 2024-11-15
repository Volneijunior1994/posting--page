
    const form = document.querySelector("#postForm");
    const titulo = document.querySelector("#titulo");
    const conteudo = document.querySelector("#mensagem");
    const renderizadorTitulo = document.querySelector("#renderizador-titulo");
    const renderizadorConteudo = document.querySelector("#renderizador-conteudo");
    

  
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = {
            title: titulo.value,
            body: conteudo.value,
            userId: 1
        };

        
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            renderizadorTitulo.innerHTML = data.title;
            renderizadorConteudo.innerHTML = data.body;
        })
        .catch((error) => console.error("Erro ao enviar post:", error));
    });

