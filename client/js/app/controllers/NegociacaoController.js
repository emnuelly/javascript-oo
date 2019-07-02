class NegociacaoController{

    //criando um construtor para a DOM
    constructor() {
        //definindo o $ como uma variavel que recebe o queryselector
        let $ = document.querySelector.bind(document);
        //salvando em cache o que foi recebido das inputs
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
        //chamando a lista de negociaçoes
        this._listaNegociacoes = new ListaNegociacoes();
        
    }

    adiciona(event) {
        event.preventDefault();
        
        //criando a negociação e inserindo os dados
        let negociacao = new Negociacao(
            //usando o date helper ja na declaração
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        //ædicionadno a negociação a lista
        this._listaNegociacoes.adiciona(negociacao);
        //limpando a negociação
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);


    }

    //esse metodo significa que só pode ser chamado pelo propria classe
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}