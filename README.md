# Loopster

[![ShellCheck & Tests](https://github.com/joshuacox/loopster/actions/workflows/test.yml/badge.svg)](https://github.com/joshuacox/loopster/actions/workflows/test.yml)
[![Docs](https://github.com/joshuacox/loopster/actions/workflows/nextjs.yml/badge.svg)](https://joshuacox.github.io/loopster/)

**Loopster** is a resilient Bash automation utility that repeatedly runs a *worker* command until a *test* command succeeds (returns exit code 0), or a configurable maximum number of attempts is reached.

🌐 **Documentation & Interactive Command Generator**: [https://joshuacox.github.io/loopster](https://joshuacox.github.io/loopster)

---

## Key Use Cases

- **Service Readiness & Healthchecks**: Waiting for a Docker container or remote database to become ready with optional exponential backoff.
- **Flaky Test Retries**: Automatically retrying intermittent test suites in CI/CD pipelines while generating formatted diagnostics.
- **AI Agent Loops**: Running iterative coding prompts (e.g., Aider, Claude Code) until test suites pass.
- **Safe Teardown Hooks**: Triggering dedicated failure or success cleanups upon completion or unexpected interruption.

---

## Installation

### One-line Quick Install
```bash
curl -sL https://raw.githubusercontent.com/joshuacox/loopster/refs/heads/main/bootstrap.sh | bash
```

### Build & Install via CMake
```bash
git clone https://github.com/joshuacox/loopster.git
cd loopster
cmake .
make
sudo make install

# Generate .deb and .tar.gz packages
cpack
```

---

## Options

| Flag | Default | Env Var Fallback | Description |
| :--- | :--- | :--- | :--- |
| `-c, --count <N>` | `11` | `$COUNT` | Maximum retry attempts |
| `-t, --test <cmd>` | `echo ./test.sh` | `$TEST` | Verification command (succeeds on exit code `0`) |
| `-l, --loop <cmd>` | `echo ./iter.sh` | `$LOOP` | Worker command executed each iteration |
| `-w, --wait <sec>` | `0` | `$WAIT` | Delay in seconds between iterations |
| `--backoff <factor>` | `1` | `$BACKOFF` | Multiplier factor for wait time on consecutive failures |
| `--max-wait <sec>` | `0` | `$MAX_WAIT` | Upper cap on wait interval when backoff is applied |
| `--infinite` | `false` | `$INFINITE` | Run continuously until test succeeds |
| `--success-cleanup <cmd>` | `echo success` | `$SUCCESS_CLEANUP` | Hook executed when test passes |
| `--fail-cleanup <cmd>` | `echo fail` | `$FAIL_CLEANUP` | Hook executed if attempts are exhausted or interrupted |
| `-v, --verbose` | `0` | `$VERBOSITY` | Increase verbosity level (`#` squawk padding) |
| `--verbosity <lvl>` | `0` | `$VERBOSITY` | Set numeric squawk verbosity level |
| `--debug` | `false` | - | Enable debug tracing (`set -x`) |
| `-V, --version` | - | - | Print version and exit |
| `-h, --help` | - | - | Print options and usage help |

---

## Exit Codes

- `0`: Test command succeeded.
- `1`: Maximum retry count reached without test passing.
- `130`: Interrupted by `SIGINT` (Ctrl+C) or `SIGTERM` (fail cleanup hook executed).

---

## Example Usage

### 1. Wait for Local Service with Exponential Backoff
```bash
loopster \
  --test "curl -fsS http://localhost:8080/healthz" \
  --loop "echo 'Waiting for service container to boot...'" \
  --wait 2 \
  --backoff 2 \
  --max-wait 30 \
  --count 15 \
  --success-cleanup "./run-migrations.sh" \
  --fail-cleanup "docker-compose logs --tail 100"
```

### 2. Autonomous AI Coding Loop
```bash
loopster \
  --count 10 \
  --loop "aider --file src/main.c -m 'fix test compilation and pass all assertions'" \
  --test "make clean && make && ./test_suite" \
  --success-cleanup "git checkout -b fix-success && git commit -am 'Automated fix succeeded'" \
  --fail-cleanup "git checkout -b fix-failed"
```

---

## License

GPL-3.0 License.
