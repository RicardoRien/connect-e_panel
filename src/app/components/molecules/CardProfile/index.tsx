import Image, { StaticImageData } from "next/image";
import defaultImgUser from "public/default_img.png";

import { Grid, Typography } from "@mui/material";

interface Props {
  name: string;
  location: string;
  avatarTeacher: StaticImageData;
}

export function CardProfile({ name, location, avatarTeacher }: Props) {
  return (
    <Grid container spacing={1} width={430}>
      <Grid item xs={4} md={2}>
        <Image
          src={avatarTeacher || defaultImgUser}
          width={60}
          height={60}
          style={{ borderRadius: "50%", position: "relative", top: "4px" }}
          alt="Teacher's avatar"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          fontSize={25}
          fontWeight={900}
          sx={{ position: "relative", top: "7px" }}
        >
          {name}
        </Typography>
        <Typography
          color={"#CED3DA"}
          fontWeight={900}
          sx={{ position: "relative", bottom: "3px" }}
        >
          {location}
        </Typography>
      </Grid>
    </Grid>
  );
}
