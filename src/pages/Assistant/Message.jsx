import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { IoIosSend } from 'react-icons/io'
import { IoIosContact } from 'react-icons/io'
import text from '../../assets/text.jpg'
import clientRequest from './openAi'

const Messaging = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 565px;
  min-height: 565px;
  max-height: 565px;
  padding: 3rem 10px 10px;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url(${text});
  background-size: cover;
`

const InputContainer = styled.form`
  display: flex;
  flex-shrink: 0;
  width: 95%;
  height: 35px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1px;
  padding: 0;
  border: none;
`

const Input = styled.input`
  width: 85%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  background-color: none;
  border: 1px solid gray;
  text-indent: 10px;
  padding: 0;
`
const Btn = styled.button`
  width: 15%;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
  background-color: #2d77ff;
  cursor: pointer;
  border: 1px solid gray;
`

const TextParagraf = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 90%;
  height: auto;
  padding-left: 0.6rem;
  color: white;
  text-align: start;
  box-sizing: border-box;
`
const Text = styled.p`
  background-color: #4687ff;
  padding: 5px;
  text-align: left;
  border-radius: 6px;
  max-width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
`
const Ic = styled.div`
  font-size: 30px;
  flex-shrink: 0;
`
const TextWrapper = styled.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export default function Message({ message, setMessage, setToMessasge, toMesssage }) {
  const { useClient } = clientRequest()
 
  const time = new Date().toLocaleDateString()

  function handleSubmit(e) {
    e.preventDefault()

    const resultMessage = {
      id: Date.now(),
      role: 'user',
      content: message,
      icon: IoIosContact
    }

    if (!message.trim()) {
      setMessage('')
      return
    }
   
     useClient(message)
     
    setToMessasge(prev => [...prev, resultMessage])
    setMessage('')
  }

  const refEl = useRef()

  useEffect(() => {
    refEl?.current.scrollIntoView({
      behavior: 'smooth'
    })
  }, [toMesssage])

  return (
    <Messaging>
      <TextWrapper>
        {toMesssage?.map(msg => {
          const Icon = msg.icon
          return (
            <TextParagraf key={msg.id}>
              <Ic>
                <Icon color="grey" />
              </Ic>
              <Text> {msg && msg.content} </Text>
            </TextParagraf>
          )
        })}
        <div ref={refEl}></div>
      </TextWrapper>

      <InputContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          value={message}
          placeholder="Type your message .."
          onChange={e => setMessage(e.target.value)}
        />
        <Btn type="submit">
          <IoIosSend color="white" fontSize={21} />
        </Btn>
      </InputContainer>
    </Messaging>
  )
}
