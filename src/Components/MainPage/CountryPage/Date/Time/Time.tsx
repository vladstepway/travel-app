import React, { useEffect, useState } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Statistic, Tooltip } from "antd";
import { Button } from "antd/lib/radio";

const Time = (props: any) => {
    const { reg } = props;
    const [time, setTime] = useState('-');



    useEffect(() => {
        const s: any = new Date();
        const d: any = new Date(s);
        // console.log(reg);
        // console.log(d.toLocaleString({ timeZone: `${reg}` }));
        // console.log(d);
        const interval = setInterval(() => {
            const dt = new Date().toLocaleString("en-US", { timeZone: `${reg}` });
            // console.log(dt);
            const currentTime = (new Date(dt)).toISOString().slice(11, 19);
            setTime(currentTime);
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <Tooltip placement="topLeft" title=":))" arrowPointAtCenter>
            <Button>{time}</Button>
        </Tooltip>);
};

export default Time;

