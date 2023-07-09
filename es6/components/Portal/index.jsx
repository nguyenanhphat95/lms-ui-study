import usePortal from '@App/utils/hooks/usePortal';
import { createPortal } from 'react-dom';
export var PortalIds;
(function (PortalIds) {
    PortalIds["popover"] = "tpl-popover";
    PortalIds["modal"] = "tpl-modal";
    PortalIds["toast"] = "tpl-toast";
    PortalIds["tooltip"] = "tpl-tooltip";
})(PortalIds || (PortalIds = {}));
const checkIsBrowser = (isIncludeJest = false) => {
    const isRunOnNode = typeof process !== 'undefined' && typeof process.versions.node !== 'undefined';
    const isRunOnBrowser = typeof window === 'object';
    if (isIncludeJest) {
        return isRunOnBrowser;
    }
    if (!isIncludeJest && !isRunOnNode) {
        return true;
    }
    return false;
};
const Portal = ({ id, children }) => {
    const isBrowser = checkIsBrowser();
    if (!isBrowser) {
        return null;
    }
    const element = usePortal(id);
    return createPortal(children, element);
};
export default Portal;
//# sourceMappingURL=index.jsx.map