import arrow from '../../../assets/icons/arrow.svg';
import styles from './PersonalizedArrow.module.css'

function PersonalizedArrow(clickHandler, hasNext, labelNext) {
  return (
      <button 
        onClick={clickHandler}
        type='button'
        className={styles.next}
        aria-label={labelNext} 
      >
        <img src={arrow} alt='Arrow' />
      </button>
  );
}

export default PersonalizedArrow;