const params = new URLSearchParams(window.location.search);
const name = params.get('n') || 'Usuario';
const uid = params.get('u') || '---';

document.getElementById('userName').innerText = name;
document.getElementById('userId').innerText = uid;

function openChat(tipo) {
  window.$chatwoot.toggle();

  if (tipo === 'cargar') {
    window.$chatwoot.sendMessage({
      content: `Hola, quiero cargar saldo. Mi usuario es ${uid}`
    });
  }

  if (tipo === 'retirar') {
    window.$chatwoot.sendMessage({
      content: `Hola, quiero retirar fondos. Mi usuario es ${uid}`
    });
  }
}
