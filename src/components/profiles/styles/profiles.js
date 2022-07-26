import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;

    @media (max-width: 600px){
        margin-top: 100px;
    }
`
export const Title = styled.h1`
    width: 100%;
    color: white;
    font-size: 48px;
    text-align: center;
    font-weight: 500;

    @media (max-width: 600px){
        font-size: 35px;
    }
`
export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
`
export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid black;
    cursor: pointer;
`
export const Name = styled.p`
    color: #808080;
    text-flow: ellipsis;
    font-size: 16px;

    &:hover {
        font-weigth: bold;
        color: #e5e5e5;
    }
`
export const Item = styled.li`
    max-width: 200px;
    max-height: 200px;
    list-style-type: none;
    text-align: center;

    &:hover > ${Picture} {
        border: 3px solid white;
    }
    &:hover > ${Name} {
        font-weight: bold;
        color: white;
    }
`