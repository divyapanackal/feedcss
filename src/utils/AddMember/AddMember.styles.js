import { styled } from "styled-components";

export const FormBox = styled.form`
display: flex;
row-gap: 20px;
flex-direction: column;
    input {
        border: 1px solid #dce0e5;
        padding: 10px;
        border-radius: 5px;
        font-size: 16px;
        outline: none;
        width: 100%;
    }
    label {
        margin-bottom: 4px;
        display:block;
    }

`

export const FlexCol = styled.div`
    display: flex;
    column-gap: 20px;
    width: 100%;

    .form-row {
        flex: 1 0 auto;
    }

`