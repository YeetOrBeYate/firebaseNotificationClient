import React from "react";
import axios from "axios";

import { useDispatch } from "react-redux"

import { messaging } from './firebaseInit'

export const Messaging = () => {
  const [form, setForm] = React.useState({
    name: '',
    message:''
  });
  const [messages, setMessages] = React.useState([]);
  const [requesting, setRequesting] = React.useState(false);

  const dispatch = useDispatch()

  React.useEffect(() => {
    setRequesting(true);
    axios.get('http://localhost:4000/messages')
      .then((resp) => {
      setMessages(resp.data.messages);
      setRequesting(false);
      })
      .catch((err) => {
        console.log(err)

      })
  }, []);

  messaging.onMessage((payload) => {
    console.log('got payload')
    dispatch({ type:'NEW_NOTIFICATION', payload: payload.data})
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setRequesting(true)
    axios.post('http://localhost:4000/messages', form)
      .then(res => {
        let newMessage = res.data.messages[0]
        setRequesting(false)
        setMessages([...messages, newMessage ])
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className = "container">
      <div>
        <div className="field">
          
          <label id="label">Name</label>
          
          <input
            className="input"
            placeholder="Enter your name"
            name='name'
            onChange={handleChange}
            value={form.name}
          />
        </div>

        <div className="field">
          <label id="label">Message</label>
          <input
            className="input"
            name='message'
            onChange={handleChange}
            placeholder="Enter a message"
            value={form.message}
          />
        </div>
        <button className="button is-primary" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>

      <div className="message-list">
        <h3>Messages</h3>

        {requesting ? (
          <>
            <span className="sr-only">Loading...</span>
            <progress className="progress is-small is-primary" max="100">15%</progress>
          </>
        ) : (
          <>
            {messages.map((m, index) => {
              const { name, message } = m;
              return (
                <div key={index}>
                  {name}: {message}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
