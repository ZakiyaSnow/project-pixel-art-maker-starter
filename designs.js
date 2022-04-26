// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(){
    const rows = document.getElementById('inputHeight').value;
    const cols = document.getElementById('inputWidth').value;

    // Select element to create grid
    const tbl = document.getElementById('pixelCanvas');

    // Clear table before creating grid
    tbl.innerHTML="";

    for (i = 0; i < rows; i++) {
        let myRow =document.createElement('tr');
        myRow = tbl.insertRow(i);
    for (j = 0; j < cols; j++) {

        let myCell = document.createElement('td');
        myCell = myRow.insertCell(j);

    // Add color to cell
            myCell.addEventListener('click', () => {
                myCell.style.backgroundColor = document.getElementById('colorPicker').value;
            });
        }
    }
}

// Create form for submission
const form = document.getElementById('sizePicker');
form.addEventListener('submit', e => {
    e.preventDefault();

    makeGrid();
});
