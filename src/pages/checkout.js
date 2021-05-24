import { useSession } from 'next-auth/client';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';
import Currency from 'react-currency-formatter';
function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const session = useSession();
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-xl mx-auto'>
        <div className='flex-grow m-5 shadow-sm'>
          <img className='object-contain' src='/ferrari.jpg' alt='' />

          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0 ? 'Your Cart is Empty.' : 'Shopping Cart'}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items.length})
                <span className='font-bold'>
                  <Currency quantity={total} currency='USD' />
                </span>
              </h2>
              <button
                disabled={!session[0]}
                className={`button mt-2 ${
                  !session[0] &&
                  'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-alowed'
                }`}
              >
                {!session[0] ? 'Sign In to Checkout' : 'Proceed to Checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
