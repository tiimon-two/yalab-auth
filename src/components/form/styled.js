import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid #6e6702;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 100px;
    background-color: #db9501;
`;

export const Title = styled.h1`
    margin: 0;
    padding: 0;
    padding-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    color: #2e2300;
`;

export const Input = styled.input`
    width: 200px;
    padding: 6px;
    background-color: #ffffff;
    text-align: right;
    border: 1px solid #6e6702;

    &:hover,
    &:focus,
    &active {
        border-color: #db9501;
    }
`;

export const Label = styled.label`
    margin: 0 auto;
    margin-bottom: 20px;
`;