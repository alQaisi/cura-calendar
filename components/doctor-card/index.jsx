import Image from "next/image";
import Profile from "./profile";
import Review from "./reviews";
import Data from "./data";
import { Container } from "./styles";

const jobs=[
    "استشارية طب باطني - المجمع العسكري بالظهران",
    "المشرفة على التدريب بالباطنية بالمجمع العسكري بالظهران",
    "عضوية نخبة الاطباء العرب وجمعية سرطان الثدي",
    "عضو لجنة المخالفات الطبية الشرعية",
    "رئيسة المعلوماتية بالمجمع العسكري بالظهران"
];

function DoctorCard() {
    return (
        <Container>
            <Profile/>
            <Review/>
            <hr/>
            <Data title="Jobs" text={jobs}/>
            <Data title="Country" text={["السعودية, الخبر"]} />
            <Data title="Languages" text={["العربية والانجليزية"]} />
        </Container>
    );
}

export default DoctorCard;