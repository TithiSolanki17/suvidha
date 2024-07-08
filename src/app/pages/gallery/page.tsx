import Image from 'next/image';
import React from 'react';
import '../styles/styles.css';
import bgimg1 from '../gallery/assets/landscape-1.png';
import bgimg2 from '../gallery/assets/landscape-2.png';
import bgimg3 from '../gallery/assets/landscape-3.png';

export default function page(){
  return (
    <div>
      Gallery
      <div className="container">
        <div className="card__container">
          <article className="card__article" id="photo1">
            <Image
              src={bgimg1}
              alt="image"
              className="card__img"
              width={500}
              height={500}
            />

            <div className="card__data">
              <span className="card__description text-white" >Vancouver Mountains, Canada</span>
              <h2 className="card__title">The Great Path</h2>
              <a href="#" className="card__button">
                Read More
              </a>
            </div>
          </article>

          <article className="card__article" id="photo2">
            <Image
              src={bgimg2}
              alt="image"
              className="card__img"
              width={500}
              height={500}
            />

            <div className="card__data">
              <span className="card__description">Poon Hill, Nepal</span>
              <h2 className="card__title">Starry Night</h2>
              <a href="#" className="card__button">
                Read More
              </a>
            </div>
          </article>

          <article className="card__article" id="photo3">
            <Image
              src={bgimg3}
              alt="image"
              className="card__img"
              width={500}
              height={500}
            />

            <div className="card__data">
              <span className="card__description">Bojcin Forest, Serbia</span>
              <h2 className="card__title">Path Of Peace</h2>
              <a href="#" className="card__button">
                Read More
              </a>
            </div>
          </article>

          <article className="card__article" id="photo4">
            <Image
              src={bgimg1}
              alt="image"
              className="card__img"
              width={500}
              height={500}
            />

            <div className="card__data">
              <span className="card__description text-white" >Vancouver Mountains, Canada</span>
              <h2 className="card__title">The Great Path</h2>
              <a href="#" className="card__button">
                Read More
              </a>
            </div>
          </article>

          <article className="card__article" id="photo5">
            <Image
              src={bgimg2}
              alt="image"
              className="card__img"
              width={500}
              height={500}
            />

            <div className="card__data">
              <span className="card__description">Poon Hill, Nepal</span>
              <h2 className="card__title">Starry Night</h2>
              <a href="#" className="card__button">
                Read More
              </a>
            </div>
          </article>

          <article className="card__article" id='photo6'>
            <Image
              src={bgimg3}
              alt="image"
              className="card__img"
              width={500}
              height={500}
            />

            <div className="card__data">
              <span className="card__description">Bojcin Forest, Serbia</span>
              <h2 className="card__title">Path Of Peace</h2>
              <a href="#" className="card__button">
                Read More
              </a>
            </div>
          </article>
        </div>

      </div>
      
    </div>
  );
};
  
  