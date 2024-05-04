const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    let results = [];
    // this filters the fruits based on the user's input
    results = fruit.filter(fruit => {
        // this converts the input to lower case to keep everything standardized
        return fruit.toLowerCase().includes(str.toLowerCase());
    });
    return results;
}

function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    //this calls the showSuggestions function with filtered results and input value
    showSuggestions(results, inputVal);
	// this checks to see if the input value is empty, and if it is, then the dropdown list is hidden from view
    if (inputVal === '') {
        document.querySelector('.suggestions').style.display = 'none';
    }
}

function showSuggestions(results, inputVal) {
    const suggestionsContainer = document.querySelector('.suggestions');
    const suggestionsList = suggestionsContainer.querySelector('ul');
    // this just clears any previous suggestions
    suggestionsList.innerHTML = '';
    // this populates a suggestions list if there are any matching results with the user input
    if (results.length > 0) {
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            suggestionsList.appendChild(li);
        });
        // this is for the showSuggestions dropdown list
        suggestionsContainer.style.display = 'block';
    } else {
        // this will hide the showSuggestions dropdown if there aren't any matching results
        suggestionsContainer.style.display = 'none';
    }
}

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        // this will populate the search bar with the suggestion that the user selects
        input.value = e.target.textContent;
		// th=s will hide the suggestions list after the user selects a match.
        document.querySelector('.suggestions').style.display = 'none';
    }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);