import React from 'react';
import {
  Stepper,
  Step,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

export function TakeAction() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div
      className="md:px-14 flex flex-col gap-3 px-4 py-16 max-w-screen-2xl mx-auto"
      id="team"
    >
      <div className="bg-gray-300 -skew-y-3 rounded-lg">
        <CardHeader
          floated={false}
          variant="gradient"
          color="gray"
          className="grid h-24 m-0 place-items-center bg-gray-400 rounded-lg skew-y-3"
        >
          <div className="w-full px-20 pt-4 pb-8">
            <Stepper
              activeStep={activeStep}
              lineClassName="bg-white/50"
              activeLineClassName="bg-white"
            >
              <Step
                className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-white text-white"
                onClick={() => setActiveStep(1)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">
                    Invest
                  </Typography>
                </div>
              </Step>
              <Step
                className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-white text-white"
                onClick={() => setActiveStep(2)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">
                    Partner
                  </Typography>
                </div>
              </Step>
              <Step
                className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-white text-white"
                onClick={() => setActiveStep(3)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">
                    Join Team
                  </Typography>
                </div>
              </Step>
            </Stepper>
          </div>
        </CardHeader>
      </div>
      <form action="#" className="mt-6">
        <h3 className="my-8 mb-4 mt-8 text-lg font-medium leading-none text-gray-900 dark:text-white">
          Become an Investor{' '}
        </h3>
        <div className="grid gap-4 mb-4 sm:grid-cols-3">
          <div>
            <label
              name="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              required=""
            />
          </div>
          <div>
            <label
              name="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              name="phone number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              phone number
            </label>
            <input
              type="phone number"
              name="phone number"
              id="phone number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
            />
          </div>{' '}
        </div>
        <button
          type="submit"
          className="px-7 py-2 bg-brandSecondary text-white rounded hover:bg-neutralGrey transition-all duration-300 hover:-translate-y-4;"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TakeAction;
