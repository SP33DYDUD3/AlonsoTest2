function openModal(imgSrc) {
    document.getElementById('modalImg').src = imgSrc; // Set the source of modal image
    document.getElementById('myModal').style.display = 'block'; // Show the modal
}

// Close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none'; // Hide the modal
}