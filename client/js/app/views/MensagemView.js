class MensagemView extends View{

    constructor(elemento){
        //passando para a classe pai que é a VIEW
        super(elemento);
    }


    template(model){
        //se for diferente não ira exibir nada
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

}