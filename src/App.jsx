import bg1 from './assets/bg1.jpg'
import bg3 from './assets/bg3.png'
import logo from './assets/logo.png'
import istoriju_namai_logo from './assets/istoriju_namai.png'
import keistuoliu_teatras_logo from './assets/keistuoliu_teatras.png'
import lb_logo from './assets/lietuvos_bankas.png'
import vda_logo from './assets/vda.png'
import { useState, useEffect } from "react";

function App() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-10-24T19:00:00+03:00');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  const getTime = () => {
    return Object.values(timeLeft).length ? `${formatTime(timeLeft.days)}:${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}` : '00:00:00:00';
  }


  return (
    <div className="w-full h-full">
      <div
        className="min-h-[512px] w-full flex justify-center items-center md:min-h-[940px]"
        style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
      >
        <div className="text-center text-white">
          <h1 className="[text-shadow:_3px_3px_0px_rgb(130_126_145_/_100%)] md:text-[130px] sm:text-[80px] text-[46px] font-western mb-4">
            Micius
          </h1>
          <img src={logo} className="w-[80px] md:w-[128px] mx-auto card-hover" />
          <h1 className="[text-shadow:_3px_3px_0px_rgb(130_126_145_/_100%)] md:text-[130px] sm:text-[80px] text-[46px] font-western mb-4">
            Teksaso reindžeris
          </h1>
        </div>
      </div>

      <div
        className="min-h-[40vh] w-full h-full flex justify-start flex-col items-center"
        style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgb(23, 18, 40)' }}
      >
        <div className="xl:max-w-[1280px] w-full flex justify-start items-center flex-col">
          <h1 className="[text-shadow:_3px_3px_0px_rgb(130_126_145_/_100%)] md:text-[86px] sm:text-[52px] text-[40px] font-western mb-4">
            Iki renginio liko:
          </h1>
          <h1 className="[text-shadow:_3px_3px_0px_rgb(130_126_145_/_100%)] md:text-[130px] sm:text-[80px] text-[46px] font-western mb-24">
            {getTime()}
          </h1>
          <h1 className="[text-shadow:_3px_3px_0px_rgb(130_126_145_/_100%)] md:text-[86px] sm:text-[52px] text-[40px] font-western mb-4">
            Rėmėjai
          </h1>
          <div className="flex flex-col items-center justify-center w-full relative">
            <div className="flex flex-wrap flex-col md:flex-row items-center justify-center">
              <a href="https://lnm.lt/" className="w-[200px] md:w-[300px] object-contain card-hover md:m-10 m-5" target="_blank">
                <img src={istoriju_namai_logo} alt="logo" />
              </a>
              <a href="https://vda.lrv.lt/lt/" className="w-[200px] md:w-[300px] object-contain card-hover md:m-10 m-5" target="_blank">
                <img src={vda_logo} alt="logo" />
              </a>
              <a href="https://keistuoliai.lt/" className="w-[200px] md:w-[300px] object-contain card-hover md:m-10 m-5" target="_blank">
                <img src={keistuoliu_teatras_logo} alt="logo" />
              </a>
              <a href="https://www.lb.lt/" className="w-[200px] md:w-[300px] object-contain card-hover md:m-10 m-5" target="_blank">
                <img src={lb_logo} alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
