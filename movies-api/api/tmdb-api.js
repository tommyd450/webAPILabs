import fetch from 'node-fetch';


export const getUpcomingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
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


export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
      
      
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

  
  
  
  
  export const getTrendingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_KEY}`
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
  
  
    
  export const getMovie = (args) => {
    // console.log(args)
    // [, idPart] = args.queryKey;
    //const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${args}?api_key=${process.env.TMDB_KEY}`
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
  
  export const getTVShows = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
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
  
  export const getTVshow = (id) =>
  {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
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
  
  
  export const getShowImages = (id) => {
    
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };
  
    
    export const getGenres = async () => {
      return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
          process.env.TMDB_KEY +
          "&language=en-US"
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };
  
    export const getTvGenres = async () => {
      return fetch(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.TMDB_KEY}&language=en-US`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };
  
    
    export const getMovieImages = (id) => {
      
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };
  
    export const getMovieReviews = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json.results);
          return json.results;
        });
    };
  
    
  
      
  
      export const getCredits = (id) => {
        return fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}&language=en-US`
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
  
  
  
      export const getPerson = (id) => {
        return fetch(
          `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
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
  
      export const getPersonCredits = (id) => {
        
        return fetch(
          `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.TMDB_KEY}&language=en-US`
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
  
      export const getLanguages = () => {
        return fetch(
          `https://api.themoviedb.org/3/configuration/languages?api_key=${process.env.TMDB_KEY}`
        ).then( (response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          
          return response.json();
        })
        .catch((error) => {
          throw error
       });
      };
    
      
  