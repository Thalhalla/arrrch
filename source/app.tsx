import React, {useEffect} from 'react';
import {Text} from 'ink';
import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';

type Props = {
	name: string | undefined;
	installCustom?: boolean;
	installFiles?: string[];
};

export default function App({name = 'Arrrch', installCustom, installFiles}: Props) {
	useEffect(() => {
		if (installCustom) {
			const paths = installFiles && installFiles.length > 0
				? installFiles.map(f => path.resolve(f))
				: [path.join(process.cwd(), 'examples/custom.list')];

			try {
				const pkgs = paths
					.map(p => fs.readFileSync(p, 'utf8'))
					.join('\n')
					.split('\n')
					.filter(Boolean)
					.join(' ');

				const child = spawn('sudo', ['pacman', '-S', ...pkgs.split(' ')], {stdio: 'inherit'});
				child.on('exit', (code) => {
					if (code !== 0) console.error(`Installation failed with code ${code}`);
				});
			} catch (error) {
				console.error(`Error reading file: ${error}`);
			}
		}
	}, [installCustom, installFiles]);

	return (
		<Text>
			Running, <Text color="green">{name}</Text>
		</Text>
	);
}
