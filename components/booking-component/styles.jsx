import styled,{ css } from "styled-components";
import { MdNavigateNext,MdNavigateBefore } from "react-icons/md";
import { motion } from "framer-motion";

const iconStyles=css`
    font-size: 2rem;
    background-color: rgb(72, 148, 254);
    border: 1px solid rgb(225, 225, 225);
    color: white;
    border-radius: 50%;
    cursor: pointer;
    :hover{
        color: rgb(72, 148, 254);
        background-color: transparent;
        cursor: pointer;
    }
`;

export const Next=styled(MdNavigateNext)`
    ${iconStyles};
`;
export const Previous=styled(MdNavigateBefore)`
    ${iconStyles};
`;

export const CardHeader=styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px;
`;

export const DaysRow=styled.div`
    display: grid;
    width: 100%;
    max-width: 300px;
    margin: 0px auto 5px;
    grid-template-columns: repeat(7,25px);
    gap:20px;
    & span{
        text-align: center;
        font-weight: 700;
        font-size: 1.05rem;
        cursor: pointer;
    }
    padding-bottom:15px;
    border-bottom: 1px solid rgba(0,0,0,.15);
`;

export const DaysContainer=styled(motion.div)`    
    display: grid;
    grid-template-columns: repeat(7,25px);
    gap:15px 20px;
`;

const disabledDayStyles=css`
    opacity:.40;
    font-weight: 400;
    pointer-events: none;
`;

const selectedStyles=css`
    color: white;
    background-color:rgb(24, 110, 230);
    border-radius:3px;
    opacity: 1;
`;

export const Day=styled(motion.span)`
    text-align: center;
    opacity:.7;
    font-size: 1rem;
    cursor: pointer;
    font-weight:700;
    :hover{
        opacity:1;
    }
    ${props=>props.disabled && disabledDayStyles};
    ${props=>props.selected && selectedStyles}
`;

export const DaysContainerWrapper=styled.div`
    height:220px;
    width: 100%;
    max-width: 300px;
    margin: 20px auto 5px;
    border-bottom: 1px solid rgba(0,0,0,.15);
`;

export const StatusCheck=css`
    ${(props)=>{
        switch(props.status){
            case "disabled":
                return css`
                    box-shadow: unset;
                    pointer-events: none;
                    color: #CFCFCF;
                `
            case "selected":
                return css`
                    color: #FFF;
                    box-shadow: unset;
                    background: #4894FE;
                `
            default:
                return css`
                    cursor: pointer;
                    :hover{
                        filter: brightness(93%);
                    }
                `;
        }
}}`;

export const Time=styled.span`
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.161);
    border-radius: 10px;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    padding: 9px;
    ${StatusCheck}
`;

const TimesContainerGrid=css`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:9px 15px;
`;

export const TimesContainer=styled(motion.div)`
    margin: 15px 0;
    width: 100%;
    & h2{
        opacity:.9;
        letter-spacing: 1px;
        text-align: center;
    }
    ${props=>props.grid && TimesContainerGrid};
    @media screen and (max-width:400px) {
        gap:9px 12px;
        ${Time}{
            padding:9px 0;
            font-size:.925rem;
        }
    }
`

export const Container=styled.div`
    width: 100%;
    max-width: 357px;
    padding: 26px 15px;
    margin: 100px 25px 0px 75px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(225, 225, 225);
    border-radius: 10px;
    position: relative;  
    height:675px;
    @media screen and (max-width:830px){
        height:635px;
        margin:15px auto; 
        ${Time}{
            font-size:.9rem;
            padding: 5px;
        }  
        ${DaysContainer},${DaysRow}{
            gap:15px;
            justify-content:center;
            * {
                font-size: .95rem;
            }
        }
    }
`;

export const HeaderLabel=styled.h3`
    letter-spacing: 1px;
    opacity:.9;
`;