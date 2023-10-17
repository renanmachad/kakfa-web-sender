// TODO: Save configs to send message to topic in localStorage

function handleAddTopic(event) {
    // Obtém o valor do campo de entrada
    const topic = document.getElementById("topic").value;

    // Adiciona o tópico ao menu suspenso
    const select = document.getElementById("topic-list");
    const option = document.createElement("option");
    option.value = topic;
    option.text = topic;
    select.appendChild(option);
}

// Vincula o evento click ao botão
document.getElementById("add-topic").addEventListener("click", handleAddTopic);
function send() {
    // Envia a mensagem para o servidor
    const topic = document.querySelector("#topic").value;
    const message = document.querySelector("#message").value;
    const data = {
        topic,
        message
    };
    htmx.post("/send", data);
}

// Atualiza a lista de mensagens
let htmx;
htmx.subscribe("/messages", (data) => {
    const messages = document.querySelector("#messages");
    messages.innerHTML = data;
}).then(r => console.log(r));
