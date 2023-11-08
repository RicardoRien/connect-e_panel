import Link from "next/link";

import { Stack, Typography } from "@mui/material";

import { ArrowBackIcon } from "../../atoms/Icons/ArrowBackIcon";

interface Props {
  link: string;
  text: string;
}

export function GoBackLeftArrow({ link, text }: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ position: "relative", left: { lg: 0, xl: "-20px" } }}
    >
      <Link
        data-testid="teacher-go-back-link"
        href={link}
        style={{
          textDecoration: "none",
          color: "#275CC9",
          paddingRight: "20px",
        }}
      >
        <ArrowBackIcon
          sx={{ fontSize: "30px", position: "relative", bottom: "-2px" }}
          alt="Go back left arrow"
        />
      </Link>
      <Typography
        sx={{ fontSize: "30px", color: "#275CC9", letterSpacing: "-1px" }}
      >
        {text}
      </Typography>
    </Stack>
  );
}
