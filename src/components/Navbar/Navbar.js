import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div>
                <h1 className="title">NewIdeal</h1> 
            </div>
            <div className="opciones">
                <button>Remeras</button>
                <button>Buzos</button>
                <button>Camisas</button>
                <button>Pantalones</button>
            </div>
            <CartWidget/>
        </nav>

    )
}
export default Navbar