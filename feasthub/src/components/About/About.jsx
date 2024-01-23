import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
  <>
    <div className="AboutPage w-[1440px] h-[1930px] relative bg-white">
    <div className="Icon w-[193px] h-[57px] left-[12px] top-[17px] absolute">
    </div>
    <div className="IconamoonProfileLight w-[37px] h-[37px] p-[6.17px] left-[1375px] top-[27px] absolute justify-center items-center inline-flex">
      <div className="Group w-[24.67px] h-[24.67px] relative">
      </div>
    </div>
    <div className="MaterialSymbolsLightShoppingCartOutline w-[37px] h-[37px] left-[1316px] top-[27px] absolute" />
  </div>
  <div className="AboutUs w-[186px] h-[72px] left-[627px] top-[165px] absolute text-center text-stone-950 text-4xl font-black font-['Merriweather']">About Us</div>
  <div className="Reviews w-[186px] h-[72px] left-[627px] top-[837px] absolute text-center text-black text-4xl font-black font-['Merriweather']">Reviews</div>
  <div className="Reviews w-[226px] h-[72px] left-[627px] top-[1397px] absolute text-center text-black text-4xl font-black font-['Merriweather']">Contact Us</div>
  <div className="Rectangle5 w-[1439px] h-[509px] left-0 top-[244px] absolute bg-stone-100" />
  <div className="ReviewContent w-[1414px] h-[408px] left-[13px] top-[913px] absolute">
    <div className="Rectangle6 w-[450px] h-[408px] left-0 top-0 absolute bg-zinc-100" />
    <div className="Rectangle7 w-[450px] h-[408px] left-[482px] top-0 absolute bg-zinc-100" />
    <div className="Rectangle8 w-[450px] h-[408px] left-[964px] top-0 absolute bg-zinc-100" />
    <div className="Review1 w-[265px] h-16 left-[88px] top-[140px] absolute text-center text-black text-4xl font-normal font-['Yrsa']">★★★★★ Amazing Variety and Convenience!</div>
    <div className="Review2 w-[265px] h-16 left-[575px] top-[140px] absolute text-center text-black text-4xl font-normal font-['Yrsa']">★★★★★ <br />Best Blessing for Busy Lives!</div>
    <div className="Review3 w-[265px] h-16 left-[1061px] top-[140px] absolute text-center text-black text-4xl font-normal font-['Yrsa']">★★★★★ Authentic Flavors, Every Time!</div>
  </div>
  <div className="ContactContent w-[1414px] h-[394px] left-[13px] top-[1474px] absolute">
    <div className="Rectangle9 w-[1414px] h-[394px] left-0 top-0 absolute bg-zinc-100" />
    <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSedEuDuiHendreritEfficiturNequeInTempusElit w-[1058px] h-[127px] left-[178px] top-[134px] absolute text-center text-black text-2xl font-light font-['Merriweather']">Email: support@yourcompany.com <br />Phone: +91-XXXXXXXXXX (General inquiries) <br />Business Hours: Monday to Friday: 9:00 AM - 6:00 PM IST <br />Visit Us: FeastHub,Kotri Kalan, Ashta, Near, Indore Road, Bhopal, Madhya Pradesh 466114</div>
  </div>
  <div className="AboutUsContent w-[1072px] h-[267px] left-[184px] top-[367px] absolute">
    <img className="Exclusive1 w-[183px] h-[173.02px] left-[447px] top-0 absolute" src="src/assets/About2.png" />
    <img className="Salad11 w-[183px] h-[162px] left-[25px] top-0 absolute" src="src/assets/About1.png" alt='About1.png' />
    <div className="HomeMadeGoodness w-56 h-[61px] left-0 top-[193px] absolute text-center text-black text-2xl font-light font-['Merriweather']">Home made Goodness</div>
    <div className="ChooseFromTheBestTiffinServiceProviders w-[293px] h-[87px] left-[392px] top-[180px] absolute text-center text-black text-2xl font-light font-['Merriweather']">Choose from the best tiffin service providers</div>
    <img className="RepairingService1 w-[183px] h-[162px] left-[869px] top-0 absolute" src="src/assets/About3.png" />
    <div className="CustomizableMealPlans w-[191px] h-[50px] left-[881px] top-[193px] absolute text-center text-black text-2xl font-light font-['Merriweather']">Customizable meal plans</div>
  </div>
  </>
  );
};

export default AboutUsPage;
