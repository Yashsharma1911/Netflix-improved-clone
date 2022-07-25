import React from 'react'
import { Container, List , Title, Picture, Name, Item} from './styles/profiles'

export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps} >{children}</Title>
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps} > {children} </List>
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Profiles.Picture = function ProfilePicture({ src, ...restProps }) {
    return (
        <Picture
            {...restProps}
            src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
        />)
} 

Profiles.Name = function PrifilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
}