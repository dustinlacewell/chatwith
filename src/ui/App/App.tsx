import { FC, useState } from 'react';

import { Text, Box, Static } from 'ink';

import { TextBox } from '@ui';

export const App: FC = () => {
	const [input, setInput] = useState<string>('');

	const onSubmit = () => {
		console.log(input);
		setInput('');
	};
	
	return <Box>
		<Static items={[1]}>
			{() => {
				return <Box key={1}>
					<Text>Conversation goes here.</Text>
				</Box>
			}}
		</Static>
		<TextBox width={80} value={input} onChange={setInput} onSubmit={onSubmit} />
	</Box>
}

