import ReactDOM from 'react-dom';
import _ from 'lodash';
export const getElementHeight = (element) => {
    return element ? element.getBoundingClientRect().height : 0;
};
export const getStyleProps = (styleKeys, props) => {
    const styleProps = {};
    styleKeys.forEach(key => {
        const value = props[key];
        if (value) {
            styleProps[`data-${_.kebabCase(key)}`] = value;
        }
    });
    return styleProps;
};
export const measureElement = (element) => {
    const DOMNode = element && ReactDOM.findDOMNode(element);
    const width = DOMNode ? DOMNode.offsetWidth : 0;
    const height = DOMNode ? DOMNode.offsetHeight : 0;
    return {
        width,
        height
    };
};
//# sourceMappingURL=ReactElementUtils.js.map