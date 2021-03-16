import React, { useEffect, useState } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Statistic } from "antd";

const Time = (props: any) => {
    const { reg } = props;
    const [time, setTime] = useState('-');


    useEffect(() => {
        const interval = setInterval(() => {
            const dt = new Date().toLocaleString("en-US", { timeZone: `${reg}` });
            const currentTime = (new Date(dt)).toISOString().slice(11, 19);
            setTime(currentTime);
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <Statistic title="Time" value={time} prefix={<ClockCircleOutlined />} />
    );
};

export default Time;

