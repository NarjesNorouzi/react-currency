import { Container, Inner, UpdatedAt, Button, Icon } from "./BottomBarElements";

function BottomBar() {
  return (
    <Container>
      <Inner>
        <Button>
          <Icon></Icon>
        </Button>
        <UpdatedAt>آخرین آپدیت: 21/1</UpdatedAt>
      </Inner>
    </Container>
  );
}

export default BottomBar;
