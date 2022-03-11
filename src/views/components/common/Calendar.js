import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Paper } from "@mui/material";

const Calendar = ({ date, setDate }) => {
  return (
    <Paper elevation={0}>
      {" "}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Paper>
  );
};

export default Calendar;
// import React from "react";

// const Calendar = () => {
//   return <div>f</div>;
// };

// export default Calendar;
