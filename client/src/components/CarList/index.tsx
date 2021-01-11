import { Typography, Container, makeStyles, Theme } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { getCars } from '../../store/cars/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/cars/reducer';
import CarItem from './CarItem';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}));

const CarList: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cars = useSelector(getCars);

  useEffect(() => {
    dispatch(actions.fetchCars());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h5" className={classes.title}>Car list ({cars.length})</Typography>
      <div className={classes.list}>
        {cars.map((c) => (
          <CarItem key={c.id} {...c} />
        ))}
      </div>
    </Container>
  )
};

export default CarList;
