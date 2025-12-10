# Loopster

**Loopster** is a tiny Bash wrapper that repeatedly runs a *worker* command until a *test* command succeeds, or a configurable maximum number of attempts is reached. It is handy for scenarios such as:

- Waiting for a service to become ready while performing auxiliary work.
- Retrying flaky test suites while generating useful output in the meantime.
- Automating retry loops with customizable verbosity.

## options 

--debug - set debug mode
-h --help - print help info
-c|--count - set the loop count max
-l|--loop - set what to do during each loop
-t|--test - set the test for success
--fail-cleanup - set the cleanup task on fail
--success-cleanup - set the cleanup task on success
--infinite - set the loop max to infinite
-o|--opts - set extra ops
-w|--wait - set how long to wait
-v|--verbose - increase verbosity
--verbosity - set verbosity

- **Verbosity control** – `-v`/`--verbose` to increase output, or `--verbosity N` to set a specific level.

: "${TEST:=echo ./test.sh}"
: "${LOOP:=echo ./iter.sh}"
: "${COUNT:=11}"
: "${WAIT:=0}"
: "${INFINITE:='false'}"
: "${FAIL_CLEANUP:=echo fail}"
: "${SUCCESS_CLEANUP:=echo success}"

## Installation

 curl -sL https://raw.githubusercontent.com/joshuacox/loopster/refs/heads/main/bootstrap.sh | bash
