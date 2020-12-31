import {
  Container,
  Inner,
  UpdatedAt,
  Button,
  Icon,
  RotateLeftIcon,
} from "./BottomBarElements";

function BottomBar({ updatedAt, onReload }) {
  return (
    <Container>
      <Inner>
        <Button onClick={onReload}>
          <Icon>
            <RotateLeftIcon />
          </Icon>
        </Button>
        <UpdatedAt>آخرین آپدیت: {updatedAt}</UpdatedAt>
      </Inner>
    </Container>
  );
}

export default BottomBar;
