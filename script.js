let tableBody = document.getElementById("table-body");
let newRowId = 1;

// Function to create a new row
function createRow() {
  let row = document.createElement("tr");
  row.id = "row-" + newRowId;

  let idCell = document.createElement("td");
  idCell.textContent = newRowId;
  row.appendChild(idCell);

  let nameCell = document.createElement("td");
  let nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameCell.appendChild(nameInput);
  row.appendChild(nameCell);

  let rollCell = document.createElement("td");
  let rollInput = document.createElement("input");
  rollInput.type = "text";
  rollInput.name = "roll";
  rollCell.appendChild(rollInput);
  row.appendChild(rollCell);

  let subjectCell = document.createElement("td");
  let subjectInput = document.createElement("input");
  subjectInput.type = "text";
  subjectInput.name = "subject";
  subjectCell.appendChild(subjectInput);
  row.appendChild(subjectCell);

  let marksCell = document.createElement("td");
  let marksInput = document.createElement("input");
  marksInput.type = "text";
  marksInput.name = "marks";
  marksCell.appendChild(marksInput);
  row.appendChild(marksCell);

  let markedByCell = document.createElement("td");
  let markedByInput = document.createElement("input");
  markedByInput.type = "text";
  markedByInput.name = "markedBy";
  markedByCell.appendChild(markedByInput);
  row.appendChild(markedByCell);

  let saveCell = document.createElement("td");
  let saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", saveRow);
  saveCell.appendChild(saveButton);
  row.appendChild(saveCell);

  tableBody.appendChild(row);

  newRowId++;
}


// Function to save row
function saveRow(event) {
  let button = event.target;
  let row = button.parentNode.parentNode;

  let nameInput = row.querySelector("input[type='text'][name='name']");
  let rollInput = row.querySelector("input[type='text'][name='roll']");
  let subjectInput = row.querySelector("input[type='text'][name='subject']");
  let marksInput = row.querySelector("input[type='text'][name='marks']");
  let markedByInput = row.querySelector("input[type='text'][name='markedBy']");

  let name = nameInput.value;
  let roll = rollInput.value;
  let subject = subjectInput.value;
  let marks = marksInput.value;
  let markedBy = markedByInput.value;

  // check input fields
  if (!name || !roll || !subject || !marks || !markedBy) {
    // Show error for unfilled input
    row.style.border = "2px double red";
    return;
  } else {
    // Remove error styling
    row.style.border = "";
  }

  // Save data to tableData array (Will work on it)
  // let newRowData = {
  //   id: newRowId,
  //   name: name,
  //   roll: roll,
  //   subject: subject,
  //   marks: marks,
  //   markedBy: markedBy,
  // };
  // tableData.push(newRowData);

  // // Log new row and tableData array to console
  // console.log("New Row:", newRowData);
  // console.log("Table Data:", tableData);

}

// Create a new row 
let addRowButton = document.getElementById("add-row-btn");
addRowButton.addEventListener("click", createRow);
