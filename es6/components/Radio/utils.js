import RadioTick from "lms-icons/components/RadioTick";
import RadioUntick from "lms-icons/components/RadioUntick";
import { RadioTypes } from "./RadioTypes";
const _getIcon = {
    [RadioTypes.unchecked]: RadioUntick,
    [RadioTypes.checked]: RadioTick,
};
export const getIconByStatus = (status) => _getIcon[status];
export const getStatusOfRadio = (checked) => !checked ? RadioTypes.unchecked : RadioTypes.checked;
//# sourceMappingURL=utils.js.map