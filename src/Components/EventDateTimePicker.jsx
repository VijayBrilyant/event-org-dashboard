import React, { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RiArrowDownWideFill } from 'react-icons/ri';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff0033',
    },
    secondary: {
      main: '#ff0033',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: '#ff0033',
          },
          '&:hover fieldset': {
            borderColor: '#64b5f6',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#42a5f5',
          },
        },
        input: {
          color: '#ffffff',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&.Mui-selected': {
            backgroundColor: '#fc9504',
          },
        },
      },
    },
  },
});

const EventDateTimePicker = ({ eventStartDateTime, eventEndDateTime, eventCalender, setEventCalender }) => {
  const [active, setActive] = useState('start');
  const [dateStartTime, setDateStartTime] = useState(dayjs());
  const [endDateTime, setEndDateTime] = useState(dayjs().add(1, 'day'));

  const handleStartDateChange = (newValue) => {
    setDateStartTime(newValue);
    eventStartDateTime(newValue.format('DD-MM-YYYY h:mm A'));


    if (newValue.isAfter(endDateTime)) {
      const adjustedEndDate = newValue.add(1, 'day');
      setEndDateTime(adjustedEndDate);
      eventEndDateTime(adjustedEndDate.format('DD-MM-YYYY h:mm A'));
    }
  };

  const handleEndDateChange = (newValue) => {
    setEndDateTime(newValue);
    eventEndDateTime(newValue.format('DD-MM-YYYY h:mm A'));
  };

  return (
    <div style={{ width: '100%' }}>

      {
        eventCalender === 'close' ? (
          <div className='mt-5  flex items-center justify-between bg-black px-4 py-3 rounded-[10px] mb-2'
            onClick={() => setEventCalender('open')}
          >
            <span className='text-[12px]'>Event Calender</span> <RiArrowDownWideFill />
          </div>
        ) : (
          <div className='mt-5  flex items-center justify-between bg-black px-4 py-3 rounded-[10px] mb-2'
            onClick={() => setEventCalender('close')}
          >
            <span className='text-[12px]'>Event Calender</span> <RiArrowDownWideFill />
          </div>
        )
      }



      <div className={`bg-black py-3 pl-3 rounded-[10px] ${eventCalender === 'close' ? 'close-calender' : ''} `}>
        <div className="flex items-center date-controllers justify-between pr-3">
          <button
            type="button"
            onClick={() => setActive('start')}
            className={active === 'start' ? 'outline-btn' : 'default-btn'}
          >
            Start Date
          </button>
          <button
            type="button"
            onClick={() => setActive('end')}
            className={active === 'end' ? 'outline-btn' : 'default-btn'}
          >
            End Date
          </button>
        </div>

        <ThemeProvider theme={darkTheme}>



          <LocalizationProvider dateAdapter={AdapterDayjs}>

            {active === 'start' ? (
              //Start Date Time
              <StaticDateTimePicker
                value={dateStartTime}
                onChange={handleStartDateChange}
                disablePast
              />
            ) : (
              //End Date Time
              <StaticDateTimePicker
                value={endDateTime}
                onChange={handleEndDateChange}
                disablePast
                minDate={dateStartTime}
              />
            )

            }

          </LocalizationProvider>

          {/* End Date Picker */}
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
           <StaticDateTimePicker
              value={endDateTime}
              onChange={handleEndDateChange}
              disablePast
              minDate={dateStartTime}
            />
        </LocalizationProvider> */}
        </ThemeProvider>
      </div>



    </div>
  );
};

export default EventDateTimePicker;
