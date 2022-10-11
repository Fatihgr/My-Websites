const API_URl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15005c48f2625def09dacd3d0fc01762&page=1';

const IMG_Path = 'https://image.tmdb.org/t/p/w1280';

const Search_Url = 'https://api.themoviedb.org/3/search/movie?api_key=15005c48f2625def09dacd3d0fc01762&query="';

const form=document.getElementById('form');
const search=document.getElementById('search');

async function getMovies(url){
    const res= await fetch(url);
    const data= await res.json();
    showMovies(data.result);
}
function showMovies(movies){
    main.innerHTML='';
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchTerm=search.value;
    if(searchTerm&&searchTerm!==''){
        getMovies(Search_Url + searchTerm)
        search.value='';
    }else{
        window.location.reload();
    }
}