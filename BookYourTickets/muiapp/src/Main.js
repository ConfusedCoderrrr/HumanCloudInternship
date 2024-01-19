import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ReactComponent as Icon } from './ticket.svg';
import { Navbar, Container, Button, Form } from 'react-bootstrap';
import { FaUser, FaPlus } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { BsGeoAltFill } from 'react-icons/bs';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';



function Main() {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  }

  const handleColseClick=()=>{
     setIsVisible(!isVisible);
  }
  return (
    <div className="container-fluid dfdf">
      <nav>
        <div className="row" style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(0px)",
        }}>
          <div className="col-lg col-sm col-md py-3 text-start">

            <div className="row align-items-center">
              &nbsp;
              &nbsp;
              <div className="Icon col-2 d-flex align-items-end">
                <Icon className="Icon" />
              </div>
              <div style={{display: isVisible ? 'none' : 'block' ,}}className="mainHeading col-4 text-white pt-2">BookYourTicket</div>
              <div className="menu_div col-4 col-sm-4 col-md-4 mt-1 mr-4 d-flex justify-content-end align-items-center text-end">
                <Button
                  variant="light"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '5px',
                    padding: '6px 24px',
                  }}
                  onClick={handleToggle}
                >
                  <MenuIcon />
                </Button>
                &nbsp;
                &nbsp;
              </div>

            </div>

          </div>

          <div className='searchDiv col-5 d-flex'>
            <div className=" text-start  py-3">
              <div className="input-group me-2" style={{ border: 'none', width: '500px', height: '15px' }}>
                <span className="input-group-text" style={{ backgroundColor: '#FFFFFF', fontSize: '1 rem' }}>
                  <BiSearch />
                </span>
                <Form.Control type="text" placeholder="Search text" style={{ border: 'none', fontSize: '1 rem' }} />
              </div>
            </div>
            <div className="text-center  py-3">
              <div className="input-group" style={{ width: '150px' }}>
                <span className="input-group-text" style={{ border: 'none', backgroundColor: 'transparent', color: '#FFFFFF', fontSize: '1 rem' }}>
                  <BsGeoAltFill style={{ color: '#FFFFFF' }} />
                </span>
                <Form.Select
                  style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    fontSize: '1.5 rem',
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 5px top 50%, 0 0',
                    paddingRight: '20px', // Adjust the padding to fit the arrow icon
                  }}
                  defaultValue="Pune"
                >
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  {/* Add more options as needed */}
                </Form.Select>
              </div>
            </div>
          </div>
          <div className='create_btn col-4 d-flex justify-content-end'>
            <div className="button_div text-end  mx-3 py-3 text-end">
              <Button
                variant="light"
                className='text-secondary'
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '6px 24px',
                  marginLeft: '22px', // Reduced from 10px
                }}
              >
                <FaPlus />
                Create Event
              </Button>
            </div>
            <div className="button_div text-end mx-3 py-3 text-end">
              <Button
                variant="light"
                className='btn1'
                style={{
                  backgroundImage: 'linear-gradient(to right, #FFD1DC, #FF69B4)',
                  borderRadius: '5px',
                  color: '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '6px 44px',
                  fontSize: '1rem',
                  marginLeft: '0px', // Reduced from 10px

                }}
              >
                <span>Login</span>
                <FaUser style={{ marginLeft: '10px' }} />
              </Button>




            </div>


          </div>

        </div>
      </nav>
      <div style={{ display: isVisible ? 'flex' : 'none' , transition: 'opacity 2s ease-in-out',
        opacity: isVisible ? 1 : 0,}} className="sidebar h-100">
        
        
          <div className='text-end '>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
            <IconButton aria-label="close" style={{ color: 'white', marginRight: '10px' }} onClick={handleColseClick} >
              <CloseIcon />
            </IconButton>
          </div>
        
        <div>
          <div className="headingDiv"><Icon className="mb-2"></Icon>&nbsp; &nbsp;<b className='text-white bold'>BookYourTicket</b></div>
        </div>
        <div className="pt-5" style={{ display: 'flex', alignItems: 'center', borderRadius: '8px' }}>
          <TextField
            variant="outlined"
            placeholder="Search text"
            style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.093)', borderRadius: '8px', padding: '4px', backdropFilter: 'blur(0px)' }}
            InputProps={{
              style: { color: 'white' },
            }}
          />
          <IconButton aria-label="search" style={{ color: 'white' }}>
            <SearchIcon />
          </IconButton>
        </div>
        <div>
          <span className="input-group-text mt-3" style={{ border: 'none', backgroundColor: 'transparent', color: '#FFFFFF', fontSize: '1 rem' }}>
            <BsGeoAltFill style={{ color: '#FFFFFF' }} />
            &nbsp;
            &nbsp;
            <Form.Select
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '1.5 rem',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 5px top 50%, 0 0',
                paddingRight: '20px', // Adjust the padding to fit the arrow icon
              }}
              defaultValue="Pune"
            >
              <option className='select' value="Pune">Pune</option>
              <option className='select' value="Mumbai">Mumbai</option>
              <option className='select' value="Delhi">Delhi</option>
              {/* Add more options as needed */}
            </Form.Select>
          </span>
        </div>
        <div className='mt-auto mb-3'>
          <div>
            <Button
              variant="light"
              className='text-secondary mb-3'
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                padding: '6px 24px',
                marginLeft: '0px', // Reduced from 10px
              }}
            >
              <FaPlus />
              Create Event
            </Button>

            <Button
              variant="light"
              className='btn1'
              style={{
                backgroundImage: 'linear-gradient(to right, #FFD1DC, #FF69B4)',
                borderRadius: '5px',
                color: '#FFFFFF',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '6px 44px',
                fontSize: '1rem',
                marginLeft: '0px', // Reduced from 10px
              }}
            >
              <span>Login</span>
              <FaUser style={{ marginLeft: '10px' }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
