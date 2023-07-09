import React from 'react';
// @ts-ignore
import Markdown from 'rsg-components/Markdown';
import Typography, { TypoWeights } from '../../../src/components/Typography';
import styles from './styles.module.scss';
import Table from './Table';

const TABLE_KEYS = {
  name: 'name',
  description: 'description',
  type: 'type',
  defaultValue: 'defaultValue',
  required: 'required'
};

const headerOfTable = [
  {
    label: 'Prop Name',
    value: TABLE_KEYS.name
  },
  {
    label: 'Type',
    value: TABLE_KEYS.type
  },
  {
    label: 'Description',
    value: TABLE_KEYS.description
  }
];

function processProps(prop): any {
  return {
    ...prop,
    name: (
      <Typography className={styles.name} weight={TypoWeights.bold}>
        {prop.name}
      </Typography>
    ),
    type: (
      <Typography className={styles.type} weight={TypoWeights.bold}>
        {prop.type.name}
      </Typography>
    ),
    description: (
      <Markdown className={styles.description} text={prop.description} />
    )
  };
}

function PropsRenderer({ props }: any): JSX.Element {
  return <Table header={headerOfTable} data={props.map(processProps)} />;
}

export default PropsRenderer;
