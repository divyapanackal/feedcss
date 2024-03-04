import { styled } from "styled-components";

export const Wrapper = styled.section`
width: 100%;
display: flex;
column-gap: 1px;
margin-top: -31px;
    ul {
        list-style: none;
    }
    .two-col {
        display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;
    }
    .two-col li{
        display:flex;
        width:100%;
        column-gap:20px;
    }
    .two-col li div {
        flex: 0 0 calc(50% - 20px);
    }
`

export const Aside = styled.aside`
padding-top: 65px;
max-width: 330px;
width: 100%;
box-shadow: 0px 0px 12px 1px #ccccccd1;
  

    .prof-img {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 4px;
    }
    img {
        width: 128px;
        border-radius: 50%;
        height: 128px;
        object-fit: cover;
    }
    hr {
        margin: 20px 0;
    }
    
 
    .spc-2 {
        padding: 20px 30px;
    }

`

export const BoxWrap = styled.div`
max-width: 100%;
width: 100%;
box-shadow: 3px 0px 12px 1px #ccccccd1;
padding: 36px 40px;
.two-col li div {
    max-width: 150px;
}
.skill-tag {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.skill-tag li {
    background: #0b579a;
    color: #fff;
    border-radius: 5px;
    padding: 2px 11px;
    font-size: 14px;
}
`

export const Box = styled.div`
    margin-bottom: 20px;
    h2 {
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .proj-info-box {
        display: flex;
        column-gap: 40px;
    }
    .chart-box svg {
        max-width: 110px;
    }
`

export const TopBox = styled.div`
position: relative;
display: flex;
padding: 30px 30px 0 30px;

.top-bg {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.prof-img-wrap {
    position: relative;
    top: 25px;
}
.prof-img-wrap img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: 10px solid #fff;
    box-shadow: 1px 1px 6px 0px #000000;
}
.prof-name-info {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    color: #fff;
    font-size: 20px;
    padding-top: 38px;
    font-weight: 200;
}
.prof-name-info strong {
    font-size: 24px;
}
`
export const SubTitle = styled.h2`
margin-bottom: 20px;
`