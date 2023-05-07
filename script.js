function generateRandomNumber(){
  const min=parseInt(document.getElementById("LowerLimit").value);
  const max=parseInt(document.getElementById("UpperLimit").value);
  const randomNum=Math.floor(Math.random()*(max-min+1))+min;
  document.getElementById("result").innerHTML=randomNum;
}