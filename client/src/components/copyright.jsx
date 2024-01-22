import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Copyright = () => {
  return (
    <>
      <Container fixed>
        <Grid container className='' spacing={2}>
          <Grid item xs={12}>
            <Typography variant="p" color="white" className='hidden' align="center" component="p">
              © 2024 Get Your Whoop. All Rights Reserved.
            </Typography>
            <Typography variant="p" color="white" className='font_xs textAlignLast' align="left" component="p">
              WhoopConnect Enrollment Partner is a third-party distributor for WhoopConnect and is responsible for the content and creation of this site. WhoopConnect is a service provider for the government-funded Affordable Connectivity Program
              (ACP). The ACP is a government benefit program operated by the Federal Communication Commission (FCC) that provides discounts on monthly broadband Internet access services and certain connected devices. Subject to a co-payment
              of $11.00USD. ACP service and device discounts cannot be transferred to another household or individual. Eligible households are limited to one monthly service discount and one device discount. Rates and device discounts are available
              for qualified customers only. Visit www.whoopconnect.com for full eligibility requirements, service agreements and program details
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Copyright;