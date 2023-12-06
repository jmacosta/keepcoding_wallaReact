import { useState } from 'react';
import { Link } from 'react-router-dom';
import magnifyGlass from '../../../../assets/magnify-glass.svg';
import noImage from '../../../../assets/no-image.jpg';
import { sellSearchIcon } from '../../../../utils/sellSearchIcon';
export const AdvertCard = ({ sale, photo, name, price, tags, id }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link to={`${id}`}>
      <div className='card'>
        <figure>
          <div className='sell_or_search'>
            <img
              src={sellSearchIcon(sale).image}
              alt={sellSearchIcon(sale).alt}
            />
          </div>
          <img
            className='product_image'
            src={imageError ? noImage : `${photo}`}
            onError={() => {
              setImageError(true);
            }}
            alt={name}
          />
        </figure>
        <div className='text-content'>
          <div className='product_name'>{name}</div>
          <h5>{tags.join(' ')}</h5>
          <div className='product_price'>{price}€</div>
        </div>
        <div className='overlay'>
          <img src={magnifyGlass} />
        </div>
      </div>
    </Link>
  );
};
