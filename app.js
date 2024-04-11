
// Create a counter to track the current data set index
let currentIndex = 0;

// Function to populate the inputs with data from the current data set
function populate() {
    // Retrieve the current data set
    const currentData = dataSets[currentIndex];

    // Update the input fields and image source with the current data set
    document.getElementById("name").value = currentData.name;
    document.getElementById("linkedin").value = currentData.linkedin;
    document.getElementById("dp").src = currentData.dp;

    // Update the designation field with the current data set
    document.getElementById("designation").value = currentData.designation;

    // Increment the index to refer to the next data set in the next call
    currentIndex = (currentIndex + 1) % dataSets.length; // Use modulo to cycle through the array
}
