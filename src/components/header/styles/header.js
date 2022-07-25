import styled from "styled-components";
import { Link as ReactRouterLink } from 'react-router-dom'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

    @media (max-width: 1100px){
        ${({dontShowOnSmallViewPort})=> dontShowOnSmallViewPort && 'background: none'}
    }
    @media (max-width: 762px){
        ${({allowInBrowse})=> allowInBrowse && 'height: 70vh;background-repeat: no-repeat; background-size: cover;background-position-x: center;'}
    }
});
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px){
        margin: 0 25px;
    }
`;
export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px){
        height: 45px;
        width: 167px;
    }
`;
export const ButtonLink = styled(ReactRouterLink)`
    background-color: #e50914;
    display: block;
    width: 84px;
    height: fit-content;
    color: white;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-size: border-box;
    text-align: center;

    &:hover {
        background-color: #f40612;
    }

`;
 

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

export const FeatureCallOut = styled.p`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin-bottom: 20px;
`
export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0,0,0,0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    margin-top: 30px;
    transition: background-color 0.5s ease;

    &:hover{
        background-color: #ff1e1e;
        color: white;
    }
`

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media(max-width: 762px){
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 250px 0 0 0;
        ${Text}{
            display: none; 
        }
        ${FeatureCallOut}{
            font-size: 30px;
            text-align: center;
            
        }
        ${PlayButton}{
            margin: auto;
            width: 100px;
            margin-top: 10px;
        }
    }
`



export const Group = styled.div`
    display: flex;
    align-items: center;
`

export const TextLink = styled.p`
    color: white;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({active})=> (active === true ? '700' : 'normal')};
    cursor: pointer;
    transition: font-weight 0.17s,opacity 0.3s;
    
    &:hover {
        opacity: 0.7;
    }
    &:last-of-type {
        margin-right: 0;
    }
    
`;

export const DropdownBreak = styled.div`
    width: 100%;
    border: 1px solid #222;
`
export const InsidePicture = styled.div
`
    background: url(${({src})=>src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;  
    border-radius: 3px;
    margin-right: 15px;
`
export const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid white;
    position: absolute;
    background-color: black;
    padding: 0px;
    width: 200px;
    top: 40px;
    right: 0px;
    border-radius: 3px;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.3s linear, opacity 0.3s linear;
    z-index: 1000;
    
    
    ${Group} {
        padding-left: 25px;
        margin-bottom: 8px;
        &:first-of-type{
            padding-top: 10px;
        }
        ${TextLink} {
            cursor: default;
        }
    }
    ${Group}:last-of-type {
        display: block;
        width: 100%;
        margin-bottom: 3px;
    }


    ${Group}:last-of-type ${TextLink} {
        cursor: pointer;
    }
    button{
        margin-right: 10px;
    }
    p{
        font-size: 15px;
    }
`

export const Picture = styled.div`
    background: url(${({src})=>src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;  
    border-radius: 3px;

    &:hover{
        ${Dropdown}{
            opacity: 1;
            visibility: visible;
        }
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer; 
    }
    
`


export const Search = styled.div`
    display: flex;
    align-items: center;

    svg{
        color: white;
        cursor: pointer;
    }
    @media (max-width: 700px){
        display: none;
    }
`
export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img{
        filter: brightness(0) invert(1);
        width: 16px;
    }
`
export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    transition: width 0.5s, opacity 0.3s;
    height: 30px;
    font-size: 14px;
    outline: none;
    margin-left: ${({active})=> (active===true ? '10px': '0')};
    width: ${({active})=> (active===true? '200px' : '0px')};
    opacity: ${({active})=> (active===true? '1' : '0')};
    padding-left: ${({active})=> (active===true? '10px' : '0')};
    
`
