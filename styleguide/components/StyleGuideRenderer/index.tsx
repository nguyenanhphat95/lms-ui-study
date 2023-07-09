import _get from 'lodash-es/get';
import React from 'react';
import Container from '../../../src/components/Container';
import Grid from '../../../src/components/Grid';
import Layout from '../../../src/components/Layout';
import Typography, {
  TypoSizes,
  TypoTypes,
  TypoWeights
} from '../../../src/components/Typography';
import SearchBox from '../SearchBox';
import TopBar from '../TopBar';
import styles from './styles.module.scss';

const layoutClasses = { sidebar: styles.sidebar, main: styles.main };

const GIT_ISSUE_URL = '';

const getParentPropsOfChildren = (child: any): string =>
  _get(child, '_owner.stateNode.props');

const StyleGuideRenderer = ({
  children,
  toc,
  title,
  version,
  ...rest
}: any): JSX.Element => {
  const parentProps = getParentPropsOfChildren(children);
  const searchController = React.useRef();

  const navbar = (
    <TopBar>
      <Grid
        container
        component={Container}
        className={styles.nav}
        alignItem="center"
        justifyContent="space-between"
      >
        <Grid item md={10} className={styles['left-content']}>
          <Typography
            href="/"
            size={TypoSizes.subtitle3}
            weight={TypoWeights.bold}
            className={styles.title}
            type={TypoTypes.invert}
          >
            Fundoo UI Components
          </Typography>
          <Typography
            variant={TypoSizes.caption}
            className={styles.version}
            type={TypoTypes.invert}
          >
            {version}
          </Typography>
        </Grid>
        {/* <Grid item md={2} className={styles['right-content']}>
          <Tooltip content="Search in styleguide">
            <Icon
              className={styles.icon}
              onClick={() => (searchController as any).current(true)}
              component={Search}
            />
          </Tooltip>
          <Tooltip content="Create an issue">
            <a href={GIT_ISSUE_URL} target="_blank" rel="noopener noreferrer">
              <Icon className={styles.icon} component={Search} />
            </a>
          </Tooltip>
        </Grid> */}
      </Grid>
    </TopBar>
  );

  return (
    <div className={styles.root}>
      <Grid container>
        <Grid item md={12}>
          <Layout classes={layoutClasses} navbar={navbar} sidebar={toc}>
            {children}
          </Layout>
        </Grid>
      </Grid>
      <SearchBox
        searchController={searchController}
        allSections={(parentProps as any).allSections}
      />
    </div>
  );
};

export default StyleGuideRenderer;
