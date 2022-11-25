import Logo from "../../assets/logo.svg"
import HeaderSyle from "./styles"

function Header ({search, setSearch}) {


    return (
        <HeaderSyle>
            <div>
            <img src={Logo} alt="Logo"/>
            <span>
                <input type="text" placeholder="Digitar Pesquisa" valeu={search} onChange={(e) => setSearch(e.target.value)}/>
                <button >Pesquisar</button>
            </span>
            </div>
        </HeaderSyle>
    )
}

export default Header