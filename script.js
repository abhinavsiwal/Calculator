function gethistory(){
    return document.getElementById("history-value").innerText;
 }
 function printhistory(num){
      document.getElementById("history-value").innerText=num;
 }
 function getoutput(){
     return document.getElementById("output-value").innerText;
 }
 function printoutput(num){
     if (num=="") {
         
         document.getElementById("output-value").innerText=num;
     }
     else{
         document.getElementById("output-value").innerText=getFormattedNumber(num);
 
     }
 }
 function getFormattedNumber(num){
     if(num=="-"){
         return "";
     }
     let n = Number(num);
     let value = n.toLocaleString("en");
     return value;
 
 }
 function reversenumberformat(num){
     return Number(num.replace(/,/g,''));
 }
 
 let operator= document.getElementsByClassName("operator");
 for (let i = 0; i <operator.length; i++) {
    operator[i].addEventListener('click',function(){
     if (this.id=="clear") {
         printhistory("");
         printoutput("");
     }
    else if (this.id=="backspace") {
         let output = reversenumberformat(getoutput()).toString();
         if (output) {//if output has a value
             output=output.substr(0,output.length-1);
             printoutput(output);
         }
     }
     else{
         
         let output=getoutput();
         let history=gethistory();
         if (output!="") {
             output=reversenumberformat(output);
             history=history+output;
             if (this.id=="=") {
                 let result = eval(history);
                 printoutput(result);
                 printhistory("");
             }
             else{
                 history=history+this.id;
                 printhistory(history);
                 printoutput("");
             }
         }
     }
    })
 }
 let numbers = document.getElementsByClassName("numbers");
 for(let i=0;i<numbers.length;i++){
     numbers[i].addEventListener('click',function(){
        
        let output = reversenumberformat(getoutput());
        if (output!=NaN) {//if output is no
            output=output+this.id;
            printoutput(output);
        }
 
        printoutput(output);
     })
 
 }