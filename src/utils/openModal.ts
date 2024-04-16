export const openModal = (
  onOpen: React.Dispatch<React.SetStateAction<boolean>>, 
  event,
  onLoginClicked: React.Dispatch<React.SetStateAction<boolean>>,
  onSignUpClicked: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
  onOpen(true);

  const loginBtn = document.querySelector('.loginBtn');
  const signUpBtn = document.querySelector('.signUpBtn');
  if (event && event.target === loginBtn) {
    onLoginClicked(true);
    onSignUpClicked(false)
  }
  else if (event && event.target === signUpBtn ) {
    onLoginClicked(false);
    onSignUpClicked(true)
  }
}