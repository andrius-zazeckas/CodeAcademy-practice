import { Box, Grid, Typography } from "@mui/material";
import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header: FC = () => {
  const { pathname } = useLocation();
  const isOnCartLink = pathname.includes("/cart");

  return (
    <Box component="header" textAlign="center" margin="0 auto" width="600px">
      <Typography variant="h3" padding={2} fontWeight="600" fontSize="44px">
        {isOnCartLink ? "CART" : "PRODUCTS"}
      </Typography>

      {/* TODO heading Products pagal link, sutvarkyti warning */}

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
            <Typography fontSize="32px">Home</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link to="/cart">
            <Typography fontSize="32px">Cart</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
