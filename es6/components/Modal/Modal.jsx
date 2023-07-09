var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import useCheckMobile from "@App/utils/hooks/useCheckMobile";
import useClickOutside from "@App/utils/hooks/useClickOutside";
import useKeydown from "@App/utils/hooks/useKeydown";
import CloseCircle from "lms-icons/components/CloseCircle";
import cn from "classnames";
import React, { forwardRef } from "react";
import Backdrop from "../Backdrop";
import Grid from "../Grid";
import { Icon } from "../Icon";
import Paper, { PaperRadius } from "../Paper";
import Portal, { PortalIds } from "../Portal";
import styles from "./styles.module.scss";
const defaultProps = {
    component: Paper,
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
};
export const Modal = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, backdropClassname, children, onClose, xl, lg, md, sm, xs, className } = _a, rest = __rest(_a, ["component", "backdropClassname", "children", "onClose", "xl", "lg", "md", "sm", "xs", "className"]);
    const [onParentClick, onChildClick] = useClickOutside(onClose);
    useKeydown(27, onClose);
    const mobile = useCheckMobile();
    return (<Portal id={PortalIds.modal}>
      <Backdrop className={backdropClassname} onClick={onParentClick}>
        <div className={styles.modal}>
          <Grid container spacing={4} justifyContent="space-around">
            <Grid item xl={xl} lg={lg} md={md} sm={sm} xs={xs}>
              <Grid container spacing={3} direction={mobile ? "column-reverse" : "row"}>
                <Grid item xs={true}>
                  <Component className={cn(styles.content, className)} onClick={onChildClick} elevation={2} radius={PaperRadius.max} {...rest} ref={ref}>
                    {children}
                  </Component>
                </Grid>
                {onClose && (<Grid item xs="auto">
                    <Grid container justifyContent="flex-end">
                      <Grid item xs="auto">
                        <Icon className={styles["icon"]} component={CloseCircle}/>
                      </Grid>
                    </Grid>
                  </Grid>)}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Backdrop>
    </Portal>);
});
export default Modal;
//# sourceMappingURL=Modal.jsx.map