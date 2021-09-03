import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import { StyledListItem, StyledMenuItem } from './StyledMenuItem'
import Divider from '@material-ui/core/Divider'

import YouTubeIcon from '@material-ui/icons/YouTube'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'

const AppsMenu = ({ anchorEl, handleClose }) => {
  const AppsMenuArray = addDivider(menuItems, [1, 4], handleClose)

  return (
    <StyledAppsMenu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {AppsMenuArray}
    </StyledAppsMenu>
  )
}

export default AppsMenu

const StyledAppsMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderTop: 0,
    borderRadius: 0,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))

const RedYouTubeIcon = styled(YouTubeIcon)`
  color: red;
`
const YouTubeMusicLogo = styled(PlayCircleOutlineIcon)`
  color: red;
`
const YouTubeKidsLogo = () => {
  // How to create a component and style it at the same time using styled-components instead of doing inline styling like below?
  return (
    <img
      style={{ height: '20px' }}
      src="https://upload.wikimedia.org/wikipedia/commons/4/48/YT_kids.png"
      alt="YouTube Kids Logo"
    />
  )
}

const menuItems = [
  { Icon: RedYouTubeIcon, text: 'YouTube TV' },
  { Icon: YouTubeMusicLogo, text: 'YouTube Music' },
  { Icon: YouTubeKidsLogo, text: 'YouTube Kids' },
  { Icon: RedYouTubeIcon, text: 'Creator Academy' },
  { Icon: RedYouTubeIcon, text: 'YouTube for Artists' },
]

function addDivider(dataArray, indexArray, handleClose) {
  // the indexArray needs to account for the shifting of index after adding the 1st divider
  const result = dataArray.map(({ Icon, text }) => {
    return (
      <StyledMenuItem key={text} onClick={handleClose}>
        <StyledListItem Icon={Icon} text={text} />
      </StyledMenuItem>
    )
  })
  // console.log(result)

  for (const index of indexArray) {
    result.splice(index, 0, <Divider />)
  }
  // console.log(result)

  return result
}