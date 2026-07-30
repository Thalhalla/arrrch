import React, {useEffect} from 'react';
import {Text} from 'ink';
import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';

type Props = {
	name: string | undefined;
	installCustom?: boolean;
	installFile?: string;
};

export default function App({name = 'Stranger', installCustom, installFile}: Props) {
	useEffect(() => {
		if (installCustom) {
			const listPath = installFile ? path.resolve(installFile) : path.join(process.cwd(), 'pkgs/custom.list');
			try {
				const pkgs = fs.readFileSync(listPath, 'utf8').split('\n').filter(Boolean).join(' ');
				const child = spawn('sudo', ['pacman', '-S', ...pkgs.split(' ')], {stdio: 'inherit'});
				child.on('exit', (code) => {
					if (code !== 0) console.error(`Installation failed with code ${code}`);
				});
			} catch (error) {
				console.error(`Error reading file: ${error}`);
			}
		}
	}, [installCustom, installFile]);

	return (
		<Text>
			Hello, <Text color="green">{name}</Text>
		</Text>
	);
}
