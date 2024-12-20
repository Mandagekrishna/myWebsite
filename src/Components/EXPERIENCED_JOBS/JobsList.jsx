import styles from '../../Styles/InternshipStyles/InternshipList.module.css'
import Data from '../../DATA/ExperiencedJobs.json';
import {useState} from 'react';
import React from 'react';
import Footer from '../HOME/Footer';



export default function InternshipList()
{
    let [JobsData,updateData] = useState(Data);

    console.log(JobsData);
    return(

 
        <>
            <div className={styles.container}>

               
               <div className={styles.element1}>
                
                    <div className={styles.element1a}>
                        <h1 >Jobs</h1>
                    </div>
                        
                    <input  className={styles.element1b} type='text' placeholder='search box'/>

               </div> 



                
             {
             JobsData.map(element => ( console.log(element['mustHaveSkills']),
                                                
                                                <div className={styles.element2}>

                                                        <div className={styles.element2card1}>  

                                                                <div className={styles.element2card11}>
                                                                    <h1>{element['companyName']}</h1>
                                                                    <h3>{element['position']}</h3><br/>
                                                                    <p>{element['positionType']}</p>
                                                                    <p>{element['salary']}</p>
                                                                 </div>

                                                                <div className={styles.element2card12}>
                                                                    <p>{element['workMode']}</p>
                                                                    <p>{element['experienceRequired']}</p>                                                        
                                                                </div>                        
                                                                    
                                                         </div>                                            
                                                
                                                       
                                                  
                                                <div className={styles.skillscard}>
                                                   
                                                    {   Array.isArray(element.mustHaveSkills)?
                                                        element.mustHaveSkills.map((element)=>(
                                                            
                                                                <button className={styles.skills} >{element}</button>

                                                            
                                                        )):<></>
                                                    
                                                    }

                                                </div>

                                                <div className={styles.button}>
                                                     <button className={styles.button} >View Details  &#8594; </button>
                                                </div>

                                                 

                                                 
                                                
                                                </div>


                                            )
                                )
            }





            <div className={styles.element3}>
                
                <div className={styles.element3card}>
                    hello
                </div>

                <div className={styles.element3card}>
                    hello
                </div>


            </div>


     </div>

     <Footer></Footer>
        
</>
    )
}