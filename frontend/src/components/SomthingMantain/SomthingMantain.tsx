import { useState } from "react";
import { Button, Overlay, AspectRatio } from "@mantine/core";
import "./somthingMantain.css";

export default function SomthingMantain() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
          alt="SomthingMantain"
        />
        {visible && <Overlay color="#000" backgroundOpacity={0.85} />}
      </AspectRatio>
      <Button
        onClick={() => setVisible((v) => !v)}
        fullWidth
        maw={200}
        mx="auto"
        mt="xl"
       color="#7223b7"
      >
        Toggle overlay
      </Button>
    </>
  );
}
