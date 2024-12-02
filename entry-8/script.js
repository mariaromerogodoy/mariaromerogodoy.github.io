document.addEventListener('DOMContentLoaded', function () {
    // Array of sample plant facts
    const plantFacts = [
        "Did you know that bamboo can grow up to 35 inches in a single day?",
        "The world's largest living organism is a fungus in Oregon, which spans over 2,385 acres!",
        "Some plants, like the Venus Flytrap, can actually 'eat' insects!",
        "The longest living tree is a Bristlecone Pine that can live for over 5,000 years.",
        "A sunflower can grow as tall as 16 feet in the right conditions!",
        "The smell of fresh grass is actually a plant's distress signal!",
        "Some plants, like the corpse flower, have an odor similar to rotting flesh.",
        "Cacti can live for weeks without water thanks to their specialized water storage."
    ];

    // Function to get a random plant fact
    function getRandomFact() {
        const randomIndex = Math.floor(Math.random() * plantFacts.length);
        return plantFacts[randomIndex];
    }

    // Function to display a new fact in the container
    function displayNewFact() {
        const factText = document.getElementById('fact-text');
        factText.textContent = getRandomFact();
    }

    // Load the first fact when the page is ready
    displayNewFact();

    // Event listener for the "Get New Fact" button
    const newFactButton = document.getElementById('new-fact-button');
    newFactButton.addEventListener('click', displayNewFact);
});