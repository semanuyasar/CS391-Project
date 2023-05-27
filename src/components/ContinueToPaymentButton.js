import { Link } from 'react-router-dom';

const ContinueToPaymentButton = ({ subtotal }) => {
  return (
    <Link
      to={{
        pathname: '/checkout',
        state: { subtotal }
      }}
      className='btn btn-primary'
    >
      Continue to Payment
    </Link>
  );
};

export default ContinueToPaymentButton;