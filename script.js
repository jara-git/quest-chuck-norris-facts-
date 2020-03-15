// This function loads chuck norris data from the chuck norris jokes API
function fetchChuckNorris() {
    const url = "https://api.chucknorris.io/jokes/random";
    axios.get(url)
      .then(response => response.data)
      .then(chuckNorrisQuote => {
        console.log ('data decoded from Json', chuckNorrisQuote );

  
        // Build a block of HTML
        const ChuckNorrisHtml = `
          <p><strong>${chuckNorrisQuote.value}</strong></p>
          <img src="${chuckNorrisQuote.icon_url}" />
        `;
        document.querySelector('#chuck-norris').innerHTML = ChuckNorrisHtml;

      });
  }
  
  
  fetchChuckNorris();
