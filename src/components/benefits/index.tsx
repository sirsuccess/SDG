import React from 'react';
import './index.scss';
import Blue from '../../assets/images/blue.svg';
import Green from '../../assets/images/green.svg';
import Pink from '../../assets/images/pink.svg';

const Benefits = () => {
  return (
    <div className='benefit_container container'>
      <p className='heading'>What can SDG mobile do for you?</p>
      <p className='subtitle mb-5 pb-2'>
        An all-in-one mobile application for anything health-related services
      </p>

      <div className='cards_container'>
        <div className='card'>
          <p className='title '>Health Tips</p>

          <p className='description'>
            Get daily briefing to help you start off towards healthy living.
          </p>
          <div>

          <img src={Pink} alt='blue' className='blue' />
          </div>
        </div>
        <div className='card'>
          <p className='title '>Sexual Education</p>

          <p className='description'>
            Stay upto date on issues relating to human sexuality, emotion and
            responsibilities.
          </p>
          <div>

          <img src={Green} alt='blue' className='blue' />
          </div>
        </div>
        <div className='card'>
          <p className='title '>Health Centers</p>

          <p className='description'>
            Easily locate hospitals, clinics and pharmacy from the comfort of
            your home.
          </p>
          <div>

          <img src={Blue} alt='blue' className='blue' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
