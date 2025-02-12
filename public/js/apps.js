fetch('json/apps.json')
    .then(response => response.json())
    .then(games => {
        const buttonContainer = document.getElementById('button-container');
        games.forEach(game => {
            const gameButton = document.createElement('a');
            gameButton.href = game.location;
            gameButton.className = 'app-button';
            gameButton.innerHTML = `
                <img src="${game.image}" alt="${game.name}" class="app-image">
                <div class="app-title">${game.name}</div>
            `;
            buttonContainer.appendChild(gameButton);
        });
    })
    .catch(error => {
        console.error('Error fetching apps.json:', error);
    });