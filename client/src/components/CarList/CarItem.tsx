import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { Car } from '../../store/cars/reducer';
import CarDialog from '../CarDialog';

const useStyles = makeStyles<Theme, { estimatedate: string | undefined }>((theme: Theme) => ({
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: '0.3',
    zIndex: 1,
    pointerEvents: 'none',
    backgroundColor: ({ estimatedate }) => estimatedate && '#a7a8af',
  },
  root: {
    position: 'relative',
    minWidth: 320,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    '&:not(:first-child)': {
      marginLeft: theme.spacing(3)
    }
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
  },
}));

const CarItem: FC<Car> = ({
  id,
  make,
  model,
  image,
  km,
  description,
  estimatedate
}) => {
  const classes = useStyles({ estimatedate });
  const [showDialog, setShowDialog] = useState(false);

  const handleConfirm = () => {
    setShowDialog(false);
  };

  const handleChangeStatus = () => {
    setShowDialog(true);
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
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {make} {model}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ID: {id}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              KM: {formatKM(km)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Description: {description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {estimatedate && `Estimated date: ${estimatedate}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" fullWidth onClick={handleChangeStatus}>
            Change status
        </Button>
        </CardActions>
      </Card>
      <CarDialog
        open={showDialog}
        onConfirm={handleConfirm}
        car={{
          id,
          make,
          model,
          image,
          km,
          description,
          estimatedate
        }}
      />
    </>
  )
};

export default CarItem;
