import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../../Utilities/componentParser.jsx';
import Card from '../Card/Card.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import ContentRow from './ContentRow.jsx';
import Footer from '../Footer/Footer.jsx';
import { getRandomKeyValue } from '../../Utilities/getRandomKeyValue.js';
import Jumbotron from '../Jumbotron/Jumbotron.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Table from '../Table/Table.jsx';

const ContentColumn = (props) => {
    const contentColumnSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "Card":
                return <Card cardData={ potentialSubcomponent } key={ getRandomKeyValue() } />;
            case "Carousel":
                return <Carousel carouselData={ potentialSubcomponent } key={ getRandomKeyValue() } />;
            case "ContentRow":    
                return <ContentRow contentRowData={ potentialSubcomponent } key={ getRandomKeyValue() } />
            case "Footer":
                return <Footer footerData={ potentialSubcomponent } key={ getRandomKeyValue() } />;
            case "Jumbotron":
                return <Jumbotron jumbotronData={ potentialSubcomponent } key={ getRandomKeyValue() } />;
            case "Navbar":
                return <Navbar navbarData={ potentialSubcomponent } key={ getRandomKeyValue() } />;
            case "Table":
                return <Table tableData={ potentialSubcomponent } key={ getRandomKeyValue() } />;
        }
    }
    return componentParser(props.contentColumnData, contentColumnSubcomponentHandler);
};

ContentColumn.propTypes = {
    contentColumnData : PropTypes.object
};

export default ContentColumn;