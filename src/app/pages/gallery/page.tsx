import Image from 'next/image';
// import React from 'react';
import '../styles/styles.css';
import bgimg1 from '../gallery/assets/workshop.jpg';
import bgimg2 from '../gallery/assets/book.png';
import bgimg3 from '../gallery/assets/online.png';
import bgimg4 from '../gallery/assets/food.png';
import bgimg5 from '../gallery/assets/cloths.png';
import bgimg6 from '../gallery/assets/tree.png';
import ImagesSliderDemoGallery from '@/components/imagegallery';

export default function page(){
  return (
    <div className='pb-40'>
      <ImagesSliderDemoGallery/>
      <div className='h-full w-full py-11'>
        </div>

      {/* <div className='flex justify-center mt-20 mb-6 sticky top-0 text-center text-4xl'>
        <b>Gallery</b>
      </div> */}


      <div className="container">
        <div className="card__container pb-40">
          <article className="card__article" id="photo1">
            <Image
              src={bgimg1}
              alt="workshop"
              className="card__img"
              width={500}
              height={500}
            />

            <div className="card__data">
              <h2 className="card__title">Free Workshops</h2>
              <a href="#" className="card__button">
                Check More...
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
              <h2 className="card__title">Book Distribution</h2>
              <a href="#" className="card__button">
                Check More...
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
              <h2 className="card__title">Online Events</h2>
              <a href="#" className="card__button">
                Check More...
              </a>
            </div>
          </article>

          <article className="card__article" id="photo4">
            <Image
              src={bgimg4}
              alt="image"
              className="card__img"
              width={500}
              height={500}
            />

            <div className="card__data">
              <h2 className="card__title">Food Distribution</h2>
              <a href="#" className="card__button">
                Check More...
              </a>
            </div>
          </article>

          <article className="card__article" id="photo5">
            <Image
              src={bgimg5}
              alt="image"
              className="card__img"
              width={500}
              height={500}
            />

            <div className="card__data">
              <h2 className="card__title">Clothes Distribution</h2>
              <a href="#" className="card__button">
                Check More...
              </a>
            </div>
          </article>

          <article className="card__article" id='photo6'>
            <Image
              src={bgimg6}
              alt="image"
              className="card__img"
              width={500}
              height={500}
            />

            <div className="card__data">
              <h2 className="card__title">Tree Plantation</h2>
              <a href="#" className="card__button">
                Check More...
              </a>
            </div>
          </article>
        </div>

      </div>
      
    </div>
  );
};
  
  