import { Typography, Container, makeStyles, Theme, CircularProgress } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { getCars, getIsLoading } from '../../store/cars/selectors';
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
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  }
}));

const CarList: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(actions.fetchCars());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h5" className={classes.title}>Car list ({cars.length})</Typography>
      <div className={classes.list}>
        {cars.map((c, i) => (
          <CarItem key={`${c.id}${i}`} {...c} />
        ))}
      </div>
      <div className={classes.loader}>
        {isLoading && <CircularProgress />}
      </div>
    </Container>
  )
};

export default CarList;
