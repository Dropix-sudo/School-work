fetch('profile.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Síťový požadavek selhal');
        }
        return response.json();
    })
    .then(data => {
        // 1. Vložení jména do <h1>
        document.getElementById('name').textContent = data.name;

        // 2. Vygenerování seznamu dovedností
        const skillsList = document.getElementById('skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        // 3. Vygenerování zájmů
        const interestsSection = document.getElementById('interests');
        const ul = document.createElement('ul'); // Vytvoříme seznam pro zájmy
        
        data.interests.forEach(interest => {
            const li = document.createElement('li');
            li.textContent = interest;
            ul.appendChild(li);
        });
        // 3. Vygenerování zájmů
        const mywaySection = document.getElementById('myway');
        const ul = document.createElement('ul'); // Vytvoříme seznam pro zájmy
        
        data.myway.forEach(interest => {
            const li = document.createElement('li');
            li.textContent = myway;
            ul.appendChild(li);
        });
        mywaySection.appendChild(ul);
        interestsSection.appendChild(ul);
    })
    .catch(error => {
        // Ošetření chyby podle zadání
        console.error('Došlo k chybě při načítání dat:', error);
        document.getElementById('name').textContent = "Chyba při načítání profilu.";
    });
