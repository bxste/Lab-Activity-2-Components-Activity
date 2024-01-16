
import React from "react";
// import '\ListStyle.css'
// import '/react-practice/src/components/componentsAct/ListStyle.css'

class MovieList extends React.Component{
    render(){
        return (
            <div className="list-container">
                <h2>Movie List</h2>
                <ol>
                    <li>Lift 2024</li>
                    <li>Me Before You 2016</li>
                    <li>Parasite 2019</li>
                </ol>
                <div class="gallery">
                    <img src="https://m.media-amazon.com/images/M/MV5BMWQ1NzViMTQtMjVhNy00YzA0LTg2MzYtZjUyOWNiNDI2MzhlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"/>
                    <img src="https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_.jpg"/>
                    <img src="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"/>
                </div>
            </div>
        );
    }
}

export default MovieList;
