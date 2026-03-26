fetch('profile.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Síťový požadavek selhal');
        }
        return response.json();
    })
    .then(data => {
        // Jméno a představení
        document.getElementById('name').textContent = data.name;
        document.getElementById('about-me').textContent = data.aboutMe;

        // Dovednosti
        const skillsList = document.getElementById('skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        // Zájmy
        const interestsSection = document.getElementById('interests');
        const ul = document.createElement('ul'); 
        
        data.interests.forEach(interest => {
            const li = document.createElement('li');
            li.textContent = interest;
            ul.appendChild(li);
        });
        
        interestsSection.appendChild(ul);

        // Cíle
        document.getElementById('goals').textContent = data.goals;
    })
    .catch(error => {
        console.error('Chyba:', error);
        
        // Vylepšené ošetření chyby - rovnou ti to řekne, co máš dělat
        document.getElementById('name').textContent = "⚠️ Nelze načíst data";
        
        const aboutMe = document.getElementById('about-me');
        aboutMe.textContent = "Prohlížeč blokuje načtení 'profile.json' z lokálního disku. Aby se tvůj profil (včetně cíle na Radianta) zobrazil, musíš kód nahrát na GitHub a spustit přes GitHub Pages, nebo použít lokální server ve VS Code.";
        aboutMe.style.display = "block";
        aboutMe.style.backgroundColor = "#fce8e6";
        aboutMe.style.borderLeftColor = "#d93025";
        aboutMe.style.color = "#d93025";
    });
