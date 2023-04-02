import { Box } from "ink";
import { TextInput, TextInputProps } from "../TextInput";


export type TextBoxProps = TextInputProps & {
    width: number;
}

export const TextBox = (props: TextBoxProps) => {
    return <Box width={props.width} borderStyle="round" borderColor="green">
        <TextInput {...props} />
    </Box>
}