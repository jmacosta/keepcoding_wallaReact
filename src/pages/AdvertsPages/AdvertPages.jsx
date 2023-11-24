function AdvertPages(product) {
  return (
    <a href='/product_detail.html?id=${product.id}&_expand=user'>
      <div class='card'>
        <figure>
          <div class='sell_or_search'>
            <img src='${sellOrSeachIcon.image}' alt='${sellOrSeachIcon.alt}' />
          </div>
          <img
            class='product_image'
            src='${product.image}'
            onerror="this.src='assets/no-image.jpg';"
            alt='${product.name}'
          />
        </figure>
        <div class='text-content'>
          <div class='product_name'>${product.name}</div>
          <div class='product_description'>${product.description}</div>
          <div class='product_price'>${product.price}€</div>
        </div>
        <div class='overlay'>
          <img src='assets/magnify-glass.svg' />
        </div>
      </div>
    </a>
  );
}
export default AdvertPages;
