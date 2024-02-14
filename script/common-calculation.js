function calculateRhombusArea() {
    const a = getInputvalueById('rhombus-base');
    const b = getInputvalueById('rhombus-height');
    console.log(a , b);
    const area = a * b ;
    console.log('area is the Rombus is: ' , area);
}



function getInputvalueById(inputFieldId) {
   const inputField = document.getElementById(inputFieldId);
   const inputText = inputField.value;
   const inputNumber = parseFloat(inputText);
   console.log(inputNumber);
   return inputNumber;

}

function setInnerTextById(elementId , area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}