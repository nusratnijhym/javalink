/* and end with console.log(Math.random()*100);
console.log(Math.floor(Math.random()*6)+1);
console.log(Math.floor(Math.random()* 30) + 71);



function updatecaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNnmber = caseInput.value;
    if(isIncreasing ==true){
        classNumber = parseInt(caseNnmber) + 1;
        //caseInput.value = parseInt(caseNnmber) + 1;
    }
    else if(caseNnmber > 0){

    classNumber = parseInt(caseNnmber) -1;

       // caseInput.value = parseInt(caseNnmber) -1;
    }
    // update case total
   const caseTotal = document.getElementById('case-total');
   caseTotal.innerText = caseNnmber * 59 ;
}

document.getElementById("case-plus").addEventListener("click", 
function(){
    updatecaseNumber(true);
   // const caseInput = document.getElementById('case-number');
    //const caseNnmber = caseInput.value;
   // caseInput.value = parseInt(caseNnmber) + 1;
    
});
document.getElementById("case-minus").addEventListener("click", 
function(){
    updatecaseNumber(false);
   // const caseInput = document.getElementById('case-number');
  //  const caseNnmber = caseInput.value;
   // caseInput.value = parseInt(caseNnmber) -1;
});/* and end with */