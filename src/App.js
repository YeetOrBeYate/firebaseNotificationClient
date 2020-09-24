import React, { Fragment } from 'react';
import axios from 'axios'


import { requestFirebaseNotificationPermission, messaging } from './firebaseInit'

import { ToastContainer } from 'react-toastify';

import './styles/app.scss'
import { Messaging } from './Messaging';

import Modal from "./modal"

//redux stuff

import { Provider } from 'react-redux'
import store from './Redux/store'


const App = () => {

  const [shouldShow, setShouldShow] = React.useState(true)

  const handleClose = () => {
    setShouldShow(false)
  }

  const addToken = (token) => {
    axios.post('http://localhost:4000/token', { token })
      .then(res => {
      console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }


  React.useEffect(() => {

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

  }, [])

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
