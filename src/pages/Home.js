import { Link } from 'react-router-dom'
import banner from '../assets/banner.png'
import SimpleListMenu from '../components/SimpleMenu'
import { useState } from 'react';

export default function Home() {
    const [menuOptionSelected, setMenuOptionSelected ] = useState('');

    return (
        <div className="content-product">
            
            <header>
                <div className="user">
                    <span>Usuário</span>
                </div>
            </header>

            <section className="banner">
                <img src={banner} alt="Banner" />
                <div className="text-intro">
                    <p>Plantão de dúvidas sobre o MVP</p>
                    
                    <SimpleListMenu setMenuOptionSelected={setMenuOptionSelected} />
                    
                    <Link to={"/products"} state={{ menuOptionSelected: menuOptionSelected }}>
                        <button className='more-info'>Veja os produtos</button>
                    </Link>
                </div>
            </section>
        </div >
    )
}
