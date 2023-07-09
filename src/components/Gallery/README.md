```jsx
  import { Paper, PaperRadius } from '@fundoo/ui';
  import styles from './styles.module.scss';

  const images = [
    {
      url: 'https://shathabdhitownships.com/wp-content/uploads/2020/06/Top-Real-Estate-Companies-in-Hyderabad.jpg'
    },
    {
      url: 'https://www.thepinnaclelist.com/wp-content/uploads/2013/05/01-CM-Ramesh-Residence-Jubilee-Hills-Hyderabad-Telangana-India.jpg'
    },
    {
      url: 'https://i.pinimg.com/originals/16/1c/87/161c875ee97008c857c0ed4396274291.jpg'
    },
    {
      url: 'https://www.walkom.com.au/wp-content/uploads/2018/03/4-2-e1521768377667.jpg'
    }
  ];

  <Paper radius={PaperRadius.bold} elevation={1}>
    <Gallery images={images} className={styles['gallery']} />
  </Paper>
```
