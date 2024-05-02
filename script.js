const form = document.querySelector("form"),
nextBtn = form.querySelector(".nextBtn"),
backBtn = form.querySelector(".backBtn"),
allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", ()=>{
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
});

backBtn.addEventListener("click", ()=>form.classList.remove('secActive'));

// For displaying entered data in the form
const submitBtn = form.querySelector(".submit");

// Add event listener to the submit button
submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get all input fields within the form
    const inputs = form.querySelectorAll("input");

    // Create a div element to contain the submitted data
    const submittedDataDiv = document.createElement("div");
    submittedDataDiv.classList.add("submitted-data");

    // Iterate over each input to extract and display its value
    inputs.forEach(input => {
        const label = input.previousElementSibling.textContent; // Get the label associated with the input field
        const value = input.value; // Get the value entered in the input field

        // Create a paragraph element to display the label and value
        const paragraph = document.createElement("p");
        paragraph.innerHTML = `<strong>${label}:</strong> ${value}`;

        // Append the paragraph to the submitted data container
        submittedDataDiv.appendChild(paragraph);
    });

    // Append submitted data container to the document body
    document.body.appendChild(submittedDataDiv);
    
    // Reset the form after submission
    form.reset();
});
