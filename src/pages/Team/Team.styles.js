import { styled } from "styled-components";

export const Wrapper = styled.section`
    width:100%;
    h1 {
        margin-bottom: 40px;
    }
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
    table th {
        font-weight: 500;
        text-transform:uppercase;
        font-size: 15px;
        background: #c5dff6;
    }
    table td {
        font-weight: 300;
    }
    table thead {
        border-top: 1px solid #ccc;
    }
    table tr:hover>* {
        background: #5e6e821a;
    }
    table tr:hover th {
        background: #c5dff6;
    }
    .list-box-name {
        display: flex;
        flex-direction: column;
    }
    .txt-grey {
        color: #6c757d;
        font-size: 14px;
    } 
    .btn-primary {
        background: #0b579a;
        color: #fff;
        border-radius: 5px;
        padding: 10px 20px;
        font-weight: normal;
    }
    h2 {
        font-weight: 400;
    }

`

export const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    button {
        background: #0b579a;
        color: #fff;
        border-radius: 5px;
        padding: 10px 20px;
        font-weight: normal;
        outline: none;
    }

`