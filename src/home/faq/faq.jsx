import './faq.css'
import { useEffect } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdOutlineQuestionAnswer } from 'react-icons/md'
export default function Faq(){
    
    useEffect(() =>{
            let dropdownone = document.getElementById("dropdownone");
            let dropdowntwo = document.getElementById("dropdowntwo");
            let dropdownthree = document.getElementById("dropdownthree");
            let faqanswerone = document.getElementById("faqanswerone");
            let faqanswertwo = document.getElementById("faqanswertwo");
            let faqanswerthree = document.getElementById("faqanswerthree");
            dropdownone.addEventListener("click" , ()=>{
                dropdownone.classList.toggle('faq-dropdown-icon-active');
                faqanswerone.classList.toggle('faq-answers-active');
            })
            dropdowntwo.addEventListener("click" , ()=>{
                dropdowntwo.classList.toggle('faq-dropdown-icon-active');
                faqanswertwo.classList.toggle('faq-answers-active');
            })
            dropdownthree.addEventListener("click" , ()=>{
                dropdownthree.classList.toggle('faq-dropdown-icon-active');
                faqanswerthree.classList.toggle('faq-answers-active');
            })

                var scrollselect = document.getElementById("faq");
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
        <div className="faq-wrapper scroll-select" id="faq">
                <div className="headline-wrapper product-headline-wrapper" >
                    <h1>FAQ'S</h1>
                    <br></br>
                    {/* <p>Please contact us if you cannot find an answer to your question.</p> */}
                </div>
                <div className="questions-wrapper">
                    <div className="faq">
                        <div>
                            <p className="faq-questions">Your site mentions Compliance and Customer Support. What else do you provide?</p>
                            <p className='faq-answers' id='faqanswerone'><MdOutlineQuestionAnswer className='answers-icon'/>Some other services we provide are Financial, Marketing, Sales, Human Resources, Program/Project Management, IT, Public Relations management, and many more!</p>
                        </div>
                        <IoIosArrowDropdownCircle className='faq-dropdown-icon' id='dropdownone'/>
                    </div>
                    <div className="faq">
                        <div>
                            <p className="faq-questions">Do you have packages or do you have to pay for each service individually?</p>
                            <p className='faq-answers' id='faqanswertwo'><MdOutlineQuestionAnswer className='answers-icon'/>Once we determine what your needs are, we can put together a cost-effective package that serves your company best. </p>
                        </div>
                        <IoIosArrowDropdownCircle className='faq-dropdown-icon' id='dropdowntwo'/>
                    </div>
                    <div className="faq">
                        <div>
                            <p className="faq-questions">Do I really need business management?</p>
                            <p className='faq-answers' id='faqanswerthree'><MdOutlineQuestionAnswer className='answers-icon'/>While not all businesses need our assistance, all businesses could benefit from our services. We have professionals to help with the less desirable jobs to ensure you make the most of your business!</p>
                        </div>
                        <IoIosArrowDropdownCircle className='faq-dropdown-icon' id='dropdownthree'/>
                    </div>
                </div>
            </div>
    )
}