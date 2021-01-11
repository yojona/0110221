import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import React, { ChangeEvent, FC, useState } from 'react';
import { Car } from '../../store/cars/reducer';
import DateFnsUtils from '@date-io/date-fns';

type CarDialogProps = {
  car: Car;
  open: boolean;
  onConfirm: () => void
}

const getDate = (date?: string): Date => {
  if (!date) {
    return new Date();
  }

  const [year, day, month] = date.split('/');

  if (year && day && month) {
    return moment(`${year}-${month}-${day}`).toDate();
  }

  return new Date(date);
};

const CarDialog: FC<CarDialogProps> = ({ car, open, onConfirm }) => {
  const [currentDate, setCurrentDate] = useState<Date>(getDate(car.estimatedate));

  const handleClick = () => {
    onConfirm();
  };

  const handleDateChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newDate = getDate(e.target.value);
    setCurrentDate(newDate);
  };

  const renderDate = currentDate.toISOString().split("T")[0]

  return (
    <Dialog open={open}>
      <DialogTitle>Put into maintenance</DialogTitle>
      <DialogContent>
        <TextField placeholder="Client name" />
        <TextField
          id="date"
          label="Estimated date"
          type="date"
          value={renderDate}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick}>Add</Button>
      </DialogActions>
    </Dialog>
  )
};

export default CarDialog;
