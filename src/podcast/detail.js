import { getSwapi } from '../modules/api.js';
import Header from '../modules/header/header.js'
import dataDetail from '../modules/dataDetail/dataDetail.js';


(async function () {
	const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const detailEndpoint = 'lookup?id=' + id + '&media=podcast&entity=podcastEpisode&limit=100';
    const loadingDiv = document.getElementById('loading');
    
	showSpinner();
	Header();
	const response = await getSwapi(detailEndpoint);
    dataDetail(response)
	hideSpinner();

	function showSpinner() {
		loadingDiv.style.visibility = 'visible';
	}

	function hideSpinner() {
		loadingDiv.style.visibility = 'hidden';
	}
})();



