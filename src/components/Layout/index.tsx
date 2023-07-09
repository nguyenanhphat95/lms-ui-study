import cn from 'classnames';
import React from 'react';
import Container from '../Container';
import styles from './styles.module.scss';

interface LayoutClasses {
  navbar: string;
  sidebar: string;
  main: string;
  content: string;
  footer: string;
}

type LayoutProps = {
  open?: boolean;
  navbar?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
  classes?: Partial<LayoutClasses>;
  className?: string;
  children?: React.ElementType;
};

export const Layout = (props: LayoutProps) => {
  const {
    className,
    open,
    children,
    navbar,
    classes,
    sidebar,
    footer,
    ...rest
  } = Object.assign({ classes: {} }, props);

  return (
    <Container {...rest} fluid className={styles.container}>
      <div className={cn(styles.navbar, classes.navbar)}>{navbar}</div>
      <div
        className={cn(styles.layout, {
          [styles.open]: open
        })}
      >
        {sidebar && (
          <div className={cn(styles.sidebar, classes.sidebar)}>{sidebar}</div>
        )}
        <div
          className={cn(styles.main, classes.main, {
            [styles['full-width']]: !sidebar
          })}
        >
          <Container className={cn(styles.content, classes.content)} fluid>
            {children}
          </Container>
          {footer && (
            <div className={cn(styles.footer, classes.footer)}>{footer}</div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Layout;
