import { FC, useState } from 'react';

import { Box, Static } from 'ink';

import { ChatMessage, TextBox } from '@ui';

export type ChatMessageData = {
	author: 'You' | 'AI';
	message: string;
}

export const App: FC = () => {
	const [input, setInput] = useState<string>('');
	const [history, setHistory] = useState<ChatMessageData[]>([{
		author: 'AI',
		message: 'Hello, I am a chatbot. How are you doing today?'
	}]);

	const onSubmit = () => {
		setHistory([...history, { author: 'You', message: input }]);
		setInput('');
	};
	
	return <Box width={80}>
		<Static items={history}>
			{(item, idx) => {
				return <Box key={idx} width={80} justifyContent={item.author === 'You' ? 'flex-end': 'flex-start'}>
					<ChatMessage {...item} />
				</Box>
			}}
		</Static>
		<TextBox width={80} value={input} onChange={setInput} onSubmit={onSubmit} />
	</Box>
}

