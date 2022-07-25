import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Logo, Background, ButtonLink, Feature, Text, FeatureCallOut, TextLink, Group, Dropdown, Profile, Picture, DropdownBreak, Search, SearchIcon, SearchInput, PlayButton, InsidePicture } from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Profile = function HeaderProfile({children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({src, children,  ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`}>{children}</Picture>
}

Header.InsidePicture = function HeaderInsidePicture({src, ...restProps }) {
    return <InsidePicture {...restProps} src={`/images/users/${src}.png`}/>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false);
    return <Search {...restProps}>
        <SearchIcon onClick={()=> setSearchActive(searchActive=>!searchActive)}>
            <img src="/images/icons/search.png" alt="Search"/>
        </SearchIcon>
        <SearchInput 
            value={searchTerm}
            onChange={({target})=> setSearchTerm(target.value)}
            active={searchActive}
            placeholder="Search films and series"
            spellcheck="false"
        />
    </Search>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <TextLink {...restProps}>{children}</TextLink>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <Link to={to}>
            <Logo {...restProps} />
        </Link>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.DropdownBreak = function HeaderDropdownBreak({...restProps}){
    return <DropdownBreak {...restProps}/>
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}
