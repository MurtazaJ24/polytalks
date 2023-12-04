import { useCallback } from "react";
import { Button } from "@mui/material";



const LandingPage = () => {
  
    

  const onStillDoubtUsClick = useCallback(() => {
    // Please sync "get started 1" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-[30px] text-darkorchid font-asap-condensed">
      <img
        className="absolute top-[664.4px] left-[629.5px] w-[26.5px] h-[122.3px]"
        alt=""
        src="/Vector 1.png"
      />
      <p className="m-0 absolute top-[473px] left-[43px] flex italic text-left items-center w-[585px] h-[245px]">
        Welcome to PolyTalks, your gateway to mastering languages while
        immersing yourself in vibrant, real-world experiences.
      </p>
      <Button
        className="absolute top-[855px] left-[-160px] cursor-pointer bg-darkorchid"
        sx={{ width: 496, color: 'black', textTransform: 'none', fontSize: '23px', fontFamily: 'Asap Condensed', borderBottom: '2px solid transparent', 
        '&:hover': {
          borderBottomColor: 'blue'
        }}}
        color="primary"
        variant="text"
        onClick={onStillDoubtUsClick}
      >
        Still doubt us? Know more ....
      </Button>
      <img
        className="absolute top-[0px] left-[621px] w-[868px] h-[1024px] object-cover"
        alt=""
        src="/image 3.png"
      />
      <div className="absolute top-[0px] left-[765px] w-[850px] h-[120px] overflow-hidden">
        <img
          className="absolute top-[20px] left-[0px] w-[720px] h-[75px] object-cover"
          alt=""
          src="/Rectangle 10.png"
        />
      </div>
      <div className="absolute top-[0px] left-[569px] w-[136px] h-[406px] overflow-hidden">
        <img
          className="absolute top-[296px] left-[0px] w-[136px] h-[98px] object-cover"
          alt=""
          src="/Rectangle 11.png"
        />
      </div>
      <div className="absolute top-[12px] left-[617px] w-[117px] h-[788px] overflow-hidden">
        <img
          className="absolute top-[595px] left-[0px] w-[117px] h-[179px] object-cover"
          alt=""
          src="/Rectangle 12.png"
        />
      </div>
      <div className="absolute top-[70px] left-[594px] w-[156px] h-[843px] overflow-hidden">
        <img
          className="absolute top-[575px] left-[36px] rounded-[50%] w-[135px] h-[232px] object-cover"
          alt=""
          src="/Ellipse 1.png"
        />
      </div>
      <div className="absolute top-[-122px] left-[632px] w-[255px] h-[886px] overflow-hidden">
        <img
          className="absolute top-[635px] left-[0px] w-44 h-[251px]"
          alt=""
          src="/Polygon 1.png"
        />
      </div>
      <div className="absolute top-[0px] left-[1320px] w-[150px] h-[1010px] overflow-hidden">
        <img
          className="absolute bottom-[0px] left-[0px] rounded-[20px] w-[150px] h-[38px] object-cover"
          alt=""
          src="/Rectangle 13.png"
        />
      </div>
      <div className="absolute top-[0px] left-[104px] w-[440px] h-[296px] overflow-hidden text-[100px] font-architects-daughter">
        <h1 className="m-0 absolute top-[161px] left-[0px] text-inherit font-normal font-inherit flex items-center justify-center w-[440px] h-[135px]">
          PolyTalks
        </h1>
      </div>
      <div className="absolute top-[0px] left-[114px] w-[414px] h-[456px] overflow-hidden text-[40px] text-black">
        <p className="m-0 absolute top-[337px] left-[0px] flex items-center justify-center w-[414px] h-[119px]">
          Unlocking Languages, Connecting Worlds
        </p>
      </div>
      <img
        className="absolute top-[312px] left-[146px] w-[350px] h-px object-cover"
        alt=""
        src="/Line 3.png"
      />
      <img
        className="absolute top-[755px] left-[14px] rounded-[50px] w-[620px] h-[54px] object-cover"
        alt=""
        src="/Rectangle 14.png"
      />
      <Button
        className="absolute top-[755px] left-[-44rem] bg-darkorchid "
        sx={{ width: 550, color: 'black', fontFamily: 'Asap Condensed', fontSize: '23px', textTransform: 'none', border: '2px solid black', borderRadius: '30px'}}
        color="primary"
        variant="text"
      >
        Are you ready to go on a journey of linguistic discovery ?
      </Button>
      <img
        className="absolute top-[12px] left-[14px] rounded-[36px] w-[72px] h-[72px] object-cover"
        alt=""
        src="/Logo.png"
      />
    </div>
  );
};

export default LandingPage;
