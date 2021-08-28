class Cardapio{

    //atributos
    constructor(titulo,descricao,preco){
        this.titulo = titulo;
        this.descricao = descricao;
        this.preco = preco;
        
    }

    Entregar(deleveri){
        //Boolean = entregar
         if (deleveri){
             console.log("Entregar o pedido.");
         }else{
             console.log("Não precisa entregar o pedido.");
         }
 
     } 

    // metodos
    Pedir(pedido,qtd,delivery) { //static é para chamar a class sem o new Class

        const precofinal = (this.preco * qtd);

        console.log("O Cliente pediu: "+qtd +"x "+ pedido+ " R$"+this.preco);

        console.log("Titulo: " + this.titulo);
        console.log("Descrição: " + this.descricao);
        console.log("Total R$:" + precofinal);
       
        this.Entregar(delivery);

    }

     
}

// exemplo de static 

var pedido = new Cardapio(
    "Feijoada do João",
    "A melhor Feijoada de Sampa!",
    25.50
    );

pedido.Pedir("Feijoada Pequena",20,false);

//Cardapio.Pedir("Feijoada",2);