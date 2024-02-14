function calculateRhombusArea() {
    const a = getInputvalueById('rhombus-base');
    const b = getInputvalueById('rhombus-height');
    console.log(a , b);
}



function getInputvalueById(inputFieldId) {
   const inputField = document.getElementById(inputField);
   const inputText = inputField.value;
   const inputNumber = parseFloat(inputText);
   console.log(inputNumber);
   return inputNumber;

}