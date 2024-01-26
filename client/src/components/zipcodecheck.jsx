import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import UserDetailsContext from '../context/context'

const ZipCodeCheck = () => {
    const contextValue = useContext(UserDetailsContext);
    const [zipCode, setZipCode] = useState('')

  return (
    <>
      <div className="flex md:flex-row flex-col mt-4">
        <div className="flex-1 md:me-3 me-0 mb-2">
          <InputBase
            className="custom_input"
            placeholder="Enter ZIP Code"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={(e) => {setZipCode(e.target.value)}}
          />
        </div>
        <div className="flex-1 mb-2">
          <Button
            variant="contained"
            className="w-full !py-2 btn_success"
            color="success"
            onClick={(e) => {
              if(zipCode !== '') {
                  contextValue.userDetails?.setUserDetails({mainPageNave: true})
                }
              }}
          >
            Check Coverage
          </Button>
        </div>
      </div>
    </>
  );
};

export default ZipCodeCheck;
