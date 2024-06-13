import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Container = styled('div')({
  width: '50%', // Set the width of the container
  marginTop: '3%', 
  marginLeft: '25%'
  
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))();

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#01796F' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#0F2B2D',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    fontWeight: 300,
    fontSize: 17,
    letterSpacing: -0.01,
    fontFamily: 'Playfair Display', // Change font to Playfair
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: '#fffff',
  color: '#0F2B2D',
  padding: theme.spacing(2),
  fontFamily: 'Montserrat',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container> {/* Container div with width and margin styling */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        How does the medication reminder feature work?
        </AccordionSummary>
        <AccordionDetails>
          The medication reminder feature allows you to set specific times for taking your medications. You can input the medication name, dosage, daily intake frequency, and the start and end dates for the prescription. When it's time to take your medication, you'll receive a notification. This ensures you never miss a dose and helps you maintain your health regimen effectively.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        Can I manage multiple medications and health products?
        </AccordionSummary>
        <AccordionDetails>
        Yes, you can manage multiple medications and health-related products using our app. Each medication can have its own set of reminders, and you can track different health products as well. The app allows you to input detailed information for each item, including dosage, intake frequency, and duration, making it easy to handle all your health needs in one place.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        How do I get notified about my medication times?
        </AccordionSummary>
        <AccordionDetails>
        You will receive notifications via email when it's time to take your medication. The app ensures that these notifications are sent within the start and end dates you specify, and they are timed to match your prescribed schedule. This way, you can be confident that you won't miss any doses and can stay on top of your health routine.
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
