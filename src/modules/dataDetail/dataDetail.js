function dataDetail(data) {
	const containerElement = document.getElementById('container');
	const leftElement = document.createElement('div');
	leftElement.className = 'left';

	const imageElement = document.createElement('img');
	imageElement.src = data.results[0].artworkUrl600;
	imageElement.alt = 'Foto';

	const nameElement = document.createElement('h2');
	nameElement.textContent = data.results[0].collectionCensoredName;

    const authorElement = document.createElement('h3');
	authorElement.textContent = 'by ' + data.results[0].artistName;


	const descriptionElement = document.createElement('p');
	descriptionElement.textContent = 'Descripción';

	leftElement.appendChild(imageElement);
	leftElement.appendChild(nameElement);
    leftElement.appendChild(authorElement);
	leftElement.appendChild(descriptionElement);

	// Componente de la columna derecha
	const rightElement = document.createElement('div');
	rightElement.className = 'right';

	const resultsElement = document.createElement('div');
	resultsElement.className = 'results';
	resultsElement.textContent = 'Resultados: 5';

	const listElement = document.createElement('ul');
	listElement.className = 'list';

	for (let i = 1; i <= 5; i++) {
		const listItemElement = document.createElement('li');
		listItemElement.className = 'list-item';
		listItemElement.textContent = `Resultado ${i}`;

		listElement.appendChild(listItemElement);
	}

	rightElement.appendChild(resultsElement);
	rightElement.appendChild(listElement);

	containerElement.appendChild(leftElement);
	containerElement.appendChild(rightElement);
}
export default dataDetail;
