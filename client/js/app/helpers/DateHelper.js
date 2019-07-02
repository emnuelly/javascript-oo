/**
 * Classe Helper é uma classe que vai te auxiliar em alguma 
 * funcionalidade do teu sistema
 */
class DateHelper{

    constructor(){
        //lançando erro
        throw new Error('Esta classe não pode ser instaciada pois não possui metoodos');
    }

    /**
     * o metodo pe estatico pois ja declara ele
     * na hora da criação
     */
    static textoParaData(texto){
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    /**
     * Serve para transformar data no texto para retornar
     */
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear}`; 
        
        /*
        data.getDate()
        + '/' + (data.getMonth() + 1)
        + '/' + data.getFullYear(); */
    }
}