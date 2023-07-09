## Usage

### Simple Pagination

```jsx
import { Pagination } from "@fundoo/ui";

const [currentPage, setCurrentPage] = React.useState(1);

<Pagination total={100} current={currentPage} onChangePage={setCurrentPage} />;
```

### Set range page display ( default: 5 )

```jsx
import { Pagination } from "@fundoo/ui";

const [currentPage, setCurrentPage] = React.useState(1);

<Pagination
  total={100}
  current={currentPage}
  displayNumber={10}
  onChangePage={setCurrentPage}
/>;
```
