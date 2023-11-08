"use client";
import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface Props {
  pages: string[];
}

const DrawerComp = ({ pages }: Props) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page: string, index: number) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      {/* NOTE: This icons appers in mobile version */}
      <IconButton
        sx={{ color: "#343f52", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon style={{ color: "#343f52" }} />
      </IconButton>
    </>
  );
};

export default DrawerComp;
