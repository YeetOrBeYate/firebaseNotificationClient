import React, { Fragment } from 'react';
import axios from 'axios'


import { requestFirebaseNotificationPermission, messaging } from './firebaseInit'

import { ToastContainer } from 'react-toastify';

import './styles/app.scss'
import { Messaging } from './Messaging';

import Modal from "./modal"

//redux stuff


import {useDispatch} from 'react-redux'


const App = () => {

  const [shouldShow, setShouldShow] = React.useState(true)
  const dispatch = useDispatch()

  
  const handleClose = () => {
    setShouldShow(false)
  }

  
  
  React.useEffect(() => {
    const addToken = (token) => {
      dispatch({type: 'SET_TOKEN', payload: token})
      axios.post('http://localhost:4000/token', { token })
        .then(res => {
        console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
    
    const button = document.querySelector('.permission')

    if (!button) {
      console.log('do nothing')
    } else {
      button.addEventListener('click', () => {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log('start the process')
            requestFirebaseNotificationPermission()
              .then((firebaseToken) => {
                console.log(firebaseToken) //normally would send this to the db for out backend to access on the notif endpoints
                addToken(firebaseToken)
              })
              .catch((err) => {
                console.log(err)
                return err;
              });
          }
        })
      })
    }

    // need this to run everytime on mount
    if (Notification.permission === 'granted') {
      requestFirebaseNotificationPermission()
        .then((firebaseToken) => {
          console.log(firebaseToken) //normally would send this to the db for out backend to access on the notif endpoints
          addToken(firebaseToken)
        })
        .catch((err) => {
          console.log(err)
          return err;
        });
    }

  }, [dispatch])

  if ('permissions' in navigator) {
    navigator.permissions.query({ name: 'notifications' }).then(function (notificationPerm) {
      notificationPerm.onchange = function () {
        messaging.deleteToken()
          .then((status) => { console.log(status) })
          .catch((err)=>{console.log(err)})
        // console.log("User decided to change his seettings. New permission: " + notificationPerm.state);
      };
    });
  }

  return (
    <div>
      <Modal
        isVisible={Notification.permission !== "granted" && shouldShow}
        onClose={handleClose}
      />
      <div className="App">
        <Fragment>
          <ToastContainer autoClose={2000} position="top-center" />

          <div className="container">
                <Messaging />
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export default App;
