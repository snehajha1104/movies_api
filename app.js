//http://www.omdbapi.com/?i=tt3896198&apikey=ce8d439c
//http://www.omdbapi.com/?s=avenger&apikey=ce8d439c


let defaultval="avenger";


function findmovie(){
    let searchmovie= document.getElementById("searchhere");

    let searchval=searchmovie.value;
    defaultval=searchval;
    console.log(searchval);
    console.log(defaultval);
    getMovie();

}


async function getMovie(){
    let movies=await fetch(`http://www.omdbapi.com/?s=${defaultval}&apikey=ce8d439c`)
    movies= await movies.json();

    let omdMovies= document.getElementById("showmoviedetails");
    omdMovies.innerHTML="";

    movies.Search.map((movie)=>{
        return omdMovies.innerHTML+=`
        <div class="moviecard">
            <div><h3>${movie.Title}</h3></div>
            <div class="movieimg"><img src="${movie.Poster==="N/A"?"./no-image-available.jpg": movie.Poster}" alt="" ></div>
            <div>2010</div>

        </div>
        `
    })
}

getMovie()

