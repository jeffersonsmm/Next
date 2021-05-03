import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  margin: 20px 0px;
`
export const Content = styled.div`
  background-color: #fff;
  padding: 30px;
  /* height: 90vh; */
  width: 95vw;
  min-width: 340px;

  border-radius: 12px;

  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`
export const Header = styled.div`
  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }
  .row-line {
    height: 2px;
    background-color: #ccca;
    width: 20%;
  }
  h2 { 
    margin: 30px;
    text-align: center;
    word-wrap: unset;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
