import { Box, Grid, Typography } from "@mui/material";
import type { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <Box component="header" textAlign="center" margin="0 auto" width="600px">
      <Typography component="h1" variant="h3" padding={2}>
        Products
      </Typography>

      <Grid
        container
        textAlign="center"
        mb={2}
        sx={{
          "& a": {
            color: "purple",
            textDecoration: "none",

            ":hover": { color: "lightgreen" },
          },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Link to="/">
            <Typography>Home</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link to="/cart">
            <Typography>Cart</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
