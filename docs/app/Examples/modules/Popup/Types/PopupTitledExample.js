import React from 'react'
import { Image, Popup } from 'semantic-ui-react'

const users = [
  {
    name: 'Elliot Fu',
    bio: 'Elliot has been a member since July 2012',
    avatar: 'http://semantic-ui.com/images/avatar/small/elliot.jpg',
  },
  {
    name: 'Stevie Feliciano',
    bio: 'Stevie has been a member since August 2013',
    avatar: 'http://semantic-ui.com/images/avatar/small/stevie.jpg',
  },
  {
    name: 'Matt',
    bio: 'Matt has been a member since July 2014',
    avatar: 'http://semantic-ui.com/images/avatar/small/matt.jpg',
  },
]

export default function PopupTitledExample() {
  const avatars = users.map((user, index) =>
    <Popup
      key={user.name}
      trigger={<Image src={user.avatar} avatar />}
      header={user.name}
      content={user.bio}
    />
  )

  return <div>{avatars}</div>
}
