
// Componente de tarjeta
function Card({ title, author, imageUrl, linkHref  }) {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';

  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;

  const titleElement = document.createElement('h3');
  titleElement.textContent = title;

  const authorElement = document.createElement('p');
  authorElement.textContent = author;

  imageElement.addEventListener('click', async function () {
    window.location.href = linkHref;
  });

  cardElement.appendChild(imageElement);
  cardElement.appendChild(titleElement);
  cardElement.appendChild(authorElement);

  return cardElement;
}

// Componente de contenedor de tarjetas
async function CardContainer({ dataApi }) {
  const cardContainer = document.getElementById('cardContainer');

  dataApi.feed.entry.forEach((element) => {
    const title = element['im:name'].label;
    const author = element['im:artist'].label;
    const imageUrl = element['im:image'][2].label;

    const startIndex = element.link.attributes.href.indexOf('/podcast/') + '/podcast/'.length;
    const extractedLink = element.link.attributes.href.substring(startIndex);
    const parts = extractedLink.split('/');
    const extractedId = parts[1].match(/id(\d+)/)[1];
    const linkHref = '/podcast/detail?id=' + extractedId;


    const card = Card({
      title,
      author,
      imageUrl,
      linkHref,
    });

    cardContainer.appendChild(card);
  });
}

export default CardContainer;
