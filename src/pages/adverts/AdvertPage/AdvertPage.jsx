import { useState } from 'react';
import noImage from '../../../assets/no-image.jpg';
import { sellSearchIcon } from '../../../utils/sellSearchIcon';
import './advertPage.css';

function AdvertPage() {
  const product = {
    name: 'Sell Thing',
    description: 'Description thing',
    image: 'no-image.jpg',
    price: 50,
    sellOrSearch: true,
    tags: ['work', 'motor', 'lifestyle', 'mobile']
  };
  const [imageError, setImageError] = useState(false);
  return (
    <>
      <main className='detail__advert mainCard '>
        <div className='modal'>
          <div className='modal__header'>
            <span className='modal__title'>{product.name}</span>
          </div>
          <div className='modal__body'>
            <div className='modal-content sell_or_search' id='sellSearch'>
              <img
                src={sellSearchIcon(product.sellOrSearch).image}
                alt={sellSearchIcon(product.sellOrSearch).alt}
              />
            </div>
            <div className='modal-content photo' id='photo'>
              <img
                className='photo'
                src={imageError ? noImage : `../../assets/${product.image}`}
                onError={() => {
                  setImageError(true);
                }}
              />
            </div>
            {/* <!-- Price of Product --> */}
            <div className='modal-content price' id='price'>
              <span className='price'>{`${product.price}€`}</span>
            </div>

            <div className='modal-content tag' id='tags'>
              {product.tags.map(tag => (
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
}
export default AdvertPage;
