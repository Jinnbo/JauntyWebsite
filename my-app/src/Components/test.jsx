import React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Grid)({
  padding: theme => theme.spacing(2),
});

const Item = styled(Paper)({
  padding: theme => theme.spacing(2),
  textAlign: 'center',
});

const ResponsiveContainer = () => {
  return (
    <Container container spacing={2}>
      {/* Item 1 */}
      <Item xs={12} md={6}>
        {/* Content for Item 1 */}
        Item 1asdfasdfasdf
      </Item>

      {/* Item 2 */}
      <Item xs={12} md={6}>
        {/* Content for Item 2 */}
        Item 2
      </Item>
    </Container>
  );
};

export default ResponsiveContainer;
