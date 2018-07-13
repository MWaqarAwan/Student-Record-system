var mainArray=[];
var i=0;
function addRecord(name,regs,address,email,course)
{
  var info=[name,regs,address,email,course];
  mainArray.push(info);
}
function remRecord(name){
 mainArray.map(function(value){
    if(value[0]===name){
      mainArray.splice (value,1);
    }
    });
}
function updRecord(name){
  mainArray.map(function(value){
    if(value[0]===name){
       value[1]=1111;
       value[4]="Web";
    }
    });
}
function displayRecord(name){
  mainArray.map(function(value){
    if(value[0]===name){ 
      console.log(value); 
  }
    });
}
function disWholeRecord(name){
  mainArray.map(function(value){
      console.log(value);
    });
}
addRecord("haya",234,"isb","haya@gmail.com","graphics");
addRecord("ayesha",702,"wah","ayesha@gmail.com","web");
addRecord("junaid",003,"rwp","junaid@gmail.com","10th");
remRecord("haya"); 
updRecord("ayesha");
displayRecord("haya");
