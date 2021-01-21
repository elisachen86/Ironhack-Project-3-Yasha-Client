import React from "react";
import DayJsUtils from "@date-io/dayjs";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function MaterialUIPickers(props) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("01/22/2021")
  );
  // eslint-disable-next-line
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DayJsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        //   id="date-picker-inline"
        label="Date"
        value={selectedDate}
        //   onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
