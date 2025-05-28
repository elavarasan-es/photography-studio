import React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface CustomAccordionProps {
  panelKey: string;
  expanded: string | false;
  onChange: (panel: string) => void;
  summary: React.ReactNode;
  details: React.ReactNode;
}

export default function CustomAccordion({
  panelKey,
  expanded,
  onChange,
  summary,
  details,
}: CustomAccordionProps) {
  const isExpanded = expanded === panelKey;

  // ✅ Style: remove border, background transparent
  const CustomAccordionRoot = styled(Accordion)({
    boxShadow: 'none',
    background: 'transparent',
    border: 'none',
    '&::before': {
      display: 'none', // removes default divider line
    },
  });

  // ✅ Style: remove spacing and border
  const CustomAccordionSummary = styled(AccordionSummary)({
    padding: 0,
    minHeight: '48px',
    '& .MuiAccordionSummary-content': {
      margin: 0,
    },
    display:'flex',
    gap:100
  });

  // ✅ Styled AccordionDetails with border only when expanded
  const CustomAccordionDetails = styled(AccordionDetails)({
    padding: '16px',
    border: isExpanded ? '1px solid #d4af37' : 'none',
    borderRadius: '4px',
    marginTop: '8px',
  });

  const SummaryContentWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  });

  return (
    <CustomAccordionRoot
      expanded={isExpanded}
      onChange={(newExpanded) => onChange(newExpanded ? panelKey : '')}
    >
      <CustomAccordionSummary
        expandIcon={
          <div style={{ fontWeight: 'bolder', color: 'black', }}>
            {isExpanded ? <RemoveIcon /> : <AddIcon />}
          </div>
        }
        aria-controls={`${panelKey}-content`}
        id={`${panelKey}-header`}
      >
        <SummaryContentWrapper>
          <Typography component="span">{summary}</Typography>
        </SummaryContentWrapper>
      </CustomAccordionSummary>

      {isExpanded && (
        <CustomAccordionDetails>
          <Typography>{details}</Typography>
        </CustomAccordionDetails>
      )}
    </CustomAccordionRoot>
  );
}
