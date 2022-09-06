import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { getDogThunk } from '../../redux/actions/catDogActions';
import { addLike, addLikeDog } from '../../redux/actions/likeActions';

import './Dog.css';

function Dog() {
  const dispatch = useDispatch();
  const { dog, like } = useSelector((state) => state);
  const { dogImg, loading } = dog;

  const likeHandler = () => {
    if (!like.includes(dogImg)) {
      dispatch(addLikeDog(dogImg));
    }
    dispatch(getDogThunk());
  };
  const changeHandler = (event) => {
    dispatch(getDogThunk());
  };

  return (
    <div className="containerDog">

      <Card sx={{ maxWidth: 640 }} className="blockCat">
        {dogImg
          ? (
            <CardMedia
              component="img"
              alt="green iguana"
              height="480"
              image={dogImg?.message}
            />
          )

          : <p>Press button</p> }
        <CardActions className="dogButton">
          <Button onClick={likeHandler} size="small">Like</Button>
          <LoadingButton
            size="small"
            onClick={changeHandler}
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
          >
            Next dog
          </LoadingButton>
          <Button onClick={changeHandler} size="small">Dislike</Button>

        </CardActions>
      </Card>

    </div>

  );
}

export default Dog;
