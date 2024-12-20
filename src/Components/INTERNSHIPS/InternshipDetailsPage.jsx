import styles from '../../Styles/DetailsPage.module.css'
import Data from '../../DATA/Internship.json'
import {useState} from 'react'
import { useParams } from 'react-router-dom';


export default function InternshipDetailsPage(){

    let [InternshipData,updateData] = useState(Data);
    let {id} = useParams();
    let currentInternship = InternshipData.filter(element => element["id"]==id)
    console.log(currentInternship)
    return(
    
    <>
        <div className={styles.container}>
            
            <div className={styles.element1}>
                <h2>{currentInternship[0]["companyName"]}</h2>
            </div>


            <div className={styles.element3}>                           
                            <div className={styles.element3card}>
                                hello
                            </div>            
                            <div className={styles.element3card}>
                                hello
                            </div>     
            </div>
        
        
        
        
        </div>
    
    
    
    
    
    </>)
}