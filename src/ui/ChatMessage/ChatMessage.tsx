

// ChatMessage.tsx

import { Box, Text} from "ink";

export type ChatMessageProps = {
    author: "You" | "AI";
    message: string;
}

export const ChatMessage = (props: ChatMessageProps) => {
    return <Box width={60} borderStyle="round" flexDirection="column" alignItems={props.author === 'You' ? "flex-end" : "flex-start"}>
        <Text>{props.author}: {props.message}</Text>
    </Box>
}