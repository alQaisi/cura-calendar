import { DataTitle,DataText } from "../styles";
import { Children } from "react";

export default function Data({title,text}){
    return(
        <>
            <DataTitle>{ title }</DataTitle>
            { Children.toArray(text.map(textItem=><DataText>{ textItem }</DataText>)) }
        </>
    );
}