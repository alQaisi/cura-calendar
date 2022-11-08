import { DoctorImage, DoctorName } from "../styles";

export default function Profile({futureImage,futureName,futureTitle}){
    return (
        <>
            <DoctorImage src="https://s3-eu-west-1.amazonaws.com/curaapps/thumbnails/profileimages/oougv6t5.z90636237382020001370.jpg" width={165} height={165} alt="doctor pic"/>
            <DoctorName title="باطنة">Dr. Nada Alzahrani</DoctorName>
        </>
    );
}