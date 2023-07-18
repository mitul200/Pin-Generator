function getPin (){
    const pin = generatPin ()
    const pinstring = pin + '';
    if(pinstring.length === 4){
        return pin;
    }
    else{
      return getPin ()
    }
}

function generatPin (){
    const random = Math.round(Math.random()*10000)
    return random
}

document.getElementById('generate-button').addEventListener('click',function(){
   const pin = getPin ();
   const generateInputfield = document.getElementById('form-input-field');
   generateInputfield.value =pin;  
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number =  event.target.innerText;
    const typeInputfield =  document.getElementById('type-input-field');
    const typeInputfieldNumber= typeInputfield.value;
    if(isNaN(number)){
        // console.log(number)
        if(number === 'C'){
            typeInputfield.value = '';
        }
        else if(number === '<'){
           const digits = typeInputfieldNumber.split('');
           digits.pop()
           const remainingDisits = digits.join('')
           typeInputfield.value = remainingDisits;
        }
    }
    else{ 
        const typeInputFieldSum = typeInputfieldNumber + number;
        typeInputfield.value = typeInputFieldSum; 
    }

})
document.getElementById('submit-btn-field').addEventListener('click',function(){
   const newtypeInputfield=document.getElementById('type-input-field');
   const newtypeInputfieldNumber = newtypeInputfield.value;
   const newgenerateInput = document.getElementById('form-input-field');
   const newgenerateInputNumber =newgenerateInput.value;
   const incurrentpin = document.getElementById('Incorret-pin')
   const currentpin = document.getElementById('corret-pin')
   if( newtypeInputfieldNumber === newgenerateInputNumber){
    
    currentpin.style.display ='block'
    incurrentpin.style.display ='none'
   }
   else{
    
    incurrentpin.style.display ='block'
    currentpin.style.display ='none'
   }
})