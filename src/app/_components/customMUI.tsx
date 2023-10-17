import { styled } from '@mui/material/styles';
import { Card, CardContent, CardActions, Button, Input } from '@mui/material';

export const StyledCard = styled(Card)(`
    margin-top: 2em;
    margin-bottom: 2em;
    background-color: #faf8d5;
    border-radius: 20px;
    drop-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    & > h6 {
        fontWeight: 700,
    }
    `
  );

  export const StyledInput = styled(Input)(`
    background-color: white;
  `);