import { useState } from 'react';
import noImage from '../../../../assets/no-image.jpg';
import { sellSearchIcon } from '../../../../utils/sellSearchIcon';
export const AdvertDetailCard = ({ advert }) => {
  const [imageError, setImageError] = useState(false);
  const tags = advert.tags || [];

  return (
    <>
      <main className='detail__advert mainCard '>
        <div className='modal'>
          <div className='modal__header'>
            <span className='modal__title'>{advert.name}</span>
          </div>
          <div className='modal__body'>
            <div className='modal-content sell_or_search' id='sellSearch'>
              <img
                src={sellSearchIcon(advert.sale).image}
                alt={sellSearchIcon(advert.sale).alt}
              />
            </div>
            <div className='modal-content photo' id='photo'>
              <img
                className='photo'
                src={`${advert.photo === null ? noImage : advert.photo}`}
                alt={advert.name}
              />
            </div>
            {/* <!-- Price of Product --> */}
            <div className='modal-content price' id='price'>
              <span className='price'>{`${advert.price}€`}</span>
            </div>

            <div className='modal-content tag' id='tags'>
              {tags.map((tag, index) => (
                <span key={index} className='tags'>
                  {tag}{' '}
                </span>
              ))}
            </div>
          </div>
          <div className='modal__footer'>
            <button className='button button--primary ' id='deleteButton'>
              Borrar Anuncio
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
