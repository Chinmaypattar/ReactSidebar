import React, { Component } from 'react';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import Accordion from 'react-bootstrap/esm/Accordion';
import './Accordion.scss';

class AccordionComp extends Component {
    render() {
        const {header,children}=this.props;
        return (
            <div class="accordion-wrapper">
                <Accordion>
                    <AccordionItem  eventKey="0">
                        <AccordionHeader>{header}</AccordionHeader>
                        <AccordionBody>{children}</AccordionBody>
                    </AccordionItem>
                </Accordion>
            </div>
        );
    }
}

export default AccordionComp;