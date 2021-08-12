import React from "react";
import { Slider } from "@material-ui/core";
import { useNode } from "@craftjs/core";
import { Paper } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

export const Container = ({ background, padding, children }) => {
  const {
    connectors: { connect, drag }
  } = useNode();
  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </Paper>
  );
};

// Container.craft = {
//   props: ContainerDefaultProps,

// };
