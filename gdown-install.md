# gdown - Google Drive File Downloader CLI

## Overview
**gdown** is a Python-based command-line tool to download files and folders directly from Google Drive. It's useful for downloading large files or entire folders without a browser, across multiple operating systems.

---

## Installation

### Prerequisites
- Python 3.x installed
- pip (Python package manager)

---

## Installation Methods by OS

### Linux (Ubuntu, Debian, Fedora, etc.) / WSL

#### 1. Install using pip (system-wide)
```
pip3 install gdown
```
If permission errors occur, use one of these:

#### 2. User-level installation (recommended)
```
pip3 install --user gdown
```
Add `~/.local/bin` to your PATH if needed.

#### 3. Using a Python virtual environment
```
python3 -m venv gdown-env
source gdown-env/bin/activate
pip install gdown
```

#### 4. Using pipx (isolated, app-focused)
```
# Install pipx if not available
sudo apt install pipx        

# Install gdown
pipx install gdown
```

---

### Windows (CMD, PowerShell, WSL)

#### 1. Install via pip (PowerShell or CMD)
```
pip install gdown
```
Or if you have multiple Python versions:
```
python -m pip install gdown
```

#### 2. Using pipx (recommended for isolated installs)
```
pip install pipx
pipx install gdown
```

#### 3. Using Windows Subsystem for Linux (WSL)
Follow Linux/WSL instructions above within the WSL terminal.

---

### macOS

#### 1. Install via pip
```
pip3 install gdown
```

#### 2. Using a Python virtual environment (recommended)
```
python3 -m venv gdown-env
source gdown-env/bin/activate
pip install gdown
```

#### 3. Using pipx
```
brew install pipx           # Install pipx via Homebrew if needed
pipx install gdown
```

---

## Basic Usage

### Download a single file by URL:
```
gdown https://drive.google.com/uc?id=FILE_ID
```

### Download a single file by file ID:
```
gdown --id FILE_ID
```

### Download a folder by URL:
```
gdown --folder https://drive.google.com/drive/folders/FOLDER_ID
```

### Download a folder by folder ID to a specific directory:
```
gdown --folder FOLDER_ID -O /path/to/download
```

---

## Advanced Options

- `--recursive` : Download folder contents recursively including subfolders.
- `--quiet` : Suppress output messages.
- `--unzip` : Automatically unzip downloaded zip archives.
- `--convert` : Convert Google Docs/Sheets/Slides to PDF, CSV, or standard formats.
- `-O, --output` : Specify output filename or directory.
- `--proxy` : Use proxy server for downloads.

---

## Notes

- Files or folders must have “Anyone with the link” access enabled.
- Google Docs formats require `--convert` to export in standard formats.
- For downloading folders with many subfolders, use `--recursive`.

---

## Troubleshooting & Tips

- Use a virtual environment or pipx to avoid system Python conflicts.
- If running into permission issues, download to a user directory first, then move files with elevated permissions.
- Use the full path to the gdown executable when running with sudo.
- Check [GitHub issues](https://github.com/wkentaro/gdown/issues) for community support.

---

## References

- [gdown GitHub repository](https://github.com/wkentaro/gdown)
- [gdown PyPI package info](https://pypi.org/project/gdown/)
- [pipx Official site](https://pipxproject.github.io/pipx/)

---

## Example

Download a shared folder to your home directory:
```
gdown --folder https://drive.google.com/drive/folders/1RIivLjcYBFvwX55JygKQPbtWjZ5NzL_A -O ~/downloads/myfolder
```

---

**Happy downloading!**


This README now includes installation methods suitable across Linux, WSL, Windows, and macOS platforms, along with detailed usage and troubleshooting instructions.