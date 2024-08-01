//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async () => {
    const text = document.getElementById('text').value;
    const delay = Number(document.getElementById('delay').value);
    const outputDiv = document.getElementById('output');

    // Function to introduce a delay
    const delayFunction = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Async function to display message after delay
    async function displayMessage() {
        await delayFunction(delay);
        outputDiv.textContent = text;
    }

    // Call the async function
    displayMessage();
});