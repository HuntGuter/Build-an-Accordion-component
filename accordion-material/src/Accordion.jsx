import { useState } from "react";
import {
    Accordion as MuiAccordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';    

const Accordion = ({items}) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleChange = (index) => (event, isExpanded) => {
        setExpandedIndex(isExpanded ? index : null);
    };

    return (
        <div>
            {items.map((item, index) => (
                <MuiAccordion
                        key={index}
                        expanded={expandedIndex === index}
                        onChange={handleChange(index)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.content}</Typography>
                    </AccordionDetails>
                </MuiAccordion>
            ))};
        </div>
    );
};

export default Accordion;