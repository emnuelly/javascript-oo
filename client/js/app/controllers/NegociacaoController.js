class NegociacaoController{

    //criando um construtor para a DOM
    constructor() {
        //definindo o $ como uma variavel que recebe o queryselector
        let $ = document.querySelector.bind(document);
        //salvando em cache o que foi recebido das inputs
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
        let self = this;

        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {

            get(target, prop, receiver){
                if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)){

                    return function(){

                        console.log(`método '${prop}' interceptado`);
          
                       Reflect.apply(target[prop], target, arguments);
          
                        self._negociacoesView.update(target);
          
                      }
           
                }
                     
                return Reflect.get(target, prop, receiver);

            }
        });

        /*
        //chamando a lista de negociaçoes, com uma arrowfunction
        this._listaNegociacoes = new ListaNegociacoes(model =>
            //passando o update para receber o model sem precisar chamar em toda funcão
            this._negociacoesView.update(model)); 
        */
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