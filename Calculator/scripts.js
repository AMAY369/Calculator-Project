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
      if(operation==='+' || operation==='-' || operation==='*' || operation==='/' ){
        calculation+=' '+operation+' ';
      }
      else{
        calculation+=operation;
      }
      displayCalculation.innerHTML=calculation;
      localStorage.setItem('calculation',calculation);
    }

    function pressedKey(key){
      if(key<=9 ){
        updateCalculator(key);
      }
      else if(key==='+' || key==='-'|| key==='*' || key==='/' || key==='.'){
        updateCalculator(key);
      }
      else if(key==='Enter' || key==='='){
        updateCalculator('=')
      }
      else if(key==='Backspace'){
        calculation=Math.floor(calculation/10);
        if(calculation==0){
          calculation='';
        }
        displayCalculation.innerHTML=calculation;
        localStorage.setItem('calculation',calculation);
      }
      else if(key==='Delete'){
        updateCalculator('clear');
      }
    }