#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ tmy-ink-cli [command]

	Commands
	  install-custom [file]  Installs custom packages via pacman.

	Options
		--name  Your name

	Examples
	  $ tmy-ink-cli --name=Jane
	  $ tmy-ink-cli install-custom path/to/list
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
		},
	},
);

const isInstallCustom = cli.input[0] === 'install-custom';
const installFile = cli.input[1];

render(<App name={cli.flags.name} installCustom={isInstallCustom} installFile={installFile} />);
