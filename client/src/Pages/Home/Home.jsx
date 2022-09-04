
import { BiTimeFive } from 'react-icons/bi';
import { FaChild } from 'react-icons/fa';
import { GiTennisCourt } from 'react-icons/gi';
import Gallery from '../../Components/Gallery';
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
          <div className={styles.main_text}>
            <h1>כדורסלדת בהנחיית אוהד ברנט</h1>
            <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.</p>
          </div>         
        </div>
        <div className={`${styles.second_container} mx-auto py-4 px-16 sm:py-5 sm:px-24`}>
          <div className={`grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mx-auto`}>
            <div className={styles.card}>
                <span>
                  <BiTimeFive></BiTimeFive>
                </span>
                <h2>זמן</h2>
                <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.</p>
            </div>            
            <div className={styles.card}>
              <span>
                <FaChild></FaChild>
              </span>
              <h2>חוייה</h2>
              <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.</p>
            </div>
            <div className={styles.card}>
              <span>
                <GiTennisCourt></GiTennisCourt>
              </span>
              <h2>מיקום</h2>
              <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.</p>
            </div>
          </div>
        </div>
        <Gallery></Gallery>
    </div>
  )
}

export default Home;

