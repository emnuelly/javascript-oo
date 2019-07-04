class Bind{

    //passando o modelo, a view, e todos os outros paramentros com esse ... serão um array
    constructor(model, view, ...props){
        //criando a classe que pega o Proxy para executar no controller
        let proxy = ProxyFactory.createProxy(model, props, model =>
            view.update(model));

        view.update(model);
        return proxy;
    }
}