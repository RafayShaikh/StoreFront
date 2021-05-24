import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';
function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className='grid grid-cols-5'>
      <Image height={200} width={200} objectFit='contain' src={image} />

      <div className='col-span-3 mx5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} currency='USD' />

        {hasPrime && (
          <div className='flec items-center space-x-2'>
            <img loading='lazy' className='w-12 ' src='/prime.png' alt='' />
            <p className='text-xs'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className='flex flex-col space-y-2 my-auto justify-self-end '>
        <button onClick={removeFromCart} className='button'>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
