import { getJsonObjectWithID } from '../../Utilities/getJsonObject.js';
import pageParser from '../../Utilities/pageParser.jsx';

const App = (props) => {
    return pageParser(getJsonObjectWithID(props.pagejsonurl, props.pageid));
}

export default App;