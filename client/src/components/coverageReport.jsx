import React, { useState, useContext } from "react";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Main_logo from "../images/Main_logo_1.png";
import Main_logo_2 from "../images/Main_logo_2.png";
import Network_icon from "../images/Network_icon_App_Coverage.png";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Approved from "../images/Approved.png";
import Slide_7_Tablet from "../images/Slide_7_Tablet.png";
import UserDetailsContext from "../context/context";
import { fetchData } from "../components/fetchData";
import TextFieldComponent from "../components/textfieldComponent";
import { step_1_Labels } from "../context/labels";
import DatePicker from "../components/datepicker";
const marks = [
  {
    value: 0,
    label: "Low",
  },
  {
    value: 33,
    label: "Medium",
  },
  {
    value: 66.66,
    label: "Good",
  },
  {
    value: 100,
    label: "Excellent",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const Coveragereport = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = ["", "", "", "", "", ""];
  const contextValue = useContext(UserDetailsContext);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const errorValidate = () => {
    const setError = step_1_Labels.reduce((errorObject, value) => {
        errorObject[`${value}Error`] = !contextValue.userDetails[value];
        return errorObject;
      }, {});
    contextValue.userDetails?.setUserDetails({
        errorState: {
        ...contextValue.userDetails?.errorState,
        ...setError
        },
    });
    return (Object.values(setError).filter(value => value === true).length) === 0;
  };

  const handleNext = () => {
    if (contextValue.userDetails?.showNextPage !== "Step_6" &&
      errorValidate()
    ) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);

      const stepValue = contextValue.userDetails?.showNextPage.split("_")[1];
      if (stepValue <= 7) {
        contextValue.userDetails?.setUserDetails({
          showNextPage: `Step_${Number(stepValue) + 1}`,
        });
      }
    } else if (contextValue.userDetails?.showNextPage === "Step_6") {
      const apiUrl = process.env.REACT_APP_BACKEND_URL;

      // Your username and password
      const username = process.env.REACT_APP_UID;
      const password = process.env.REACT_APP_PID;
      // Create a base64-encoded string of the username and password
      const base64Credentials = btoa(`${username}:${password}`);

      // Your request payload for a POST request (adjust as needed)
      const requestBody = {
        api_key: process.env.REACT_APP_API_KEY,
        applicant_first_name: "string: REQUIRED",
        applicant_last_name: "string: REQUIRED",
        applicant_birthday: "string: REQUIRED yyyy-MM-dd",
        applicant_ssn: "REQUIRED: 4 digits",
        applicant_tribal_id: "string",
        applicant_alt_contact_name: "string",
        applicant_last_name_two: "string",
        applicant_middle_name: "string",
        applicant_suffix: "string",
        service_street_address_one: "string: REQUIRED",
        service_street_address_two: "string",
        service_zip_code: "string: REQUIRED 5 digits",
        service_city: "string: REQUIRED",
        service_state: "string: REQUIRED 2 characters",
        program_code:
          "string: REQUIRED refer to value property under section ** IMPORTANT **",
        phone_number: "string: REQUIRED 10 digit phone",
        email: "string: REQUIRED",
        is_tablet_approved_and_paid: true,
        best_way_to_communicate: "string: REQUIRED Phone or Email",
        service_same_as_mailing: true,
        payment_type: "string",
        payment_processor: "string: REQUIRED IF payment_type is not blank",
        payment_id: "string: REQUIRED IF payment_type is not blank",
        mailing_street_address_one: "string",
        mailing_street_address_two: "string",
        mailing_city: "string",
        mailing_state: "string: 2 characters",
        mailing_zip_code: "string: 5 digits",
        bqp_birthday: "101223",
        bqp_first_name: "string",
        bqp_last_name: "string",
        bqp_middle_name: "string",
        bqp_ssn: "2234",
        bqp_suffix: "string",
        bqp_tribal_id: "string",
        bqp_alt_name: "string",
        bqp_last_name_two: "string",
      };

      fetchData(apiUrl, requestBody, base64Credentials);
    }
  };

  const handleBack = () => {
    const moveToNextStep = contextValue.userDetails?.showNextPage.split("_")[0];
    //    if (moveToNextStep>= 7) {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const stepValue = contextValue.userDetails?.showNextPage.split("_")[1];
    if (stepValue <= 7) {
      contextValue.userDetails?.setUserDetails({
        showNextPage: `Step_${Number(stepValue) - 1}`,
      });
    }
    //    }
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Container>
      <Grid container className="mt-5" spacing={2}>
        <Grid item xs={12} md={4} lg={3.5} className="!m-auto">
          <div className="flex flex-row justify-evenly">
            <img className="max-w-full" src={Main_logo} />
            <img className="max-w-full" src={Main_logo_2} />
          </div>
          <div className="CoverageDiv mt-4">
            {!contextValue.userDetails?.zipCodeCheck && (
              <div className="section_1 ">
                <Typography
                  variant="h5"
                  color="black"
                  align="center"
                  component="h5"
                >
                  COVERAGE REPORT
                </Typography>
                <Typography
                  variant="p"
                  color="black"
                  className=""
                  align="center"
                  component="p"
                >
                  Enter ZIP Code To Get Started
                </Typography>
                <InputBase
                  className="custom_input mt-3"
                  placeholder="Enter ZIP Code"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <img className="max-w-full m-auto mb-8" src={Network_icon} />
                <Box sx={{ width: 100 + "%" }}>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={33}
                    getAriaValueText={valuetext}
                    step={33}
                    marks={marks}
                    valueLabelDisplay="on"
                  />
                </Box>
                <Button
                  variant="contained"
                  className="w-full !py-2 btn_success"
                  color="success"
                  onClick={(e) => {
                    contextValue.userDetails?.setUserDetails({
                      zipCodeCheck: true,
                    });
                  }}
                >
                  Submit
                </Button>
              </div>
            )}
            {contextValue.userDetails?.zipCodeCheck && (
              <div className="section_2 ">
                {contextValue.userDetails?.showNextPage === "Step_1" && (
                  <div className="Step_1">
                    <Typography
                      variant="h5"
                      className="text_blue"
                      align="center"
                      component="h5"
                    >
                      CONTACT INFORMATION
                    </Typography>
                    <Typography
                      variant="p"
                      color="black"
                      className=""
                      align="center"
                      component="p"
                    >
                      Fill out the contact details below to get started
                    </Typography>
                    <Grid container className="!mt-3" spacing={2}>
                      <Grid item xs={12} md={6} lg={6}>
                        <TextFieldComponent
                          label="First Name"
                          name="firstName"
                        />
                      </Grid>
                      <Grid item xs={12} md={6} lg={6}>
                        <TextFieldComponent
                          label="Last Name"
                          name={"lastName"}
                        />
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <TextFieldComponent label="Email" name={"eMail"} />
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <TextFieldComponent
                          label="Phone Number"
                          name={"phNumber"}
                        />
                      </Grid>
                    </Grid>
                    <div className="mt-3">
                      <Typography
                        variant="h5"
                        className="text_blue"
                        align="center"
                        component="h5"
                      >
                        GET APPROVED
                      </Typography>
                      <Typography
                        variant="p"
                        color="black"
                        className=""
                        align="center"
                        component="p"
                      >
                        Your information is kept confidential and only used for
                        the approval process through our secure platform
                      </Typography>
                      <Grid container className="!mt-2" spacing={2}>
                        <Grid item xs={12} md={12} lg={12}>
                          <TextFieldComponent
                            label="Date of Birth"
                            name={"dob"}
                          />
                          {/* <DatePicker /> */}
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                          <TextFieldComponent
                            label="Last 4 Numbers of SSN"
                            name={"ssn"}
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <div className="mt-4 border !rounded p-3">
                      <FormGroup className="items-start" key="termes_agree">
                        <FormControlLabel
                          key="termes_agree"
                          className="font_xs"
                          control={
                            <Checkbox
                              defaultChecked
                              size="small"
                              checked={
                                contextValue && contextValue.userDetails?.agree
                              }
                              onChange={(e) => {
                                contextValue.userDetails?.setUserDetails({
                                  agree: e.target.checked,
                                });
                              }}
                            />
                          }
                          label="I consent to Excess Telecom contacting me via
                                    Email, SMS, and/or phone call if necessary to
                                    establish eligibility or to complete my application."
                        />
                      </FormGroup>
                    </div>
                  </div>
                )}
                {contextValue.userDetails?.showNextPage === "Step_2" && (
                  <div className="Step_2 ">
                    <Typography
                      variant="h5"
                      className="text_blue"
                      align="center"
                      component="h5"
                    >
                      GOVERNMENT PROGRAM
                    </Typography>
                    <Typography
                      variant="p"
                      color="black"
                      className=""
                      align="center"
                      component="p"
                    >
                      Please select the government program you currently
                      participate in
                    </Typography>
                    <p className="text_blue font_small mt-4">
                      GOVERNMENT PROGRAM*
                    </p>
                    <div className="SelectedListItems">
                      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                        <List component="nav" aria-label="main mailbox folders">
                          <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                          >
                            <ListItemText primary="Medicaid / Medi-Cal" />
                          </ListItemButton>
                          <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                          >
                            <ListItemText primary="SNAP / EBT / Calfresh" />
                          </ListItemButton>
                          <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                          >
                            <ListItemText primary="Federal Pell Grant" />
                          </ListItemButton>
                          <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                          >
                            <ListItemText primary="Veterans Pensions & Survivors Benefit Program" />
                          </ListItemButton>
                          <ListItemButton
                            selected={selectedIndex === 4}
                            onClick={(event) => handleListItemClick(event, 4)}
                          >
                            <ListItemText
                              primary="Special Supplemental Nutrition
Program for Women, Infants & Children (WIC)"
                            />
                          </ListItemButton>
                          <ListItemButton
                            selected={selectedIndex === 5}
                            onClick={(event) => handleListItemClick(event, 5)}
                          >
                            <ListItemText primary="Supplemental Security Income (SSI)" />
                          </ListItemButton>
                          <ListItemButton
                            selected={selectedIndex === 6}
                            onClick={(event) => handleListItemClick(event, 6)}
                          >
                            <ListItemText primary="200% of Federal Poverty Guidelines (Income)" />
                          </ListItemButton>
                          <ListItemButton
                            selected={selectedIndex === 7}
                            onClick={(event) => handleListItemClick(event, 7)}
                          >
                            <ListItemText primary="Federal Public Housing Assistance" />
                          </ListItemButton>
                          <ListItemButton
                            selected={selectedIndex === 8}
                            onClick={(event) => handleListItemClick(event, 8)}
                          >
                            <ListItemText primary="Tribal" />
                          </ListItemButton>
                        </List>
                      </Box>
                    </div>
                  </div>
                )}
                {contextValue.userDetails?.showNextPage === "Step_3" && (
                  <div className="Step_3 ">
                    <Typography
                      variant="h5"
                      className="text_blue"
                      align="center"
                      component="h5"
                    >
                      DISCLOSURE AGREEMENTS
                    </Typography>
                    <Typography
                      variant="p"
                      color="black"
                      className=""
                      align="center"
                      component="p"
                    >
                      Please read and check the disclosure agreements
                    </Typography>
                    <p className="text_blue font_small mt-4">
                      ENROLLMENT DISCLOSURES - 1/11
                    </p>
                    <div className="mt-4 border !rounded-md background_grey green_border p-3">
                      <FormGroup className="items-start" key="termes_agree1">
                        <FormControlLabel
                          className="font_xs"
                          control={<Checkbox defaultChecked size="small" />}
                          label="For my household, I affirm and understand that the 
                                        Affordable Connectivity Program (ACP) is a federal 
                                        government benefit program operated by the (FCC) 
                                        that provides discounts on monthly broadband
                                        Internet access service and certain connected 
                                        devices for eligible consumers."
                        />
                      </FormGroup>
                    </div>
                  </div>
                )}
                {contextValue.userDetails?.showNextPage === "Step_4" && (
                  <div className="Step_4">
                    <Typography
                      variant="h5"
                      className="text_blue"
                      align="center"
                      component="h5"
                    >
                      ENROLLMENT REVIEW
                    </Typography>
                    <Typography
                      variant="p"
                      color="black"
                      className=""
                      align="center"
                      component="p"
                    >
                      Please review all information is correct and press submit
                      to enroll
                    </Typography>
                    <p className="text_blue font_small mt-4">PERSONAL</p>
                    <div className="mt-2 border !rounded-md readonlyvalues background_grey green_border p-3">
                      <div className="flex flex-row mb-1">
                        <div className="formvalues flex w-full">
                          <div className="flex-1 formCaption">Name</div>
                          <div className="flex-1 formValue">Date of Birth</div>
                        </div>
                      </div>
                      <div className="flex flex-row mb-1">
                        <div className="formvalues flex w-full">
                          <div className="flex-1 formCaption">Name</div>
                          <div className="flex-1 formValue">Date of Birth</div>
                        </div>
                      </div>
                      <div className="flex flex-row mb-1">
                        <div className="formvalues flex w-full">
                          <div className="flex-1 formCaption">SSN (last 4)</div>
                          <div className="flex-1 formValue">XXXX</div>
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="formvalues flex w-full">
                          <div className="flex-1 formCaption">Email</div>
                          <div className="flex-1 formValue">
                            patrickwharram@gmail.com
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row mb-1">
                        <div className="formvalues flex w-full">
                          <div className="flex-1 formCaption">Phone Number</div>
                          <div className="flex-1 formValue">Phone Number</div>
                        </div>
                      </div>
                      <div className="flex flex-row mb-1">
                        <div className="formvalues flex w-full">
                          <div className="flex-1 formCaption">
                            Governemnt Program
                          </div>
                          <div className="flex-1 formValue">Snap</div>
                        </div>
                      </div>
                    </div>
                    <p className="text_blue font_small mt-4">
                      ADDRESS & SHIPPING
                    </p>
                    <div className="mt-2 border !rounded-md readonlyvalues background_grey green_border p-3">
                      <div className="flex flex-row mb-1">
                        <div className="formvalues flex w-full">
                          <div className="flex-1 formCaption">Address</div>
                          <div className="flex-1 formValue">XXX</div>
                        </div>
                      </div>
                      <div className="flex flex-row mb-1">
                        <div className="formvalues flex w-full">
                          <div className="flex-1 formCaption">City</div>
                          <div className="flex-1 formValue">XXX</div>
                        </div>
                      </div>
                      <div className="flex flex-row mb-1">
                        <div className="formvalues flex w-full">
                          <div className="flex-1 formCaption">State</div>
                          <div className="flex-1 formValue">XXXX</div>
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="formvalues flex w-full">
                          <div className="flex-1 formCaption">Zip Code</div>
                          <div className="flex-1 formValue">XXX</div>
                        </div>
                      </div>
                      <div className="flex flex-row mb-1">
                        <div className="formvalues flex w-full">
                          <div className="flex-1 formCaption">
                            Shipping Address
                          </div>
                          <div className="flex-1 formValue">XXX</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {contextValue.userDetails?.showNextPage === "Step_5" && (
                  <div className="Step_5">
                    <Typography
                      variant="h5"
                      className="text_blue"
                      align="center"
                      component="h5"
                    >
                      YOUR ADDRESS
                    </Typography>
                    <Typography
                      variant="p"
                      color="black"
                      className=""
                      align="center"
                      component="p"
                    >
                      Please enter your address
                    </Typography>
                    <Grid container className="!mt-3" spacing={2}>
                      <Grid item xs={12} md={12} lg={12}>
                        <TextFieldComponent
                          label="ADDRESS LINE 1"
                          name={"ADDRESSLINE1"}
                        />
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <TextFieldComponent
                          label="ADDRESS LINE 2"
                          name={"ADDRESSLINE2"}
                        />
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <TextFieldComponent label="City" name={"City"} />
                      </Grid>
                      <Grid item xs={12} md={6} lg={6}>
                        <TextFieldComponent label="State" name={"State"} />
                      </Grid>
                      <Grid item xs={12} md={6} lg={6}>
                        <TextFieldComponent label="Zipcode" name={"Zipcode"} />
                      </Grid>
                    </Grid>
                    <div className="mt-4 addressCheckbox">
                      <FormGroup className="items-start" key="termes_agree2">
                        <FormControlLabel
                          className="font_xs"
                          control={<Checkbox defaultChecked size="small" />}
                          label="I have a different shipping address"
                        />
                      </FormGroup>
                    </div>
                  </div>
                )}
                {contextValue.userDetails?.showNextPage === "Step_6" && (
                  <div className="Step6">
                    <Typography
                      variant="h5"
                      className="text_blue"
                      align="center"
                      component="h5"
                    >
                      CONGRATULATIONS
                    </Typography>
                    <Typography
                      variant="p"
                      color="black"
                      className=""
                      align="center"
                      component="p"
                    >
                      Your enrollment application has been approved. You are on
                      your way to getting connected for free!
                    </Typography>
                    <img className="max-w-full m-auto my-8" src={Approved} />

                    <Typography
                      variant="p"
                      color="black"
                      className="my-5"
                      align="center"
                      component="p"
                    >
                      You will receive an email with follow-up information.
                    </Typography>
                  </div>
                )}
                {contextValue.userDetails?.showNextPage === "Step_7" && (
                  <div className="Step_7 ">
                    <Typography
                      variant="h4"
                      className="text_blue"
                      align="center"
                      component="h4"
                    >
                      EXCELLENT!
                    </Typography>
                    <Typography
                      variant="h5"
                      className="text_blue"
                      align="center"
                      component="h5"
                    >
                      YOU QUALIFY FOR A NEW TABLET
                    </Typography>
                    <img
                      className="max-w-full m-auto my-8"
                      src={Slide_7_Tablet}
                    />

                    <Typography
                      variant="p"
                      color="black"
                      className="my-5"
                      align="center"
                      component="p"
                    >
                      A one-time fee of $11 required. Devices may vary.
                    </Typography>
                  </div>
                )}
                <Box sx={{ width: "100%" }}>
                  {activeStep === steps.length ? (
                    <React.Fragment>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                      </Box>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        Step steps {activeStep + 1}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          pt: 2,
                          mb: 2,
                        }}
                      >
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                          variant="contained"
                          className="w-full !py-2 btn_secondary"
                          color="success"
                        >
                          Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />

                        <Button
                          variant="contained"
                          className="w-full !py-2 btn_success"
                          color="success"
                          onClick={(event) => {
                            handleNext();
                          }}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </Box>
                    </React.Fragment>
                  )}
                  <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepOptional(index)) {
                        labelProps.optional = (
                          <Typography variant="caption"></Typography>
                        );
                      }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={label + index} {...stepProps}>
                          <StepLabel {...labelProps}></StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </Box>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Coveragereport;
