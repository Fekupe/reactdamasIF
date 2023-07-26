import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Conteudo,{OlaMundo} from './componentes/Conteudo';
import Rodape from './componentes/Rodape';


/*
Arquivo App JSX
Componente funcional = Porque ele é uma função
*/
function App() {

  OlaMundo();
  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O React substitui className por class pq class é palavra reservada do JS*/
    <>
    {/* Nosso cabecalho tem uma propriedade chamada titulo */}
    <Cabecalho logo="icone.png" 
    titulo="Flávia Favoritos" 
    subtitulo="Guardando seus favoritos no coração!"/>
    <Conteudo
    charmander="charmander.png" />
    <Rodape
    instagram="instagram.png"
    facebook="facebook.png"
    twitter="twitter.png" 
    data=""
    />
    </>
  );
}

export default App;
