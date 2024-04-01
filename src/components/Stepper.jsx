/* eslint-disable react/prop-types */
import React from 'react';
import { Stepper, Step, Typography } from '@material-tailwind/react';
import {
  BriefcaseIcon,
  ScaleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export function StepperFun({ activeStep, setActiveStep }) {
  return (
    <div className="w-full md:px-24 py-4 pb-12">
      <Stepper activeStep={activeStep}>
        <Step onClick={() => setActiveStep(0)} className="cursor-pointer">
          <BriefcaseIcon className="h-5 w-5 mx-auto my-auto" />
          <div className="absolute -bottom-[3.5rem] text-center">
            <Typography variant="h6" color="gray">
              Invest
            </Typography>
            {/* <Typography
              className={`font-normal ${activeStep === 0 ? 'flex' : 'hidden'}`}
              color="gray"
            >
              Invest in the wireless electricity.
            </Typography> */}
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)} className="cursor-pointer">
          <ScaleIcon className="h-5 w-5 mx-auto my-auto" />
          <div className="absolute -bottom-[3.5rem] text-center">
            <Typography variant="h6" color="gray">
              Partner
            </Typography>
            {/* <Typography
              className={`font-normal ${activeStep === 1 ? 'flex' : 'hidden'}`}
              color="gray"
            >
              Partner with us.
            </Typography> */}
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)} className="cursor-pointer">
          <UserGroupIcon className="h-5 w-5 mx-auto my-auto" />
          <div className="absolute -bottom-[3.5rem] text-center">
            <Typography variant="h6" color="gray">
              Join Team
            </Typography>
            {/* <Typography
              className={`font-normal ${activeStep === 2 ? 'flex' : 'hidden'}`}
              color="gray"
            >
              Join Our Team.
            </Typography> */}
          </div>
        </Step>
      </Stepper>
    </div>
  );
}
