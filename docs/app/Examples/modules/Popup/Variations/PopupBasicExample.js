import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupBasicExample = () => (
  <Popup
    trigger={<Button icon='add' />}
    content="The default theme's basic popup removes the pointing arrow."
    basic
  />
)

export default PopupBasicExample
