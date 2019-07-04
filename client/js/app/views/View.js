/**
 * Classe que funciona como principal e serve de herança para as outras veiws
 */
class View{

constructor(elemento){
    this._elemento = elemento;
}

template(){
    //exigindo que seja implementado esse metodo nas classes que recebem esle.
    throw new Error('O metodo template() deve ser implementado! ')
}

update(model){
    this._elemento.innerHTML = this.template(model);
    }

}