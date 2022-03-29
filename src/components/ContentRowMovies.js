import React from 'react';
function ContentRowMovies(props){
    return(
        <div>
            <h1>{props.titulo}</h1>
            <h1>{props.cifra}</h1>
            <h1>{props.colorDeBorde}</h1>
            <h1>{props.icono}</h1>
        </div> 
    );
}
export default ContentRowMovies;