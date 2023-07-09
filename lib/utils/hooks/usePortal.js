"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function createRootElement(id) {
    var rootContainer = document.createElement('div');
    rootContainer.setAttribute('id', id);
    rootContainer.setAttribute('class', 'portal');
    return rootContainer;
}
function addRootElement(rootElem) {
    var nextElementSibling = (document.body.lastElementChild || { nextElementSibling: null }).nextElementSibling;
    document.body.insertBefore(rootElem, nextElementSibling);
}
function checkIsRemovePropertyExisted(element) {
    return element && element.remove instanceof Function;
}
function usePortal(id) {
    var rootElemRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var existingParent = document.querySelector("#" + id);
        var parentElem = existingParent || createRootElement(id);
        if (!existingParent) {
            addRootElement(parentElem);
        }
        parentElem.appendChild(rootElemRef.current);
        return function removeElement() {
            if (checkIsRemovePropertyExisted(rootElemRef.current)) {
                rootElemRef.current.remove();
            }
            if (parentElem.childNodes.length === 0 &&
                checkIsRemovePropertyExisted(parentElem)) {
                parentElem.remove();
            }
        };
    }, []);
    function getRootElem() {
        if (!rootElemRef.current) {
            rootElemRef.current = document.createElement('div');
        }
        return rootElemRef.current;
    }
    return getRootElem();
}
exports.default = usePortal;
//# sourceMappingURL=usePortal.js.map