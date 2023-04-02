import React from "react";

import { Box } from "ink";
import TextInput from "ink-text-input";

export type TextBoxProps = {
    /**
     * Text to display when `value` is empty.
     */
    placeholder?: string;

    /**
     * Listen to user's input. Useful in case there are multiple input components
     * at the same time and input must be "routed" to a specific component.
     */
    focus?: boolean; // eslint-disable-line react/boolean-prop-naming

    /**
     * Replace all chars and mask the value. Useful for password inputs.
     */
    mask?: string;

    /**
     * Whether to show cursor and allow navigation inside text input with arrow keys.
     */
    showCursor?: boolean; // eslint-disable-line react/boolean-prop-naming

    /**
     * Highlight pasted text
     */
    highlightPastedText?: boolean; // eslint-disable-line react/boolean-prop-naming

    /**
     * Value to display in a text input.
     */
    value: string;

    /**
     * Function to call when value updates.
     */
    onChange: (value: string) => void;

    /**
     * Function to call when `Enter` is pressed, where first argument is a value of the input.
     */
    onSubmit?: (value: string) => void;

    width: number;
};

export const TextBox = (props: TextBoxProps) => {
    return <Box width={props.width} borderStyle="round" borderColor="green">
        <TextInput {...props} />
    </Box>
}
