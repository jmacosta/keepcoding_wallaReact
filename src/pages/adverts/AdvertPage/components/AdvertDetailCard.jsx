import { useState } from 'react';
import noImage from '../../../../assets/no-image.jpg';
import { sellSearchIcon } from '../../../../utils/sellSearchIcon';
export const AdvertDetailCard = ({ advert }) => {
  const [imageError, setImageError] = useState(false);
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
                src={sellSearchIcon(advert.sellOrSearch).image}
                alt={sellSearchIcon(advert.sellOrSearch).alt}
              />
            </div>
            <div className='modal-content photo' id='photo'>
              <img
                className='photo'
                src={imageError ? noImage : `../../assets/${advert.image}`}
                onError={() => {
                  setImageError(true);
                }}
              />
            </div>
            {/* <!-- Price of Product --> */}
            <div className='modal-content price' id='price'>
              <span className='price'>{`${advert.price}€`}</span>
            </div>

            <div className='modal-content tag' id='tags'>
              {advert.tags.map(tag => (
                <span className='tags'>{tag} </span>
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
