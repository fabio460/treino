
import './App.css';
import React, { useEffect, useState } from 'react';
import Imagem from './imagem';
import ApiGame from './apiGames';
import lupa from './lupa.png'
import logo from './logo.png';
 
 function  App() {
  const [lista,setLista]=useState([]);
  const [busca,setBusca]=useState();
  useEffect( () => {    
   async function carregar(){
      let item =await ApiGame.popular()
      setLista(item.results)
    }
    carregar();
  }, []);
  
  const tv =async ()=>{
    let item =await ApiGame.tv()
    console.log(item.results)
    setLista(item.results)
  }
  const passandoAgora =async ()=>{
    let item =await ApiGame.passandoAgora()
    setLista(item.results)
    console.log(item.results)

  }
  const proximos =async ()=>{
    let item =await ApiGame.proximos()
    setLista(item.results)
    console.log(item.results)

  }
  const maisVotados =async ()=>{
    let item =await ApiGame.maisVotados()
    setLista(item.results)
    console.log(item.results)

  }
  const buscar = async()=>{
    if(busca){
      let item =await ApiGame.buscar(busca)
      setLista(item.results)
      console.log(item.results)
    }
  }
  const fecharModal = ()=>{
    document.querySelector('.modal').style.display='none';
    document.querySelector('.fotoModal').innerHTML='';
    //window.location.reload()
  }
  return (
    <>
     <header>
        <div className='listaMenu'>
            <a href='https://fabio460.github.io/Portifolio/' rel=''><img src={logo} alt=''/></a>
            <h1>Sinopse de filmes e series</h1>
            <div onClick={proximos}>Proximos</div>
            <div onClick={maisVotados}>Popular</div>
            <div onClick={tv}>TVs</div>
            <div onClick={passandoAgora}>PassandoAgora</div>
        </div>
        <div className='form'>
          <input type='text' placeholder='pesquise...' value={busca} onChange={(e)=>{setBusca(e.target.value)}}/>
          <div className='lupa' onClick={buscar}><img src={lupa} alt=''/></div>
        </div>
     </header>
     
      <div className='modal'>
        <div className='modalBody ' onClick={fecharModal}>
           <div  className='transparencia'>
                  <div className='voltar'>{'<'} VOLTAR</div>
                  <div className='fotoModal'></div>
                  <div className='tituloModal'></div>
                  <div className='sinopse'></div>
                  <div className='dataModal'></div> 
                  
            </div>          
        </div>
      </div>
      <div className='imagens'>
          
          {lista.map((e,key)=>{
              return <Imagem objeto={e} key={key} image={e.poster_path} titulo={e.original_title} name={e.name} original_name={e.original_name} id={e.id} item={e.production_companies}/>
          })}
      </div>
      <footer>
          <p>acesse minhas redes socias:</p>
          <a href='https://github.com/fabio460'>github</a>
          <a href='https://fabio460.github.io/Portifolio/'>portifólio</a>
          <a href='https://www.linkedin.com/in/fabio-oliveira-b2589163/'>Linkdin</a>
      </footer>
    </>
  );
}

export default App;
