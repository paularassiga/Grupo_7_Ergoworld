window.addEventListener('load', function(){
    let searchButton = document.querySelector('#lupita2');
    //console.log(searchButton)
    let searchFormContainer = document.querySelector('.searchFormContainer2')
    //console.log(searchFormContainer)

    searchButton.addEventListener('click', function(){
        searchFormContainer.style.display = 'flex';
        document.querySelector('#homeHeader2').style.display = 'flex';
    })
})