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
        console.error('Došlo k chybě při načítání dat:', error);
        document.getElementById('name').textContent = "Chyba při načítání profilu.";
    });
    });
