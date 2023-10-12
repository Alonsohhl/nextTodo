import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, CardContent } from '@mui/material';
import { StyledCard } from '../components/customMUI';

interface QuoteSectionProps {
    comment: string;
  }

const QuoteSection : React.FC<QuoteSectionProps>= ({comment}) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" component="div">
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