import { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css'
import logo from '/src/assets/logo.png'
import { toast, Toaster } from 'react-hot-toast';
import { UserService } from "../../services/UserService";
import { UploadService } from "../../services/UploadService";

export const Signup: any = () => {

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault()

    const user = {
      email: username,
      name,
      password: password,
      gender,
      image,
      birthdate,
      country
    };

    const artist = {
      name,
      email: username,
      password: password,
      image,
      genre: genreName,
      description
    }

    const response = artist ?
      await UserService.postUser(user)
      : await UserService.postUser(user)

    console.log('response', response)
    if (response) {
      window.localStorage.setItem('userLogged', JSON.stringify(response.user))
      window.localStorage.setItem('token', JSON.stringify(response.token))
      setTimeout(() => {

        window.location.reload()
      }, 200)
      // toast.success('Successfully signed up!')
    }
  }

  const handleUpload: any = async () => {
    try {
      if (!file) {
        console.error('No file selected');
        return;
      }
      const result = await UploadService.upload(file);
      setImage(result.url)
      alert('File uploaded successfully');
      return result
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };



  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [artist, setArtist] = useState(false);
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [description, setDescription] = useState("");
  const [genreName, setGenreName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  console.log('birthdate', birthdate)
  const validateEmail = (input: string) => {
    if (input.trim() === '') {
      setEmailError('Email is required')
    } else {
      setEmailError('')
    }
  }

  const validateName = (input: string) => {
    if (input.trim() === '') {
      setNameError('Name is required')
    } else {
      setNameError('')
    }
  }

  const validatePassword = (input: string) => {
    if (input.length < 6) {
      setPasswordError('Password must be at least 6 characters')
    } else if (!/[A-Z]/.test(input)) {
      setPasswordError('Password must contain at least one uppercase letter')
    } else if (!/[\W_]/.test(input)) {
      setPasswordError('Password must contain at least one special character')
    } else {
      setPasswordError('')
    }
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleArtistChange = () => {
    setArtist(!artist);
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  }

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  }

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  }

  const handleBirthdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(event.target.value);
  }

  const handleGenreNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenreName(event.target.value);
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleGenderInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleGenderChange(event);
  }

  const handleCountryInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleCountryChange(event);
  }

  const handleBirthdateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleBirthdateChange(event);
  }



  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleNameChange(event)
    validateName(event.target.value)
  }

  const handleUsernameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleUsernameChange(event)
    validateEmail(event.target.value)
  }

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handlePasswordChange(event);
    validatePassword(event.target.value);
  };



  return (
    <div className="signup--container">
      <img className="logo" src={logo} />
      <h2 className="signup--header">Signup to start listening to content</h2>
      <Toaster />
      <form onSubmit={handleSignup} className="signup-form">
        <input
          className="signup-input"
          type="text"
          value={name}
          id="name"
          placeholder="Name"
          onChange={handleNameInputChange}
        />
        <input
          className="signup-input"
          type="email"
          value={username}
          id="email"
          placeholder="Email"
          onChange={handleUsernameInputChange}
        />
        <input
          className="signup-input"
          type="password"
          value={password}
          id="password"
          placeholder="Password"
          onChange={handlePasswordInputChange}
        />
        <label htmlFor="image">Image</label>
        <div>
          <input type="file" onChange={handleFileChange} />
          <span onClick={() => {
            toast.promise(
              new Promise<any>((resolve, reject) => {
                handleUpload()
                  .then(setTimeout(() => resolve({}), 3000))
                  .catch(reject);
              }), {
              loading: 'Adding image...',
              success: 'Image added!',
              error: 'Could not add Image'
            }
            )
          }}>Upload</span>
        </div>
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={handleGenderInputChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="country">Country</label>
        <input type="text" onChange={handleCountryInputChange} />
        <label htmlFor="birthdate">Birthdate</label>
        <input type="date" onChange={handleBirthdateInputChange} />
        <label htmlFor="artist">Artist</label>
        <input type="checkbox" onChange={handleArtistChange} />
        {artist && (
          <>
            <input type="text" onChange={handleDescriptionChange} placeholder='Description' />
            <input type="text" onChange={handleGenreNameChange} placeholder='Genre' />
          </>
        )}


        {passwordError && <div className="error-password">{passwordError}</div>}
        {emailError && <div className="error-email">{emailError}</div>}
        {nameError && <div className="error-name">{nameError}</div>}

        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      <Link to="/login">Already have an account?Login</Link>
    </div>
  )
}
