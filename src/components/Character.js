// Write your Character comh3onent here
import React from "react";
import styled from "styled-components";
import img from '../images/pk-bg.jpg'

const CharacterStyle = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${img});
    background-color: rgba(0, 0, 0, 0.85);
    background-blend-mode: color;

    h3 {
        color: white;
        font-size: 1.5rem;
    }

    h1 {
        background-color: white;

        &:hover {
            color: purple;
            transition: all 0.5s ease-in-out;
        }
        transition: all 1s ease-in-out;
    }
`

export default function Character ({character}) {
    return (
        <CharacterStyle>
           <h1> {character.name} </h1>
           <h3>Gender: {character.gender}</h3>
            <h3>Birth year: {character.birth_year} </h3>
            <h3>Eye color: {character.eye_color}</h3>
            <h3>Hair color: {character.hair_color}</h3>
            <h3>Height: {character.height}</h3>
            <a href= {character.homeworld}> {character.homeworld} </a>
            <h3>Skin color: {character.skin_color}</h3>
            <a href={character.sh3ecies}>{character.sh3ecies}</a>
            <h3>Films: {character.films}</h3>
            <h3>Created: {character.created}</h3>
            <h3>Edited: {character.edited}</h3>
            <a href={character.url}> {character.url }</a>
        </CharacterStyle>
    )

}

