// console.log(' rectangle area calculation');

function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);
    
    // calculation   Area 
    const area = width * length ;
    console.log('rectangle area is :' , area);

    // To add display  area
    const rectangleSpanarea = document.getElementById('rectangle-area');
    rectangleSpanarea.innerText = area;
    
}