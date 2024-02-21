import { styled } from "styled-components";

export const Wrapper = styled.section`
    width:100%;
    ul {
        list-style:none;
    }
    table {
        border-collapse: collapse;
        width:100%;
    }
    .flex-box {
        display:flex;
        column-gap: 12px;
        align-items: center;
    }
    .list-box h4 {
        font-size: 18px;
    }
    .list-box-avatar {
        display:flex;
    }
    .list-box-avatar img {
        width: 52px;
        height: 52px;
        object-fit:cover;
        border: 4px solid #fff;
        border-radius: 50%;
        box-shadow: 0px 0px 10px 0px #1313135e;
    }
    table td, table th {
        padding: 12px;
        border-bottom: 1px solid #ccc;
        text-align: left;
    }
    table thead {
        border-top: 1px solid #ccc;
    }
    table tr:hover>* {
        background: #5e6e821a;
    }
    .list-box-name {
        display: flex;
        flex-direction: column;
    }
    .txt-grey {
        color: #6c757d;
    } 

`
export const Button = styled.button`
    background: #3874ff;
    color: #fff;
    a {
        color: #fff;
    }
`