// function getPin (){
//     const pin = generatePin()
//     let pinstring = pin + '';
//     if(pinstring.length === 4){
//         return pin;
//     }
//     else{
//         return getPin ();
//     }
// }


// function generatePin (){
//     const random  = Math.round(Math.random()*10000);
//     return random;
// }


// document.getElementById('generate-button').addEventListener('click',function(){
//    const getPinId =  getPin();
//    const formInputField = document.getElementById('form-input-field');
//    formInputField.value = getPinId;
// })

// document.getElementById('calculator').addEventListener('click',function(event){
//     const number  = event.target.innerText
//     // console.log(number);
//     const typeInputfield = document.getElementById('type-input-field')
//     const typeInputfieldString = typeInputfield.value;
//     if(isNaN(number)){
//         if (number === 'C'){
//             typeInputfield.value = '';
//         }
//         else if(number === '<'){
//             const digits = typeInputfieldString.split('')
//             digits.pop();
//             const remainingDisits = digits.join('')
//             typeInputfield.value = remainingDisits;
             
//         }
//     }
//     else{
//      const typeInputFieldSum = typeInputfieldString + number;
//      typeInputfield.value = typeInputFieldSum;
//     }
// })

// document.getElementById('submit-btn-field').addEventListener('click',function(){
//     const newtypeInputfield = document.getElementById('type-input-field');
//     const  newtypeInputfieldNumber = newtypeInputfield.value; 
//     const generateInputField = document.getElementById('form-input-field');
//     const generateInputFieldNum = generateInputField.value;
//     const IncorretPin =  document.getElementById('Incorret-pin')
//     const corretPin =   document.getElementById('corret-pin')
//     if (newtypeInputfieldNumber === generateInputFieldNum ){
        
//         corretPin.style.display = 'block'
//         IncorretPin.style.display = 'none'
//     }
//     else{
        
//         IncorretPin.style.display = 'block'
//         corretPin.style.display = 'none'
//     }
// }) 