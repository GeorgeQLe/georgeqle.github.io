import PropTypes from 'prop-types';

import componentParser from '../../Utilities/componentParser.jsx';

const NavbarDropdown = (props) => {
    return componentParser(props.navbarDropdownData);
}

NavbarDropdown.propTypes = {
    navbarDropdownData : PropTypes.object.isRequired
};

export default NavbarDropdown;

// {
//     "componentType": "NavbarItem",
//     "componentContainers": [
//         {
//             "containerType": "li",
//             "containerAttributes": {
//                 "className": "nav-item dropdown"
//             }
//         }
//     ],
//     "componentContents": [
//         {
//             "itemType": "a",
//             "itemAttributes": {
//                 "className": "nav-link dropdown-toggle",
//                 "aria-expanded": "false",
//                 "aria-haspopup": "true",
//                 "data-toggle": "dropdown",
//                 "href": "#",
//                 "id": "navbarDropdown",
//                 "role": "button"
//             },
//             "itemContents": "Services"
//         },
//         {
//             "componentType": "NavbarDropdown",
//             "componentContainers": [
//                 {
//                     "containerType": "div",
//                     "containerAttributes": {
//                         "className": "dropdown-menu",
//                         "aria-labelledby": "navbarDropdown"
//                     }
//                 }
//             ],
//             "componentContents": [
                // {
                //     "itemType": "a",
                //     "itemAttributes": {
                //         "className": "dropdown-item",
                //         "href": "#"
                //     },
                //     "itemContents": "Website Construction/Support"
                // },
                // {
                //     "itemType": "a",
                //     "itemAttributes": {
                //         "className": "dropdown-item",
                //         "href": "#"
                //     },
                //     "itemContents": "Social Media Consulting/Management"
                // },
                // {
                //     "itemType": "a",
                //     "itemAttributes": {
                //         "className": "dropdown-item",
                //         "href": "#"
                //     },
                //     "itemContents": "Community Management"
                // }
//             ]
//         }
//     ]
// },