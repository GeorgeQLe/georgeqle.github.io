import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../../Utilities/componentParser.jsx';
import Card from './Card.jsx';
import { getRandomKeyValue } from '../../Utilities/getRandomKeyValue.js';

const CardDeck = (props) => {
    const cardDeckSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "Card":
                return <Card cardData={ potentialSubcomponent } key={ getRandomKeyValue() } />
        }
    };
    return componentParser(props.cardDeckData, cardDeckSubcomponentHandler);
};

CardDeck.propTypes = {
    cardDeckData: PropTypes.object.isRequired
}

export default CardDeck;