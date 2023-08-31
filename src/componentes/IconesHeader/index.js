import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import './estilo.css'


const icones = [sacola, perfil]

function IconesHeader() {
    return (
        <ul className='icones'>
        { icones.map((icone) => (
          <li className='icone_opcao'><img src={icone}></img></li>
        ))} 
      </ul>
    )
} 

export default IconesHeader;