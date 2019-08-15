import PropTypes from 'prop-types';

import componentParser from '../Utilities/componentParser.jsx';

const CarouselIndicator = (props) => {
    return componentParser(props.carouselIndicatorData);
};

CarouselIndicator.propTypes = {
    carouselIndicatorData : PropTypes.object.isRequired
};

export default CarouselIndicator;