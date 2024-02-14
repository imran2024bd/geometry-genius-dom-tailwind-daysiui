
// Run function of the calculateRhombusArea
function calculateRhombusArea() {
    const a = getInputvalueById('rhombus-base');
    const b = getInputvalueById('rhombus-height');
    // console.log(a , b);
    const area = a * b ;
    console.log('Area of the Rombus is: ' , area);
    setInnerTextById('rhombus-area', area);
}

// Run function of the calculatePentagonArea
function calculatePentagonArea() {
    const a = getInputvalueById('pentagon-base');
    const b = getInputvalueById('pentagon-height');
    // console.log(a , b);
    const area = 0.5 * a * b ;
    console.log('Area of the pentagon is: ' , area);
    setInnerTextById('pentagon-area', area);
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