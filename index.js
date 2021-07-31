

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    const maxResults = $('#js-max-results').val();
    getRepos(searchTerm, maxResults)
    console.log(searchTerm)
  });
}

function getRepos(searchTerm, maxResults=10) {
  const url = `https://api.github.com/users/${searchTerm}/repos`
  
  fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

$(watchForm)