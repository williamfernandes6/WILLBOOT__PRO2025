function gerarCodigo(horas) {
  const agora = new Date();
  const expira = new Date(agora.getTime() + horas * 60 * 60 * 1000);
  const codigo = `WBOOT-${horas}H-${agora.getFullYear()}${agora.getMonth()+1}${agora.getDate()}`;
  localStorage.setItem('vip_codigo', codigo);
  localStorage.setItem('vip_expira', expira.getTime());
  alert("Código VIP gerado: " + codigo + "\nAcesso liberado por " + horas + "h.");
  window.location.href = 'vip.html';
}
