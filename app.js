const getGiphy = document.querySelector('#getGiphy');
const removeALL = document.querySelector('#removeALL');
const searchInput=document.querySelector('#searchGIPHY')
const getButtons=document.querySelectorAll('button')


console.log("Let's get this party started!");
getGiphy.addEventListener('submit', function(e){
    e.preventDefault()
    renderGifURL();
    searchInput.value="";})
removeALL.addEventListener('click', clearTheGIFs)



async function getGIFs() {
    let response=await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', q: searchInput.value, limit: 1, rating: 'g'}});
    //console.log(response.data)
    return response.data
}

async function renderGifURL(){

    let returnedData=await getGIFs();
    let imageURL=returnedData.data[0].images.downsized.url;
    addImage(imageURL);
}

function addImage(newImage){
    let displayGIFs=document.getElementById('displayGIFs')
    //create new image item
    let addImage=document.createElement('img');
    addImage.src=newImage;
    //append to DIV
    displayGIFs.appendChild(addImage);
}

function clearTheGIFs(){
    let removeDiv=document.querySelector('#displayGIFs')
    while(removeDiv.hasChildNodes()){
        removeDiv.removeChild(removeDiv.firstChild);
    }
}

