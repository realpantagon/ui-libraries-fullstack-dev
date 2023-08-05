"use client";
import { FC, useState } from "react";
import {
  Container,
  Title,
  Button,
  Flex,
  Modal,
  Group,
  Text,
} from "@mantine/core";
export default function Home() {
  const [opened, setOpened] = useState(false);
  const onClick = () => setOpened(true);
  const onClose = () => setOpened(false);

  return (
    <Container size="lg">
      <Flex direction={"column"} rowGap={"xs"} align={"center"}>
        <Title order={1} color="blue">
          Mantine
        </Title>
        <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          onClick={onClick}
        >
          Click Me
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          onClick={onClick}
        >
          Click Me
        </Button>
      </Flex>
      <ModalComponent open={opened} onClose={onClose} />
    </Container>
  );
}

const ModalComponent: FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  return (
    <Modal opened={open} onClose={onClose}>
      <Group position="center">
        <Flex direction={"column"} rowGap={"xs"} align={"center"}>
          <Title order={1} color="blue">
            Modal Title
          </Title>
          <Text>This is modal content.</Text>
          <Group position="right">
            <Button color="gray" onClick={onClose}>
              Close
            </Button>
            <Button onClick={onClose}>Submit</Button>
          </Group>
        </Flex>
      </Group>
    </Modal>
  );
};
