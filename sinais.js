const alertSound = document.getElementById('alerta');
const painel = document.getElementById('painel');
const multiplicadores = [2,3,5,10,20,30,40,50,100,200,500,1000];

function gerarSinal() {
  const agora = new Date();
  const minutos = agora.getHours().toString().padStart(2, '0') + ':' + agora.getMinutes().toString().padStart(2, '0');
  let html = '';
  multiplicadores.forEach(multi => {
    const chance = Math.floor(Math.random() * 100);
    const cor = chance >= 80 ? '🟢' : (chance >= 60 ? '🟡' : '🔴');
    html += `<p>${cor} ${minutos} | ${multi}x+ possível | Confiança: ${chance}%</p>`;
  });
  painel.innerHTML = html;
  alertSound.play();
}

function verificarCodigo() {
  const codigo = localStorage.getItem('vip_codigo');
  const expira = localStorage.getItem('vip_expira');
  const agora = new Date().getTime();
  if (codigo !== "Willboot230220" && (!codigo || (expira && agora > expira))) {
    alert("Acesso VIP expirado ou inválido. Adquira um plano.");
    window.location.href = "planos.html";
  }
}

verificarCodigo();
gerarSinal();
setInterval(gerarSinal, 60000);
