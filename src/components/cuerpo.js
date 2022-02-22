import React from 'react';

class Cuerpo extends React.Component {
    anadirNombre(){
        this.lista.push('Pablo');
        console.log(this.lista)
    }
    render() {
        this.lista = [];
        const lista = this.lista.map((element,index) => { 
        return(
            <div key={index}>
                <h1>{element}</h1>
            </div>
        )
        });
      return <div id="cuerpo">
          <button onClick={()=>this.anadirNombre()}>Añadir nombre</button>
          <button onClick={()=>this.props.cambiarTitulo()}>Cambiar titulo</button>

            {lista}
            </div>
    }
}

export default Cuerpo;