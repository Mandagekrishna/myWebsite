import styles from '../../Styles/FooterStyles.module.css'


export default function Footer()
{
    return(
        <>
            <div className={styles.container}>

                <div className={styles.donationContainer}>
                    <p>Your donation keeps me motivated to run and <br/>
                    keep sharing on this site—thank you for your support!!!"</p>

                    <p>
                        you can make donation by buying thank you card from below
                    </p>

                    <button type='button' className={styles.button}>Donate</button>
                </div>


                <div className={styles.footercontainer}>
                  
                <button type='button' className={styles.footercontainer} >Internships</button><br/>
               <button type='button' className={styles.footercontainer}>Freshers Jobs</button><br/>
                <button type='button' className={styles.footercontainer}>Experienced Jobs</button><br/>
                <button type='button' className={styles.footercontainer}>Walk-IN Drives</button><br/>
                
                </div>


            </div>
        
        
        </>
    )
}