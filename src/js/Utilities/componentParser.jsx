import componentContainerParser from './componentContainerParser.jsx';
import componentItemParser from './componentItemParser.jsx';
import { getJsonObjectWithID, getJsonObject } from './getJsonObject.js';
import { isArray } from './typecheck.js';

const componentParser = function(component = null, subcomponentHandlers = null) {
    // gets the data of the component from the corresponding config file if the
    // actual data of the component was not passed
    if(component.componentJsonUrl) {
        if(component.componentID) {
            component = getJsonObjectWithID(component.componentJsonUrl, component.componentID);
        } else {
            component = getJsonObject(component.componentJsonUrl);
        }
    }
    // parse the component object's containers and contents
    return (function(componentContainers, componentContents) {
        // for each outer container of the component, build the container and its inner containers and then
        // add the array of componentContents corresponding to the index of the component's container
        return componentContainers.map((container) => {
            return componentContainerParser(container, componentContents);
        });
    })(component.componentContainers, (function(componentContents, subcomponentHandlers) {
        // however before we can build the containers of the component, we must build the componentContents, check to
        // see if there is a subcomponent in the componentContents. If so then we call the componentParser function 
        // from a subcomponent. it also checks the componentContents is a list
        if(isArray(componentContents)) {
            return componentContents.map((item) => {
                // if the current item is a subcomponent and there is a subcomponent handler provided by the parent component
                if(item.componentType && subcomponentHandlers) {
                    return subcomponentHandlers(item);
                    // for any other itemContents
                } else {
                    return componentItemParser(item);
                }
            });
            // if componentContents is just a single object
        } else if(componentContents.componentType && subcomponentHandlers) {
            return subcomponentHandlers(componentContents);
            // for any other itemContents
        } else {
            return componentItemParser(componentContents);
        }
    })(component.componentContents, subcomponentHandlers));
};

export default componentParser;