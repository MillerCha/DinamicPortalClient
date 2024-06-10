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

  const [open, setOpen] = useState(false);

  let Items = [
    { title: 'אנגלית', image: English, color: 'brown', text: 'חוג אנגלית לבנים בגילאי 9-12, למידה מהנה משולבת משחק' },
    { title: 'נגרות', image: Carpentry, color: '#db7a13', text: 'חוג נגרות לבנים בגילאי 7-12, מחולק לקבוצות לפי גיל' },
    { title: 'התעמלות', image: Sport, color: '#3f2aa5', text: 'חוג התעמלות לבנים/ בנות בגילאי 5-14 מחולק לקבוצות' },
    { title: 'שחיה', image: Swimming, color: '#057699', text: 'חוג שחיה בבריכת מפלים לבנים או בנות מחולק לקבוצות לפי רמות' },
    { title: 'התעמלות', image: Sport, color: '#3f2aa5', text: 'חוג התעמלות לבנים/ בנות בגילאי 5-14 מחולק לקבוצות' },
    { title: 'שחיה', image: Swimming, color: '#057699', text: 'חוג שחיה בבריכת מפלים לבנים או בנות מחולק לקבוצות לפי רמות' },
    { title: 'אומנות', image: English, color: '', text: 'חוג אומנות לנערות בגילאי 12-18' }];


  const handleClick = (Course) => {
    setOpen(true);

  }

  return (
    <>
    <div style={{ display: 'flex', flexFlow: 'wrap', 'justifyContent': 'center' }}>
      {Items.map((i, index) => {
        return <div key={index} onClick={e => handleClick(i)}>
          <Course item={i} />
        </div>
      })}
    </div>
    <MyModal open={open} setOpen={setOpen}>
      <RegistrationForm/>
      </MyModal>
    </>

  );
}