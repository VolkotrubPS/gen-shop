import styled from "styled-components";

export const SlideBtn = styled.button`
    border:none;
    background: none;
    padding:${({ padding }) => (padding ? padding : "auto")};
    cursor: pointer;
    outline:none;
    z-index:150;

    position: absolute;
    top:50%;
    transform: translateY(-50%)
    ${({ rotate }) => (rotate ? "rotate(180deg);" : null)};
    ${({ rotate }) => (rotate ? "right: 13px;" : null)};
    
`;


export const Arrow = styled.div`
    width: 9px;
    height: 9px;
    border-style: solid;
    border-width: 0 0 2px 2px;
    border-color: white;
    transform: rotate(45deg);
   

`;

export const SlideItem= styled.div`
    height: 120px;
    width: 160px;


    & > *{
        width: 100%;
        height: 100%;
    }
    
`;

export const Container = styled.div`
    position: relative;
    background-color: white;
    border: none;
    overflow-x: hidden;
    width: ${({ width }) => (width ? width : "auto")};
    height: ${({ height }) => (height ? height : "auto")};

`;

export const ContainerItem = styled.div`
    width: ${({ width }) => (width ? width : "auto")};
    height: ${({ height }) => (height ? height : "auto")};

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const CarouselTrack = styled.div`
    display: flex;
    width: max-content;

    transition: 0.2s liner transform;

    ${({transform}) => transform 
    ? `transform: translateX(${transform});`
    : `transform: translateX(0);`}
`;