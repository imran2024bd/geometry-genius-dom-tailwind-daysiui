// console.log('Triangle inside function');

/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step -1: get base value of the triangle
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get value from the input field. (value is string now)
 * step-5: convert the value to a number. use parseFloat
 * 
 */

function calculateTriangleArea() {
    // console.log('Triangle inside function');
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    // console.log(typeof triangleBaseText);
    const base = parseFloat(triangleBaseText);
    // console.log(typeof base);
    console.log(base);

    // get Triangle height

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

}