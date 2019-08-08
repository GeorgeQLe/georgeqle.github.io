import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../../Utilities/componentParser.jsx';
import { getRandomKeyValue } from '../../Utilities/getRandomKeyValue.js';
import TableData from "./TableData.jsx";

const TableRow = (props) => {
    const tableRowSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "TableData":
                return <TableData key={ getRandomKeyValue() } tableDataData={ potentialSubcomponent } />;
        }
    }
    return componentParser(props.tableRowData, tableRowSubcomponentHandler);
}

TableRow.propTypes = {
    tableRowData : PropTypes.object.isRequired
}

export default TableRow;