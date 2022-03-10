import './about.css'
import{ useEffect } from 'react';
import bhakthi from '../../images/fx-gs.jpg';
export default function About(){
    useEffect(() =>{
        var scrollselect = document.getElementById("about");
        let wrapper = document.getElementById("wrapper");
        wrapper.addEventListener('scroll',function(){
            let contentPosition = scrollselect.getBoundingClientRect().top;
            let screenPosition = window.innerHeight;
            if(contentPosition<screenPosition){
                scrollselect.classList.add('scroll-active');
            }
            else{
                scrollselect.classList.remove('scroll-active');
            }
        });
},[])

    return(
        <div className='about-wrapper scroll-select' id="about">
                <div className="headline-wrapper product-headline-wrapper">
                        <h1>ABOUT</h1>
                        <br></br>
                        <p></p>
                </div>
            
                <div className="about-contents-wrapper">
                    <div className="about-content content-one">
                        <img src={ bhakthi } alt="founder Bhakthi Joshi"></img>
                        <h1>FOUNDER :-<br></br> <span>BHAKTI JOSHI</span></h1>
                        <p>Bhakti started Bottles Heaven on 16th June 2019. During her college days she didnt had any interest towards ENTREPRENEURSHIP  but back in 2019 she just didn't wanted to do 5-9 jobs so she found Bottles Heaven.</p>
                    </div>
                    <div className="about-content content-two">
                        <h1>WHAT DO WE HAVE ?</h1>
                        <table>
                            <tr>
                                <th><span>S</span>oaps<span>(</span>30+ varities<span>)</span></th>
                                <th><span>P</span>erfumes<span>(</span>30+ varities<span>)</span></th>
                                <th><span>F</span>acial Bombs</th>
                                <th><span>F</span>ace wash</th>
                                <th><span>B</span>ath salts</th>
                                <th><span>F</span>ace serum</th>
                                <th><span>H</span>air mask</th>
                                <th><span>L</span>ip care</th>
                                <th><span>B</span>ody Butter</th>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
    )
}