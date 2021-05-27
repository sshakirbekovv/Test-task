import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './Courses.module.scss';
import play from '../../assets/images/play.svg';
import { Link } from 'react-router-dom';
import background from '../../assets/images/illustrations.png';

const Courses = (props: any) => {

    return (
        <div className={styles.courses}>
            { props.blocksResponse.blocksResponse.blocks.map((item: any, i: any) => { 
            return<div className={styles.courses__card} key={i}>
                <Link to='/'>
                <div className={styles.courses__card_header}>
                    <div className={styles.courses__card_lessons}>
                        <h2>{ item }</h2>
                        <span>24 lessons</span>
                    </div>
                    <div className={styles.courses__card_duration}>
                    { props.minutesResponse.minutesResponse.minutes.slice(i, i + 1).map((item: any) => { 
                       return <span key={item.id}>
                            { item.time } min
                        </span>
                    })}
                    </div>
                </div>
                <img src={background} alt="illustrations" className={styles.courses__card_img}/>
                <div className={styles.courses__card_footer}>
                    <img src={play} alt="play" />
                </div>
                </Link>
            </div>
            }) }
        </div>
    );
}
export default observer(Courses);