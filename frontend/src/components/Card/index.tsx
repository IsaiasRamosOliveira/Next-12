import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { card } from './Card.css';

interface IBasicCard {
  title: string,
  description: string
  date: string
  author: string
}

export default function BasicCard({ title, description, date, author }: IBasicCard) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className={card} variant="outlined">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
        <i>{author}</i><br />
        <i>{new Date(date).toLocaleDateString()}</i>
        </div>
      </Card>
    </Box>
  );
}