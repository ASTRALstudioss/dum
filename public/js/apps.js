fetch('json/apps.json')
    .then(response => response.json())
    .then(games => {
        const buttonContainer = document.getElementById('button-container');
        games.forEach(game => {
            const gameButton = document.createElement('a');
            gameButton.href = game.location;
            gameButton.className = 'game-button';
            gameButton.innerHTML = `
                <img src="${game.image}" alt="${game.name}" class="game-image">
                <br>${game.name}
            `;
            buttonContainer.appendChild(gameButton);
        });
    })
    .catch(error => {
        console.error('Error fetching games.json:', error);
    });