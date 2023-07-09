import CheckboxChecked from "lms-icons/components/CheckboxChecked";
import CheckboxUncheck from "lms-icons/components/CheckboxUncheck";
import { CheckboxStatuses } from "./CheckboxTypes";

const icon = {
  [CheckboxStatuses.unchecked]: CheckboxUncheck,
  [CheckboxStatuses.checked]: CheckboxChecked,
  [CheckboxStatuses.intermediate]: CheckboxUncheck,
};

export const getIconByStatus = (status: CheckboxStatuses) => icon[status];

export const getStatusOfCheckbox = (
  checked: boolean,
  isIntermediate: boolean
) =>
  (!checked && CheckboxStatuses.unchecked) ||
  (isIntermediate ? CheckboxStatuses.intermediate : CheckboxStatuses.checked);
