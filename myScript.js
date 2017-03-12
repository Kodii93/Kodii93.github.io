 $(document).ready(function(){
     $('#wrapper').hide().fadeIn(3000);

     function validateForm(){
         var x = document.forms["myForm"]["firstNameInput"].value;
         if(x == ""){
             alert("Please Enter Your First Name");
             return false;
         }
     }
});
