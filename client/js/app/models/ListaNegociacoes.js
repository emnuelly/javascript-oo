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
        //program. defensiva: ele recebe um array vazio
        //e cria uma copia, isso evita que uma negocia
        return [].concat(this._negociacoes);
    }

}