class ProxyFactory{

    static createProxy(objeto, props, acao){
        //crindo o proxy a partir do objeto que está passando
        return new Proxy(objeto, {
            //usando para listar as negociacoes criadas
            get(target, prop, receiver){
                if(props.includes(prop) && _ehFuncao(target[prop])){

                    return function(){

                        console.log(`método '${prop}' interceptado`);
          
                        Reflect.apply(target[prop], target, arguments);
          
                        return acao(target);
          
                    }
                }
                     
                return Reflect.get(target, prop, receiver);
            },

            //usado para setar o texto
            set(target, prop, value, receiver){
                let retorno = Reflect.set(target, prop, value, receiver);
                    if(props.includes(prop)) acao(target);
                    return retorno;
                
            }
        });
    }

    //pra saber se é uma função
    static _ehFuncao(func){
        return typeof(func) == typeof(Function);
    }
}