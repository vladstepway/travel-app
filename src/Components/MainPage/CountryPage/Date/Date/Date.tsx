import React, { useEffect, useState } from "react";
import { Col, Row, Statistic } from "antd";
import { CalendarOutlined, SmileOutlined } from "@ant-design/icons";
import { daysObj, monthsObj } from "../DataForDateAndTime";

interface IDateProps {
    reg: string;
}

const Date = (props: IDateProps): JSX.Element => {

    const [weekDay, setWeekDay] = useState('-');
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState('-');

    const [weekdays, setWeekDays]: any = useState(daysObj.ENG);
    const [months, setMonths]: any = useState(monthsObj.ENG);

    const { reg } = props;


    useEffect(() => {
        const dt = new window.Date().toLocaleString("en-US", { timeZone: `${reg}` });
        console.log(new window.Date());
        console.log(dt);

        const currentDayNumber: any = dt.slice(2, 4);
        const currentMonthNumber: any = dt[0];
        const currentDayOfWeekNumber: number = (new window.Date()).getDay() - 1;

        setDay(currentDayNumber);
        setMonth(months[currentMonthNumber]);
        setWeekDay(weekdays[currentDayOfWeekNumber]);
    }, []);

    return <>
        <Col span={4}>
            <Statistic title="Date" value={`${day} of ${month}`}
                       prefix={<CalendarOutlined/>}/>
        </Col>
        <Col span={4}>
            <Statistic title="Day" value={weekDay} prefix={<SmileOutlined/>}/>
        </Col>
    </>;
};

export default Date;
