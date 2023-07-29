import { Fragment, ReactNode, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Popper,
  Fade,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

export const CommonLayout = ({ children }: Props) => {
  const { data } = useSession();

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setIsOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          {data ? (
            <Fragment>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                component="div"
                onClick={handleClick}
              >
                <img
                  src={data?.user?.image || ""}
                  alt="Avatar GitHub"
                  style={{
                    width: "45px",
                    height: "45px",
                    objectFit: "cover",
                    borderRadius: "100px",
                  }}
                />
                <Typography>{data?.user?.name}</Typography>
              </Box>
              <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        p: 1,
                        bgcolor: "background.paper",
                        width: "150px",
                        cursor: "pointer",
                      }}
                      component="div"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      <Typography textAlign="center">Logout</Typography>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Fragment>
          ) : (
            <Button
              onClick={() => signIn()}
              variant="contained"
              color="secondary"
            >
              Login with GitHub
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {children}
      <SideDrawer
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
      />
    </Box>
  );
};
