import React from 'react'

import { RiRobot2Line } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io'
import styled, { keyframes } from 'styled-components'
import Options from './Options'
import Message from './Message'
import { useState } from 'react'

const box = keyframes`
   
from{transform:translateX(100%)}
  to{transform: translateX(0%)}

`
const close = keyframes`
 from{transform:translateX(0%)}
 to{transform:translateX(100%)}

`
const Aicontainer = styled.div`
  position: fixed;
  top: 45%;
  width: 65%;
  max-width: 630px;
  height: 600px;
  z-index: 100000;
  border-radius: 20px 0 0px 20px;
  right: 0%;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
  overflow: hidden;
  animation: ${({ $notTrue }) => ($notTrue ? close : box)} 1s ease;
`

const Head = styled.div`
  width: 100%;
  background-color: #2d77ff;
  color: white;
  height: 2.5rem;
  display: flex;
  box-sizing: border-box;
  padding-left: 1rem;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
`
const Close = styled.div`
  :hover {
    cursor: pointer;
  }
`
const SettingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export default function Aibox({ setChatBox, chatBox }) {
  const [message, setMessage] = useState('')
  const [toMesssage, setToMessasge] = useState([])

  return (
    <Aicontainer>
      <Head>
        <RiRobot2Line fontSize={24} />
        <Close
          $notTrue={chatBox === false}
          onClick={() => {
            setChatBox(false)
          }}
        >
          <IoMdClose fontSize={20} />
        </Close>
      </Head>

      <SettingContainer>
        {/* Componnent */}
        <Options />
        {/* Componnent */}
        <Message
          message={message}
          setMessage={setMessage}
          toMesssage={toMesssage}
          setToMessasge={setToMessasge}
        />
      </SettingContainer>
    </Aicontainer>
  )
}
