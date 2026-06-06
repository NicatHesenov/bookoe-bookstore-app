import { Checkbox } from "@chakra-ui/react";

function test() {
  return (
    <>
      <Checkbox.Root>
        <Checkbox.HiddenInput />
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>Click me</Checkbox.Label>
      </Checkbox.Root>
    </>
  );
}

export default test;
