import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, TextField, Theme } from '@material-ui/core';
import React, { ChangeEvent, FC, useState } from 'react';
import { Car } from '../../store/cars/reducer';
import { formatDate, getDate } from '../../utils/dates';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  field: {
    '&:not(:first-child)': {
      marginLeft: theme.spacing(1)
    }
  }
}));

type CarDialogProps = {
  car: Car;
  open: boolean;
  onConfirm: (id: number, client: string, date: Date) => void
}

const CarDialog: FC<CarDialogProps> = ({ car, open, onConfirm }) => {
  const classes = useStyles();
  const [clientName, setClientName] = useState('');
  const [currentDate, setCurrentDate] = useState<Date>(getDate(car.estimatedate));

  const handleClick = () => {
    onConfirm(car.id, clientName, currentDate);
  };

  const handleDateChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newDate = getDate(e.target.value);
    setCurrentDate(newDate);
  };

  const handleClientName = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setClientName(e.target.value);
  };

  const renderDate = formatDate(currentDate);

  return (
    <Dialog open={open}>
      <DialogTitle>Put into maintenance</DialogTitle>
      <DialogContent>
        <TextField
          className={classes.field}
          size="small"
          label="Client name"
          variant="outlined"
          value={clientName}
          onChange={handleClientName}
        />
        <TextField
          className={classes.field}
          size="small"
          label="Estimated date"
          type="date"
          value={renderDate}
          onChange={handleDateChange}
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick} disabled={!clientName}>Save</Button>
      </DialogActions>
    </Dialog>
  )
};

export default CarDialog;
