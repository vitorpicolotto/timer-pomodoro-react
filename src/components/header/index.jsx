import './header.css'

export function Header (){
    return(
        <header className='container--header'>
            <img src="/logotipo.png" alt="logotipo do lab365" />

            <nav>
                <a href="#">Nome</a>
                <a href="#">Historico</a>
            </nav>

        </header>
    )
}