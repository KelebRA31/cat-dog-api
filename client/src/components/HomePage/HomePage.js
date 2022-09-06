import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { getCatThunk } from '../../redux/actions/catDogActions';
import './HomePage.css';
import LK from '../LK/LK';
import { addLike } from '../../redux/actions/likeActions';

function HomePage() {
  const dispatch = useDispatch();
  const { cat, like } = useSelector((state) => state);
  const { catImg, loading } = cat;

  const changeHandler = () => {
    dispatch(getCatThunk());
  };
  console.log(cat);
  const likeHandler = () => {
    if (!like.includes(catImg[0])) {
      dispatch(addLike(catImg[0]));
    }
  };
  return (
    <div className="containerCat">

      <Card sx={{ maxWidth: 640 }} className="blockCat">
        {catImg
          ? (
            <CardMedia
              component="img"
              alt="green iguana"
              height="480"
              image={catImg[0]?.url}
            />
          )

          : <p>Press button</p> }
        <CardActions className="catButton">
          <Button onClick={likeHandler} size="small">Like</Button>
          <LoadingButton
            size="small"
            onClick={changeHandler}
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
          >
            Next cat
          </LoadingButton>
          <Button size="small">Dislike</Button>

        </CardActions>
      </Card>

    </div>
  );
}

export default HomePage;
