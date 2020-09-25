import { put, takeEvery, select } from 'redux-saga/effects'

function openNotification(action){
  const {payload} = action

  const serveNotification = new Notification(payload.title, {
    body: payload.body
  })

  serveNotification.onclick = function (event) {
    console.log('brings to tab')
  }
}


function* watchNotification() {
  yield takeEvery("NEW_NOTIFICATION", openNotification)
}

export default watchNotification
