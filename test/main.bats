#!/usr/bin/env -S bats -x

setup() {
    # get the containing directory of this file
    DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )"
    PATH="$DIR/..:$PATH"
    export LOOP='sleep 0.00000001' 
    export TEST='sleep 0.00000001' 
    export WAIT='0'
    export COUNT=1
}

@test "make clean" {
  make clean || true
}
@test "make" {
  make || true
}
@test "make test" {
  make test || true
}
@test "test loopster at 15" {
  result="$(./loopster -t 'sleep 0.00000000001' -l 'echo 15')"
  echo "$result"
  [[ "$result" =~ 15 ]]
}
@test "test loopster --version" {
  run ./loopster --version
  [ "$status" -eq 0 ]
  [[ "$output" =~ "loopster 1.0.0" ]]
}
@test "test loopster --help" {
  run ./loopster --help
  [ "$status" -eq 0 ]
  [[ "$output" =~ "Usage: loopster" ]]
  [[ "$output" =~ "--count" ]]
}
@test "test loopster at 11 loops" {
  result="$(./loopster -c 11 -t 'test/fail.sh' -l 'echo 11' | grep '^11$' | wc -l)"
  [[ "$result" -eq 11 ]]
}
@test "test loopster at 33 loops" {
  result="$(./loopster -c 33 -t 'test/fail.sh' -l 'echo 11' | grep '^11$' | wc -l)"
  [[ "$result" -eq 33 ]]
}
@test "test loopster at 33 loops env vars negate" {
  result="$(COUNT=33 TEST='echo 1' LOOP='echo 33' ./loopster -c 33 -t 'test/fail.sh' -l 'echo 11' | grep '^11$' | wc -l)"
  echo "$result"
  [[ "$result" -eq 33 ]]
}
@test "test loopster at 33 loops env vars" {
  result="$(COUNT=33 TEST='test/fail.sh' LOOP='echo 33' ./loopster | grep '^33$' | wc -l)"
  echo "$result"
  [[ "$result" -eq 33 ]]
}
@test "test loopster at 1 loop env vars" {
  result="$(COUNT=1 TEST='test/fail.sh' LOOP='echo treesitter' ./loopster | head -n 1)"
  echo "$result"
  [[ "$result" == "treesitter" ]]
}
@test "test loopster piped test command execution" {
  run ./loopster -t "echo 'hello world' | grep -q 'world'" -l "echo working" -c 3
  [ "$status" -eq 0 ]
  [[ "$output" =~ "working" ]]
}
@test "test loopster does not re-run test on exit" {
  TMPFILE=$(mktemp)
  ./loopster -t "echo 1 >> '$TMPFILE'; true" -l "echo once" -c 5
  count=$(wc -l < "$TMPFILE")
  rm -f "$TMPFILE"
  [ "$count" -eq 1 ]
}
