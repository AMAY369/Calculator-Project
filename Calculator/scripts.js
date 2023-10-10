let calculation=localStorage.getItem('calculation')|| '';
    let displayCalculation = document.querySelector('.js-display-calculation');
    displayCalculation.innerHTML=calculation;

    function updateCalculator(operation){
      if(operation==='='){
        calculation=eval(calculation);
        displayCalculation.innerHTML=calculation;
        localStorage.setItem('calculation',calculation);
        return;
      }
      if(operation ==='clear'){
        calculation ='';
        displayCalculation.innerHTML='';
        localStorage.setItem('calculation',calculation);
        return;
      }
      calculation+=operation;
      displayCalculation.innerHTML=calculation;
      localStorage.setItem('calculation',calculation);
    }