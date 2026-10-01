import React, { useState } from 'react'
import styled from 'styled-components'
import { footerData } from '../data/data'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdSupportAgent } from 'react-icons/md'
import Aibox from '../pages/Assistant/Aibox'
const ContainerBox = styled.div`
  text-align: center;
  padding-top: 3rem;
  margin-bottom: 3rem;
  width: 90%;
  height: 90%;
  /* background-color: rgb(22, 19, 83); */
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  /* border-radius: 25px; */
  padding-left: 0.5rem;
`
const FooterContainer = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  /* position: relative; */
  background-color: rgb(22, 19, 83);
  border-radius: 25px;
  height: 900px;
  max-width: 1180px;
  /* background-color: transparent; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`
const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
`

const Links = styled(Link)`
  color: white;
`

const Infolink = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
  height: 2rem;
  /* box-shadow: 0px 10px 50px rgba(226, 55, 3, 0.979); */
`
const HR = styled.hr`
  width: 90%;
  color: white;
`
const SocialMedia = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20%;
`
const Text = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
`
const A = styled.a`
  color: inherit;
  margin: 0 auto;
  margin: 0;
`

const Span = styled.span`
  opacity: 1;
  position: relative;
  :hover {
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
`

export default function Footer({ columns }) {
  // const time = new Date().toISOString().split('T')[0]
  const date = '2026'
  const [chatBox, setChatBox] = useState(false)

  return (
    <FooterContainer>
      {/* <Aibox /> */}
      <ContainerBox columns={columns}>
        {footerData?.map(data => (
          <div key={data.id}>
            <h2>{data.title}</h2>
            {data?.links?.map(link => (
              <LinkBox key={link.id}>
                <Links to={link.path} disable={link.path}>
                  {link.label}
                </Links>
              </LinkBox>
            ))}
          </div>
        ))}
      </ContainerBox>
      <HR />
      <Infolink>
        <Text>© {date} - Designed & developed by Mostafa Solgi.All rights reserved</Text>
        <SocialMedia>
          <A href="https://github.com/solgi110" target="_blank">
            <FaGithub fontSize={28} />
          </A>
          <A href="https://www.linkedin.com/in/mostafa-solgi-431561367" target="_blank">
            <FaLinkedin fontSize={28} />
          </A>
          <FaXTwitter fontSize={28} />

          <Span onClick={() => setChatBox(true)}>
            <MdSupportAgent fontSize={33} />
          </Span>
        </SocialMedia>
      </Infolink>
      {chatBox && <Aibox setChatBox={setChatBox} chatBox={chatBox}/>  }
    </FooterContainer>
  )
}
