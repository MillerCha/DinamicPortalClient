import Course from "./Course";
import English from '../assets/English.jpg'
import Craftsmanship from '../assets/Craftsmanship.jpg'
import Sport from '../assets/Sport.jpg'
import Swimming from '../assets/Swimming.jpg'
import Carpentry from '../assets/carpentry.webp'
import { useState } from "react";
import MyModal from "./MyModal";
import RegistrationForm from "./RegistrationForm";


export default function Courses() {

  //const [open, setOpen] = useState(false);
  const [selctedCourse,setSelctedCourse] = useState(null);
  
  let courses = [
    {id:20, title: 'אנגלית', image: English, color: 'brown', text: 'חוג אנגלית לבנים בגילאי 5-12, למידה מהנה משולבת משחק'
    ,groups:[{id:201,description:'גילאי 5-8'},{id:202,description:'גילאי 9-12'}]},
    {id:10, title: 'נגרות', image: Carpentry, color: '#db7a13', text: 'חוג נגרות לבנים בגילאי 7-13, מחולק לקבוצות לפי גיל' 
     ,groups:[{id:101,description:'גילאי 7-10'},{id:102,description:'גילאי 11-13'}]},
    {id:30, title: 'התעמלות', image: Sport, color: '#3f2aa5', text: 'חוג התעמלות לבנים/ בנות בגילאי 5-14 מחולק לקבוצות' },
    {id:40, title: 'שחיה', image: Swimming, color: '#057699', text: 'חוג שחיה בבריכת מפלים לבנים או בנות מחולק לקבוצות לפי רמות' },
    {id:50, title: 'התעמלות', image: Sport, color: '#3f2aa5', text: 'חוג התעמלות לבנים/ בנות בגילאי 5-14 מחולק לקבוצות' },
    {id:60, title: 'שחיה', image: Swimming, color: '#057699', text: 'חוג שחיה בבריכת מפלים לבנים או בנות מחולק לקבוצות לפי רמות' },
    {id:70, title: 'אומנות', image: English, color: '', text: 'חוג אומנות לנערות בגילאי 12-18' }];


  const handleClick = (Course) => {
        setSelctedCourse(Course);
        //setOpen(true);
  }

  return (
    <>
    <div style={{ display: 'flex', flexFlow: 'wrap', 'justifyContent': 'center' }}>
      {courses.map((i, index) => {
        return <div key={index} onClick={e => handleClick(i)}>
          <Course item={i} />
        </div>
      })}
    </div>
    <MyModal open={selctedCourse} setOpen={setSelctedCourse}>
      <RegistrationForm courses = {courses} selctedCourse={selctedCourse}/>
      </MyModal>
    </>

  );
}