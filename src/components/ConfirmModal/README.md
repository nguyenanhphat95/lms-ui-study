```jsx

import { ConfirmModal, useConfirmModal, Typography } from '@fundoo/ui';

const { isOpen, open, close, confirm } = useConfirmModal();

<>
  <Button onClick={open}>Click me to show Confirm Modal</Button>

  {
    isOpen && (
      <ConfirmModal title="Are you want to delete?"
        confirm="Sure"
        cancel="Cancel"
        description={
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        }
        onClose={close}
        onConfirm={() => { alert('Confirm') }}
      />
    )
  }
</>

```
