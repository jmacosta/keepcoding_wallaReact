import { useState } from 'react';
import './filterAdverts.css';
export const FilterAdverts = ({ adverts, onFilterAdverts }) => {
  const [filterFields, setFilterFields] = useState({
    name: '',
    minPrice: 0,
    maxPrice: 0,
    sell: false,
    search: false,
    lifestyle: false,
    motor: false,
    mobile: false,
    work: false
  });

  const handleFilter = () => {
    const newAdverts = adverts.filter(
      item =>
        (item.sale === filterFields.sell ||
          item.sale !== filterFields.search) &&
        item.name.toLowerCase().includes(filterFields.name.toLowerCase()) &&
        (item.price >= filterFields.minPrice ||
          item.price <= filterFields.maxPrice)
    );

    onFilterAdverts(newAdverts);
  };

  const handleInputsFilter = {
    input(event) {
      setFilterFields({
        ...filterFields,
        [event.target.name]: event.target.value
      });
    },
    inputCheck(event) {
      setFilterFields({
        ...filterFields,
        [event.target.name]: event.target.checked
      });
    }
  };
  return (
    <>
      <div className='filterBox'>
        <h3 className='filterTitle'>Nombre</h3>
        <div className='filterContent'>
          <input
            name={'name'}
            onChange={handleInputsFilter.input}
            value={filterFields.name}
            autoComplete='off'
          />
        </div>
      </div>
      <div className='filterBox'>
        <h3 className='filterTitle'>Precio</h3>
        <div className='filterContent'>
          <div className='priceFilter'>
            <label htmlFor='minPrice'>Min</label>
            <input
              name={'minPrice'}
              id={'minPrice'}
              onChange={handleInputsFilter.input}
              value={filterFields.minPrice}
              min={0}
              type='number'
            />
          </div>
          <div className='priceFilter'>
            <label htmlFor='maxPrice'>Max</label>
            <input
              name={'maxPrice'}
              id={'maxPrice'}
              onChange={handleInputsFilter.input}
              value={filterFields.maxPrice}
              min={0}
              type='number'
            />
          </div>
        </div>
      </div>
      <div className='filterBox'>
        <h3 className='filterTitle'>Compra/Venta</h3>
        <div className='filterContent'>
          <input
            name={'sell'}
            id={'sell'}
            onChange={handleInputsFilter.inputCheck}
            value={''}
            type='checkbox'
            checked={filterFields.sell}
          />
          <label htmlFor='sell'>Venta</label>

          <input
            name={'search'}
            id={'search'}
            onChange={handleInputsFilter.inputCheck}
            value={''}
            type='checkbox'
            checked={filterFields.search}
          />
          <label htmlFor='search'>Compra</label>
        </div>
      </div>
      <div className='filterBox'>
        <h3 className='filterTitle'>Tags</h3>
        <div className='filterContent tagsFilter'>
          <div>
            <input
              name={'lifestyle'}
              id={'lifestyle'}
              onChange={handleInputsFilter.inputCheck}
              value={''}
              type='checkbox'
              checked={filterFields.lifestyle}
            />
            <label htmlFor='lifestyle'>Lifestyle</label>
          </div>
          <div>
            <input
              name={'mobile'}
              id={'mobile'}
              onChange={handleInputsFilter.inputCheck}
              value={''}
              type='checkbox'
              checked={filterFields.mobile}
            />
            <label htmlFor='mobile'>Mobile</label>
          </div>
          <div>
            <input
              name={'motor'}
              id={'motor'}
              onChange={handleInputsFilter.inputCheck}
              value={''}
              type='checkbox'
              checked={filterFields.motor}
            />
            <label htmlFor='motor'>Motor</label>
          </div>
          <div>
            <input
              name={'work'}
              id={'work'}
              onChange={handleInputsFilter.inputCheck}
              value={''}
              type='checkbox'
              checked={filterFields.work}
            />
            <label htmlFor='work'>work</label>
          </div>
        </div>
      </div>

      <button className='button button--primary' onClick={handleFilter}>
        Aplicar Filtro
      </button>
    </>
  );
};
