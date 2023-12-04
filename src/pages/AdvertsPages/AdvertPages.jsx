import { useEffect, useState } from 'react';
import { getLatestAdverts } from '../../api/service.js';
import magnifyGlass from '../../assets/magnify-glass.svg';
import noImage from '../../assets/no-image.jpg';
import { sellSearchIcon } from '../../utils/sellSearchIcon.js';
import './advertpages.css';

const AdvertPages = () => {
  const [adverts, setAdverts] = useState([]);
  const product = {
    name: 'Sell Thing',
    description: 'Description thing',
    image: 'no-image.jpg',
    price: 50,
    sellOrSearch: false
  };
  useEffect(() => {
    getLatestAdverts().then(adverts => setAdverts(adverts));
  }, []);

  const [imageError, setImageError] = useState(false);
  return (
    <a href='/product_detail.html?id=${product.id}&_expand=user'>
      <div className='card'>
        <figure>
          <div className='sell_or_search'>
            <img
              src={sellSearchIcon(product.sellOrSearch).image}
              alt={sellSearchIcon(product.sellOrSearch).alt}
            />
          </div>
          <img
            className='product_image'
            src={imageError ? noImage : `../../assets/${product.image}`}
            onError={() => {
              setImageError(true);
            }}
            alt={product.name}
          />
        </figure>
        <div className='text-content'>
          <div className='product_name'>{product.name}</div>
          <div className='product_description'>{product.description}</div>
          <div className='product_price'>{product.price}€</div>
        </div>
        <div className='overlay'>
          <img src={magnifyGlass} />
        </div>
      </div>
    </a>
  );
};
export default AdvertPages;
