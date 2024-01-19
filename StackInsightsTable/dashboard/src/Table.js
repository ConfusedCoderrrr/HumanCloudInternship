import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@material-ui/core/Checkbox';

import './App.css';
function Table() {
  return (
    <div className='container-fluid'>
    <div className='row' style={{ justifyContent: 'flex-end', margin: 0 }}>
      <Button
        variant="filled"
        size="large"
        style={{
          backgroundColor: '#0E0032',
          color: 'white',
          marginRight: '15px',
          height: '39px',
          width: '39px',
          padding: '0',
        }}
        onClick={() => {
          console.log('Reload clicked');
        }}
        sx={{
          borderColor: '#9E9E9E',
          marginTop: '35px',
          minWidth: '45px',
        }}
      >
        <AddIcon />
      </Button>
      <Button
        variant="outlined"
        size="large"
        style={{
          backgroundColor: 'transparent',
          color: 'gray',
          marginRight: '28px',
          height: '39px',
          width: '39px',
          padding: '0',
        }}
        onClick={() => {
          console.log('Reload clicked');
        }}
        sx={{
          borderColor: '#9E9E9E',
          marginTop: '35px',
          minWidth: '45px',
        }}
      >
        <RefreshIcon />
      </Button>
      <TextField
        size='small'
        type="text"
        className="inputbox"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <SearchIcon className="pr-3" style={{ color: 'gray' }} />
          ),
        }}
        sx={{
          width: '319px',
          height: '32px',
          borderColor: '#9E9E9E',
          marginTop: '35px'
        }}
      />
    </div>
    <div className="container-fulid" style={{ borderStyle: 'solid', borderWidth: '1px', borderColor: '#9E9E9E', color: '#877775', marginTop: '30px' }}>
      <div className="row" style={{ paddingTop: '36px', paddingBottom: '34px' }}>
        <div className="col-1" style={{ justifyContent: 'center' }}>
          <Checkbox
          color="default"
            sx={{
              marginBottom:'10px',
            }}
           
          />
        </div>
        <div className="col-2">
          Rule name
        </div>
        <div className="col-2">
          Expression
        </div>
        <div className="col-2">
          Period
        </div>
        <div className="col-3">
          Silence Period
        </div>
        <div className="col-3">
          Message
        </div>
        <div className="col-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Operation
        </div>
      </div>
      <div className="row" style={{ height: '63px', display: 'flex', alignItems: 'center', borderTop: '1px solid', borderWidth: '1px', borderColor: '#9E9E9E' }}>
        <div className="col-1" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox
          color="default"
            sx={{
              marginBottom:'10px',
            }}
           
          />
        </div>
        <div className="col-2 secondCol">
          Rule name
        </div>
        <div className="col-2 ">

        </div>
        <div className="col-2">

        </div>
        <div className="col-3">

        </div>
        <div className="col-3">

        </div>
        <div className="col-2" style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'center' }}>
          <IconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.375 9C13.1706 9 13.9337 9.31607 14.4963 9.87868C15.0589 10.4413 15.375 11.2044 15.375 12C15.375 12.7956 15.0589 13.5587 14.4963 14.1213C13.9337 14.6839 13.1706 15 12.375 15C11.5794 15 10.8163 14.6839 10.2537 14.1213C9.69107 13.5587 9.375 12.7956 9.375 12C9.375 11.2044 9.69107 10.4413 10.2537 9.87868C10.8163 9.31607 11.5794 9 12.375 9ZM12.375 4.5C17.375 4.5 21.645 7.61 23.375 12C21.645 16.39 17.375 19.5 12.375 19.5C7.375 19.5 3.105 16.39 1.375 12C3.105 7.61 7.375 4.5 12.375 4.5ZM3.555 12C4.36325 13.6503 5.61831 15.0407 7.17748 16.0133C8.73665 16.9858 10.5374 17.5013 12.375 17.5013C14.2126 17.5013 16.0133 16.9858 17.5725 16.0133C19.1317 15.0407 20.3867 13.6503 21.195 12C20.3867 10.3497 19.1317 8.95925 17.5725 7.98675C16.0133 7.01424 14.2126 6.49868 12.375 6.49868C10.5374 6.49868 8.73665 7.01424 7.17748 7.98675C5.61831 8.95925 4.36325 10.3497 3.555 12Z" fill="#7209B7" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M11.375 4H4.375C3.84457 4 3.33586 4.21071 2.96079 4.58579C2.58571 4.96086 2.375 5.46957 2.375 6V20C2.375 20.5304 2.58571 21.0391 2.96079 21.4142C3.33586 21.7893 3.84457 22 4.375 22H18.375C18.9054 22 19.4141 21.7893 19.7892 21.4142C20.1643 21.0391 20.375 20.5304 20.375 20V13" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.875 2.49998C19.2728 2.10216 19.8124 1.87866 20.375 1.87866C20.9376 1.87866 21.4772 2.10216 21.875 2.49998C22.2728 2.89781 22.4963 3.43737 22.4963 3.99998C22.4963 4.56259 22.2728 5.10216 21.875 5.49998L12.375 15L8.375 16L9.375 12L18.875 2.49998Z" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.375 6H5.375H21.375" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.375 6V4C8.375 3.46957 8.58571 2.96086 8.96079 2.58579C9.33586 2.21071 9.84457 2 10.375 2H14.375C14.9054 2 15.4141 2.21071 15.7892 2.58579C16.1643 2.96086 16.375 3.46957 16.375 4V6M19.375 6V20C19.375 20.5304 19.1643 21.0391 18.7892 21.4142C18.4141 21.7893 17.9054 22 17.375 22H7.375C6.84457 22 6.33586 21.7893 5.96079 21.4142C5.58571 21.0391 5.375 20.5304 5.375 20V6H19.375Z" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            </svg>
          </IconButton>
        </div>
      </div>
      <div className="row" style={{ height: '63px', display: 'flex', alignItems: 'center', borderTop: '1px solid', borderWidth: '1px', borderColor: '#9E9E9E' }}>
        <div className="col-1" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox
          color="default"
            sx={{
              marginBottom:'10px',
            }}
           
          />
        </div>
        <div className="col-2 secondCol">
          Rule name
        </div>
        <div className="col-2 ">

        </div>
        <div className="col-2">

        </div>
        <div className="col-3">

        </div>
        <div className="col-3">

        </div>
        <div className="col-2" style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'center' }}>
          <IconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.375 9C13.1706 9 13.9337 9.31607 14.4963 9.87868C15.0589 10.4413 15.375 11.2044 15.375 12C15.375 12.7956 15.0589 13.5587 14.4963 14.1213C13.9337 14.6839 13.1706 15 12.375 15C11.5794 15 10.8163 14.6839 10.2537 14.1213C9.69107 13.5587 9.375 12.7956 9.375 12C9.375 11.2044 9.69107 10.4413 10.2537 9.87868C10.8163 9.31607 11.5794 9 12.375 9ZM12.375 4.5C17.375 4.5 21.645 7.61 23.375 12C21.645 16.39 17.375 19.5 12.375 19.5C7.375 19.5 3.105 16.39 1.375 12C3.105 7.61 7.375 4.5 12.375 4.5ZM3.555 12C4.36325 13.6503 5.61831 15.0407 7.17748 16.0133C8.73665 16.9858 10.5374 17.5013 12.375 17.5013C14.2126 17.5013 16.0133 16.9858 17.5725 16.0133C19.1317 15.0407 20.3867 13.6503 21.195 12C20.3867 10.3497 19.1317 8.95925 17.5725 7.98675C16.0133 7.01424 14.2126 6.49868 12.375 6.49868C10.5374 6.49868 8.73665 7.01424 7.17748 7.98675C5.61831 8.95925 4.36325 10.3497 3.555 12Z" fill="#7209B7" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M11.375 4H4.375C3.84457 4 3.33586 4.21071 2.96079 4.58579C2.58571 4.96086 2.375 5.46957 2.375 6V20C2.375 20.5304 2.58571 21.0391 2.96079 21.4142C3.33586 21.7893 3.84457 22 4.375 22H18.375C18.9054 22 19.4141 21.7893 19.7892 21.4142C20.1643 21.0391 20.375 20.5304 20.375 20V13" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.875 2.49998C19.2728 2.10216 19.8124 1.87866 20.375 1.87866C20.9376 1.87866 21.4772 2.10216 21.875 2.49998C22.2728 2.89781 22.4963 3.43737 22.4963 3.99998C22.4963 4.56259 22.2728 5.10216 21.875 5.49998L12.375 15L8.375 16L9.375 12L18.875 2.49998Z" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.375 6H5.375H21.375" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.375 6V4C8.375 3.46957 8.58571 2.96086 8.96079 2.58579C9.33586 2.21071 9.84457 2 10.375 2H14.375C14.9054 2 15.4141 2.21071 15.7892 2.58579C16.1643 2.96086 16.375 3.46957 16.375 4V6M19.375 6V20C19.375 20.5304 19.1643 21.0391 18.7892 21.4142C18.4141 21.7893 17.9054 22 17.375 22H7.375C6.84457 22 6.33586 21.7893 5.96079 21.4142C5.58571 21.0391 5.375 20.5304 5.375 20V6H19.375Z" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            </svg>
          </IconButton>
        </div>
      </div>
      <div className="row" style={{ height: '63px', display: 'flex', alignItems: 'center', borderTop: '1px solid', borderWidth: '1px', borderColor: '#9E9E9E' }}>
        <div className="col-1" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox
          color="default"
            sx={{
              marginBottom:'10px',
            }}
           
          />
        </div>
        <div className="col-2 secondCol">
          Rule name
        </div>
        <div className="col-2 ">

        </div>
        <div className="col-2">

        </div>
        <div className="col-3">

        </div>
        <div className="col-3">

        </div>
        <div className="col-2" style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'center' }}>
          <IconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.375 9C13.1706 9 13.9337 9.31607 14.4963 9.87868C15.0589 10.4413 15.375 11.2044 15.375 12C15.375 12.7956 15.0589 13.5587 14.4963 14.1213C13.9337 14.6839 13.1706 15 12.375 15C11.5794 15 10.8163 14.6839 10.2537 14.1213C9.69107 13.5587 9.375 12.7956 9.375 12C9.375 11.2044 9.69107 10.4413 10.2537 9.87868C10.8163 9.31607 11.5794 9 12.375 9ZM12.375 4.5C17.375 4.5 21.645 7.61 23.375 12C21.645 16.39 17.375 19.5 12.375 19.5C7.375 19.5 3.105 16.39 1.375 12C3.105 7.61 7.375 4.5 12.375 4.5ZM3.555 12C4.36325 13.6503 5.61831 15.0407 7.17748 16.0133C8.73665 16.9858 10.5374 17.5013 12.375 17.5013C14.2126 17.5013 16.0133 16.9858 17.5725 16.0133C19.1317 15.0407 20.3867 13.6503 21.195 12C20.3867 10.3497 19.1317 8.95925 17.5725 7.98675C16.0133 7.01424 14.2126 6.49868 12.375 6.49868C10.5374 6.49868 8.73665 7.01424 7.17748 7.98675C5.61831 8.95925 4.36325 10.3497 3.555 12Z" fill="#7209B7" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M11.375 4H4.375C3.84457 4 3.33586 4.21071 2.96079 4.58579C2.58571 4.96086 2.375 5.46957 2.375 6V20C2.375 20.5304 2.58571 21.0391 2.96079 21.4142C3.33586 21.7893 3.84457 22 4.375 22H18.375C18.9054 22 19.4141 21.7893 19.7892 21.4142C20.1643 21.0391 20.375 20.5304 20.375 20V13" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.875 2.49998C19.2728 2.10216 19.8124 1.87866 20.375 1.87866C20.9376 1.87866 21.4772 2.10216 21.875 2.49998C22.2728 2.89781 22.4963 3.43737 22.4963 3.99998C22.4963 4.56259 22.2728 5.10216 21.875 5.49998L12.375 15L8.375 16L9.375 12L18.875 2.49998Z" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.375 6H5.375H21.375" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.375 6V4C8.375 3.46957 8.58571 2.96086 8.96079 2.58579C9.33586 2.21071 9.84457 2 10.375 2H14.375C14.9054 2 15.4141 2.21071 15.7892 2.58579C16.1643 2.96086 16.375 3.46957 16.375 4V6M19.375 6V20C19.375 20.5304 19.1643 21.0391 18.7892 21.4142C18.4141 21.7893 17.9054 22 17.375 22H7.375C6.84457 22 6.33586 21.7893 5.96079 21.4142C5.58571 21.0391 5.375 20.5304 5.375 20V6H19.375Z" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            </svg>
          </IconButton>
        </div>
      </div>
      <div className="row" style={{ height: '63px', display: 'flex', alignItems: 'center', borderTop: '1px solid', borderWidth: '1px', borderColor: '#9E9E9E' }}>
        <div className="col-1" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox
          color="default"
            sx={{
              marginBottom:'10px',
            }}
           
          />
        </div>
        <div className="col-2 secondCol">
          Rule name
        </div>
        <div className="col-2 ">

        </div>
        <div className="col-2">

        </div>
        <div className="col-3">

        </div>
        <div className="col-3">

        </div>
        <div className="col-2" style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'center' }}>
          <IconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.375 9C13.1706 9 13.9337 9.31607 14.4963 9.87868C15.0589 10.4413 15.375 11.2044 15.375 12C15.375 12.7956 15.0589 13.5587 14.4963 14.1213C13.9337 14.6839 13.1706 15 12.375 15C11.5794 15 10.8163 14.6839 10.2537 14.1213C9.69107 13.5587 9.375 12.7956 9.375 12C9.375 11.2044 9.69107 10.4413 10.2537 9.87868C10.8163 9.31607 11.5794 9 12.375 9ZM12.375 4.5C17.375 4.5 21.645 7.61 23.375 12C21.645 16.39 17.375 19.5 12.375 19.5C7.375 19.5 3.105 16.39 1.375 12C3.105 7.61 7.375 4.5 12.375 4.5ZM3.555 12C4.36325 13.6503 5.61831 15.0407 7.17748 16.0133C8.73665 16.9858 10.5374 17.5013 12.375 17.5013C14.2126 17.5013 16.0133 16.9858 17.5725 16.0133C19.1317 15.0407 20.3867 13.6503 21.195 12C20.3867 10.3497 19.1317 8.95925 17.5725 7.98675C16.0133 7.01424 14.2126 6.49868 12.375 6.49868C10.5374 6.49868 8.73665 7.01424 7.17748 7.98675C5.61831 8.95925 4.36325 10.3497 3.555 12Z" fill="#7209B7" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M11.375 4H4.375C3.84457 4 3.33586 4.21071 2.96079 4.58579C2.58571 4.96086 2.375 5.46957 2.375 6V20C2.375 20.5304 2.58571 21.0391 2.96079 21.4142C3.33586 21.7893 3.84457 22 4.375 22H18.375C18.9054 22 19.4141 21.7893 19.7892 21.4142C20.1643 21.0391 20.375 20.5304 20.375 20V13" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.875 2.49998C19.2728 2.10216 19.8124 1.87866 20.375 1.87866C20.9376 1.87866 21.4772 2.10216 21.875 2.49998C22.2728 2.89781 22.4963 3.43737 22.4963 3.99998C22.4963 4.56259 22.2728 5.10216 21.875 5.49998L12.375 15L8.375 16L9.375 12L18.875 2.49998Z" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.375 6H5.375H21.375" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.375 6V4C8.375 3.46957 8.58571 2.96086 8.96079 2.58579C9.33586 2.21071 9.84457 2 10.375 2H14.375C14.9054 2 15.4141 2.21071 15.7892 2.58579C16.1643 2.96086 16.375 3.46957 16.375 4V6M19.375 6V20C19.375 20.5304 19.1643 21.0391 18.7892 21.4142C18.4141 21.7893 17.9054 22 17.375 22H7.375C6.84457 22 6.33586 21.7893 5.96079 21.4142C5.58571 21.0391 5.375 20.5304 5.375 20V6H19.375Z" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            </svg>
          </IconButton>
        </div>
      </div>
      <div className="row" style={{ height: '63px', display: 'flex', alignItems: 'center', borderTop: '1px solid', borderWidth: '1px', borderColor: '#9E9E9E' }}>
        <div className="col-1" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox
          color="default"
            sx={{
              marginBottom:'10px',
            }}
           
          />
        </div>
        <div className="col-2 secondCol">
          Rule name
        </div>
        <div className="col-2 ">

        </div>
        <div className="col-2">

        </div>
        <div className="col-3">

        </div>
        <div className="col-3">

        </div>
        <div className="col-2" style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'center' }}>
          <IconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.375 9C13.1706 9 13.9337 9.31607 14.4963 9.87868C15.0589 10.4413 15.375 11.2044 15.375 12C15.375 12.7956 15.0589 13.5587 14.4963 14.1213C13.9337 14.6839 13.1706 15 12.375 15C11.5794 15 10.8163 14.6839 10.2537 14.1213C9.69107 13.5587 9.375 12.7956 9.375 12C9.375 11.2044 9.69107 10.4413 10.2537 9.87868C10.8163 9.31607 11.5794 9 12.375 9ZM12.375 4.5C17.375 4.5 21.645 7.61 23.375 12C21.645 16.39 17.375 19.5 12.375 19.5C7.375 19.5 3.105 16.39 1.375 12C3.105 7.61 7.375 4.5 12.375 4.5ZM3.555 12C4.36325 13.6503 5.61831 15.0407 7.17748 16.0133C8.73665 16.9858 10.5374 17.5013 12.375 17.5013C14.2126 17.5013 16.0133 16.9858 17.5725 16.0133C19.1317 15.0407 20.3867 13.6503 21.195 12C20.3867 10.3497 19.1317 8.95925 17.5725 7.98675C16.0133 7.01424 14.2126 6.49868 12.375 6.49868C10.5374 6.49868 8.73665 7.01424 7.17748 7.98675C5.61831 8.95925 4.36325 10.3497 3.555 12Z" fill="#7209B7" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M11.375 4H4.375C3.84457 4 3.33586 4.21071 2.96079 4.58579C2.58571 4.96086 2.375 5.46957 2.375 6V20C2.375 20.5304 2.58571 21.0391 2.96079 21.4142C3.33586 21.7893 3.84457 22 4.375 22H18.375C18.9054 22 19.4141 21.7893 19.7892 21.4142C20.1643 21.0391 20.375 20.5304 20.375 20V13" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.875 2.49998C19.2728 2.10216 19.8124 1.87866 20.375 1.87866C20.9376 1.87866 21.4772 2.10216 21.875 2.49998C22.2728 2.89781 22.4963 3.43737 22.4963 3.99998C22.4963 4.56259 22.2728 5.10216 21.875 5.49998L12.375 15L8.375 16L9.375 12L18.875 2.49998Z" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.375 6H5.375H21.375" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.375 6V4C8.375 3.46957 8.58571 2.96086 8.96079 2.58579C9.33586 2.21071 9.84457 2 10.375 2H14.375C14.9054 2 15.4141 2.21071 15.7892 2.58579C16.1643 2.96086 16.375 3.46957 16.375 4V6M19.375 6V20C19.375 20.5304 19.1643 21.0391 18.7892 21.4142C18.4141 21.7893 17.9054 22 17.375 22H7.375C6.84457 22 6.33586 21.7893 5.96079 21.4142C5.58571 21.0391 5.375 20.5304 5.375 20V6H19.375Z" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            </svg>
          </IconButton>
        </div>
      </div>
      <div className="row" style={{ height: '63px', display: 'flex', alignItems: 'center', borderTop: '1px solid', borderWidth: '1px', borderColor: '#9E9E9E' }}>
        <div className="col-1" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox
          color="default"
            sx={{
              marginBottom:'10px',
            }}
           
          />
        </div>
        <div className="col-2 secondCol">
          Rule name
        </div>
        <div className="col-2 ">

        </div>
        <div className="col-2">

        </div>
        <div className="col-3">

        </div>
        <div className="col-3">

        </div>
        <div className="col-2" style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'center' }}>
          <IconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.375 9C13.1706 9 13.9337 9.31607 14.4963 9.87868C15.0589 10.4413 15.375 11.2044 15.375 12C15.375 12.7956 15.0589 13.5587 14.4963 14.1213C13.9337 14.6839 13.1706 15 12.375 15C11.5794 15 10.8163 14.6839 10.2537 14.1213C9.69107 13.5587 9.375 12.7956 9.375 12C9.375 11.2044 9.69107 10.4413 10.2537 9.87868C10.8163 9.31607 11.5794 9 12.375 9ZM12.375 4.5C17.375 4.5 21.645 7.61 23.375 12C21.645 16.39 17.375 19.5 12.375 19.5C7.375 19.5 3.105 16.39 1.375 12C3.105 7.61 7.375 4.5 12.375 4.5ZM3.555 12C4.36325 13.6503 5.61831 15.0407 7.17748 16.0133C8.73665 16.9858 10.5374 17.5013 12.375 17.5013C14.2126 17.5013 16.0133 16.9858 17.5725 16.0133C19.1317 15.0407 20.3867 13.6503 21.195 12C20.3867 10.3497 19.1317 8.95925 17.5725 7.98675C16.0133 7.01424 14.2126 6.49868 12.375 6.49868C10.5374 6.49868 8.73665 7.01424 7.17748 7.98675C5.61831 8.95925 4.36325 10.3497 3.555 12Z" fill="#7209B7" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M11.375 4H4.375C3.84457 4 3.33586 4.21071 2.96079 4.58579C2.58571 4.96086 2.375 5.46957 2.375 6V20C2.375 20.5304 2.58571 21.0391 2.96079 21.4142C3.33586 21.7893 3.84457 22 4.375 22H18.375C18.9054 22 19.4141 21.7893 19.7892 21.4142C20.1643 21.0391 20.375 20.5304 20.375 20V13" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.875 2.49998C19.2728 2.10216 19.8124 1.87866 20.375 1.87866C20.9376 1.87866 21.4772 2.10216 21.875 2.49998C22.2728 2.89781 22.4963 3.43737 22.4963 3.99998C22.4963 4.56259 22.2728 5.10216 21.875 5.49998L12.375 15L8.375 16L9.375 12L18.875 2.49998Z" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.375 6H5.375H21.375" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.375 6V4C8.375 3.46957 8.58571 2.96086 8.96079 2.58579C9.33586 2.21071 9.84457 2 10.375 2H14.375C14.9054 2 15.4141 2.21071 15.7892 2.58579C16.1643 2.96086 16.375 3.46957 16.375 4V6M19.375 6V20C19.375 20.5304 19.1643 21.0391 18.7892 21.4142C18.4141 21.7893 17.9054 22 17.375 22H7.375C6.84457 22 6.33586 21.7893 5.96079 21.4142C5.58571 21.0391 5.375 20.5304 5.375 20V6H19.375Z" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            </svg>
          </IconButton>
        </div>
      </div>
      <div className="row" style={{ height: '63px', display: 'flex', alignItems: 'center', borderTop: '1px solid', borderWidth: '1px', borderColor: '#9E9E9E' }}>
        <div className="col-1" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox
          color="default"
            sx={{
              marginBottom:'10px',
            }}
           
          />
        </div>
        <div className="col-2 secondCol">
          Rule name
        </div>
        <div className="col-2 ">

        </div>
        <div className="col-2">

        </div>
        <div className="col-3">

        </div>
        <div className="col-3">

        </div>
        <div className="col-2" style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'center' }}>
          <IconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.375 9C13.1706 9 13.9337 9.31607 14.4963 9.87868C15.0589 10.4413 15.375 11.2044 15.375 12C15.375 12.7956 15.0589 13.5587 14.4963 14.1213C13.9337 14.6839 13.1706 15 12.375 15C11.5794 15 10.8163 14.6839 10.2537 14.1213C9.69107 13.5587 9.375 12.7956 9.375 12C9.375 11.2044 9.69107 10.4413 10.2537 9.87868C10.8163 9.31607 11.5794 9 12.375 9ZM12.375 4.5C17.375 4.5 21.645 7.61 23.375 12C21.645 16.39 17.375 19.5 12.375 19.5C7.375 19.5 3.105 16.39 1.375 12C3.105 7.61 7.375 4.5 12.375 4.5ZM3.555 12C4.36325 13.6503 5.61831 15.0407 7.17748 16.0133C8.73665 16.9858 10.5374 17.5013 12.375 17.5013C14.2126 17.5013 16.0133 16.9858 17.5725 16.0133C19.1317 15.0407 20.3867 13.6503 21.195 12C20.3867 10.3497 19.1317 8.95925 17.5725 7.98675C16.0133 7.01424 14.2126 6.49868 12.375 6.49868C10.5374 6.49868 8.73665 7.01424 7.17748 7.98675C5.61831 8.95925 4.36325 10.3497 3.555 12Z" fill="#7209B7" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M11.375 4H4.375C3.84457 4 3.33586 4.21071 2.96079 4.58579C2.58571 4.96086 2.375 5.46957 2.375 6V20C2.375 20.5304 2.58571 21.0391 2.96079 21.4142C3.33586 21.7893 3.84457 22 4.375 22H18.375C18.9054 22 19.4141 21.7893 19.7892 21.4142C20.1643 21.0391 20.375 20.5304 20.375 20V13" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.875 2.49998C19.2728 2.10216 19.8124 1.87866 20.375 1.87866C20.9376 1.87866 21.4772 2.10216 21.875 2.49998C22.2728 2.89781 22.4963 3.43737 22.4963 3.99998C22.4963 4.56259 22.2728 5.10216 21.875 5.49998L12.375 15L8.375 16L9.375 12L18.875 2.49998Z" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.375 6H5.375H21.375" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.375 6V4C8.375 3.46957 8.58571 2.96086 8.96079 2.58579C9.33586 2.21071 9.84457 2 10.375 2H14.375C14.9054 2 15.4141 2.21071 15.7892 2.58579C16.1643 2.96086 16.375 3.46957 16.375 4V6M19.375 6V20C19.375 20.5304 19.1643 21.0391 18.7892 21.4142C18.4141 21.7893 17.9054 22 17.375 22H7.375C6.84457 22 6.33586 21.7893 5.96079 21.4142C5.58571 21.0391 5.375 20.5304 5.375 20V6H19.375Z" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            </svg>
          </IconButton>
        </div>
      </div>
      <div className="row" style={{ height: '63px', display: 'flex', alignItems: 'center', borderTop: '1px solid', borderWidth: '1px', borderColor: '#9E9E9E' }}>
        <div className="col-1" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox
          color="default"
            sx={{
              marginBottom:'10px',
            }}
           
          />
        </div>
        <div className="col-2 secondCol">
          Rule name
        </div>
        <div className="col-2 ">

        </div>
        <div className="col-2">

        </div>
        <div className="col-3">

        </div>
        <div className="col-3">

        </div>
        <div className="col-2" style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'center' }}>
          <IconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.375 9C13.1706 9 13.9337 9.31607 14.4963 9.87868C15.0589 10.4413 15.375 11.2044 15.375 12C15.375 12.7956 15.0589 13.5587 14.4963 14.1213C13.9337 14.6839 13.1706 15 12.375 15C11.5794 15 10.8163 14.6839 10.2537 14.1213C9.69107 13.5587 9.375 12.7956 9.375 12C9.375 11.2044 9.69107 10.4413 10.2537 9.87868C10.8163 9.31607 11.5794 9 12.375 9ZM12.375 4.5C17.375 4.5 21.645 7.61 23.375 12C21.645 16.39 17.375 19.5 12.375 19.5C7.375 19.5 3.105 16.39 1.375 12C3.105 7.61 7.375 4.5 12.375 4.5ZM3.555 12C4.36325 13.6503 5.61831 15.0407 7.17748 16.0133C8.73665 16.9858 10.5374 17.5013 12.375 17.5013C14.2126 17.5013 16.0133 16.9858 17.5725 16.0133C19.1317 15.0407 20.3867 13.6503 21.195 12C20.3867 10.3497 19.1317 8.95925 17.5725 7.98675C16.0133 7.01424 14.2126 6.49868 12.375 6.49868C10.5374 6.49868 8.73665 7.01424 7.17748 7.98675C5.61831 8.95925 4.36325 10.3497 3.555 12Z" fill="#7209B7" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M11.375 4H4.375C3.84457 4 3.33586 4.21071 2.96079 4.58579C2.58571 4.96086 2.375 5.46957 2.375 6V20C2.375 20.5304 2.58571 21.0391 2.96079 21.4142C3.33586 21.7893 3.84457 22 4.375 22H18.375C18.9054 22 19.4141 21.7893 19.7892 21.4142C20.1643 21.0391 20.375 20.5304 20.375 20V13" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.875 2.49998C19.2728 2.10216 19.8124 1.87866 20.375 1.87866C20.9376 1.87866 21.4772 2.10216 21.875 2.49998C22.2728 2.89781 22.4963 3.43737 22.4963 3.99998C22.4963 4.56259 22.2728 5.10216 21.875 5.49998L12.375 15L8.375 16L9.375 12L18.875 2.49998Z" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.375 6H5.375H21.375" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.375 6V4C8.375 3.46957 8.58571 2.96086 8.96079 2.58579C9.33586 2.21071 9.84457 2 10.375 2H14.375C14.9054 2 15.4141 2.21071 15.7892 2.58579C16.1643 2.96086 16.375 3.46957 16.375 4V6M19.375 6V20C19.375 20.5304 19.1643 21.0391 18.7892 21.4142C18.4141 21.7893 17.9054 22 17.375 22H7.375C6.84457 22 6.33586 21.7893 5.96079 21.4142C5.58571 21.0391 5.375 20.5304 5.375 20V6H19.375Z" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            </svg>
          </IconButton>
        </div>
      </div>
      <div className="row" style={{ height: '63px', display: 'flex', alignItems: 'center', borderTop: '1px solid', borderWidth: '1px', borderColor: '#9E9E9E' }}>
        <div className="col-1" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox
          color="default"
            sx={{
              marginBottom:'10px',
            }}
           
          />
        </div>
        <div className="col-2 secondCol">
          Rule name
        </div>
        <div className="col-2 ">

        </div>
        <div className="col-2">

        </div>
        <div className="col-3">

        </div>
        <div className="col-3">

        </div>
        <div className="col-2" style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'center' }}>
          <IconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.375 9C13.1706 9 13.9337 9.31607 14.4963 9.87868C15.0589 10.4413 15.375 11.2044 15.375 12C15.375 12.7956 15.0589 13.5587 14.4963 14.1213C13.9337 14.6839 13.1706 15 12.375 15C11.5794 15 10.8163 14.6839 10.2537 14.1213C9.69107 13.5587 9.375 12.7956 9.375 12C9.375 11.2044 9.69107 10.4413 10.2537 9.87868C10.8163 9.31607 11.5794 9 12.375 9ZM12.375 4.5C17.375 4.5 21.645 7.61 23.375 12C21.645 16.39 17.375 19.5 12.375 19.5C7.375 19.5 3.105 16.39 1.375 12C3.105 7.61 7.375 4.5 12.375 4.5ZM3.555 12C4.36325 13.6503 5.61831 15.0407 7.17748 16.0133C8.73665 16.9858 10.5374 17.5013 12.375 17.5013C14.2126 17.5013 16.0133 16.9858 17.5725 16.0133C19.1317 15.0407 20.3867 13.6503 21.195 12C20.3867 10.3497 19.1317 8.95925 17.5725 7.98675C16.0133 7.01424 14.2126 6.49868 12.375 6.49868C10.5374 6.49868 8.73665 7.01424 7.17748 7.98675C5.61831 8.95925 4.36325 10.3497 3.555 12Z" fill="#7209B7" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M11.375 4H4.375C3.84457 4 3.33586 4.21071 2.96079 4.58579C2.58571 4.96086 2.375 5.46957 2.375 6V20C2.375 20.5304 2.58571 21.0391 2.96079 21.4142C3.33586 21.7893 3.84457 22 4.375 22H18.375C18.9054 22 19.4141 21.7893 19.7892 21.4142C20.1643 21.0391 20.375 20.5304 20.375 20V13" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.875 2.49998C19.2728 2.10216 19.8124 1.87866 20.375 1.87866C20.9376 1.87866 21.4772 2.10216 21.875 2.49998C22.2728 2.89781 22.4963 3.43737 22.4963 3.99998C22.4963 4.56259 22.2728 5.10216 21.875 5.49998L12.375 15L8.375 16L9.375 12L18.875 2.49998Z" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>

          <IconButton >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M3.375 6H5.375H21.375" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.375 6V4C8.375 3.46957 8.58571 2.96086 8.96079 2.58579C9.33586 2.21071 9.84457 2 10.375 2H14.375C14.9054 2 15.4141 2.21071 15.7892 2.58579C16.1643 2.96086 16.375 3.46957 16.375 4V6M19.375 6V20C19.375 20.5304 19.1643 21.0391 18.7892 21.4142C18.4141 21.7893 17.9054 22 17.375 22H7.375C6.84457 22 6.33586 21.7893 5.96079 21.4142C5.58571 21.0391 5.375 20.5304 5.375 20V6H19.375Z" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.375 11V17" stroke="#A30D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            </svg>
          </IconButton>
        </div>
      </div>


    </div>

  </div>

  )
}

export default Table
