class ListaNegociacoes {

    constructor(){
        this._negociacoes = [];
        
    }

    //adiciona negociacoes 
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        //passando o paramentro da classe que é ela mesmo
        //this._armadilha(this);
        //usando a api 
        //recebe a função, o contexto, e os paramentros
        //Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    //listar as negociacoes
    get negociacoes() {
        //program. defensiva: ele recebe um array vazio
        //e cria uma copia, isso evita que uma negocia
        return [].concat(this._negociacoes);
    }

    //metodo para apagar a lista
    esvazia(){
        this._negociacoes = [];
        //passando o paramentro da classe que é ela mesmo
        //Reflect.apply(this._armadilha, this._contexto, [this]);

    }

}