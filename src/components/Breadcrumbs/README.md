### Basic

```jsx
import { Typography, Breadcrumbs } from "@fundoo/ui";

<Breadcrumbs separator="-">
  <Typography>Trang chủ</Typography>
  <Typography>Nhà lẻ</Typography>
  <Typography>Chi tiết</Typography>
</Breadcrumbs>;
```

### Custom separator

```jsx
import RightArrowBreadcrumb from "lms-icons/components/RightArrowBreadcrumb";
import { Typography, TypoTypes, Breadcrumbs } from "@fundoo/ui";

<Breadcrumbs
  separator={
    <Icon
      width={11}
      height={11}
      component={RightArrowBreadcrumb}
      style={{ color: "red" }}
    />
  }
>
  <Typography type={TypoTypes.sub}>Trang chủ</Typography>
  <Typography type={TypoTypes.sub}>Nhà lẻ</Typography>
</Breadcrumbs>;
```
