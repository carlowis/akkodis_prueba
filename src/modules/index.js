import { getSwapi } from './api.js';
import CardContainer from './card/card.js';
import Header from './header/header.js';

(async function () {
	const initEndpoint = 'us/rss/toppodcasts/limit=100/genre=1310/json';
	const loadingDiv = document.getElementById('loading');
    
	showSpinner();
	Header();
	const data = await getSwapi(initEndpoint);
	CardContainer({ dataApi: data });
	hideSpinner();

	function showSpinner() {
		loadingDiv.style.visibility = 'visible';
	}

	function hideSpinner() {
		loadingDiv.style.visibility = 'hidden';
	}
})();
