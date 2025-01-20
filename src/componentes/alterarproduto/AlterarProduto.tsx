import { useParams } from "react-router-dom";
function AlterarProduto() {
        const {id} = useParams()
    return(
        <div>
            <h1>Alterar Produto {id}</h1>
        </div>
    )
    
}
export default AlterarProduto;