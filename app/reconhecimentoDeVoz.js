const elementoChute = document.getElementById('chute')

// Verifica se o navegador suporta a biblioteca SpeechRecognition,
// se não, usa o webkitSpeechRecognition como uma alternativa
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// Define o idioma como "pt-Br" (português brasileiro)
recognition.lang = 'pt-Br'
recognition.start()

// Adiciona um evento para ser chamado quando o reconhecimento de voz é concluído, chamando a função "onSpeak"
recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
    // Pega o texto reconhecido
    chute = evento.results[0][0].transcript
    // Chama a função "exibeChuteNaTela" para exibir o texto reconhecido na tela
    exibeChuteNaTela(chute)
}

function exibeChuteNaTela(chute) {
    // Exibe o texto reconhecido na tela usando innerHTML
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `
}
