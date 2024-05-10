import { useState } from "react";
import PrincipalDeslogado from "./pages/PrincipalDeslogado";
import PrincipalLogado from "./pages/PrincipalLogado";
import DetalhesLivro from "./pages/DetalhesLivro";
import MinhaEstante from "./pages/MinhaEstante";
import FinalizarCompra from "./pages/FinalizarCompra";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import CompraRealizadaSucesso from "./pages/CompraRealizadaSucesso";
import MenuLogado from "./components/MenuLogado";
import MenuDeslogado from "./components/MenuDeslogado";
import Rodape from "./components/Rodape";
import FinalizarCompraPagamento from "./pages/FinalizarCompraPagamento";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MinhaSacola from "./pages/MinhaSacola";


function App() {

   const [authentic, setAuthentic] = useState(false)
  console.log(authentic)
  return(

         <div className="container-principal" >
          <BrowserRouter>
            {!authentic && <MenuDeslogado />}
            {authentic && <MenuLogado/>}
            <Routes>
              <Route path="/" element={<PrincipalDeslogado authentic={authentic} setAuthentic={setAuthentic} />} />
              <Route path="logado" element={<PrincipalLogado setAuthentic={setAuthentic} />} />
              <Route path="detalhes-do-livro" element={<DetalhesLivro/>}/>
              <Route path="detalhes-do-livro/minha-sacola" element={<MinhaSacola/>}/>
              <Route path="detalhes-do-livro/minha-sacola/finalizar-compra" element={<FinalizarCompra/>} />
              <Route path="detalhes-do-livro/minha-sacola/finalizar-compra/pagamento" element={<FinalizarCompraPagamento/>} />
              <Route path="detalhes-do-livro/minha-sacola/finalizar-compra/pagamento/compra-realizada-com-sucesso" element={<CompraRealizadaSucesso/>} />   
              <Route path="minha-estante" element={<MinhaEstante/>} />
              <Route path="*" element={<PaginaNaoEncontrada/>} />
            </Routes>
            <Rodape/>
          </BrowserRouter>
         </div>
       )
}

export default App;
