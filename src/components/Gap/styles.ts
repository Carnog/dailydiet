import styled from "styled-components/native";

export type GapStyleProp = {
    x: Number,
    y: Number,
}

type Props = GapStyleProp

export const Container = styled.View<Props>`
    padding: ${({ theme, x, y }) => `${y}px ${x}px`};
`;