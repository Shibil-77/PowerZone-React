import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker as Ragpicker, Page, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'windows',
    themeVariant: 'light'
});

function CalendarPage() {
    const inputProps = {
        placeholder: 'Please Select...'
    };
    
    const boxInputProps = {
        label: 'Range',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...'
    };
    
    return (
        <Page>
            <Ragpicker controls={['calendar']} inputComponent="input" inputProps={inputProps} />
            <Ragpicker controls={['calendar']} inputProps={boxInputProps} />
            <Ragpicker controls={['calendar']}  display="inline"/>
        </Page>
    ); 
}


export default CalendarPage;