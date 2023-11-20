const accessKey = '7k2Cg-qwPX-8GajDFPIxiPmPwHT-pk7P1phC1f3lDc0'; // Unsplash API access key
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const imageContainer = document.getElementById('imageContainer');

searchButton.addEventListener('click', performImageSearch);

function performImageSearch() {
	
    const query = searchInput.value;
	
    // Clear previous search results
    imageContainer.innerHTML = '';
    imageContainer.classList.add('hidden');

    // Fetch images from Unsplash API
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=15`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(result => {
                const img = document.createElement('img');
                img.src = result.urls.small;
                img.alt = result.description || 'Image';
                imageContainer.appendChild(img);
				
            });

            imageContainer.classList.remove('hidden');
        })


        .catch(error => alert('Error fetching images:', error));
		

}

