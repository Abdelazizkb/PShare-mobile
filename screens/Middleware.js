import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import Notifications from './Notifications';
import {connect} from 'react-redux'

const Middleware = ({children,user}) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [socket, setSocket] = useState(new WebSocket( `ws://192.168.42.221:8000/ws/ehr/${user.inn}/`));

  useEffect(() => {
      socket.onmessage=(message) => {
      setMessage(message)
      setShow(true)
    }
  }, [])

  return (
    <>
      <Notifications show={show} request={message} setShow={setShow}/>
      {children}
    </>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps,null) (Middleware)