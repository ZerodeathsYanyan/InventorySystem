
// Gettting the checkbox element
const checkbox = document.getElementById('checkbox');

// Getting the tables section
const tablesSection = document.querySelector('.tablesSection');

// Array for storing inventory items
const inventoryItems = [];

// Function for checking if an item exists already
function checkIfExists(item, inventoryItems) {
	for (var i = 0; i < inventoryItems.length; i++) {
		if(item == inventoryItems[i]) {
			return true;
		}
	}
}

// Function to handle editing quantity directly in the table
function editQuantity(e) {
    // Prompt the user to enter the new quantity
    let newQuantity = prompt("Enter the new quantity:");

    // Check if the user canceled the prompt or left it empty
    if (newQuantity === null || newQuantity.trim() === "") {
        // Alert the user that they need to fill out the form first
        alert("Fill out the field");
    } else {
        // Parse the input as a number
        newQuantity = parseFloat(newQuantity);

        // Check if the input is a valid number
        if (isNaN(newQuantity)) {
            alert("Please enter a valid number");
        } else {
            // Update the quantity in the table
            e.target.textContent = newQuantity;
        }
    }
}


// Add event listener to the table to handle quantity editing
document.querySelector('table').addEventListener('click', function (e) {
    // Check if the clicked element is a table cell in the quantity column
    if (e.target.tagName === 'TD' && e.target.cellIndex === 1) {
        editQuantity(e);
    }
});

// Function for adding new item in the inventory
inputForm.addEventListener('submit', function (e) {
	e.preventDefault();

	// Getting the item from the input field
	const item = document.getElementById('item').value;

	// Getting the quantity from the input field
	const quantity = document.getElementById('quantity').value;

	// We can't let an input field be empty
	if(item.length == 0 || quantity.length == 0) {
		alert("Fill out the form first");
	}

	// If all input fields are not empty, go here
	else {

		// Check if item already exists
		if (checkIfExists(item, inventoryItems)) {
			alert('Item already taken');
		}

		// If it doesn't exist yet, go here
		else {

			// push to the inventoryItems list
			inventoryItems.push(item);
			console.log(inventoryItems)

			// create the table row element for storing items
			const trElement = document.createElement('tr');

			// create table data for storing item name
			const tdElementForItemName = document.createElement('td');

			// create table data for storing quantity 
			const tdElementForQty = document.createElement('td');

			// setting the text content of the item name and quantity
			tdElementForItemName.textContent = item;
			tdElementForQty.textContent = quantity;

			// adding to the table data element to the table row
			trElement.appendChild(tdElementForItemName);
			trElement.appendChild(tdElementForQty);

			// adding table row element to the table
			document.querySelector('table').appendChild(trElement);
		}

	}

})

checkbox.addEventListener('change', function(e) {
	e.preventDefault();
	if(checkbox.checked == true) {
		tablesSection.style.display = "block";
	}
	else {
		tablesSection.style.display = "none";
	}

})

