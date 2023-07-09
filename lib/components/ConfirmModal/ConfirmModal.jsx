"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("@App/index");
var react_1 = __importDefault(require("react"));
var Modal_1 = __importDefault(require("../Modal"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var CONFIRM_TITLE = 'Xác nhận';
var CONFIRM_SUBMIT = 'Xác nhận';
var CONFIRM_CANCEL = 'Hủy';
var ConfirmModal = function (_a) {
    var title = _a.title, confirm = _a.confirm, cancel = _a.cancel, description = _a.description, onClose = _a.onClose, onConfirm = _a.onConfirm;
    return (<Modal_1.default onClose={onClose} lg={4} md={4}>
      <index_1.ModalHeader onClose={onClose}>
        <index_1.Typography component="span" size={index_1.TypoSizes.body1} weight={index_1.TypoWeights.bold}>
          {title || CONFIRM_TITLE}
        </index_1.Typography>
      </index_1.ModalHeader>
      <index_1.ModalBody>
        <index_1.Typography component="span" size={index_1.TypoSizes.body2} type={index_1.TypoTypes.inherit}>
          {description}
        </index_1.Typography>
      </index_1.ModalBody>
      <index_1.ModalFooter>
        <index_1.Grid className={styles_module_scss_1.default.footer} container spacing={2}>
          <index_1.Grid item xs={6} md={4}>
            <index_1.Button onClick={onClose} color={index_1.ButtonColors.outlined} fullWidth>
              {cancel || CONFIRM_CANCEL}
            </index_1.Button>
          </index_1.Grid>
          <index_1.Grid item xs={6} md={4}>
            <index_1.Button onClick={onConfirm} fullWidth>{confirm || CONFIRM_SUBMIT}</index_1.Button>
          </index_1.Grid>
        </index_1.Grid>
      </index_1.ModalFooter>
    </Modal_1.default>);
};
exports.default = ConfirmModal;
//# sourceMappingURL=ConfirmModal.jsx.map