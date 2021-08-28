class Filmes{

    //atributos
    constructor(){
        this.titulo = '';
        this.ano = 0;
        this.subtitulo = '';
        this.autores = [];
        this.duracao = '';

    }

    // metodos
    reproduzir(id) {
        console.log("reproduzindo..." + this.autores[id]);
    }

    pausar() {
        console.log("Pausado");
    }

    proximo() {
        console.log("Proximo.");
    }

    fechar() {
        console.log("Filme fechado.");
    }

    cadastrar() {
        console.log("Titulo: " + this.titulo);
        console.log("Ano: " + this.ano);
        console.log("Sub titulo: " + this.subtitulo);
        console.log("Autores: " + this.autores);
        console.log("Duração: " + this.duracao);

    }

}



const addFilme = new Filmes();

//Cadastra no BD as info do novo filme!
addFilme.titulo = "Os Programadores de POO";
addFilme.autores = ['Flavio','Nois mesmo','Eu Mexmoo'];
addFilme.ano = "2022";
addFilme.subtitulo = "Aprendendo POO do Zero com JavaScript em 2021";
addFilme.duracao = "01:34:00";

addFilme.cadastrar();
console.log("-------------------------------------|-----------------------------------");
addFilme.reproduzir(1);



//addFilme.reproduzir(2);

//request htpp expo  
//https://snack.expo.dev/embedded/@aboutreact/http-example?preview=true&platform=ios&iframeId=3efduhfgw5&theme=dark