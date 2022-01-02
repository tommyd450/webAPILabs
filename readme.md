# Assignment 2 - Web API.

Name: Tommy Dalton

## Features.



## Installation Requirements

Any node modules we downloaded from the labs.

## API Configuration

On the API side the following should be present in the .env file

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/movies_db
SEED_DB=True
SECRET=ilikecake
TMDB_KEY=APIKEY
```

On the ReactApp one addition had to be made to the .env file
## API Design


|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{id} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | N/A | N/A  
| /api/movies/trending |Gets a list of trending movies
| /api/tv | Get tv shows
| /api/tv/{id} | Get the specific id for a tv show
| /api/tv/{id}/images | Get the images 
| /api/genres | Get the genres for the filter card
| /api/tv/genres | Get the genres of tv shows
| /api/movies/{id}/images | Get the images 
| /api/movies/{id}/reviews | Get reviews for a movie
| /api/movies/tmdb/upcoming | Get the upcoming movies
| /api/movies/{id}/credits | Get the cast members of a movie
| /api/person/{id}/credits | Get the movies this person starred in
| ... | ... | ... | ... | ...




## Security and Authentication
Basic Authentication which checks the mongo database for the username and password.

## Integrating with React App

My react app makes all of its calls to tmdb through the api acting as a middle man between the app and tmdb.

~~~Javascript
export const getMovies = () => {
  return fetch(
    //`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&include_adult=false&include_video=false&page=1`
    '/api/movies?page=2&limit=2',
    {headers: {
      "Authorization": window.localStorage.getItem("token")
    }}
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
~~~

## Extra features

None

## Independent learning

None