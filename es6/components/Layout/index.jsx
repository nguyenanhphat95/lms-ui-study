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
import cn from 'classnames';
import React from 'react';
import Container from '../Container';
import styles from './styles.module.scss';
export const Layout = (props) => {
    const _a = Object.assign({ classes: {} }, props), { className, open, children, navbar, classes, sidebar, footer } = _a, rest = __rest(_a, ["className", "open", "children", "navbar", "classes", "sidebar", "footer"]);
    return (<Container {...rest} fluid className={styles.container}>
      <div className={cn(styles.navbar, classes.navbar)}>{navbar}</div>
      <div className={cn(styles.layout, {
        [styles.open]: open
    })}>
        {sidebar && (<div className={cn(styles.sidebar, classes.sidebar)}>{sidebar}</div>)}
        <div className={cn(styles.main, classes.main, {
        [styles['full-width']]: !sidebar
    })}>
          <Container className={cn(styles.content, classes.content)} fluid>
            {children}
          </Container>
          {footer && (<div className={cn(styles.footer, classes.footer)}>{footer}</div>)}
        </div>
      </div>
    </Container>);
};
export default Layout;
//# sourceMappingURL=index.jsx.map