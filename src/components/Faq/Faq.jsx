
import './Faq.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '2rem', color: 'white' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'light'
            ? 'black'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',


    },

    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='Faqmaindiv' id='Faq' >

        {/* <h1 className='mAINHEADING' style={{color:'#000'}} >FAQ</h1> */}
       
        <h1 className='mAINHEADING' >FAQ</h1>
        <div className="mainheadingtext">Frequently Asked Questions</div>

            <div className="innerdiv">

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">What is Coinstake?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody" >
                        <Typography className="bodytext" >
                        Coinstake is the native cryptocurrency for Coinstake Blockchain. Coinstake will not only be a tool to record blockchain transactions, but will act as a decentralized financial medium.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography className="AccodionHeadertext">Who is behind Coinstake?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                        Coinstake Blockchain and Cryptocurrency have been designed and developed by Innovation Factory, a fintech firm dedicated towards developing innovative decentralized-financial solutions. You can learn more about the firm at: InnovationFactory
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography className="AccodionHeadertext">Is the Whitepaper available for Coinstakes?
</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                        Yes, the whitepaper is available. You can access it through the “Whitepaper” tab in the navigation bar or simply use this link: WhitePaper
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography className="AccodionHeadertext">Where can I buy Coinstakes?
</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">

                        You can buy Coinstake Token with Trust Wallet
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography className="AccodionHeadertext">When is the whitelist?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                            Q4 2021
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                        <Typography className="AccodionHeadertext">What are possible utilities of Coinstakes?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                        
Coinstake has an ever-growing utility-based ecosystem. They can be traded, invested, staked or use as a digital payment method at supported partner platforms and projects. To learn more about Coinstake’s utility, please refer to the “Ecosystem” tab in the navigation bar or use the link: Ecosystem
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
}
