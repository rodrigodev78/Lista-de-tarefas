function addNaLista(e){
    const ul = document.querySelector("ul");
    const novoLi = document.createElement("li");

    if(e.key === "Enter" && input.value == ""){
        alert("Digite algo na lista de tarefas");
    } else if(e.key === "Enter"){
        novoLi.innerText = input.value;

        const botaoRemover = document.createElement("button");
        botaoRemover.innerHTML = "Excluir item";
        botaoRemover.addEventListener("click", () =>{
            ul.removeChild(novoLi);
        });

        novoLi.appendChild(botaoRemover);
        ul.appendChild(novoLi);
        input.value = "";
    }
}

function removerDaLista(){
    const ul = document.querySelector("ul");
    ul.removeChild(ul.lastElementChild);
}
 
const input = document.querySelector("input");
input.addEventListener("keyup", addNaLista);
