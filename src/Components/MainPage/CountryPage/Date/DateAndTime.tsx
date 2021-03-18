import React from 'react';
import { Row, Col } from 'antd';
import Clock from './Time/Time';
import Date from "./Date/Date";
import { Regions } from './DataForDateAndTime';

interface IDateProps {
    city: string
    lang: string
}

const DateAndTime = (props: IDateProps): JSX.Element => {

    const { city, lang }: any = props;

    const C = city.split(' ').join('');

    // @ts-ignore
    const reg: string = Regions[C];

    return (<Row gutter={12} style={{ padding: "5px" }}>
            <Date reg={reg} lang={lang}
            />
            <Col span={4}>
                <Clock reg={reg}/>
            </Col>
        </Row>
    );
};

export default DateAndTime;
