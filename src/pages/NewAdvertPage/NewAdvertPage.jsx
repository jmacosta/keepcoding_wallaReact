function NewAdvertPage() {
  return (
    <form id='product_create'>
      <div class='container'>
        <div class='modal'>
          <div class='modal__header'>
            <span class='modal__title'>Nuevo producto</span>
            <button
              class='button button--icon'
              id='closeButton'
              formnovalidate=''
            >
              <svg
                width='24'
                viewBox='0 0 24 24'
                height='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path fill='none' d='M0 0h24v24H0V0z'></path>
                <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'></path>
              </svg>
            </button>
          </div>
          <div class='modal__body'>
            {/* <!-- Name of Product --> */}
            <div class='input'>
              <label class='input__label' for='name'>
                Nombre
              </label>
              <input
                id='name'
                class='input__field'
                type='text'
                name='name'
                required
                autocomplete='off'
                title='Por favor rellena este campo'
              />
              <p class='input__description'>
                El nombre tiene un limite de 32 caracteres
              </p>
            </div>
            {/* <!-- Description of Product --> */}
            <div class='input'>
              <label class='input__label' for='description'>
                Descripción
              </label>
              <textarea
                class='input__field input__field--textarea'
                required
                name='description'
                id='description'
              ></textarea>
              <p class='input__description'>
                Escribe una buena descripción de tu producto para que los
                clientes puedan conocer las características que aporta / buscas
                y puedan tener una mejor idea de lo que ofreces / buscas
              </p>
            </div>

            {/* <!-- Image of product --> */}
            <div class='input'>
              <label class='input__label' for='image'>
                Imagen
              </label>
              <input class='input__field' type='url' name='image' id='image' />
              <p class='input__description'>
                Introduce una url válida con la foto de tu producto
              </p>
            </div>
            {/* <!-- Price of Product --> */}
            <div class='input'>
              <label class='input__label' for='price'>
                Precio
              </label>
              <input
                class='input__field'
                type='number'
                min='0'
                required
                name='price'
                id='price'
              />
              <p class='input__description'>
                Precio en € de venta / compra máximo para tu producto
              </p>
            </div>
            {/* Search / sell Product  */}

            <div class='radio-tile-group'>
              <div class='input-container'>
                <input
                  id='sell'
                  class='radio-button'
                  type='radio'
                  name='sellOrSearch'
                  required
                  value='true'
                />
                <div class='radio-tile'>
                  <div class='icon sell-icon'>
                    <svg
                      id='svg5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 800 800'
                    >
                      <defs>
                        <style></style>
                      </defs>
                      <g id='layer1'>
                        <path
                          id='circle5359'
                          d='M228.23,606.86c-41.13,0-75,33.87-75,75s33.87,75,75,75,75-33.87,75-75-33.87-75-75-75Zm0,50c14.1,0,25,10.9,25,25s-10.9,25-25,25-25-10.9-25-25,10.9-25,25-25Z'
                        />
                        <path
                          id='circle5361'
                          d='M578.23,606.86c-41.13,0-75,33.87-75,75s33.87,75,75,75,75-33.87,75-75-33.87-75-75-75Zm0,50c14.1,0,25,10.9,25,25s-10.9,25-25,25-25-10.9-25-25,10.9-25,25-25Z'
                        />
                        <path
                          id='path21288'
                          d='M79.45,56.71c-13.81,0-25,11.19-25,25s11.19,25,25,25h29.49l66.26,331.05c-26.77,11.5-45.75,38.18-45.75,68.95,0,41.12,33.88,75,75,75h425c13.81,0,25-11.19,25-25s-11.19-25-25-25H204.45c-14.28,0-25-10.72-25-25s10.72-25,25-25h375c.24-.05,.49-.1,.73-.15h74.27c12.3,0,22.78-8.94,24.71-21.09l23.49-149.22c2.16-13.64-7.14-26.45-20.77-28.61,0,0-.02,0-.03,0-13.64-2.16-26.44,7.14-28.6,20.78,0,.02,0,.05-.01,.07l-20.17,128.08H224.96l-45.02-224.85H482.04c13.81,0,25-11.19,25-25s-11.19-25-25-25H169.93l-15.97-79.88c-2.33-11.69-12.59-20.11-24.51-20.12h-50Z'
                        />
                      </g>
                      <line
                        class='cls-3'
                        x1='668.04'
                        y1='368.11'
                        x2='703.27'
                        y2='162.02'
                      />
                      <line
                        class='cls-2'
                        x1='434.65'
                        y1='181.4'
                        x2='745.55'
                        y2='180.52'
                      />
                    </svg>
                  </div>
                  <label for='sell' class='radio-tile-label'>
                    Venta
                  </label>
                </div>
              </div>

              <div class='input-container'>
                <input
                  id='search'
                  class='radio-button'
                  type='radio'
                  name='sellOrSearch'
                  required
                  value='false'
                />
                <div class='radio-tile'>
                  <div class='icon search-icon'>
                    <svg
                      id='svg5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 800 800'
                    >
                      <defs></defs>
                      <path
                        class='cls-1'
                        d='M700.78,366.83c-21.58-9.63-41.66-18.01-61.05-27.77-3.46-1.74-5.62-9.19-5.68-14.04-.46-37.04-.25-74.09-.25-111.13,0-5.66,0-11.32,0-19.29-6.7,0-12.21,0-17.72,0-34.44,0-68.89,.6-103.29-.47-7.64-.24-16.74-4.66-22.34-10.08-15.72-15.21-29.48-32.44-45.08-47.78-4.88-4.79-13.12-8.5-19.9-8.64-39.12-.81-78.26-.81-117.38,0-6.75,.14-14.93,4-19.8,8.82-15.91,15.78-30.12,33.27-46.04,49.04-4.85,4.8-13.07,8.56-19.83,8.69-40.07,.8-80.16,.39-121.37,.39v400.77c5.88,0,11.83,0,17.78,0,67.31,0,134.62,.23,201.92-.22,11.2-.07,16.28,2.4,18.5,14.58,3.13,17.18,9.56,33.76,15.07,52.23-5.69,0-10.72,0-15.74,0-77.22,0-154.44,.04-231.66-.01-46.68-.03-74.28-27.16-74.33-73.59-.14-128.87-.12-257.75,0-386.63,.04-47.24,27.6-74.36,75.28-74.5,28.17-.08,56.37,.59,84.51-.44,7.3-.27,14.61-5.27,21.5-8.89,3.05-1.6,5.05-5.19,7.55-7.84,15.39-16.26,28.06-38.77,46.96-46.99,18.93-8.24,44.06-2.32,66.48-2.38,39.13-.1,78.27,.25,117.39-.22,10.11-.12,17.54,2.23,24.36,10.27,13.48,15.9,28.54,30.47,42.11,46.3,6.79,7.92,14.21,10.56,24.37,10.37,29.21-.56,58.44-.54,87.65-.11,38.67,.57,68.21,24.91,69.49,62.14,2.02,58.78,.54,117.68,.54,177.38Z'
                      />
                      <path
                        class='cls-1'
                        d='M663.8,700.71c-87.24,50.19-182.4,27.5-231.42-39.67-48.35-66.25-41.23-160.35,16.56-217.87,57.96-57.69,151.7-64.53,217.92-16.15,65.2,47.64,90.52,141.9,40.72,229.06,19.61,19.01,39.69,38.47,59.94,58.09-16.6,15.88-31.57,30.21-46.69,44.68-18.12-18.47-37.63-38.36-57.02-58.13Zm-196.68-139.31c-.17,56.65,43.2,100.31,99.81,100.47,56.69,.16,100.35-43.21,100.46-99.8,.12-56.73-43.24-100.37-99.8-100.47-56.7-.1-100.3,43.21-100.47,99.81Z'
                      />
                      <path
                        class='cls-1'
                        d='M520.12,331.2c-20.86,7.45-40.86,14.6-60.96,21.78-34.48-49.74-71.55-67.18-117.43-55.02-41.55,11.01-71.51,46.42-74.8,88.42-3.74,47.61,20.31,81.78,75.19,106.5-3.19,20.84-6.39,41.8-9.6,62.78-56.75,.33-123.07-69.88-131.3-139.16-10.17-85.63,43.26-163.57,126.01-183.8,80.26-19.62,164.94,23.42,192.9,98.49Z'
                      />
                    </svg>
                  </div>
                  <label for='search' class='radio-tile-label'>
                    Busqueda
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class='modal__footer'>
            <button class='button button--primary' id='productCreateButton'>
              Crear producto
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default NewAdvertPage;
