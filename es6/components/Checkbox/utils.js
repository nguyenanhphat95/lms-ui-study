import CheckboxChecked from "lms-icons/components/CheckboxChecked";
import CheckboxUncheck from "lms-icons/components/CheckboxUncheck";
import { CheckboxStatuses } from "./CheckboxTypes";
const icon = {
    [CheckboxStatuses.unchecked]: CheckboxUncheck,
    [CheckboxStatuses.checked]: CheckboxChecked,
    [CheckboxStatuses.intermediate]: CheckboxUncheck,
};
export const getIconByStatus = (status) => icon[status];
export const getStatusOfCheckbox = (checked, isIntermediate) => (!checked && CheckboxStatuses.unchecked) ||
    (isIntermediate ? CheckboxStatuses.intermediate : CheckboxStatuses.checked);
//# sourceMappingURL=utils.js.map