/**sendmail*/
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
      'g-recaptcha-response': document.getElementByClassName("g-recaptcha").value,
    };
  
    const serviceID = "service_v66b9lr";
    const templateID = "template_sm224aw";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
          document.getElementByClassName("g-recaptcha").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
      })
      .catch(err=>console.log(err));
  }
  
  $(document).ready(function() {
      $(document).on('submit', '#contactform', function() {
        // do your things
       return false;
       });
  });
  
  /**recaptcha verification*/
  document.getElementById("contactform").addEventListener("submit",function(evt)
    {
    
    var response = grecaptcha.getResponse();
    if(response.length == 0) 
    { 
      //reCaptcha not verified
      alert("please verify you are humann!"); 
     evt.preventDefault();
     return false;
    }
    //captcha verified
    //do the rest of your validations here
    
  });
