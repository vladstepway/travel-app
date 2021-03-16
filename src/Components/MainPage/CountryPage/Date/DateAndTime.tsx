import React, { useState, useEffect, FC } from 'react';
import { Statistic, Row, Col } from 'antd';
import {
  SmileOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

interface IDateProps {
  country: string;
  city: string;
}

enum Regions {
  Berlin = 'Europe/Berlin',
  NewDelhi = 'Asia/Kolkata',
  Brasilia = 'Brazil/DeNoronha',
  Pyongyang = 'Asia/Pyongyang',
  Oslo = 'Europe/Oslo',
  Abuja = 'Europe/Oslo',
  Suva = 'Pacific/Nauru',
  MexicoCity = 'America/Mexico_City'
}

const DateAndTime = (props: IDateProps): JSX.Element => {
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Seturday',
    'Sunday',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [weekDay, setWeekDay] = useState('-');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState('-');
  const [time, setTime] = useState('-');

  const { country }: any = props;
  const { city }: any = props;
  const C = city.split(' ').join('');

  // @ts-ignore
  const reg: string = Regions[C];

  useEffect(() => {
    const interval = setInterval(() => {
      const dt = new Date().toLocaleString('en-US', { timeZone: `${reg}` });

      const currentTime = new Date(dt).toISOString().slice(11, 19);
      const currentDayNumber: any = dt.slice(2, 4);
      const currentMonthNumber: any = dt[0];
      const currentDayOfWeekNumber: any = new Date().getDay() - 1;

      setDay(currentDayNumber);
      setTime(currentTime);
      setMonth(months[currentMonthNumber]);
      setWeekDay(weekdays[currentDayOfWeekNumber]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Row gutter={12} style={{ margin: '5px' }}>
      <Col span={4}>
        <Statistic
          title="Date"
          value={`${day} of ${month}`}
          prefix={<CalendarOutlined />}
        />
      </Col>
      <Col span={4}>
        <Statistic title="Day" value={weekDay} prefix={<SmileOutlined />} />
      </Col>
      <Col span={4}>
        <Statistic title="Time" value={time} prefix={<ClockCircleOutlined />} />
      </Col>
    </Row>
  );
};

export default DateAndTime;
