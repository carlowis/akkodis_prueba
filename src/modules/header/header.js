async function Header() {
    const headerElement = document.getElementById('header');
    headerElement.classList.add('cabecera')
    headerElement.innerHTML = `
      <div class="logo">
        <img src="/assets/logo-itunes.png" alt="Logo iTunes">
      </div>
      <nav>
        <ul>
          <li id="control" class="control">
              <input type="text" name="searchBar" id="searchBar" placeholder="search for a character" />
          </li>
        </ul>
      </nav>
    `;
  
    var searchInput = headerElement.querySelector('#searchBar');
    var cardContainer = document.getElementById('cardContainer');
  
    function filterCards() {
      var searchTerm = searchInput.value.toLowerCase();
      var cards = cardContainer.getElementsByClassName('card');
  
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var title = card.getElementsByTagName('h3')[0].textContent.toLowerCase();
  
        if (title.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    }
  
    searchInput.addEventListener('input', filterCards);
  
    return headerElement;
  }
  
  export default Header;
  