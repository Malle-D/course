var summa = document.querySelector("#input")
var sel= document.querySelector("#select");
var elForm = document.querySelector(".form")
var elOutput = document.querySelector("#output")


elForm.addEventListener("submit", function(e){
   e.preventDefault();
   if(summa.value == ""){
      elOutput.textContent = ("Son kirgizmadingiz")
   }
   else{
      elOutput.textContent = (summa.value * sel.value).toFixed(2)
   }
})