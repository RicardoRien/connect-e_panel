"use client";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import { getDayInDate } from "@/utils/helpers/helpers/getDayInDate";
import { getLastWordsInDate } from "@/utils/helpers/helpers/getLastWordsInDate";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { CalendarPicker } from "@mui/x-date-pickers";

import {
  DatesInterface,
  profileData,
  ProfileDataInterface,
} from "../../../data/index";
import { ContainerMaxWidth } from "../../atoms/ContainerMaxWidth";
import { AccordionLesson } from "../../molecules/AccordionLesson";
import { CardProfile } from "../../molecules/CardProfile";
import { GoBackLeftArrow } from "../../molecules/GoBackLeftArrow";

import "dayjs/locale/en";

interface Props {
  accordionData: DatesInterface[];
  profileData: ProfileDataInterface;
}

export function ApplicationCalendar(props: Props) {
  const [value, setValue] = useState<Dayjs | null>(dayjs(Date.now()));
  const [actualtDate, setActualtDate] = useState<string | undefined>("");
  const isDesktop = useMediaQuery("(min-width:730px)");

  useEffect(() => {
    setActualtDate(value?.toString());
  }, [value]);

  return (
    <Box sx={{ marginTop: "35px", marginX: { xs: "10px", xl: "40px" } }}>
      <ContainerMaxWidth>
        <Box>
          <GoBackLeftArrow link="/" text="Teacher" />
        </Box>
        <Stack spacing={2} direction={isDesktop ? "row" : "column"}>
          <Box maxWidth={400} marginTop={4}>
            <CardProfile
              name={profileData.name}
              location={profileData.location}
              avatarTeacher={profileData.avatarTeacher!}
            />
            {props.accordionData.map((date: DatesInterface, index: number) => (
              <AccordionLesson
                key={index}
                status={date.status}
                title={date.title}
                date={date.date}
                hour={date.hour}
              />
            ))}
          </Box>
          <Stack
            spacing={4}
            direction={isDesktop ? "row" : "column"}
            sx={{
              border: "1px solid #98A1B2",
              borderRadius: "10px",
              padding: "30px",
              height: "700px",
            }}
          >
            <CalendarPicker
              date={value}
              onChange={(newValue) => setValue(newValue)}
            />
            <Box>
              <Typography color={"#CFD3DC"} fontWeight={600} display={"inline"}>
                {actualtDate && getDayInDate(actualtDate)},{" "}
              </Typography>
              <Typography color={"#CFD3DC"} display={"inline"}>
                {actualtDate && getLastWordsInDate(actualtDate, -2)}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </ContainerMaxWidth>
    </Box>
  );
}
