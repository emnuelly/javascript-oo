class NegociacaoController{

    //criando um construtor para a DOM
    constructor() {
        //definindo o $ como uma variavel que recebe o queryselector
        let $ = document.querySelector.bind(document);
        //salvando em cache o que foi recebido das inputs
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');

        //criando a lista chamando a classe ajudante Bind
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia');

        /*
        //chamando a lista de negociaçoes, com uma arrowfunction
        this._listaNegociacoes = new ListaNegociacoes(model =>
            //passando o update para receber o model sem precisar chamar em toda funcão
            this._negociacoesView.update(model)); 
        */
        //chama o elemento e passa o paramentro da div
        //view
        //usando o Proxy Factory dentro da helper bind
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');

        
    }

    //evento que acontece quando clica no botão de inluir
    adiciona(event) {
        //fazendo com que não atualize a pagina
        event.preventDefault();
        //ædicionadno a negociação a lista
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        //passando uma mensagem ao usuario
        this._mensagem.texto = "Negociação adicionada com sucesso!!";
        //exibir a mensagem
        this._mensagemView.update(this._mensagem);
        //limpando a negociação
        this._limpaFormulario();
    }

    apaga(){
        //chamando o metodo criado
        this._listaNegociacoes.esvazia();

        //definindo a mensagem padrao parea o usuario
        this._mensagem.texto = "Negociações apagadas com sucesso!";
        //pede pra view atualizar
        this._mensagemView.update(this._mensagem);
    }
    //criando a negociação
    _criaNegociacao(){
        let negociacao = new Negociacao(
            //usando o date helper ja na declaração
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);

        return negociacao;
    }

    //esse metodo significa que só pode ser chamado pelo propria classe
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}