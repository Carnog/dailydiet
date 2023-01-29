import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 15px;
`;

export const Row = styled.View`
    flex-direction: row;
    margin: 5px 0px;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Gap = styled.View`
    padding: 0px 5px;
`;