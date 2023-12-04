import { useEffect, useState } from 'react';
import { Button } from '../../Components/sharedComponents/Button.jsx';
import { getLatestAdverts } from '../../api/service.js';
import magnifyGlass from '../../assets/magnify-glass.svg';
import noImage from '../../assets/no-image.jpg';
import { sellSearchIcon } from '../../utils/sellSearchIcon.js';

import './advertpages.css';

const AdvertPages = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then(adverts => setAdverts(adverts));
  }, []);

  const [imageError, setImageError] = useState(false);
  // to do create a component who receives a object with date to show
  return adverts.length ? (
    <a href='/product_detail.html?id=${product.id}&_expand=user'>
      <div className='card'>
        <figure>
          <div className='sell_or_search'>
            <img
              src={sellSearchIcon(adverts[3].sale).image}
              alt={sellSearchIcon(adverts[3].sale).alt}
            />
          </div>
          <img
            className='product_image'
            src={imageError ? noImage : `${adverts[3].photo}`}
            onError={() => {
              setImageError(true);
            }}
            alt={adverts[3].name}
          />
        </figure>
        <div className='text-content'>
          <div className='product_name'>{adverts[3].name}</div>
          <div className='product_price'>{adverts[3].price}€</div>
        </div>
        <div className='overlay'>
          <img src={magnifyGlass} />
        </div>
      </div>
    </a>
  ) : (
    <Button>Crea tu primer anuncio...</Button>
  );
};
export default AdvertPages;
