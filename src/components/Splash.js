// @flow

import React from "react"
import styled from "styled-components"
import theme from "../theme"
import ReactRotatingText from "./RotatingText"
import Logo from "./svg/Logo"
import SlackIcon from "./svg/SlackIcon"
//import Octocat from "./svg/Octocat"
import guildLogo from "./png/guild_logo.png"

let Row = styled.div`
  display: flex;
`

let Header = styled(Row)`
  position: relative;
  z-index: 1;
`

let Link = styled.a`
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: rgb(255, 248, 84);
  }
`

let LinkText = styled.span`
  font-weight: bold;
  padding-left: 10px;
  transition: color 0.2s ease;
  @media (max-width: 700px) {
    display: none;
  }
`

let InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`

let TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: ${theme.fancyFont};
  color: white;
  padding: 100px 0 25px;
  z-index: 1;
  position: relative;
  letter-spacing: 4px;
`

let Container = styled.div`
  height: 80vh;
  background-color: ${(props) => props.backgroundColor || theme.primary};
  position: relative;
`

let Tower = styled(Logo)`
  position: absolute;
  bottom: 0;
  max-width: 600px;
`

let Title = styled.div`
  font-size: 35px;
  margin-bottom: 10px;
`

let Rotator = styled(ReactRotatingText)`
  font-size: 26px;
`

const GuildLogo = styled.img`
  width: 30px;
  height: 30px;
`

type Props = {
  backgroundColor?: string,
  page?: string,
};

const speakerFormId = `1FAIpQLSc_ZA0ElHLsMedjdQjZechw5H1RJNhG1DZxtFTsqhkdut3eFg`
const speakerFormLink = `https://docs.google.com/forms/d/e/${speakerFormId}/viewform?usp=sf_link`

export default ({
  backgroundColor = theme.primary,
  page = `Meetups`,
}: Props) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Header>
        <Link
          href="https://join.slack.com/t/torontojs/shared_invite/zt-zgi31snl-omO3tXSZ0Q7zqN9WBQSf8Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlackIcon style={{ width: `30px` }} />
          <LinkText>Join us on Slack</LinkText>
        </Link>
        <Link
          href="https://beta.guild.host/torontojs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GuildLogo src={guildLogo} />
          <LinkText>Join us on Guild</LinkText>
        </Link>
        <Link
          href="http://meetup.com/torontojs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-meetup" style={{ fontSize: `32px` }} />
          <LinkText>Join us on Meetup</LinkText>
        </Link>

        <Link
          href="https://www.youtube.com/channel/UC1samyyfqiKmOT6fq3uVO1A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-youtube-play" style={{ fontSize: `32px` }} />
          <LinkText>Tech Talks</LinkText>
        </Link>
        <Link href={speakerFormLink} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-comment" style={{ fontSize: `32px` }} />
          <LinkText>Give a Talk</LinkText>
        </Link>
        <Link href="./p/code_of_conduct" target="_blank">
          <i className="fa fa-sticky-note" style={{ fontSize: `32px` }} />
          <LinkText>Code of Conduct</LinkText>
        </Link>
        <Link
          href="https://pzf47fgronb.typeform.com/to/mXvf7ZJy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-users" style={{ fontSize: `32px` }} />
          <LinkText>Volunteer</LinkText>
        </Link>
        <Link href="./p/report" target="_blank">
          <i className="fa fa-flag" style={{ fontSize: `32px` }} />
          <LinkText>Report Abuse</LinkText>
        </Link>
      </Header>
      <InnerContainer>
        <TitleContainer>
          <Title>
            {page}&nbsp;<b style={{ color: `#ffffff` }}>JS</b>
          </Title>
          <Rotator
            items={[`MEETUPS`, `TECH TALKS`, `WORKSHOPS`, `SOCIAL EVENTS`]}
          />
        </TitleContainer>
        <Tower fill={backgroundColor} />
      </InnerContainer>
    </Container>
  )
}
