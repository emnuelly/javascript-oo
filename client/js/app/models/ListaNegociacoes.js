class ListaNegociacoes {

    constructor(){
        this._negociacoes = [];
    }

    //adiciona negociacoes 
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    //listar as negociacoes
    get negociacoes() {
        return this._negociacoes;
    }

}