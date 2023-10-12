import { styled } from '@mui/material/styles';
import { Card, CardContent, CardActions, Button } from '@mui/material';

export const StyledCard = styled(Card)(`
    background-color: #faf8d5;
    & > h6 {
        fontWeight: 700,
    }
    `
    // maxWidth: 300,
    // backgroundColor: '#faf8d5',

  );