import { useEffect, useRef } from 'react';
function createRootElement(id) {
    const rootContainer = document.createElement('div');
    rootContainer.setAttribute('id', id);
    rootContainer.setAttribute('class', 'portal');
    return rootContainer;
}
function addRootElement(rootElem) {
    const { nextElementSibling } = document.body.lastElementChild || { nextElementSibling: null };
    document.body.insertBefore(rootElem, nextElementSibling);
}
function checkIsRemovePropertyExisted(element) {
    return element && element.remove instanceof Function;
}
function usePortal(id) {
    const rootElemRef = useRef(null);
    useEffect(() => {
        const existingParent = document.querySelector(`#${id}`);
        const parentElem = existingParent || createRootElement(id);
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
export default usePortal;
//# sourceMappingURL=usePortal.js.map