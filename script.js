const wordsDictionaryUrl = 'https://raw.githubusercontent.com/kyhuber/bee-solver/main/words_dictionary.json';

fetch(wordsDictionaryUrl)
    .then(response => response.json())
    .then(words => {
        const solutionsDiv = document.getElementById('solutions');
        const findSolutionsButton = document.getElementById('find-solutions');

        findSolutionsButton.addEventListener('click', () => {
            const letters = Array.from(document.querySelectorAll('input')).map(input => input.value);
            const centerLetter = letters.pop();
            const solutions = words.filter(word => {
                const wordLetters = word.split('');
                return wordLetters.length >= 4 &&
                    wordLetters.every(letter => letters.includes(letter)) &&
                    wordLetters.includes(centerLetter);
            });
            solutionsDiv.innerHTML = solutions.join(', ');
        });
    });