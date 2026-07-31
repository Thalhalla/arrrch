#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ arrrch [command]

	Commands
	  install-custom [file]  Installs custom packages via pacman.

	Options
		--name  Your name

	Examples
	  $ arrrch --name=Jane
	  $ arrrch install-custom path/to/list
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
const installFiles = isInstallCustom ? cli.input.slice(1) : undefined;

render(<App name={cli.flags.name} installCustom={isInstallCustom} installFiles={installFiles} />);
