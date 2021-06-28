import React, {useState, useEffect} from 'react';

var unirest = require("unirest");

export const Movie = (props) => {

    const [movies, setMovies] = useState();

    useEffect(() => {
        var req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");
    
        console.log(req.query({
            "s": "Avengers Endgame",
            "page": "1",
            "r": "json"
        }));
    
    
    
        // req.headers({
        // 	"x-rapidapi-key": "1225ff6c1dmsh23adefec29b568cp1a760djsnec74fb9c5271",
        // 	"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        // 	"useQueryString": true
        // });
        
        req.end(function (res) {
            if (res.error) throw new Error(res.error);
            
            console.log(res.body);
        });
        
        setMovies(req);
    }, []);

    return (
        <div>
            <label>This is a movie</label>
        </div>
    );
}