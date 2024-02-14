
// Run function of the area
function calculateRhombusArea() {
    const a = getInputvalueById('rhombus-base');
    const b = getInputvalueById('rhombus-height');
    // console.log(a , b);
    const area = a * b ;
    console.log('Area of the Rombus is: ' , area);
    setInnerTextById('rhombus-area', area);
}


// To find main value function of geometry property
function getInputvalueById(inputFieldId) {
   const inputField = document.getElementById(inputFieldId);
   const inputText = inputField.value;
   const inputNumber = parseFloat(inputText);
   console.log(inputNumber);
   return inputNumber;

}

// to show area function of the diagram
function setInnerTextById(elementId , area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}