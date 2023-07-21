// css import
import styles from "./Calendar.module.css";

export default function Calendar(){
    const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

    const listHeader = daysOfWeek.map((item, index) => (
        <li className={styles.weekBox} key={index}><h2>{item}</h2></li>
    ));

    const numbers = [];

    for(var i = 1; i <= 31; i ++){
        numbers.push(i);
    }

    const listCalendar = numbers.map((item, index) => (
        <li className={styles.dayBox} key={index}>{item}</li>
    ));

    return(
        <div className={styles.body}>
            <section className={styles.daysOfWeek}>
                {listHeader}
            </section>
            <section className={styles.days}>
                {listCalendar}
            </section>
        </div>
    );
}