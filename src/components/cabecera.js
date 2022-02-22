import React from 'react';

class Cabecera extends React.Component {
    render() {
      return <div id="cabecera">
               <h1>El titulo es: {props.titulo}</h1>
            </div>
    }
}

export default Cabecera;