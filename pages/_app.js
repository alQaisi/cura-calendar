import { ScheduleProvider } from '../context/schedule.context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ScheduleProvider>
      <Component {...pageProps} />
    </ScheduleProvider>
  );
}

export default MyApp
