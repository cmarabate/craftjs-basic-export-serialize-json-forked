import React from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton
} from "@material-ui/core";
import { useEditor } from "@craftjs/core";
import Demo from "../demo.json";
export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));

  return (
    <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={
              <Switch
                checked={enabled}
                onChange={(_, value) =>
                  actions.setOptions((options) => (options.enabled = value))
                }
              />
            }
            label="Enable"
          />
        </Grid>
        <Grid item>
          <MaterialButton
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              console.log(query.serialize());
              console.log(query.getSerializedNodes());
            }}
          >
            Serialize JSON to console
          </MaterialButton>
          <MaterialButton
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              actions.deserialize(Demo);
            }}
          >
            load from data
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
