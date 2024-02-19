let calculation = (localStorage.getItem('calculation'))|| '';
    displayCalculation();

    function calculate(operation){
      if(operation==='='){
        calculation= eval(calculation);
      }
      else{
        calculation+=operation;
      }
      localStorage.setItem('calculation',(calculation));
      displayCalculation();
    }

    function removeDigit(){
      if(calculation.endsWith(' ')){
        calculation= calculation.slice(0,-3);
      }
      else{
        calculation= calculation.slice(0,-1);
      }
      displayCalculation();
    }

    function displayCalculation(){
      localStorage.setItem('calculation',(calculation));
      document.querySelector('.js-calculation').value = calculation||0;
    }