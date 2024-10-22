import { useEffect, useState } from 'react';
import './App.css';

type ProdutoType = {
    id: number;
    nome: string;
    preco: string;
    descricao: string;
    imagem: string;
};

type UsuarioType = {
    id: number;
    nome: string;
    email: string; 
    created_at: string,
    updated_at: string
  };

function App() {
    const [nome, setNome] = useState("");
    const [produtos, setProdutos] = useState<ProdutoType[]>([]);
    const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

    useEffect(() => {
        setNome("Nicole Góis");

        // Buscar os dados do Backend para produtos
        fetch("https://one022a-marketplace-8goe.onrender.com/produtos")
            .then(resposta => resposta.json())
            .then(dados => setProdutos(dados));

        // Buscar os dados do Backend para usuários
        fetch("https://one022a-marketplace-8goe.onrender.com/usuarios")
            .then(resposta => resposta.json())
            .then(dados => setUsuarios(dados));
    }, []);

    return (
        <>
            <h1>{nome}</h1>
            <div className="produtos-container">
                {
                    produtos.map(produto => {
                        return (
                     <div key={produto.id} className="produto-item">
                     <h1>{produto.nome}</h1>
                    <div className='container-imagem'>
                   <img src={produto.imagem} alt="Imagem do celular" />
                    </div>
                    <p>{produto.preco}</p>
                    <p>{produto.descricao}</p>
                     </div>
                    );
                    })
                }
            </div>

            <h2>Usuários</h2>
         <div className="usuarios-container">
        {usuarios.map(usuario => {
          return (
            <div key={usuario.id} className="usuario-item">
              <h3>{usuario.nome}</h3>
              <p><strong>Email:</strong> {usuario.email}</p>
              <p><strong>Data de Criação:</strong> {new Date(usuario.created_at).toLocaleString()}</p>
              <p><strong>Última Atualização:</strong> {new Date(usuario.updated_at).toLocaleString()}</p>
            </div>
          )
        })}
      </div>
        </>
    );
}

export default App;