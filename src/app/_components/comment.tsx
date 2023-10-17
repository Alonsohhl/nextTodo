import React from 'react';
import { Typography, CardContent, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { StyledCard } from './customMUI';


interface QuoteSectionProps {
    comment: string;
  }

const QuoteSection : React.FC<QuoteSectionProps>= ({comment}) => {
  return (
    <StyledCard>
      <CardContent>
      <IconButton color="primary">
        <InfoIcon />
      </IconButton>
        <Typography variant="h6" component="span">
          Comment
        </Typography>
        <Typography variant="body2">
            {comment}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}


export default QuoteSection;