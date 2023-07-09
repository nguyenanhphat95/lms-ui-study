import { Button, ButtonColors, Grid, ModalBody, ModalFooter, ModalHeader, Typography, TypoSizes, TypoTypes, TypoWeights } from '@App/index';
import React from 'react';
import Modal from '../Modal';
import styles from './styles.module.scss';
const CONFIRM_TITLE = 'Xác nhận';
const CONFIRM_SUBMIT = 'Xác nhận';
const CONFIRM_CANCEL = 'Hủy';
const ConfirmModal = ({ title, confirm, cancel, description, onClose, onConfirm }) => {
    return (<Modal onClose={onClose} lg={4} md={4}>
      <ModalHeader onClose={onClose}>
        <Typography component="span" size={TypoSizes.body1} weight={TypoWeights.bold}>
          {title || CONFIRM_TITLE}
        </Typography>
      </ModalHeader>
      <ModalBody>
        <Typography component="span" size={TypoSizes.body2} type={TypoTypes.inherit}>
          {description}
        </Typography>
      </ModalBody>
      <ModalFooter>
        <Grid className={styles.footer} container spacing={2}>
          <Grid item xs={6} md={4}>
            <Button onClick={onClose} color={ButtonColors.outlined} fullWidth>
              {cancel || CONFIRM_CANCEL}
            </Button>
          </Grid>
          <Grid item xs={6} md={4}>
            <Button onClick={onConfirm} fullWidth>{confirm || CONFIRM_SUBMIT}</Button>
          </Grid>
        </Grid>
      </ModalFooter>
    </Modal>);
};
export default ConfirmModal;
//# sourceMappingURL=ConfirmModal.jsx.map