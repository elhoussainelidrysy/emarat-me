$(document).ready(()=>{
    setTimeout(()=>{
      setTimeout(()=>{
        window.location.replace("otp.html");
      },1000)
      $("#otpMessageWaiting").hide();
      $("#otpMessageError").show();
      }, 30000);
})