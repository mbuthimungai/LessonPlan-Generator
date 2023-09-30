import React from "react";
import "./Generate.css"
import Dropdown from "../../components/Dropdown/Dropdown";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
const Generate = () => {
    const gradeLevels = [
        {value: "kindergarten", optname: "Kindergarten"},
        {value: "1st grade", optname: "1st grade"},
        {value: "2nd grade", optname: "2nd grade"},
        {value: "3rd grade", optname: "3rd grade"},
        {value: "4th grade", optname: "4th grade"},
        {value: "5th grade", optname: "5th grade"},
        {value: "6th grade", optname: "6th grade"},
        {value: "7th grade", optname: "7th grade"},
        {value: "8th grade", optname: "8th grade"},
        {value: "9th grade", optname: "9th grade"},
        {value: "10th grade", optname: "10th grade"},
        {value: "11th grade", optname: "11th grade"},
        {value: "12th grade", optname: "12th grade"},
    ]   
    const subjects = [
        {value: "art", optname: "Art"},
        {value: "business", optname: "Business"},
        {value: "career and technical education",
         optname: "Career and Technical Education"},
         
    ] 
    return (
        <>
            <div className="column main">
                <div className="variables whiteBg leftText p30">
                    <div className="p20">
                        <h2 className="p10">
                        Lesson Plan Generator
                        </h2>
                        <p>
                            select a grade level, lesson title,
                            and a detailed description
                        </p>
                    </div>
                    <div className="p20">
                        <h2 className="colorGrey p10">
                            Grade Level
                        </h2>
                        <Dropdown 
                        name="gradeLevel"
                        id="gradeLevelDrpdwn"
                        items={gradeLevels}
                        placeholder="Select a grade level"
                        />
                    </div>
                    <div className="p20">
                        <h2 className="colorGrey p10">
                            Subject
                        </h2>
                        <Dropdown 
                        name="subject"
                        id="subjectDrpdwn"
                        items={subjects}
                        placeholder="Select a subject"
                        />
                    </div>
                    <div className="p20">
                        <h2 className="colorGrey p10">Lesson title</h2>
                        <Input placeholder="Add a lesson title or topic"
                        label="Lesson plan on:"
                        />
                    </div>                                        
                    <div className="p20">
                        <h2 className="colorGrey p10">Lesson Description</h2>
                        <TextArea
                        placeholder="Type something like this: How music is used in native american tribes"
                        />
                    </div>
                    
                    <Button name="Generate"/>
                </div>
                <div className="directions whiteBg leftText p30">
                    <h2 className="colorGrey p10">Directions:</h2>
                    <ul className="dirUl">
                        <li>Use the textbox below to edit your lesson plan</li>
                        <li>Once it is ready you can download your lesson plan below
                            by rating the quality of the lesson plan
                        </li>
                        <li>
                            All of your downloaded lesson plans will always be available
                            in the Documents section (to the left.)
                        </li>
                    </ul>
                    <div className="textareaBox">
                        <TextArea placeholder="Your lesson will appear here..."/>
                    </div>
                    
                </div>
            </div>
        </>
    )
    
}

export default Generate