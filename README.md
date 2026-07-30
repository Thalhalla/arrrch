# arrrch

A powerful CLI utility built with [Ink](https://github.com/wadymg/ink) and [meow](https://github.com/sindresorhus/meow).

## 🚀 Getting Started

### Prerequisites

Ensure you have [pnpm](https://pnpm.io/installation) installed on your system:
```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### Installation

To install `arrrch` globally as a CLI utility:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Thalhalla/arrrch.git
   cd arrrch
   ```

2. **Install dependencies & Build**
   Using pnpm for fast, disk-efficient package management:
   ```bash
   pnpm i
   pnpm build
   ```

3. **Link globally**
   Make the command available system-wide:
   ```bash
   pnpm link --global
   ```

## 🛠 Usage

Once installed, you can invoke the utility using the `arrrch` command.

### Custom Package Installation
Efficiently install system packages via `pacman`.

**Using a custom list:**
```bash
```
arrrch install-custom /path/to/your/packages.list
