import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <header>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

//Default Props
Header.defaultProps = {
  text: 'Feedback UI',
};

//Type Checking
Header.protoTypes = {
  text: PropTypes.string,
};

export default Header;
