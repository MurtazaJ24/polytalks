import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-white flex flex-col items-stretch pt-5 pb-12">
      <div className="flex w-full flex-col items-center pl-3.5 pr-10 max-md:max-w-full max-md:pr-5">
        <img
          loading="lazy"
          src="/Logo.png"
          className="aspect-square object-contain object-center w-[72px] overflow-hidden max-w-full self-start"
        />
        <div className="text-black text-center text-4xl whitespace-nowrap border bg-white justify-center items-stretch ml-12 mt-14 pl-10 pr-12 py-9 rounded-[30px] border-solid border-fuchsia-700 self-start max-md:max-w-full max-md:mt-10 max-md:px-5">
          What languages are you proficient with?
        </div>
        <div className="w-full max-w-[1174px] mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col mt-11 max-md:max-w-full max-md:mt-10">
                <div className="text-black text-center text-4xl max-w-[468px] bg-fuchsia-700 bg-opacity-20 self-stretch justify-center items-center px-16 py-6 rounded-3xl max-md:max-w-full max-md:px-5">
                  English
                </div>
                <div className="text-black text-center text-4xl max-w-[468px] bg-fuchsia-700 bg-opacity-20 self-stretch justify-center items-center mt-5 px-16 py-6 rounded-3xl max-md:max-w-full max-md:px-5">
                  Spanish
                </div>
                <div className="text-black text-center text-4xl max-w-[468px] bg-fuchsia-700 bg-opacity-20 self-stretch justify-center items-center mt-5 px-16 py-6 rounded-3xl max-md:max-w-full max-md:px-5">
                  Japanese
                </div>
                <div className="text-black text-center text-4xl max-w-[468px] bg-fuchsia-700 bg-opacity-20 self-stretch justify-center items-center mt-5 px-16 py-6 rounded-3xl max-md:max-w-full max-md:px-5">
                  French
                </div>
                <div className="text-black text-center text-4xl max-w-[468px] bg-fuchsia-700 bg-opacity-20 self-stretch items-center mt-5 pt-5 pb-8 px-16 rounded-3xl max-md:max-w-full max-md:px-5">
                  German
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="/picture1.png"
                className="aspect-[1.16] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 ml-3.5 mr-10 mt-12 pr-14 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10 max-md:pr-5">
        <img
          loading="lazy"
          src="/Arrow 1.png"
          className="aspect-[1.77] object-contain object-center w-[39px] stroke-[3px] stroke-black overflow-hidden shrink-0 max-w-full my-auto"
        />
        <div className="flex-col text-black text-3xl relative bg-fuchsia-200 rounded-full overflow-hidden self-stretch justify-center items-stretch pl-11 pr-11 py-4 max-md:px-5">
          Continue
        </div>
      </div>
    </div>
  );
}


export default MyComponent;