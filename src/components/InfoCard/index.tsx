import { Container, Label, Number, InfoTypeStyleProps } from "./styles";

type Props = {
    value: string,
    label: string,
    type?: InfoTypeStyleProps
}

export function InfoCard({ label, value, type = 'NEUTRAL' }: Props) {
    return (
        <Container type={type}>
            <Number>
                {value}
            </Number>
            <Label>
                {label}
            </Label>
        </Container>
    );
}