import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import ReactSkillBar from 'react-skillbars';


const SkillBar = () => {
    const [skillBar, setSkillBar] = useState(false);
    const one = [
        { type: 'one', level: 90 }
    ];
    const two = [
        { type: 'two', level: 110 }
    ];
    return (
        <>
            <ScrollTrigger onEnter={()=> setSkillBar(true)} onExit={()=> setSkillBar(false)}>
                <div className="skill__area-item">
                    <div className="skill__area-item-content">
                        <span className="text-two">Business Consulting</span> 
                        <span className="skill__area-item-count text-two">
                            <span className="counter text-two">
                                {skillBar && <CountUp start={0} end={69} duration={4} delay={1}></CountUp>}
                            </span>%
                        </span>
                    </div>
                    <div className="skill__area-item-inner">
                        {skillBar && <ReactSkillBar skills={one} height={10} animationDuration={3000} />}
                        </div>
                    </div>
                    <div className="skill__area-item">
                        <div className="skill__area-item-content">
                            <span className="text-two">Human Resource</span> 
                            <span className="skill__area-item-count text-two">
                                <span className="counter text-two">
                                    {skillBar && <CountUp start={0} end={84} duration={4} delay={1}></CountUp>}
                            </span>%
                        </span>
                    </div>
                    <div className="skill__area-item-inner">
                        {skillBar && <ReactSkillBar skills={two} height={10} animationDuration={3000} />}
                    </div>
                </div>                 
            </ScrollTrigger>
        </>
    );
};

export default SkillBar;