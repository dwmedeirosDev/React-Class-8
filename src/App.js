// import React, { Component } from 'react'
// import "./App.css"

// export default class App extends Component{

//     state = {
//         number: 0
//     }

//     somar = () => {
//         if(this.state.number <= 9){
//           this.setState({
//             number: this.state.number + 1
//           })
//         }
//       }

//     subtrair = () => {
//         if(this.state.number >= 1){
//           this.setState({
//             number: this.state.number - 1 
//           })
//         }
//       }

//     render(){
//         return(
//             <div className="card">
//                 <h1>Contador</h1>
//                 <h2>{this.state.number}</h2>
//                 <nav>
//                     <button onClick={this.somar}>+</button>
//                     <button onClick={this.subtrair}>-</button>
//                 </nav>
//             </div>
//         )
//     }
// }

// ###########################################################################

import React, { Component } from 'react'
import "./App.css"

export default class App extends Component{

    state = {
        nomeProduto: "Iphone 11",
        precoProduto: 4700,
        quantidadeProduto: 8
    }

    vendaProduto = () => {
        if(this.state.quantidadeProduto > 0){
            this.setState({
                quantidadeProduto: this.state.quantidadeProduto - 1
            })
        }
    }

    render(){
        return(
            <div>
                <h1>Celular: {this.state.nomeProduto}</h1>
                <h3>Preço: R${this.state.precoProduto}</h3>
                <h3>Estoque: {this.state.quantidadeProduto}</h3>
                {this.state.quantidadeProduto > 0 ? (
                    <button onClick={this.vendaProduto}>Adicionar produto</button>
                ) : (
                    <button disabled>Produto esgotado</button>                    
                )}                
            </div>
        )
    }
}

// ##### Operador Condicional Ternário #####

// import React, { Component } from 'react'
// import "./App.css"

// export default class App extends Component{

//     state = {
//         nome: "Gustavo Almeida",
//         idade: 18
//     }

//     render(){
//         return(
//             <main>
//                 <h2>{this.state.nome}</h2>
//                 {this.state.idade >= 18 ? (
//                     <h2>Você é maior de idade</h2>
//                 ) : (
//                     <h2>Você é menor de idade</h2>
//                 )}
//             </main>
//         )
//     }
// }