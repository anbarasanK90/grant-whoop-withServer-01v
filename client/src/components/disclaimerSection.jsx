import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import WhoopLogo1 from '../images/03_logo.png';
import Tablet_Img from '../images/02_Tablet.png';
import Logo_02 from '../images/02_logo.png';
import Logo_03 from '../images/03_image.png';
import Logo_04 from '../images/04_logo.png';
import Logo_All from '../images/03_logo_all.png';
import Icon_Phone from '../images/04_icon_1.png';
import Icon_Email from '../images/04_icon_2.png';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

const DisclaimerSection = () => {
  return (
    <section className='disclaimer_section'>
        <Container fixed>
          <Grid container className='' spacing={2}>
            <Grid item xs={12}>
              <div className='flex flex-col md:flex-row justify-around'>
                <img className='mb-4' src={Logo_04} />
                <div className='flex mb-4 items-center'>
                  <img className='max-w-full mr-2' src={Icon_Phone} />
                  <div>
                    <p>Phone us at:</p>
                    <p>(412) 981-2323</p>
                  </div>
                </div>
                <div className='flex mb-4 items-center'>
                  <img className='max-w-full mr-2' src={Icon_Email} />
                  <div>
                    <p>Email us at:</p>
                    <p>info@getyourwhoop.com</p>
                  </div>
                </div>
              </div>

            </Grid>
            <Grid item xs={12} className='md:!mt-8'>
              <Divider variant="middle" />

            </Grid>
            <Grid item xs={12} className='!mt-5'>
              <Typography variant="p" color="black" className='textAlignLast' align="left" component="p">
                WhoopConnect Enrollment Partner is a third-party distributor for WhoopConnect and is responsible for the content and creation of this site. WhoopConnect is a service provider for the
                government-funded Affordable Connectivity Program (ACP). The ACP is a government benefit program operated by the Federal Communication Commission (FCC) that provides discounts on
                monthly broadband Internet access services and certain connected devices. Subject to a co-payment of $11.00USD. ACP service and device discounts cannot be transferred to another household
                or individual. Eligible households are limited to one monthly service discount and one device discount. Rates and device discounts are available for qualified customers only. Visit
                www.whoopconnect.com for full eligibility requirements, service agreements and program details.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
  );
}

export default DisclaimerSection;