import  React  from "react";
import { Text } from "react-native";
import Proptypes from "prop-types";

type PropsComponent = {
    firstName: string,
    lastName: string,
}

export default function Saludar({ firstName, lastName }: PropsComponent): React.JSX.Element {
    return <Text>Hola {firstName} {lastName}</Text>
}

//valores por defecto cuando las props vienen vacias
Saludar.defaultProps = {
    firstName: "Usuario",
    lastName: "1",
}

//tipos de datos aceptados
Saludar.propTypes = {
    firstName: Proptypes.string.isRequired,
    lastName: Proptypes.string,
}