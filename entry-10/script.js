document.addEventListener('DOMContentLoaded', function () {
    // Array of sample plant facts
    const plantFacts = [
        "Water freezes at 32°F (0°C)",
        "TThe winter solstice is the shortest day of the year in the Northern Hemisphere, and it occurs on December 21st.",
        "Every snowflake has six sides, but no two snowflakes are exactly alike.",
        "Winter is the coldest season",
        "A severe winter storm is a storm that drops four or more inches of snow during a 12-hour period, or six or more inches during a 24-hour span.",
        "Snowflakes fall at a rate of 1 to 6 feet per second.",
        "Aomori City in northern Japan receives more snowfall than any major city on the planet.",
        "Wet snow is best for snowman-building."
    ];

    
    function getRandomFact() {
        const randomIndex = Math.floor(Math.random() * plantFacts.length);
        return plantFacts[randomIndex];
    }

    
    function displayNewFact() {
        const factText = document.getElementById('fact-text');
        factText.textContent = getRandomFact();
    }

    
    displayNewFact();

    
    const newFactButton = document.getElementById('new-fact-button');
    newFactButton.addEventListener('click', displayNewFact);
});