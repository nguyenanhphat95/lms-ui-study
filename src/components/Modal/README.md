### Simple Modal

```jsx
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Typography,
  TypoWeights,
  TypoSizes
} from '@fundoo/ui';

const [open, toggleModal] = React.useState(false);
const handleCloseModal = () => toggleModal(false);

<div>
  {open && (
    <Modal onClose={handleCloseModal}>
      <ModalHeader onClose={handleCloseModal}>
        <Typography size={TypoSizes.body1} weight={TypoWeights.bold}>
          Simple Modal
        </Typography>
      </ModalHeader>
      <ModalBody>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </ModalBody>
    </Modal>
  )}
  <Button onClick={() => toggleModal(true)} fullWidth={false}>
    Click to open
  </Button>
</div>;
```

### Modal with cover

```jsx
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Typography,
  TypoWeights,
  TypoSizes
} from '@fundoo/ui';

const [open, toggleModal] = React.useState(false);
const handleCloseModal = () => toggleModal(false);

<div>
  {open && (
    <Modal onClose={handleCloseModal}>
      <ModalHeader>
        <Typography size={TypoSizes.body1} weight={TypoWeights.bold}>
          Modal with cover
        </Typography>
      </ModalHeader>
      <ModalBody>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </ModalBody>
    </Modal>
  )}
  <Button onClick={() => toggleModal(true)} fullWidth={false}>
    Click to open
  </Button>
</div>;
```

### Confirm Modal

```jsx
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Grid,
  ButtonColors,
  Typography,
  TypoWeights,
  TypoSizes
} from '@fundoo/ui';

const [open, toggleModal] = React.useState(false);
const handleCloseModal = () => toggleModal(false);

const footerStyle = {
  padding: '2.4rem',
  paddingTop: 0,
  textAlign: 'right'
};
const cancelButtonStyle = {
  marginRight: '1.2rem'
};

<div>
  {open && (
    <Modal lg={5} onClose={handleCloseModal}>
      <ModalHeader onClose={handleCloseModal}>
        <Typography size={TypoSizes.body1} weight={TypoWeights.bold}>
          Confirm Modal
        </Typography>
      </ModalHeader>
      <ModalBody>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </ModalBody>
      <ModalFooter style={footerStyle}>
        <Button
          buttonColors={ButtonColors.secondary}
          onClick={handleCloseModal}
          style={cancelButtonStyle}
          fullWidth={false}
        >
          Cancel
        </Button>
        <Button onClick={handleCloseModal} fullWidth={false}>
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  )}
  <Button onClick={() => toggleModal(true)} fullWidth={false}>
    Click to open
  </Button>
</div>;
```

### Alert Modal

```jsx
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Grid,
  ButtonColors,
  Typography,
  TypoWeights,
  TypoSizes
} from '@fundoo/ui';

const [open, toggleModal] = React.useState(false);
const handleCloseModal = () => toggleModal(false);

const footerStyle = {
  padding: '2.4rem',
  paddingTop: 0,
  textAlign: 'right'
};
const cancelButtonStyle = {
  marginRight: '1.2rem'
};

<div>
  {open && (
    <Modal lg={5} onClose={handleCloseModal}>
      <ModalHeader>
        <Typography size={TypoSizes.body1} weight={TypoWeights.bold}>
          Alert Modal
        </Typography>
      </ModalHeader>
      <ModalBody>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </ModalBody>
      <ModalFooter style={footerStyle}>
        <Button
          buttonColor={ButtonColors.secondary}
          onClick={handleCloseModal}
          style={cancelButtonStyle}
          fullWidth={false}
        >
          Disagree
        </Button>
        <Button onClick={handleCloseModal} fullWidth={false}>
          Agree
        </Button>
      </ModalFooter>
    </Modal>
  )}
  <Button onClick={() => toggleModal(true)} fullWidth={false}>
    Click to open
  </Button>
</div>;
```

### Form Modals

```jsx
import {
  Button,
  ButtonColors,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Grid,
  Input,
  Typography,
  TypoWeights,
  TypoSizes
} from '@fundoo/ui';

const [open, toggleModal] = React.useState(false);
const handleCloseModal = () => toggleModal(false);

const descStyle = {
  marginBottom: '2.4rem'
};
const footerStyle = {
  padding: '2.4rem',
  paddingTop: 0,
  textAlign: 'right'
};
const cancelButtonStyle = {
  marginRight: '1.2rem'
};

<div>
  {open && (
    <Modal lg={5} onClose={handleCloseModal}>
      <ModalHeader>
        <Typography size={TypoSizes.body1} weight={TypoWeights.bold}>
          Subscribe
        </Typography>
      </ModalHeader>
      <ModalBody>
        <Typography component="p" style={descStyle}>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </Typography>
        <Input type="email" placeholder="Email address" />
      </ModalBody>
      <ModalFooter style={footerStyle}>
        <Button
          buttonColor={ButtonColors.secondary}
          onClick={handleCloseModal}
          style={cancelButtonStyle}
          fullWidth={false}
        >
          Cancel
        </Button>
        <Button onClick={handleCloseModal} fullWidth={false}>
          Subscribe
        </Button>
      </ModalFooter>
    </Modal>
  )}
  <Button onClick={() => toggleModal(true)} fullWidth={false}>
    Click to open
  </Button>
</div>;
```

### Custom Backdrop Modal

```jsx
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Typography,
  TypoWeights,
  TypoSizes
} from '@fundoo/ui';
import styles from './example.module.scss';

const [open, toggleModal] = React.useState(false);
const handleCloseModal = () => toggleModal(false);

<div>
  {open && (
    <Modal backdropClassname={styles.backdropCustom} onClose={handleCloseModal}>
      <ModalHeader onClose={handleCloseModal}>
        <Typography size={TypoSizes.body1} weight={TypoWeights.bold}>
          Simple Modal
        </Typography>
      </ModalHeader>
      <ModalBody>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </ModalBody>
    </Modal>
  )}
  <Button onClick={() => toggleModal(true)} fullWidth={false}>
    Click to open
  </Button>
</div>;
```
