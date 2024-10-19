import { useState } from 'react'
import bg1 from './assets/bg1.jpg'
import bg3 from './assets/bg3.png'
import logo from './assets/logo.png'
import istoriju_namai_logo from './assets/istoriju_namai.png'
import keistuoliu_teatras_logo from './assets/keistuoliu_teatras.png'
import lb_logo from './assets/lietuvos_bankas.png'
import vda_logo from './assets/vda.png'
function App() {
  return (
    <div className="w-full">
      <div
        className="min-h-[512px] w-full flex justify-center items-center"
        style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="text-center text-white">
          <h1 className="[text-shadow:_3px_3px_0px_rgb(130_126_145_/_100%)] md:text-[130px] sm:text-[80px] text-[46px] font-western mb-4">
            Micius
          </h1>
          <img src={logo} className="w-[80px] md:w-[128px] mx-auto" />
          <h1 className="[text-shadow:_3px_3px_0px_rgb(130_126_145_/_100%)] md:text-[130px] sm:text-[80px] text-[46px] font-western mb-4">
            Teksaso reindžeris
          </h1>
        </div>
      </div>

      <div
        className="min-h-[40vh] w-full flex justify-center items-center flex-col"
        style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgb(23, 18, 40)' }}
      >
        <h1 className="[text-shadow:_3px_3px_0px_rgb(130_126_145_/_100%)] md:text-[86px] sm:text-[52px] text-[40px] font-western mb-4">
          Iki renginio liko:
        </h1>
        <h1 className="[text-shadow:_3px_3px_0px_rgb(130_126_145_/_100%)] md:text-[130px] sm:text-[80px] text-[46px] font-western mb-24">
          00:00:00
        </h1>
        <h1 className="[text-shadow:_3px_3px_0px_rgb(130_126_145_/_100%)] md:text-[86px] sm:text-[52px] text-[40px] font-western mb-4">
          Rėmėjai
        </h1>
        <div class="flex flex-col items-center justify-center w-full relative">
          <div class="flex">
            <a href="https://lnm.lt/" class="w-[200px] md:w-[300px] object-contain card-hover md:m-10 m-5" target="_blank">
              <img src={istoriju_namai_logo} alt="logo" />
            </a>
            <a href="https://vda.lrv.lt/lt/" class="w-[200px] md:w-[300px] object-contain card-hover md:m-10 m-5" target="_blank">
              <img src={vda_logo} alt="logo" />
            </a>
          </div>
          <div class="flex">
            <a href="https://keistuoliai.lt/" class="w-[200px] md:w-[300px] object-contain card-hover md:m-10 m-5" target="_blank">
              <img src={keistuoliu_teatras_logo} alt="logo" />
            </a>
            <a href="https://www.lb.lt/" class="w-[200px] md:w-[300px] object-contain card-hover md:m-10 m-5" target="_blank">
              <img src={lb_logo} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
