 $(document).ready(function(){
     $('#wrapper').hide().fadeIn(3000);

     function validateForm(){
         var x = document.forms["myForm"]["firstNameInput"].value;
         var y = document.forms["myForm"]["lastNameInput"].value;
         var z = document.forms["myForm"]["emailInput"].value;
         if(x == ""){
             alert("Please Fill In The Required Boxes");
             return false;
         }
     }
});
