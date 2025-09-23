import { Box, Button, Container, Text, Title } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router';

import classes from './Develop.module.scss';

export function DevelopPage() {
  const navigate = useNavigate();

  return (
    <Box className={classes.root}>
      <Container size="sm" style={{ textAlign: 'center' }}>
        <div className={classes.icon}>🛠️</div>
        <Title className={classes.title}>功能开发中</Title>
        <Text size="lg" ta="center" className={classes.description}>
          精彩内容正在全力施工中，请稍后再来探索吧！
        </Text>
        <Button variant="outline" size="md" onClick={() => navigate('/')} className={classes.button}>
          返回首页
        </Button>
      </Container>
    </Box>
  );
}
