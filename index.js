

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
    .then(responseJson => {
      console.log(responseJson)
      displayRepos(responseJson)});

}

function displayRepos(repos) {
  $('#results-list').empty()
  repos.forEach(repo => {
    const name = repo.name;
    const repoUrl = repo['clone_url'];
    const repoTextName = `<h3>${name}</h3>`
    const repoTextUrl = `<a href="${repoUrl}">${repoUrl}</a>`
    const listElement = $('<li></li>')
    listElement.append(repoTextName, repoTextUrl)
    $('#results-list').append(listElement);
  });
}

$(watchForm)