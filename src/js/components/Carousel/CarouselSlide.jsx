import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card.jsx';
import componentParser from '../../Utilities/componentParser.jsx';
import { getRandomKeyValue } from '../../Utilities/getRandomKeyValue.js';

const CarouselSlide = (props) => {
    const carouselSlideSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "Card":
                return <Card cardData={ potentialSubcomponent } key={ getRandomKeyValue() }/>;
        }
    }
    return componentParser(props.carouselSlideData, carouselSlideSubcomponentHandler);
}

CarouselSlide.propTypes = {
    carouselSlideData : PropTypes.object.isRequired
};

export default CarouselSlide;