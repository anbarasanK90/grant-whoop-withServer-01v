import { createContext } from 'react'

const UserDetailsContext = createContext({
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
  errorState: {
    firstNameError: false,
    lastNameError: false,
    eMailError: false,
    phNumberError: false,
    dobError: false,
    ssnError: false,
    agreeError: false
  },
  setUserDetails: userDetails => {},
})

export default UserDetailsContext