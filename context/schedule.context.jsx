import { useState, useEffect, useContext, createContext } from "react";

export const ScheduleContext=createContext({});

export const monthsMap={
    January:{order:0,days:31},
    February:{order:1,days:28},
    March:{order:2,days:31},
    April:{order:3,days:30},
    May:{order:4,days:31},
    June:{order:5,days:30},
    July:{order:6,days:31},
    August:{order:7,days:31},
    September:{order:8,days:30},
    Octoper:{order:9,days:31},
    November:{order:10,days:30},
    December:{order:11,days:31},
}

export function ScheduleProvider({children}){

    const [months,setMonths]=useState();
    const [selectedMonth,setSelectedMonth]=useState();
    const [schedule,setSchedule]=useState(undefined);
    const [selectedDay,selectDay]=useState();
    const [selectedTime,selectTime]=useState(undefined);
    const [isAlert,toggleAlert]=useState(false);

    const currentDay=schedule && schedule[selectedDay];

    useEffect(()=>{
        fetch("https://cura-front-end-test.herokuapp.com/")
            .then(res=>res.json())
            .then(JSON.parse)
            .then(res=>setSchedule(res.schedule))
            .catch(err=>alert("Please Try Again Later !"));
    },[]);

    useEffect(()=>{
        if(schedule){
            const daysNumber=schedule.length;
            const firstDay=+(schedule[0].availability.date).slice(0,2);
            const firstMonth=schedule[0].availability.month;
            const firstMonthNumber=monthsMap[firstMonth].order;
            let monthsCounter=0;
            const newMonths=[];
            for(let i=daysNumber;i>0;i){
                const currentMonth=Object.keys(monthsMap)[firstMonthNumber+monthsCounter];
                newMonths.push(currentMonth);
                i-=Object.values(monthsMap)[firstMonthNumber+monthsCounter].days;
                monthsCounter++;
            }
            setMonths(newMonths);
        }
    },[schedule])

    useEffect(()=>{
        if(months)
            setSelectedMonth(months[0]);
    },[months])

    useEffect(()=>{
        selectDay();
    },[selectedMonth])

    useEffect(()=>{
        selectTime(undefined);
    },[selectedDay]);

    const value={ schedule, selectedDay, months, selectedMonth, setSelectedMonth, selectDay, currentDay, selectTime, selectedTime, isAlert, toggleAlert };
    return(
        <ScheduleContext.Provider value={value}>{children}</ScheduleContext.Provider>
    );
}

export function useScheuleContext(){
    return useContext(ScheduleContext);
}