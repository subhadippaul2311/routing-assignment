import styles from './Home.module.css'
import { NavBar } from './Navbar';

export  function Contact(){
    
     
        return(
            <>
               <NavBar/>
            <div>
            <h1 className={styles.welcome}>This is Contact Page</h1>
            </div>
         
            <h2 className={styles.home}>Contact Us</h2>

            <div className={styles.work}>
                <h3> You Can Work Anywhere</h3>
                {/* <img className={styles.image1} src="https://m.economictimes.com/thumb/msid-89451257,width-1200,height-900,resizemode-4,imgsize-26644/work-boss-pushing2_
                         istock.jpg" alt=""/> */}
            </div>
            </>
        )
    }