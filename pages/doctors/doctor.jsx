import styles from "../../styles/doctor.module.css";
import DoctorCard from "../../components/doctor-card";
import BookingCMP from "../../components/booking-component";

function DoctorPage() {
    return (
        <div className={styles.container}>
            <DoctorCard/>
            <BookingCMP/>
        </div>
    );
}

export default DoctorPage;