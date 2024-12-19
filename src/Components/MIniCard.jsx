import styles from '../Styles/Card.module.css'



export default function MiniCard(){

    return(
        <>
       

        <div className ={styles.container}>
               
               <button type='button' className={styles.card1} >                   
                      INTERNSHIPS                  
                </button>
           
                
                <button type='button' className={styles.card2}>
                      FRESHERS JOBS
                </button>

                <button type='button' className={styles.card3}>
                     EXPERIENCED JOBS
                </button>

                <button type='button' className={styles.card4}>
                        WALK-IN INTERVIEWS
                </button>

               
        </div>
        </>
    )
}