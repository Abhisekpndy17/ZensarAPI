import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'><Link href='/'>Logo</Link></div>
            <ul className={styles.navgrid}>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/blog'>Blogs</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar