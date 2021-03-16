import React, { useState, useEffect } from 'react';
import { Statistic, Row, Col } from 'antd';
import {
    SmileOutlined,
    CalendarOutlined,
    ClockCircleOutlined
} from "@ant-design/icons";
import Clock from './Time/Time';
import Date from "./Date/Date";
import { daysObj, Regions, monthsObj } from './DataForDateAndTime';

interface IDateProps {
    city: string
    lang: string
}

const DateAndTime = (props: IDateProps): JSX.Element => {

    const { city, lang }: any = props;


    //
    // if(lang === 'ru') {
    //     setWeekDays(daysObj.RU);
    //     setMonths(monthsObj.RU);
    // } else if (lang === 'en') {
    //     setWeekDays(daysObj.ENG);
    //     setMonths(monthsObj.ENG);
    // } else {
    //     setWeekDays(daysObj.BY);
    //     setMonths(monthsObj.BY);
    // }


    const C = city.split(' ').join('');

    // @ts-ignore
    const reg: string = Regions[C];


    return (<Row gutter={12} style={{ margin: "5px" }}>
            <Date reg={reg}
            />
            <Col span={4}>
                <Clock reg={reg}/>
            </Col>
        </Row>
    );
};

export default DateAndTime;
