//function scuberGreetingForFeet(custerRide){
  //let result
  function scuberGreetingForFeet(customerRide){
    if (customerRide <= 400) {
      return "This one is on me!";
    } else if (customerRide > 400 && customerRide <= 2000) {
      return "That will be twenty bucks.";
    } else if (customerRide > 2000 && customerRide <= 2500) {
      return "I will gladly take your thirty bucks.";
    } else if (customerRide > 2500) {
      return "No can do.";
    }
  }

  
    
  


function ternaryCheckCity(City){
   
  if(City == "NYC"){
    return "Ok, sounds good."
}else{
  return "No go."
}
  
}

function switchOnCharmFromTip(tip){
 if(tip == "generous"){
   return "Thank you so much."
 }else if(tip === "not as generous"){
    return "Thank you."
 }else{
   return "Bye."
 }
  
   
 
}