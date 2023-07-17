// css import
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header(props){
    const currentDate = new Date();

    const [year, setYear] = useState(currentDate.getFullYear());
    const [month, setMonth] = useState(currentDate.getMonth() + 1);

    const handleClickDown = () => {
        setMonth(month - 1);

        if(month < 2){
            setMonth(12)
            setYear(year - 1)
        };
    };

    const handleClickUp = () => {
        setMonth(month + 1);

        if(month > 11){
            setMonth(1)
            setYear(year + 1)
        }
    };

    return(
        <div className={styles.body}>
            <img className={styles.img} src={process.env.PUBLIC_URL + 'icon/iconArrowLeft.png'} alt="iconArrowLeft" onClick={handleClickDown}/>
            <h1>{year}년 {month}월</h1>
            <img className={styles.img} src={process.env.PUBLIC_URL + 'icon/iconArrowRight.png'} alt="iconArrowRight" onClick={handleClickUp}/>
        </div>
    );
}