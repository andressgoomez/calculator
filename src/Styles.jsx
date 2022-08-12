import styled from 'styled-components'
import { Text, GridItem, Box } from '@chakra-ui/react'
import './app.css'

export const StyledBody = styled.body`
  background-color: var(--color-background);
  width: 100vw;
  height: 100vh;
  min-width: 350px !important;
  color: var(--color-text);
  font-family: 'League Spartan', sans-serif;
  font-family: 'Roboto Slab', serif;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`
export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Visor = styled.div`
  background-color: var(--color-background-visor);
  width: 450px;
  min-width: 350px;
  height: 100px;
  border-radius: 10px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 350px;

  }
`
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  min-width: 350px;
  @media screen and (max-width: 500px) {
    width: 350px;
    height: 650px;
  }
`
export const VisorText = styled(Text)`
  font-size: 40px;
  padding: 20px;
  font-weight: bolder;
  text-align: end;
`
export const Numbers = styled.div`
  background-color: var(--color-background-numbers);;
  width: 450px;
  min-width: 350px;
  height: 380px;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;

  @media screen and (max-width: 500px) {
    width: 350px;
    height: 440px;
  }
`

export const Theme = styled.div`
  display: flex;
  align-items: center;
`

export const SwitchRadio = styled.input`
  display: none;
`

export const SwitchLabel = styled.label`
  float: left;
  width: 15px;
  line-height: 25px;
  margin-left: 10px;
  font-size: 11px;
  color: var(--color-background-numbers);
  text-align: center;
  cursor: pointer;

  ${SwitchRadio}:checked + &{
    transition: 0.15s ease-out;
    color: var(--color-background-numbers);
  }
  -webkit-touch-callout: none;
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;
`
export const Switch = styled.div`
  font-family: 'League Spartan', sans-serif;
font-family: 'Roboto Slab', serif;
  position: relative;
  height: 25px;
  width: 85px;
  background-color: var(--color-background-numbers);
  border-radius: 20px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
`
export const SwitchSelection = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  width: 15px;
  height: 15px;
  margin-left: 7px;
  margin-top: 5px;
  background: var(--color-equals);
  border-radius: 50%;
  transition: left 0.25s ease-out;
`
export const StyledNumber = styled(GridItem)`
  background-color: var(--color-numbers);
  border-radius: 10px;
  height: 50px;
  box-shadow: 0px 5px 0px 0px var(--color-shadow-numbers);
  transition: all ease 0.2s;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
    background-color: var(--color-active-number);
    box-shadow: inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
  -webkit-touch-callout: none;
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;
  @media screen and (max-width: 500px) {
    height: 62px;
  }
`
export const StyledDelete = styled(GridItem)`
  background-color: var(--color-delete);
  border-radius: 10px;
  height: 50px;
  box-shadow: 0px 5px 0px 0px var(--color-shadow-delete);
  transition: all ease 0.2s;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
    background-color: var(--color-active-delete);
    box-shadow: inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
  -webkit-touch-callout: none;
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;
  @media screen and (max-width: 500px) {
    height: 62px;
  }
`
export const StyledEquals = styled(GridItem)`
  background-color: var(--color-equals);
  border-radius: 10px;
  height: 50px;
  box-shadow: 0px 5px 0px 0px var(--color-shadow-equals);
  transition: all ease 0.2s;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
    background-color: var(--color-active-equals);
    box-shadow: inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
  -webkit-touch-callout: none;
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;
  @media screen and (max-width: 500px) {
    height: 62px;
  }
`
export const StyledTextNumber = styled(Text)`
  font-size: 35px;
  color: var(--color-text-numbers);
  font-weight: bolder;
  text-align: center;
`
export const StyledTextDelete = styled(Text)`
  font-size: 25px;
  margin-top: 5px;
  color: var(--color-text-delete);
  font-weight: bolder;
  text-align: center;
  @media screen and (max-width: 500px) {
    margin-top: 10px;
  }
`
export const StyledThemeNumbers = styled(Text)`
  display: flex;
  justify-content: end;
`
export const StyledBox = styled(Box)`
  font-size: small;
  margin-left: 11px;
  margin-right: 11px;
`