import React, { useState } from "react";
import {
    StyledBox,
    StyledFormControl,
    StyledInputLabel,
    StyledMenuItem,
    StyledSelect,
} from "./DataUpdateTimer.styled";
import { options } from "./options/options";

const DataUpdateTimer = ({ onHandleChange }) => {
    const [timerValue, setTimerValue] = useState(5000);

    const handleChange = (event) => {
        setTimerValue(event.target.value);
        onHandleChange(event.target.value);
    };

    return (
        <StyledBox>
            <StyledFormControl variant="filled">
                <StyledInputLabel id="updateDataByTime" variant="filled">
                    Change Updating Time
                </StyledInputLabel>
                <StyledSelect
                    labelId="timerUpdate"
                    id="updateDataByTime"
                    value={timerValue}
                    label="Timer"
                    onChange={handleChange}
                >
                    {options.map(({ value, timer }) => {
                        return (
                            <StyledMenuItem value={value} key={value}>
                                {timer}
                            </StyledMenuItem>
                        );
                    })}
                </StyledSelect>
            </StyledFormControl>
        </StyledBox>
    );
};

export default DataUpdateTimer;
