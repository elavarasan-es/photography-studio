
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummaryRoot = styled(MuiAccordionSummary)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  fontSize: '1.125rem',
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
    fontSize: '1.125rem',
    fontWeight: 500,
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    fontSize: '1.25rem',
    marginRight: theme.spacing(1),
  },
  [`&.${accordionSummaryClasses.expanded}`]: {
    color: '#BA9E52', // Tailwind red-500
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FaqAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

   const faqData = [
    {
      question: 'What types of photography services do you offer?',
      answer: 'We offer portrait, wedding, product, corporate, fashion, and event photography tailored to your needs.',
    },
    {
      question: 'How far in advance should I book a session?',
      answer: 'We recommend booking at least 2–4 weeks in advance to ensure availability, especially for weekends and seasonal events.',
    },
    {
      question: 'What is included in a typical photo session?',
      answer: 'Each session includes a consultation, shooting time, digital editing, and a downloadable gallery. Packages vary by type.',
    },
    {
      question: 'Do you offer photo prints or just digital images?',
      answer: 'Yes, we provide high-resolution digital images and can arrange for professional prints, canvases, and albums.',
    },
    {
      question: 'Can I choose the location for the shoot?',
      answer: 'Absolutely! We shoot both in our studio and at custom locations of your choice depending on lighting and setup needs.',
    },
    {
      question: 'What should I wear for my session?',
      answer: 'Wear solid colors and minimal patterns. Coordinate with others if it’s a group shoot, and avoid logos for a timeless look.',
    },
    {
      question: 'How long does it take to receive the final photos?',
      answer: 'Final edited photos are typically delivered within 5–7 business days depending on the session type and volume.',
    },
    {
      question: 'Do you retouch or edit the images?',
      answer: 'Yes, we perform professional retouching on all selected photos to ensure the highest quality and natural look.',
    },
    {
      question: 'What is your cancellation or rescheduling policy?',
      answer: 'We require 48-hour notice for cancellations or reschedules. Deposits are non-refundable but may be transferable.',
    },
    {
      question: 'Can you accommodate large group or corporate shoots?',
      answer: 'Yes! We’re fully equipped to handle corporate team sessions, large family shoots, and events with multiple subjects.',
    },
    {
      question: 'Do you shoot weddings or destination events?',
      answer: 'Yes, we specialize in wedding photography and are available for destination weddings with prior arrangements.',
    },
    {
      question: 'How can I view and download my photos?',
      answer: 'You’ll receive a private online gallery where you can view, select, and download your high-resolution photos securely.',
    },
    {
      question: 'Do you offer gift cards or photography packages?',
      answer: 'Yes, we offer both customizable photography packages and gift vouchers for sessions of any value.',
    },
    {
      question: 'What equipment do you use for photography?',
      answer: 'We use high-end DSLR and mirrorless cameras, professional lighting, and studio backdrops to ensure top quality.',
    },
    {
      question: 'Are pets allowed in studio sessions?',
      answer: 'Of course! We love pets and are happy to include them in studio sessions with prior notice for preparation.',
    },
  ];

  return (
    <div style={{ minWidth: '80%' }}>
      {faqData.map((item, index) => {
        const panelId = `panel${index}`;
        const isExpanded = expanded === panelId;

        return (
          <Accordion
            key={index}
            expanded={isExpanded}
            onChange={handleChange(panelId)}
          >
            <AccordionSummaryRoot
              aria-controls={`${panelId}d-content`}
              id={`${panelId}d-header`}
              expandIcon={
                <div style={{ fontWeight: 'bolder', color: 'black' }}>
                  {isExpanded ? <RemoveIcon /> : <AddIcon />}
                </div>
              }
            >
              <Typography component="span" style={{fontSize:22}}>{item.question}</Typography>
            </AccordionSummaryRoot>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
