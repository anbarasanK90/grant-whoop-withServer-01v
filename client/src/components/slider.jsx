import Slider from "react-slick";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NoContract from '../images/01_Model_txt_1.png';
import NoCredit from '../images/01_Model_txt_2.png';
import NoMonthly from '../images/01_Model_Txt_3.png';
import Slide1Img from '../images/01_Model_1.png';
import Slide2Img from '../images/01_Model_2.png';
import Slide3Img from '../images/01_Model_3.png';
import WhoopLogo from '../images/01_header_logo.png';

import Typography from '@mui/material/Typography';
import ZipCodeCheck from './zipcodecheck';

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        };
  return (
    <>
      <Slider {...settings}>
          <div className='relative'>
            <Container fixed>
              <div className='relative z-10'>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12}>
                    <img className='max-w-full mt-5' src={WhoopLogo} />
                  </Grid>
                  <Grid item xs className='flex !flex-col items-start '>
                    <Typography variant="h2" color="white" className='inline-block border-b-2 border-white font_Gothic !mb-2' align="left" component="h3">
                      GET <span className='text_orange'>FREE</span> INTERNET & A NEW TABLET!
                    </Typography>
                    <Typography variant="h4" color="white" align="left" component="h3">
                      <div className='flex items-evenly free_text flex-col md:flex-row justify-center font_Gothic'>
                        <div className='md:mr-3 mr-0 font_Gothic'><span className='text_orange font_Gothic'>FREE</span> UNLIMITED TALK</div>
                        <div className='md:mr-3 mr-0 font_Gothic'><span className='text_orange font_Gothic'>FREE</span> UNLIMITED TEXT</div>
                        <div className="font_Gothic"><span className='text_orange font_Gothic'>FREE</span> 15GB OF DATA</div>
                      </div>
                    </Typography>
                    <Typography variant="p" className='!mt-5' color="white" align="left" component="p">
                      Sign up for a FREE monthly Data Plan and get a NEW Android™
                    </Typography>
                    <Typography variant="p" className='!mt-3' color="white" align="left" component="p">
                      Tablet thanks to the Affordable Connectivity Program.
                    </Typography>
                    <Typography variant="p" className='!mt-3 !mb-4' color="white" align="left" component="p">
                      No contracts, no credit check, no bills.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12} md={5}>
                    <div className='applyTodayDiv font_Gothic'>
                      <Typography variant="h2" className="font_Gothic" color="white" align="center" component="h3">
                        APPLY TODAY
                      </Typography>
                      <Typography variant="h3" className="font_Gothic" color="white" align="center" component="h3">
                        AND GET A NEW TABLET
                      </Typography>
                      <Typography variant="p" className="font_Gothic" color="white" className='!mt-3' align="center" component="p">
                        Checking the coverage in your area to get started.
                      </Typography>
                      <ZipCodeCheck />
                      <Typography variant="p" color="white" className='!mt-3' align="center" component="p">
                        ALREADY STARTED YOUR ENROLLMENT? CLICK HERE!
                      </Typography>

                    </div>
                    <Typography variant="p" color="white" className='!mt-3 !mb-8' align="left" component="p">
                      WHOOP Tablet available through the Affordable <br></br>
                      Connectivity Program for a One-Time $11.00 Co-Pay
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <img className='max-w-full' src={NoContract} />
                  </Grid>
                </Grid>

              </div>
              <img className='carousal_right_img' src={Slide1Img} />
            </Container>

          </div>
          <div className='relative'>
            <Container fixed>
              <div className='relative z-10'>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12}>
                    <img className='max-w-full mt-5' src={WhoopLogo} />
                  </Grid>
                  <Grid item xs className='flex !flex-col items-start '>
                    <Typography variant="h2" color="white" className='inline-block font_Gothic border-b-2 border-white !mb-2' align="left" component="h3">
                      GET <span className='text_orange font_Gothic'>FREE</span> INTERNET & A NEW TABLET!
                    </Typography>
                    <Typography variant="h4" color="white" align="left" component="h3">
                      <div className='flex items-evenly free_text flex-col md:flex-row font_Gothic'>
                        <div className='md:mr-3 mr-0 font_Gothic'><span className='text_orange'>FREE</span> UNLIMITED TALK</div>
                        <div className='md:mr-3 mr-0 font_Gothic'><span className='text_orange'>FREE</span> UNLIMITED TEXT</div>
                        <div className="font_Gothic"><span className='text_orange'>FREE</span> 15GB OF DATA</div>
                      </div>

                    </Typography>
                    <Typography variant="p" className='!mt-5' color="white" align="left" component="p">
                      Sign up for a FREE monthly Data Plan and get a NEW Android™
                    </Typography>
                    <Typography variant="p" className='!mt-3' color="white" align="left" component="p">
                      Tablet thanks to the Affordable Connectivity Program.
                    </Typography>
                    <Typography variant="p" className='!mt-3 !mb-4' color="white" align="left" component="p">
                      No contracts, no credit check, no bills.
                    </Typography>


                  </Grid>

                </Grid>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12} md={5}>
                    <div className='applyTodayDiv font_Gothic'>
                      <Typography variant="h2" className="font_Gothic" color="white" align="center" component="h3">
                        APPLY TODAY
                      </Typography>
                      <Typography variant="h3" className="font_Gothic" color="white" align="center" component="h3">
                        AND GET A NEW TABLET
                      </Typography>
                      <Typography variant="p" className="font_Gothic" color="white" className='!mt-3' align="center" component="p">
                        Checking the coverage in your area to get started.
                      </Typography>
                      
                      <ZipCodeCheck />
                      <Typography variant="p" color="white" className='!mt-3' align="center" component="p">
                        ALREADY STARTED YOUR ENROLLMENT? CLICK HERE!
                      </Typography>

                    </div>
                    <Typography variant="p" color="white" className='!mt-3 !mb-8' align="left" component="p">
                      WHOOP Tablet available through the Affordable <br></br>
                      Connectivity Program for a One-Time $11.00 Co-Pay
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <img className='max-w-full' src={NoCredit} />
                  </Grid>
                </Grid>

              </div>
              <img className='carousal_right_img' src={Slide2Img} />
            </Container>

          </div>
          <div className='relative'>
            <Container fixed>
              <div className='relative z-10'>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12}>
                    <img className='max-w-full mt-5' src={WhoopLogo} />
                  </Grid>
                  <Grid item xs className='flex !flex-col items-start '>
                    <Typography variant="h2" color="white" className='inline-block font_Gothic border-b-2 border-white !mb-2' align="left" component="h3">
                      GET <span className='text_orange'>FREE</span> INTERNET & A NEW TABLET!
                    </Typography>
                    <Typography variant="h4" color="white" align="left" component="h3">
                      <div className='flex items-evenly free_text flex-col md:flex-row font_Gothic'>
                        <div className='md:mr-3 mr-0 font_Gothic'><span className='text_orange '>FREE</span> UNLIMITED TALK</div>
                        <div className='md:mr-3 mr-0 font_Gothic'><span className='text_orange'>FREE</span> UNLIMITED TEXT</div>
                        <div className="font_Gothic"><span className='text_orange'>FREE</span> 15GB OF DATA</div>
                      </div>
                    </Typography>
                    <Typography variant="p" className='!mt-5' color="white" align="left" component="p">
                      Sign up for a FREE monthly Data Plan and get a NEW Android™
                    </Typography>
                    <Typography variant="p" className='!mt-3' color="white" align="left" component="p">
                      Tablet thanks to the Affordable Connectivity Program.
                    </Typography>
                    <Typography variant="p" className='!mt-3 !mb-4' color="white" align="left" component="p">
                      No contracts, no credit check, no bills.
                    </Typography>
                  </Grid>

                </Grid>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12} md={5}>
                    <div className='applyTodayDiv font_Gothic'>
                      <Typography variant="h2" className="font_Gothic" color="white" align="center" component="h3">
                        APPLY TODAY
                      </Typography>
                      <Typography variant="h3" className="font_Gothic" color="white" align="center" component="h3">
                        AND GET A NEW TABLET
                      </Typography>
                      <Typography variant="p" className="font_Gothic" color="white" className='!mt-3' align="center" component="p">
                        Checking the coverage in your area to get started.
                      </Typography>
                      <ZipCodeCheck />
                      <Typography variant="p" color="white" className='!mt-3' align="center" component="p">
                        ALREADY STARTED YOUR ENROLLMENT? CLICK HERE!
                      </Typography>

                    </div>
                    <Typography variant="p" color="white" className='!mt-3 !mb-8' align="left" component="p">
                      WHOOP Tablet available through the Affordable <br></br>
                      Connectivity Program for a One-Time $11.00 Co-Pay
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <img className='max-w-full' src={NoMonthly} />
                  </Grid>
                </Grid>

              </div>
              <img className='carousal_right_img' src={Slide3Img} />
            </Container>

          </div>
        </Slider>
    </>
  );
};

export default SliderComponent;