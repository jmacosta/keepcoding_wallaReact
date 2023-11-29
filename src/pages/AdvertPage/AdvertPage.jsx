import { useState } from 'react';
import arrowBack from '../../assets/arrowBack.svg';
import noImage from '../../assets/no-image.jpg';
import './advertPage.css';
function AdvertPage() {
  const product = {
    name: 'Sell Thing',
    description: 'Description thing',
    image: 'no-image.jpg',
    price: 50,
    sellOrSearch: true
  };
  const [imageError, setImageError] = useState(false);
  return (
    <main>
      <section className='card'>
        <section id='header_product_detail'>
          <nav>
            <button id='go_home'>
              <img className='arrow' src={arrowBack} />
              <span>Volver a inicio</span>
            </button>
          </nav>
          <div className='sell_or_search'>
            <img
              src='${sellOrSeachIcon.image}'
              alt='${
    sellOrSeachIcon.alt
  }'
            />
          </div>
        </section>
        <section id='card__content'>
          <div className='photo'>
            <img
              src={imageError ? noImage : `../../assets/${product.image}`}
              onError={() => {
                setImageError(true);
              }}
            />
          </div>
          <div className='description'>
            <h2>{product.name}</h2>
            <h4>{product.tags}</h4>
            <h1>{product.price}€</h1>
            <p>{product.description}</p>
            <div id='authorized_buttons'>
              <button>Borrar</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
export default AdvertPage;
