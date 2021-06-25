import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from "styled-components";
import {Smartphone} from "../../../../../styleAll/styledAll";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.62);
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled(Smartphone)`
  justify-content: center;
  padding: 16px;
`

export default function AddCart(){

  return(
    <Container>
      <Smartphone>
        <Content>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={10}
              // onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thi</MenuItem>
            </Select>
          </FormControl>
        </Content>
      </Smartphone>
    </Container>
  )
}