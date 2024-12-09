const ul = document.querySelector("ul");

function addList(e){
    const newLi = document.createElement("li");

    if(e.key === "Enter" && input.value == ""){
        alert("Digite algo na lista de tarefas");
    } else if(e.key === "Enter"){
        newLi.innerText = input.value;
        ul.appendChild(newLi);
        input.value = "";
    }
}

function removeList(){
    ul.removeChild(ul.lastElementChild);
}
 
const input = document.querySelector("input");
input.addEventListener("keyup", addList);

const botao = document.querySelector("button");
botao.addEventListener("click", removeList);
