import React, { useState } from 'react'
import merge from 'lodash.merge'
import UserDetailsContext from './context'
  
const UserDetailsProvider = ({ children }) => {
 
  const setUserDetails = ({
    lastName,
    firstName,
    eMail,
    secretQuestion,
    secretAnswer,
    mainPageNave,
    zipCodeCheck,
    showNextPage,
    agree,
    ssn,
    dob,
    phNumber,
    errorState
  }) => {
    updateUserDetails(prevState => {
      const newState = { ...prevState }
      // console.table(newState, errorState)
      return merge(newState, {
        lastName,
        firstName,
        eMail,
        secretQuestion,
        secretAnswer,
        mainPageNave,
        zipCodeCheck,
        showNextPage,
        agree,
        ssn,
        dob,
        phNumber,
        errorState: {
          ...prevState.errorState, // Preserve existing errorState values
          ...errorState, // Update with new errorState values
        },
      })
    })
  }

  const userState = {
    lastName: '',
    firstName: '',
    eMail: '',
    secretQuestion: '',
    secretAnswer: '',
    mainPageNave: false,
    zipCodeCheck: false,
    showNextPage: 'Step_1',
    agree: false,
    ssn: '',
    dob: '',
    phNumber:'',
    setUserDetails,
    errorState: {
      firstNameError: false,
      lastNameError: false,
      eMailError: false,
      phNumberError: false,
      dobError: false,
      ssnError: false,
    },
  }

  const [userDetails, updateUserDetails] = useState(userState)

  return (
    <UserDetailsContext.Provider value={{userDetails}}>
      {children}
    </UserDetailsContext.Provider>
  )
}

export default UserDetailsProvider
