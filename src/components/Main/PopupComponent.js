// css import
import styles from "./Main.module.css";

export default function PopupComponent(){
    return(
        <div className={styles.body}>
            <h1>캘린더 날짜를 설정해주세요.</h1>
        </div>
    );
}