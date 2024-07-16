import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Container = styled('div')(({ theme }) => ({
  width: '40%', // Reduced width of the container
  marginTop: '3%',
  marginLeft: '30%',
  [theme.breakpoints.down('md')]: {
    marginLeft: '5%',
    marginRight: '5%',
    width: '80%',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '0',
    width: '90%',
  },
  [theme.breakpoints.down('xs')]: {
    marginTop: '0',
    width: '100%',
  },
}));

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
    fontSize: 16, // Adjusted font size
    letterSpacing: -0.01,
    fontFamily: 'Playfair Display', // Change font to Playfair
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5vw', // Adjusted font size for small screens
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '4.5vw', // Adjusted font size for extra small screens
    },
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#0F2B2D',
  padding: theme.spacing(1), // Reduced padding
  fontFamily: 'Montserrat',
  fontSize: 15, // Adjusted font size
  [theme.breakpoints.down('md')]: {
    fontSize: 13, // Adjusted font size for medium screens
    padding: theme.spacing(0.75), // Reduced padding for medium screens
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 11, // Adjusted font size for small screens
    padding: theme.spacing(0.5), // Reduced padding for small screens
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: 9, // Adjusted font size for extra small screens
    padding: theme.spacing(0.25), // Reduced padding for extra small screens
  },
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          How does this work?
        </AccordionSummary>
        <AccordionDetails>
        MediGuide provides comprehensive drug and medication information sourced from the FDA. Users can access details such as medication names, dosages, recommended daily intake frequencies, and prescription durations. This platform equips users with essential knowledge to make informed healthcare decisions.       </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        Does MediGuide support management of multiple medications and health products?        </AccordionSummary>
        <AccordionDetails>
        Yes, MediGuide enables you to effectively manage multiple medications and health-related products through our app. Each medication can be scheduled with its own reminders, and you can also track various health products seamlessly. Our app allows detailed input for each item, including dosage, intake frequency, and duration, ensuring comprehensive management of your health needs within a single platform.        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        How does MediGuide notify me about my medication schedule?        </AccordionSummary>
        <AccordionDetails>
        The reminder feature is currently under development and will soon be integrated. You will receive push notifications when it's time to take your medication. The app ensures that these notifications are sent within the start and end dates you specify, and they are timed to match your prescribed schedule. This way, you can be confident that you won't miss any doses and can stay on top of your health routine.        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
