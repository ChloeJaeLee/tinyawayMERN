import styled from "styled-components";

export const Pill = styled.div`
    background-color: var(--corpYellow); 
    color: var(--corpDarkGrey2); 
    font-size: 21px; 
    display: inline-block;
    align-content: center; 
    border-radius: 2rem; 
    padding: 10px 20px; 

    &:hover {
        background-color: var(--corpYellowHover); 
        color: black; 
    }

    &.whitePill {
        background-color: white; 
        color: var(--corpDarkGrey2); 

        &:hover {
            background-color: var(--corpYellow); 
            color: black; 
        }
    }

    &.noChange {
        background-color: transparent; 
        color: var(--corpLightGrey2);
        margin-top: 50px; 
        border: 1px solid var(--corpLightGrey2);  
    }
`