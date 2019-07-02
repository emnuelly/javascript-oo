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
        //chama o elemento e passa o paramentro da div
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        //a tabela vai aparecer somente quando a tabela for criada
        this._negociacoesView.update(this._listaNegociacoes);
        //chamando a classe mensagem
        this._mensagem = new Mensagem();
        //view
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
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
        //atualizando a tabela
        this._negociacoesView.update(this._listaNegociacoes);
        //limpando a negociação
        this._limpaFormulario();
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