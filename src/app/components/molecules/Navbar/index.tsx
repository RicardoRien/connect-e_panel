"use client"
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from 'next/link'
import logo from "public/logo.png";

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {
  AppBar,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import DrawerComp from "../Drawer/index";

interface Props {
  pages: string[]
  avatar: StaticImageData 
}

export const Navbar = ({ pages, avatar }: Props) => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar sx={{ position: 'static', background: "white", boxShadow: 'none', borderBottom: "2px solid #CED3DB" }}>
      <Toolbar>
        <Stack 
          direction="row" 
          spacing={2} 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{width: '100%', maxWidth: '1400px', margin: '0 auto' }}
        >
            <Stack direction="row" spacing={0}>
              <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>
                <Image src={logo} width={120} height={28} alt="Logo" />
              </Link>
            </Stack>
            {isMatch ? (
              <>
                <DrawerComp 
                  pages={pages}
                />
              </>
            ) : (
              <>
                <Stack direction="row" spacing={10}>
                  <Tabs
                    sx={{ marginLeft: "auto"  }}
                    value={value}
                    TabIndicatorProps={{ style: { display: 'none' } }}
                    onChange={(_e, value) => setValue(value)}
                  >
                    {pages.map((page: string, index: number) => (
                      <Tab 
                        key={index} 
                        label={page}
                        sx={{
                          textTransform: "none",
                          fontWeight: 'bold',
                          "&.Mui-selected": {
                            backgroundColor: "#F9FAFC",
                            borderRadius: '10px',
                            color: 'black',
                            fontWeight: 'bold',
                            textTransform: 'none'
                          },
                        }}
                      />
                    ))}
                  </Tabs>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <button onClick={() => console.log()} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <NotificationsOutlinedIcon 
                      style={{ color:'gray', width: '30px', height: '30px'}}
                    />
                  </button>
                  <button onClick={() => console.log()} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <Image 
                      src={avatar} 
                      width={40} 
                      height={40} 
                      alt="Profile" 
                      style={{ borderRadius: '50%' }}
                    />
                  </button>
                </Stack>
              </>
            )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
