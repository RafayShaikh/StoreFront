import Product from './Product';

function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      {products
        .slice(0, 4)
        .map(({ id, title, category, price, description, image }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            images={image.toString()}
          />
        ))}
      <img className='md:col-span-full' src='/ferrari.jpg' alt='' />{' '}
      <div className='md:col-span-2'>
        {products
          .slice(4, 5)
          .map(({ id, title, category, price, description, image }) => (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              images={image.toString()}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, category, price, description, image }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            images={image.toString()}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
