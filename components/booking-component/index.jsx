import { useScheuleContext } from "../../context/schedule.context";
import { Container, Next, Previous, CardHeader, HeaderLabel, DaysRow, DaysContainer, Day, DaysContainerWrapper, Time, TimesContainer } from "./styles";
import { monthsMap } from "../../context/schedule.context";
import { Children } from "react";
import { AnimatePresence } from "framer-motion";

const monthToNumber={};
Object.keys(monthsMap).forEach((month,index)=>monthToNumber[month]=index);

const daysMap={
    Sunday:0,
    Monday:1,
    Tuesday:2,
    Wednesday:3,
    Thursday:4,
    Friday:5,
    Saturday:6,
}

const container = {
    hidden: { opacity: 0, x:-200 },
    visible: {
      opacity: 1,
      x:0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
}

export default function BookingCMP() {
    const { schedule, months, selectedMonth, setSelectedMonth, selectDay, selectedDay, selectTime, selectedTime }=useScheuleContext();
    const monthDays=schedule && schedule.filter((date)=>date.availability.month===selectedMonth);
    const emptyDays=monthDays && ( new Array(daysMap[monthDays[0]?.availability?.day]).fill(""));
    const availableHours=selectedDay && monthDays[selectedDay]?.available?.map(item=>calculateTime(item,"available"));
    const unavailableHours=selectedDay && monthDays[selectedDay]?.unavailable?.map(item=>calculateTime(item,"unavailable").times.map(time=>time)).flat();
    const { year,date }=(monthDays && monthDays[0]?.availability) || {};
    let days= (selectedMonth && monthDays) && Children.toArray(emptyDays.concat((monthDays[0].availability.date===schedule[0].availability.date)?["first"].concat(new Array(monthDays.length-1).fill(`not empty`)):new Array(monthDays.length).fill(`not empty`)).map((item,index)=><Day variants={item} onClick={setDay(index-emptyDays.length)} selected={(selectedDay+emptyDays.length)===index} disabled={!item || item==="first"}>{ (item && (index+ +date.slice(0,2))-emptyDays.length) || "" }</Day>));
    
    function setMonth(direction){
        const currentMonth=months?.indexOf(selectedMonth);
        return function(){
            const newMonth=months[currentMonth+direction];
            if(newMonth)
                setSelectedMonth(newMonth);
        }
    }

    function setDay(dayIndex){
        return function(){
            selectDay(dayIndex);
        }
    }

    function get12Hour(hour){
        const check=hour%12;
        if(check===0)
            return hour===24?'12:00 am':'12:00 pm';
        if(check===hour)
            return `${check}:00 am`;
        return `${check}:00 pm`;
    }

    function calculateTime(timesArray,availability){
        const [startTime,endTime]=Object.values(timesArray);
        const date=new Date(startTime*1000);
        const hour=date.getHours();

        const timeDifference = endTime - startTime;
        const differenceDate = new Date(timeDifference * 1000);
        const diffHours = differenceDate.getUTCHours();

        const times=[];

        for(let i=0;i<diffHours;i++){
            times[i]=get12Hour(hour+i);
        }
        return {startHour:hour,times,status:availability}
    }
    
    const TimesElements=Children.toArray((availableHours || [] ).map(item=>{
        return item.times.map(time=>{
            if(unavailableHours.includes(time))
                return<Time status="disabled">{time}</Time>
            if(time===selectedTime)
                return <Time status="selected">{time}</Time>
            return <Time  onClick={()=>selectTime(time)}>{time}</Time>
        })
    }));

    return (
        <Container>
            <CardHeader>
                <Previous onClick={setMonth(-1)}/>
                <HeaderLabel>{ selectedMonth && (selectedMonth+" "+year)}</HeaderLabel>
                <Next onClick={setMonth(1)}/>
            </CardHeader>
            <div>
                <DaysRow>
                    <span>S</span> <span>M</span> <span>T</span> <span>W</span> <span>T</span> <span>F</span> <span>S</span>    
                </DaysRow>
                <DaysContainerWrapper><AnimatePresence key={selectedMonth} mode="wait" initial={true}><DaysContainer variants={container} initial="hidden" animate="visible">
                    { days }
                </DaysContainer></AnimatePresence></DaysContainerWrapper>
                <AnimatePresence key={selectedDay} mode="wait" initial={true}><TimesContainer variants={container} initial="hidden" animate="visible" grid={TimesElements.length }>{ TimesElements.length?TimesElements:<h2>Select a day</h2> }</TimesContainer></AnimatePresence>
                <button className={selectedTime?"active":""} onClick={()=>alert(selectedTime+" - "+selectedDay+"/"+selectedMonth)}>Book Appointment</button>
            </div>
        </Container>
    );
}
