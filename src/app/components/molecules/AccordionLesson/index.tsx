"use client";
import React, { useEffect, useState } from "react";

import { CARD_STATUS } from "@/utils/constants";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import { Accordion } from "../../atoms/Accordion";
import { AccordionSummary } from "../../atoms/Accordion/AccordionSummary";
import { ExpandMoreIcon } from "../../atoms/Icons/ExpandMoreIcon";

interface Props {
  status: string;
  title: string;
  date: string;
  hour: string;
}

export function AccordionLesson(props: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  const [accordionState, setAccordionState] = useState({
    textColor: "",
    badgeText: "",
    badgeColor: "",
    accordionColor: "",
    expandIconColor: "",
    badgeTextColor: "",
  });

  const handleClick = () => {
    setExpanded(!expanded);

    // NOTE: Open box
    if (!expanded) {
      setOpenCalendar(!openCalendar);
      console.info("Expansión");
    }
  };

  useEffect(() => {
    const statusLowerCase = props.status.toLowerCase();

    switch (statusLowerCase) {
      case CARD_STATUS.COMPLETED.toLowerCase():
        setAccordionState({
          ...accordionState,
          badgeText: CARD_STATUS.COMPLETED,
          accordionColor: "#98A1B2",
          badgeColor: "#CED3DA",
          badgeTextColor: "#98A1B2",
          textColor: "#FFFFFF",
          expandIconColor: "#FFFFFF",
        });
        break;
      case CARD_STATUS.BOOKED.toLowerCase():
        setAccordionState({
          ...accordionState,
          badgeText: CARD_STATUS.BOOKED,
          accordionColor: "#275DC7",
          badgeColor: "#407AE1",
          badgeTextColor: "#FFFFFF",
          textColor: "#FFFFFF",
          expandIconColor: "#FFFFFF",
        });
        break;
      case CARD_STATUS.BUSY.toLowerCase():
        setAccordionState({
          ...accordionState,
          badgeText: "Instructor is busy at this time",
          accordionColor: "#FBA199",
          badgeColor: "#EE4337",
          badgeTextColor: "#FFFFFF",
          textColor: "#FFFFFF",
          expandIconColor: "#FFFFFF",
        });
        break;
    }
  }, [props.status]);

  const {
    textColor,
    badgeText,
    badgeColor,
    accordionColor,
    expandIconColor,
    badgeTextColor,
  } = accordionState;

  return (
    <Accordion
      sx={{
        backgroundColor: accordionColor,
        borderRadius: "8px!important",
        marginY: "15px",
      }}
      onClick={handleClick}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: expandIconColor }} />}
      >
        <Box
          sx={{
            backgroundColor: badgeColor,
            padding: "10px",
            minWidth: "100px",
            textAlign: "center",
            borderRadius: "70px",
            height: "08px",
          }}
        >
          <Typography
            color={badgeTextColor}
            sx={{ position: "relative", bottom: "7px", fontWeight: "600" }}
          >
            {badgeText}
          </Typography>
        </Box>
      </AccordionSummary>
      <Box sx={{ paddingLeft: "20px", paddingBottom: "10px" }}>
        <Typography sx={{ color: textColor, fontWeight: "900" }}>
          {props.title}
        </Typography>
        <Typography sx={{ color: textColor }}>{props.date}</Typography>
        <Typography sx={{ color: textColor }}>{props.hour}</Typography>
      </Box>
    </Accordion>
  );
}
