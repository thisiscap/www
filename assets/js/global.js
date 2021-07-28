//
// Site JS
//

// JS checks

document.body.classList.remove('no-js');

window.onload = function() {
	document.body.classList.remove('preload');
};

//
// Output statements
// Based on https://chrisdevcode.hashnode.dev/how-to-display-json-data-on-an-html-page-using-vanilla-javascript
//

// Check for query string in URL to define which .json to get later

var currentUri = new URLSearchParams(window.location.search);
var sort = currentUri.get('sort');

if (sort && sort == 'informative') {
    var statements = 'statements-informative.json';
} else {
    var statements = 'statements-personal.json';
}

// Get statements from .json and output them

function fetchData() {
    fetch(statements)
    .then((res) => res.json())
    .then((data) => {
        let output = ''
        data.forEach(function (item) {
            output += `
            <div class="statement">
                ${item.statementContent}
            </div>
            `
        })
        document.getElementById('js-statements-container').innerHTML = output
    })
    .catch((error) => {
        console.log(`Error Fetching data : ${error}`)
        document.getElementById('js-statements-container').innerHTML = 'Error Loading Data'
    })
}

fetchData()
