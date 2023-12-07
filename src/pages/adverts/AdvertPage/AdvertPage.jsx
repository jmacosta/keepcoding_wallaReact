import { useState } from 'react';
import noImage from '../../../assets/no-image.jpg';
import sellIcon from '../../../assets/sell_icon.svg';
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
    <main className='detail__advert mainCard '>
      <div className='modal'>
        <div className='modal__header'>
          <span className='modal__title'>{product.name}</span>
        </div>
        <div className='modal__body'>
          <div className='modal-content photo'>
            <img
              src={imageError ? noImage : `../../assets/${product.image}`}
              onError={() => {
                setImageError(true);
              }}
            />
          </div>
          {/* <!-- Price of Product --> */}
          <div className='modal-content'>
            <span className='price'>{`${product.price}€`}</span>
          </div>

          <div className='modal-content'>
            <label className='modal-content__label' htmlFor='price'>
              tags
            </label>

            <p className='modal-content'>
              Precio en € de venta / compra máximo para tu producto
            </p>
          </div>
          {/* Search / sell Product  */}

          <div className='radio-tile-group'>
            <div className='input-container'>
              <input
                id='sell'
                className='radio-button'
                type='radio'
                name='sellOrSearch'
                required
                value='true'
              />
              <div className='radio-tile'>
                <div className='icon sell-icon'>
                  <img src={sellIcon} />
                </div>
                <label htmlFor='sell' className='radio-tile-label'>
                  Venta
                </label>
              </div>
            </div>

            <div className='input-container'>
              <input
                id='search'
                className='radio-button'
                type='radio'
                name='sellOrSearch'
                required
                value='false'
              />
              <div className='radio-tile'>
                <div className='icon search-icon'></div>
                <label htmlFor='search' className='radio-tile-label'>
                  Busqueda
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='modal__footer'>
          <button className='button button--primary' id='productCreateButton'>
            Borrar Anuncio
          </button>
        </div>
      </div>
    </main>

    //   <main className='mainCard'>
    //     <section className='card'>
    //       <section id='header_product_detail'>
    //         <nav>
    //           <button id='go_home'>
    //             <img className='arrow' src={arrowBack} />
    //             <span>Volver a inicio</span>
    //           </button>
    //         </nav>
    //         <div className='sell_or_search'>
    //           <img
    //             src='${sellOrSeachIcon.image}'
    //             alt='${
    //   sellOrSeachIcon.alt
    // }'
    //           />
    //         </div>
    //       </section>
    //       <section id='card__content'>
    //         <div className='photo'>
    //           <img
    //             src={imageError ? noImage : `../../assets/${product.image}`}
    //             onError={() => {
    //               setImageError(true);
    //             }}
    //           />
    //         </div>
    //         <div className='description'>
    //           <h2>{product.name}</h2>
    //           <h4>{product.tags}</h4>
    //           <h1>{product.price}€</h1>
    //           <p>{product.description}</p>
    //           <div id='authorized_buttons'>
    //             <button>Borrar</button>
    //           </div>
    //         </div>
    //       </section>
    //     </section>
    //   </main>
  );
}
export default AdvertPage;
