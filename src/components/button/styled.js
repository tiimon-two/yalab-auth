import styled from "styled-components";

export const StyledButton = styled.button`
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 6px;
    background-color: #c05805;
    color: #2e2300;
    border: 1px solid #6e6702;
    border-radius: 10px;

    &:hover,
    &:focus {
        border-color: #db9501;
    };

    &:active {
        border-color: #2e2300;
    }
`;