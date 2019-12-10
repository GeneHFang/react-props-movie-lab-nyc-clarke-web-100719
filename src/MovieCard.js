import React from 'react';

export default class MovieCard extends Component {
    


    
    generateGenres(movie) {
        return movie.genres.map(genre =>{
          return (<li>{genre}</li>);
        })
    }
    

    
    render(){
        return(
            <div>
            <h1>{this.props.title||'unknown'}</h1>
            <p>{this.props.IMDBRating||null}</p>
            <img src={`./assets/poster-imgs/${this.props.poster}`||'./assets/poster-imgs/default.png'} />
            <ul>
                {this.props.genres.length ? this.generateGenres(this.props) : ['No Genre(s) Found']}
            </ul>
            </div>
        );
    }

}

