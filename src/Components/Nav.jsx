import {NavLink} from 'react-router-dom'
import styles from '../Styles/Navbar.module.css'
export default function Nav()
{
    return(
        <>
            <div className={styles.navdivContainer}>
               <div className={styles.itema}><NavLink className={styles.itema} to='/Home'><li>Home</li></NavLink></div> 
                <div className={styles.itemb}><li>Menu</li></div>
            </div>
        
        
        </>
    )
}