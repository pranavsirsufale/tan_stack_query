import { NavLink } from 'react-router-dom'



const Header = () => {
    return (
        <>
        <section className='header'>
            <nav>
                <p> Hii! It's Pran</p>

                <p> 

                <ul className='nav-list'>
                    <li >
                        <NavLink to={'/'}
                        style={navigator}
                        >
                        Home

                        </NavLink>
                        </li>
                    <li>Old Data</li>
                    <li>
                        <NavLink to={'/data/using/rq'} >

                        React Query Fetch Data 

                        </NavLink>
                        </li>
                </ul>
                </p>
            </nav>
        </section>
        </>
    )
}

export default Header