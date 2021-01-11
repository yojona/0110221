import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions, Car } from '../../store/cars/reducer';
import { formatDate } from '../../utils/dates';
import CarDialog from '../CarDialog';

const useStyles = makeStyles<Theme, { estimatedate: string | undefined }>((theme: Theme) => ({
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: '0.3',
    zIndex: 1,
    pointerEvents: 'none',
    backgroundColor: ({ estimatedate }) => estimatedate ? '#a7a8af' : 'transparent',
  },
  root: {
    position: 'relative',
    minWidth: 280,
    maxWidth: 280,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(3)
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
  },
}));

const CarItem: FC<Car> = (car) => {
  const dispatch = useDispatch();
  const classes = useStyles({ estimatedate: car.estimatedate });
  const [showDialog, setShowDialog] = useState(false);

  const handleConfirm = (id: number, client: string, date: Date) => {
    const updated = {
      ...car,
      clientName: client,
      estimatedate: formatDate(date),
    }

    dispatch(actions.updateCar(updated));
    setShowDialog(false);
  };

  const handleChangeStatus = () => {
    if (!car.estimatedate) {
      return setShowDialog(true);
    }

    const updated = {
      ...car,
      clientName: undefined,
      estimatedate: undefined,
    };
    dispatch(actions.updateCar(updated));
  };

  const formatKM = (input?: number) => {
    if (!input) {
      return 'Unknown'
    }

    return input.toLocaleString();
  };

  return (
    <>
      <Card className={classes.root}>
        <div className={classes.overlay} />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={car.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {car.make} {car.model}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ID: {car.id}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              KM: {formatKM(car.km)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {car.clientName && `Client: ${car.clientName}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Description: {car.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {car.estimatedate && `Estimated date: ${car.estimatedate}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {!car.estimatedate && (
            <Button size="small" color="primary" fullWidth onClick={handleChangeStatus}>
              Change status
            </Button>
          )}

          {car.estimatedate && (
            <Button size="small" color="primary" fullWidth onClick={handleChangeStatus}>
              It's done
            </Button>
          )}
        </CardActions>
      </Card>
      <CarDialog
        open={showDialog}
        onConfirm={handleConfirm}
        car={car}
      />
    </>
  )
};

export default CarItem;
