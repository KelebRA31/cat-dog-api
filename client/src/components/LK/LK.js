import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { addLike, delLike } from '../../redux/actions/likeActions';
import './LK.css';

export default function LK() {
  const { like } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(like);

  const deleteHandler = (el) => {
    dispatch(delLike(el));
  };
  return (
    <div className="containerLK">
      {like?.map((el) => (

        <Card sx={{ maxWidth: 320 }} className="blockCat">

          <CardMedia
            component="img"
            alt="green iguana"
            height="240"
            image={el?.url}
          />

          <CardActions className="LKButton">
            <Button onClick={() => deleteHandler(el)} size="small">Delete</Button>

          </CardActions>
        </Card>
      ))}
    </div>
  );
}
