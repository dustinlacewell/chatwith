import React from 'react';

import { Box, Static, Text } from 'ink';
import { Configuration, OpenAIApi } from 'openai';
import { FC, useState } from 'react';
import { z } from 'zod';
import { ChatMessage, ChatMessageT, TextBox } from '../index.js';

const envSchema = z.object({
    OPEN_API_KEY: z.string(),
});
const env = envSchema.parse(process.env);

const configuration = new Configuration({
    apiKey: env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const App: FC = () => {
    const [input, setInput] = useState<string>('');
    const [waiting, setWaiting] = useState<boolean>(false);
    const [history, setHistory] = useState<ChatMessageT[]>([{
        role: 'assistant',
        content: 'Hello, I am a chatbot. How are you doing today?'
    }]);

    const extendHistory = (entries: ChatMessageT[]) => {
        setHistory([...history, ...entries]);
    }

    const onSubmit = async () => {
        setWaiting(true);
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: history,
        });

        if (typeof completion.data.choices[0] === "undefined" || typeof completion.data.choices[0].message === "undefined") {
            return
        }

        const message = completion.data.choices[0].message.content;

        extendHistory([
            { role: "user", content: input },
            { role: "assistant", content: message }
        ]);

        setWaiting(false);
        setInput('');
    };

    const Prompt = () => {
        if (waiting) {
            return <Box width={60} borderStyle="round" borderColor="green">
                <Text>"assistant is thinking..."</Text>
            </Box>
        };
        return <TextBox width={80} value={input} onChange={setInput} onSubmit={onSubmit} />
    }

    return <Box width={80}>
        <Static items={history}>
            {(item, idx) => {
                return <Box key={idx} width={80} justifyContent={item.role === 'user' ? 'flex-end' : 'flex-start'}>
                    <ChatMessage {...item} />
                </Box>
            }}
        </Static>
        <Prompt />
    </Box>
}

