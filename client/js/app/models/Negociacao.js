class Negociacao {
    
    constructor(data, quantidade, valor){
        /*
        dizendo que o valor das variaveis
        declaradas tem que ser definidas no
        momento de instanciar o objeto.
        o traço diz ao programado que é um 
        valor que não deve trocar
        */
        this._data = new Date(data.getTime()); //usando para não ser alterada o valor
        this._quantidade = quantidade;
        this._valor = valor;
        //dizendo que esse obejto não
        //pode ser inserido valor depois
        // de instaciado
        Object.freeze(this);

    }

    /*
        criando get para poder
        pegar o valor inserido
    */

    //declarando o os get assim para serem mais faceis de chamar
    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor
    }
}