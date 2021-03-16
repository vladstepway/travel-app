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





    const C = city.split(' ').join('');

    // @ts-ignore
    const reg: string = Regions[C];


    return (<Row gutter={12} style={{ margin: "5px" }}>
            <Date reg={reg} lang={lang}
            />
            <Col span={4}>
                <Clock reg={reg}/>
            </Col>
        </Row>
    );
};

export default DateAndTime;
