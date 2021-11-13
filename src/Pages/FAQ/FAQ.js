import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Box } from '@mui/system';

import './FAQ.css';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        <Header/>
        <h2 style={{margin: '10px'}}>Frequently Asked Questions</h2>
        <Box style={{padding: '20px'}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    How much customers till now?
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Our customers number till now 30570</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    We have server till now 30570 customers to find there own home.
                </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>How to be a registered Users</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    Go to Login page
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Go to login page you will get the option to be registered.
                </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Where can I pay?
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    You can pay from the website through paypal or your credit card.
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    You may pay your rent online when you have a resident account set up. If you already have a resident account, click Login in the top right corner of the page. Select resident login, then enter your login credentials. If you do not have a resident account yet, refer back to the question: "How do I register a resident account on rentcafe.com?" above.
                </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Personal data
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    Your personal data is safe.
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    We maintain your privacy. We dont send your information to any advertise organisation. 
                </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Why does my book have the “Pending” status?
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    Authority doesn't confirm yet so.
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Bookings can have the “Pending” status for one or two days. Furthermore, it can take up to three business days. Please allow sufficient time for booking to process.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
      <Footer/>
    </div>
  );
}