fetch('https://retos-tecnicos-backend.lizzie136.now.sh/bands')
    .then(response => response.json())
    .then(json => {
        const article = (band) => {
            return band.replace(/^(an?|the)\s/i, '');
        };
        const sortByName = json.sort((a, b) => {
            if (article(a) > article(b)) {
                return 1
            } else {
                return -1
            }
        })
        const list = document.getElementById('list');
        toPrint = sortByName.map(element => {
            const result = `<li class="band">${element}</li>`;
            list.insertAdjacentHTML("beforeend", result);
        })
    })
    .catch(err => (err))