# arrrch

A CLI utility built with [Ink](https://github.com/wadymg/ink) and [meow](https://github.com/sindresorhus/meow).

## Installation

To install this utility globally on your system:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd arrrch
   ```

2. Install dependencies:
   ```bash
   pnpm i
   ```

3. Build the project:
   ```bash
   pnpm build
   ```

4. Link the package globally:
   ```bash
   npm link
   ```


## Usage

After installation, you can use the `arrrch` command:

### Basic install
```bash
arrrch install-custom
```

### Install Custom Packages
This command installs packages via `pacman` using a list file.
```bash
arrrch install-custom [path/to/list]
```
If no file is provided, it defaults to `pkgs/custom.list`.
