var mainObj = [];
function addRecord(regs,namee,addresss,emaill,course,markks)
{
  mainObj.push( {id:regs, name:namee,  address:addresss, email:emaill, clas:course, marks : markks } );
}
function remRecord(regs){

var removeIndex = mainObj.map(function(value) {
   return value.id; 
  }).indexOf(regs);
mainObj.splice(removeIndex, 1);
}
function updRecord(regs){
    mainObj.map(function(value) {
    
    value.couse = "web";
    value.email = "waqar@gmail.com";
    value.marks = 100;
    return "Data updated successfully"; 
   });
}
function displayRecord(regs){

  mainObj.map(function(value) {
    if(value.id === regs){
      console.log(value);
    }
});
}
function disWholeRecord(){
  console.log(mainObj);
}
addRecord(21,"imran","isb","imran@gmail.com","android",50);
addRecord(22,"hamza","rwp","waqar@gmail.com","designing",60);
addRecord(23,"junaid","rwp","junaid@gmail.com","developemnt",40);
remRecord(22); 
updRecord(23);
displayRecord(21);

