
import { BiTimeFive } from 'react-icons/bi';
import { FaChild } from 'react-icons/fa';
import { GiTennisCourt } from 'react-icons/gi';
import GalleryConnector from '../../Components/Gallery/GalleryConnector';
import styles from './Home.module.css';

const Home = () => {
 
  return (
    <div className={styles.container}>
        <div className={`${styles.main_container} grid grid-cols-1 py-16 gap-y-10  gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-16`}>         
          <div></div>
          <div className={styles.main_image}>
            <div className={styles.conpety}></div>
            <div className={styles.basketball}></div>
            <div className={styles.trophy}></div>  
          </div> 
          <div className='justify-center flex items-center'>
            <h1 className={` sm:text-4xl text-center text-2xl font-bold text-orange-600`}>כדורסלדת</h1>
          </div>         
        </div>
        <div className={`${styles.second_container} mx-auto py-4 px-16 sm:py-5 sm:px-24`}>
          <div className={`grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mx-auto`}>
            <div className={styles.card} dir="rtl">
              <span>
                <GiTennisCourt></GiTennisCourt>
              </span>
              <h2>מיקום</h2>
              <p>מיקום האירוע יהיה באולם/מגרש כדורסל.<br></br>
                כמובן שיש עדיפות לאולם אך זה תלוי בזמינות האולמות באזור המגורים.</p>
            </div>
            <div className={styles.card} dir="rtl">
                <span>
                  <BiTimeFive></BiTimeFive>
                </span>
                <h2>פעילות</h2>
                <p>
                  הפעילות מחולקת למספר חלקים.<br></br>
                  משחקונים מאתגרים וחווייתיים שמטרתם חימום  ו"פריקת אנרגיה" לילדים.<br></br>
                  תחנות שונות ומגוונות אותם מעבירים מדריכי הפעילות. כגון: סללומים, זריקות לסל, תחרות קליעות מעמדות שונות במגרש תוך מחשבה לאפשר לכל ילד/ה להנות בפעילות המיוחדת גם אם לא קשורים לענף הכדורסל.<br></br>
                  משחקי כדורסל להעצמת ילד/ת היום הולדת, הם בוחרים מובילים הם הקפטנים ומחלקי התשורות.
                </p>
            </div>            
            <div className={styles.card} dir="rtl">
              <span>
                <FaChild></FaChild>
              </span>
              <h2>חוייה</h2>
              <p>
                זמן הפעילות הוא כשעה וחצי <br></br>(שעתיים עם טקס הדלקת הנרות).<br></br>
                המדריכים מגיעים עם כל הציוד הנדרש לפעילות.<br></br>
                מטרת הפעילות היא להעצים ולשמח את ילד היום הולדת!<br></br>
                במהלך הפעילות ובסופה ישנם פרסים ומתנות לכל המשתתפים ולילד יום ההולדת בפרט!<br></br>
                לפעילות מגיעים מדריך מוסמך ועוזר אחד לפחות, ניתן להתאים את מבנה הפעילות לכל רמה.
              </p>
            </div>           
          </div>
        </div>
        <GalleryConnector></GalleryConnector>
    </div>
  )
}

export default Home;

