import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Bree Serif';
`

export const ResultContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 65%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  align-items: center;
`
export const Option = styled.h1`
  font-size: 16px;
  font-family: 'Bree Serif';
  font-weight: 700;
  color: #ffffff;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
`
export const ScorePhrase = styled.p`
  font-size: 16px;
  font-family: 'Bree Serif';
  font-weight: 700;
  color: #223a5f;
`
export const ScoreNumber = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`
export const GameViewContainer = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameOptionsList = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 480px;
  flex-wrap: wrap;
`
export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Bree Serif';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  margin-right: 20px;
`
export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  padding-top: 5px;
  margin-bottom: 20px;
  text-align: center;
  align-self: flex-end;
`
export const PopUpImage = styled.img`
  width: 90%;
  align-self: center;
`
export const PopUpBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  padding-bottom: 20px;
`
export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const SelectedOptionsContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 560px;
  }
`
export const GameUserOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GameParticipantText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const GameParticipantChoiceImage = styled.img`
  width: 120px;
  height: 120px;
  @media screen and (min-width: 768px) {
    width: 170px;
    height: 170px;
  }
`
export const ResultText = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto';
  text-align: center;
`

export const PlayAgainButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Bree Serif';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
