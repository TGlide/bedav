import React from 'react'
import styled from 'styled-components'
import SearchBar from './searchBar'
import HospitalSection from './hospitals/hospitalSection'
import { SearchHospitalProvider } from '../contexts/SearchHospital'
import { SortProvider } from '../contexts/Sort'

const StyledDiv = styled.div`
  width: 100%;
  padding: 15px 35px;
  box-sizing: border-box;
  margin: 60px 0 0;
  background: white;
  transition: opacity 0.2s;
  z-index: -2;

  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`

function Hospitals(props) {
  return (
    <SearchHospitalProvider>
      <StyledDiv>
        <SearchBar />
        <SortProvider>
          <HospitalSection />
        </SortProvider>
      </StyledDiv>
    </SearchHospitalProvider>
  ) 
}

export default Hospitals