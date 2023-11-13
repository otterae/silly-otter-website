function generateRandomText() {
    const filePath = 'Facts.txt';

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching otter facts: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            const lines = text.split('\n');

            const randomLineNumber = Math.floor(Math.random() * lines.length);
            const randomLine = lines[randomLineNumber];

            document.getElementById('Otterfact').innerText = randomLine;
        })
        .catch(error => {
            console.error('An error occurred:', error.message);
        });
}
// shout out to stackoverflow, because i suck at javascript!