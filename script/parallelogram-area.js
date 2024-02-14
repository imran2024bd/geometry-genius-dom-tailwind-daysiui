function calculateparallelogramArea() {
    const parallelogramWidthInput = document.getElementById('parallelogram-base');
    const parallelogramWidthText = parallelogramWidthInput.value;
    const base = parseFloat(parallelogramWidthText);
    console.log(base);

    const parallelogramLengthInput = document.getElementById('parallelogram-height');
    const parallelogramLengthText = parallelogramLengthInput.value;
    const height = parseFloat(parallelogramLengthText);
    console.log(height);
    
    // calculation   Area 
    const area = base * height ;
    console.log('parallelogram area is :' , area);

    // To add display  area
    const parallelogramSpanarea = document.getElementById('parallelogram-area');
    parallelogramSpanarea.innerText = area;
}