import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange = {handleDateChange}></AppointmentHeader>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
