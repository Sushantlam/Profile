function sendMail() {
    var params = {
      name: document.getElementById("user_name").value,
      email: document.getElementById("user_email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_vdsgn1n";
    const templateID = "template_1sbpjqu";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("user_name").value = "";
          document.getElementById("user_email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }