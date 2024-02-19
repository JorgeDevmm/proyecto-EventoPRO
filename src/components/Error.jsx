import PropTypes from 'prop-types';

const Error = ({ mensaje }) => {
  return (
    <div className='text-center bg-red-800 text-white font-bold py-3 mb-2 uppercase rounded-lg'>
      <p>{mensaje}</p>
    </div>
  );
};

// documentación prop
Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};


export default Error;
