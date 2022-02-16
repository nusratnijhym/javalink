function updatecaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNnmber = caseInput.value;
    if(isIncreasing ==true){
        classNumber = parseInt(caseNnmber) + 1;
        
    }
    else if(caseNnmber > 0){

    classNumber = parseInt(caseNnmber) -1;
    }
    // update case total
   const caseTotal = document.getElementById('case-total');
   caseTotal.innerText = caseNnmber * 59 ;
}
document.getElementById("case-plus").addEventListener("click", 
function(){
    updatecaseNumber(true);
  
});
document.getElementById("case-minus").addEventListener("click", 
function(){
    updatecaseNumber(false);
  
});
    