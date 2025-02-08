import React from 'react';
import styles from './Channel.module.css';
import Channel1 from '../../assets/images/image1.png';
import Channel2 from '../../assets/images/image2.png';
import Channel3 from '../../assets/images/image3.png';
import Channel4 from '../../assets/images/image4.png';
import Channel5 from '../../assets/images/image5.png';
import Channel6 from '../../assets/images/image6.png';
import Channel7 from '../../assets/images/image7.png';
import Channel8 from '../../assets/images/image8.png';

const Channel = () => {
    return (
        <>
            <div className={styles.channels}>
                
              <img src={Channel1} alt="Channel" />
              <img src={Channel2} alt="Channel" />
              <img src={Channel3} alt="Channel" />
              <img src={Channel4} alt="Channel" />
              <img src={Channel5} alt="Channel" />
              <img src={Channel6} alt="Channel" />
              <img src={Channel7} alt="Channel" />
              <img src={Channel8} alt="Channel" />

            </div>
        </>
    )
}

export default Channel;
