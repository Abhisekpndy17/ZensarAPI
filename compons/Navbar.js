import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'><Link href='/'>iAbhishek</Link></div>
            <ul className={styles.navgrid}>
                <li><Link href='/user'>Users</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar