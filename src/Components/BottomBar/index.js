import {
  Container,
  Inner,
  UpdatedAt,
  Button,
  Icon,
  RotateLeftIcon,
} from "./BottomBarElements";

function BottomBar() {
  return (
    <Container>
      <Inner>
        <Button>
          <Icon>
            <RotateLeftIcon />
          </Icon>
        </Button>
        <UpdatedAt>آخرین آپدیت: 21/1</UpdatedAt>
      </Inner>
    </Container>
  );
}

export default BottomBar;
