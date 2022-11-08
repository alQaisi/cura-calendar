import styled from "styled-components";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export const DoctorImage=styled(Image)`
    border-radius:50%;
`;
export const DoctorName=styled.h1`
    font-size: 1.5rem;
    &::after{
        display: block;
        content: '${({title}) => title}';
        margin-top:-5px;
        opacity:.85;
    }
`;

export const Star=styled(AiFillStar)`
    color: #f0cc03;
    font-size:1.4rem;
    margin: 0 3px;
`;

export const ReviewContainer=styled.div`
    max-width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 15px 0;
    padding: 5px;
    & div{
        padding: 0;
    }
    & + hr{
        opacity:.25;
    }
`;
export const ReviewText=styled.span`
    font-size: 1rem;
    opacity:.75;
    position: relative;
    top: -3px;
`;

export const DataTitle=styled.h3`
    margin-block-end: 0;
`;
export const DataText=styled.h4`
    opacity: .85;
    margin-block-start: 5px;
    line-height:1.65rem;
    margin-bottom: 25px;
`;

export const Container=styled.div`
    width:100%;
    max-width: 350px;
    padding: 15px;
`;