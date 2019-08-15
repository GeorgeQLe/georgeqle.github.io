import PropTypes from 'prop-types';

import componentParser from '../../Utilities/componentParser.jsx';

const Card = (props) => {
    return componentParser(props.cardData)
};

Card.propTypes = {
    cardData : PropTypes.object.isRequired
};

export default Card;