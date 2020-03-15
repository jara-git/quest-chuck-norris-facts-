// This function loads chuck norris data from the chuck norris jokes API
function fetchPokemonJSON() {
    
    const chucknorrisId = 1;
    const url = `https://api.chucknorris.io/${chucknorrisId}`;
    axios.get(url)
      .then(response => response.data) // DIFFERENT FROM FETCH: response.data instead of response.json()
      .then(chucknorris =>  {
        console.log('data decoded from JSON:', chucknorris);
  
  
        // Build a block of HTML
        const chucknorrisHtml = `
          <p><strong>${chucknorris.value}</strong></p>
          <img src="${chucknorris.icon_url}" />
        `;

      });
  }
  
  
  fetchchucknorrisJSON();