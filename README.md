# Loopster

**Loopster** is a tiny Bash wrapper that repeatedly runs a *worker* command until a *test* command succeeds, or a configurable maximum number of attempts is reached. It is handy for scenarios such as:

- Waiting for a service to become ready while performing auxiliary work.
- Retrying flaky test suites while generating useful output in the meantime.
- Automating retry loops with customizable verbosity.

## Features

- **Configurable worker and test commands** – supply any shell command.
- **Maximum iteration count** – set a limit or use `0` for unlimited retries.
- **Verbosity control** – `-v`/`--verbose` to increase output, or `--verbosity N` to set a specific level.
- **Help and version information** – `-h/--help` and `-V/--version`.
- **Self‑documenting man page** – `man ./man/loopster.1`.

## Installation

curl -sL https://raw.githubusercontent.com/joshuacox/loopster/refs/heads/master/bootstrap.sh | bash

