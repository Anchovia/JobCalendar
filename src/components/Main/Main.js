// components import
import Calendar from "./Calendar";
import Header from "./Header";

// css import
import styles from "./Main.module.css";

export default function Main(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    return(
        <div className={styles.body}>
            <header className={styles.header}>
                <Header year = {year} month = {month}/>
            </header>
            <main className={styles.main}>
                <Calendar/>
            </main>
        </div>
    );
}