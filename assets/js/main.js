function myScope(){
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.paragrafo-resultado');
  

  form.addEventListener('submit',giveAlert);

  function giveAlert(event){
    event.preventDefault();

    const peso = form.querySelector('#input-peso');
    const altura = form.querySelector('#input-altura');

    const resultadoIMC = calcularIMC(Number(peso.value),Number(altura.value));
    const categoria = categorizarIMC(resultadoIMC);

    const inputPeso = Number(peso.value);
    const inputAltura = Number(altura.value);

    if(!inputPeso){
      setResultado(`Invalid Weight`,false);
      return; 
    }else if(!inputAltura){
      setResultado(`Inavlid Height`,false);
      return; 
    }else{
      setResultado(`Your BMI is ${resultadoIMC} ${categoria}`,true);
      return; 
    }
  }

  function calcularIMC(peso,altura){
    const IMC = peso / altura**2;
    if(IMC != NaN && IMC >0){
      return IMC.toFixed(1);
    }else{
      return null;
    }
  }

  function categorizarIMC(IMC){

    if(IMC>0 && IMC<18.5){
      return 'Underweight';
    }else if(IMC>=18.5 && IMC<24.9){
      return 'Healthy Weight';
    }else if(IMC>=24.9 && IMC<=29.9){
      return 'Overweight';
    }else if(IMC>=30 && IMC<=34.9){
      return 'Obesity Class 1';
    }else if(IMC>=35 && IMC<=39.9){
      return 'Obesity Class 2';
    }else if(IMC>40){
      return 'Obesity Class 3';
    }else{
      return null;
    }
  }

  function setResultado(msg, valid){
    resultado.innerHTML = msg;

    if(valid){
      resultado.style = `
      background-color: rgb(110, 192, 110);
      color: white;
      border-radius: 12px;
      padding: 4px;
      font-weight: bold;`;
    }else{
      resultado.style = `
      background-color: rgb(249, 71, 71);
      color: white;
      border-radius: 12px;
      padding: 4px;
      font-weight: bold;`;
    }
    
  }
}

myScope();
