class NegociacoesView extends View{

    constructor(elemento){
        //passando para a classe pai que é a VIEW
        super(elemento);
    }

    //retorna o html para criar a lista das negociaçoes
    template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
                
            <tbody>
            ${model.negociacoes.map(n =>
                /**
                 * varre o array e a cada negociação criada ele gera um html
                 */
                  `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                 `
            ).join('')}
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${
                        //processa o array e exibe um resultado
                        model.negociacoes.reduce((total, n) => total + n.volume, 0.0)
                    }
                </td>
            </tfoot>
        </table>
        `;
    }
    
}
/**
 *     
    
 */