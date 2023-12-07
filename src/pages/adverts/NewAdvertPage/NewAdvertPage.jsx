import searchIcon from '../../../assets/search_icon.svg';
import sellIcon from '../../../assets/sell_icon.svg';
import './NewAdvertPage.css';
function NewAdvertPage() {
  return (
    <main className='mainCard'>
      <form id='product_create'>
        <div className='container'>
          <div className='modal'>
            <div className='modal__header'>
              <span className='modal__title'>Nuevo producto</span>
            </div>
            <div className='modal__body'>
              {/* <!-- Name of Product --> */}
              <div className='input'>
                <label className='input__label' htmlFor='name'>
                  Nombre
                </label>
                <input
                  id='name'
                  className='input__field'
                  type='text'
                  name='name'
                  required
                  autoComplete='off'
                  title='Por favor rellena este campo'
                />
                <p className='input__description'>
                  El nombre tiene un limite de 32 caracteres
                </p>
              </div>

              {/* <!-- Image of product --> */}
              <div className='input'>
                <label className='input__label' htmlFor='image'>
                  Imagen
                </label>
                <input
                  className='input__field'
                  type='file'
                  name='image'
                  id='image'
                />
                <p className='input__description'>
                  Introduce una url válida con la foto de tu producto
                </p>
              </div>
              {/* <!-- Price of Product --> */}
              <div className='input'>
                <label className='input__label' htmlFor='price'>
                  Precio
                </label>
                <input
                  className='input__field'
                  type='number'
                  min='0'
                  required
                  name='price'
                  id='price'
                />
                <p className='input__description'>
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
                    <div className='icon search-icon'>
                      <img src={searchIcon} />
                    </div>
                    <label htmlFor='search' className='radio-tile-label'>
                      Busqueda
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal__footer'>
              <button
                className='button button--primary'
                id='productCreateButton'
              >
                Crear producto
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
export default NewAdvertPage;
