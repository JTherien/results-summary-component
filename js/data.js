fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {
        const results = data;

        const reaction = document.getElementById('reaction-score')
        const memory = document.getElementById('memory-score')
        const verbal = document.getElementById('verbal-score')
        const visual = document.getElementById('visual-score')

        const reactionImg = document.getElementById('reaction-img')
        const memoryImg = document.getElementById('memory-img')
        const verbalImg = document.getElementById('verbal-img')
        const visualImg = document.getElementById('visual-img')

        reaction.innerText = JSON.stringify(results[0]["score"])
        memory.innerText = JSON.stringify(results[1]["score"])
        verbal.innerText = JSON.stringify(results[2]["score"])
        visual.innerText = JSON.stringify(results[3]["score"])

    })
    .catch(error => {
        console.log('Error:', error)
    })