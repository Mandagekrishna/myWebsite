import styles from '../../Styles/Introduction.module.css'

export default function Introduction()
{

    
    return(
    <>
    <div className={styles.container}>

        <div className={styles.element1}>
            <h2>
                Welcome to Referrals
            </h2>
        </div>

        <div className={styles.element2}>
             <p>This platform is designed to share high-quality referral opportunities sourced directly 
                from different hiring platforms to make your job hunt easier, faster and smoother. <br/>
                We believe in the power of community and helping others succeed in their career journey.

                <br/><br/>
                          
                Here, you can find job referrals, Internships and job leads shared by professionals who
                are dedicated to helping talented individuals like you take the next step in their career.
             
            </p>
        </div>

        <div className={styles.element3}>
            <h1>NOTE</h1>
             <p>
                 We do not ask for any money at any point.  <br/>  <br/>
                All the referrals, job leads, and resources listed on our site are completely free to access and apply. <br/> <br/>
                If you encounter any request for payment or suspicious activity, please be cautious and proceed at your own risk.<br/>
                We are not responsible for any fees or charges that may be required to apply for any jobs or access specific services listed on this site. <br/>
                <br/>It is always important and your responsibility to review the job posting carefully and confirm any potential costs directly with the respective employer or job board before proceeding with your application.
            </p>
        </div>

    </div>
    
    
    </>)
}