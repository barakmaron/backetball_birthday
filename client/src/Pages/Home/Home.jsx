
import { BiTimeFive } from 'react-icons/bi';
import { FaChild } from 'react-icons/fa';
import { GiTennisCourt } from 'react-icons/gi';
import GalleryConnector from '../../Components/Gallery/GalleryConnector';
import RecommendationGalleryConnector from '../../Components/RecommendationGallery/RecommendationGalleryConnector';
import styles from './Home.module.css';

const Home = () => {
 
  return (
    <div className={styles.container}>        
      <div className={`${styles.main_container} flex justify-center bg-position-x bg-position-y xl:bg-position-x-lg xl:bg-position-y-lg py-10`}>
          <div className='justify-center flex items-center flex-col gap-5'>
            <h1 className={` sm:text-9xl text-center text-2xl font-bold text-orange-600`}>כדורסלדת</h1>
            <h2 className='text-orange-600 sm:text-6xl font-bold'>יום הולדת כדורסל</h2>
          </div>         
        </div>
        <GalleryConnector></GalleryConnector>
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
                  <FaChild></FaChild>                  
                </span>
                <h2>חוייה</h2>
                <p>
                  זמן הפעילות הוא כשעה וחצי, שעתיים כולל טקס הדלקת נרות.
                  המדריכים מגיעים עם כל הציוד הנדרש לפעילות.<br></br>
                  מטרת הפעילות היא להעצים ולשמח את ילד היום הולדת 😁<br></br>
                  יחולקו פרסים והפתעות לכל משתתפי יום ההולדת ולילד היום הולדת בפרט🎖<br></br>
                  לפעילות מגיע מדריך כדורסל מוסמך.
                  ניתן להתאים את הפעילות לכל רמה.
                </p>
            </div>            
            <div className={styles.card} dir="rtl">
              <span>
                <BiTimeFive></BiTimeFive>
              </span>
              <h2>פעילות</h2>
              <div className='text-center'>
                <div className='font-bold'>שלב 1</div>
                משחקונים ואתגרים חווייתיים שמטרתם חימום וכניסה לאווירת הפעילות.<br></br>
                <div className='font-bold'>שלב 2</div>
                תחנות שונות ומגוונות אותם מעבירים מדריכי הפעילות. סללומים וזריקה לסל, תחרות קליעות מעמדות שונות במגרש תוך מחשבה לאפשר לכל ילד/ה להנות בפעילות מיוחדת גם אם הם לא קשורים לענף הכדורסל.<br></br>
                <div className='font-bold'>שלב 3</div>
                משחק כדורסל להעצמת ילד יום ההולדת, הם מובילים הם הקפטנים והם מחלקי התשורות.<br></br>
                <div className='font-bold'>שלב 4</div>
                חלוקת פרסים ע"י ילד היום הולדת וטקס הדלקת הנרות יחד עם כל המשתתפים.
              </div>
            </div>           
          </div>
        </div>
        <RecommendationGalleryConnector></RecommendationGalleryConnector>
    </div>
  )
}

export default Home;

