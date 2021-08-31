import React from "react";
import { makeStyles, ButtonGroup, Button } from "@material-ui/core";
import { Link } from 'next/link';
import { useRouter } from 'next/router';

const MainMenu = () => {
  const useStyles = makeStyles((theme) => ({}));
  const classes = useStyles();
  const router = useRouter();

  return (
    <ButtonGroup color="secondary" >
      <Button onClick={() => router.push('/')}>Главная</Button>
      <Button onClick={() => router.push('/shope')}>Магазин</Button>
      <Button onClick={() => router.push('/delivery')}>Доставка</Button>
      <Button onClick={() => router.push('/blog')}>Блог</Button>
      <Button onClick={() => router.push('/about')}>О нас</Button>
      <Button onClick={() => router.push('/contacts')}>Контакты</Button>
    </ButtonGroup>
  );
};

export default MainMenu;