function dataDetail(data) {
	const containerElement = document.getElementById('container');
	const leftElement = document.createElement('div');
	leftElement.className = 'left';

	const leftElementCard = document.createElement('div');
	leftElementCard.className = 'leftCard';

	const imageElement = document.createElement('img');
	imageElement.src = data.results[0].artworkUrl600;
	imageElement.alt = 'Foto';

	const nameElement = document.createElement('h2');
	nameElement.textContent = data.results[0].collectionCensoredName;

	const authorElement = document.createElement('h4');
	authorElement.textContent = 'by ' + data.results[0].artistName;

	const descriptionElement = document.createElement('p');
	descriptionElement.textContent = 'Descripción';
	const descriptionElementText = document.createElement('p');
	descriptionElementText.textContent = data.results[1].shortDescription;

	leftElementCard.appendChild(imageElement);
	leftElementCard.appendChild(nameElement);
	leftElementCard.appendChild(authorElement);
	leftElementCard.appendChild(descriptionElement);
	leftElementCard.appendChild(descriptionElementText);

	// Componente de la columna derecha
	const rightElement = document.createElement('div');
	rightElement.className = 'right';

	const resultsElement = document.createElement('div');
	resultsElement.className = 'results';
	resultsElement.textContent = 'Episodes: ' + data.resultCount;

	const listElement = document.createElement('ul');
	listElement.className = 'list';

	for (let i = 1; i <= data.results.length - 1 ; i++) {
		const listItemElement = document.createElement('li');
		listItemElement.className = 'list-item';
		listItemElement.textContent = `${data.results[i].trackName}`;

		listElement.appendChild(listItemElement);
	}

	rightElement.appendChild(resultsElement);
	rightElement.appendChild(listElement);

	leftElement.appendChild(leftElementCard);
	containerElement.appendChild(leftElement);
	containerElement.appendChild(rightElement);
}
export default dataDetail;
