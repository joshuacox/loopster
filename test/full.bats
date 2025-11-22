#!/usr/bin/env -S bats -x

setup() {
    # ... the remaining setup is unchanged

    # get the containing directory of this file
    # use $BATS_TEST_FILENAME instead of ${BASH_SOURCE[0]} or $0,
    # as those will point to the bats executable's location or the preprocessed file respectively
    DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )"
    # make executables in src/ visible to PATH
    PATH="$DIR/../src:$PATH"
    export NOUN_FILE=test/test 
    export ADJ_FILE=test/test 
    export SEPARATOR='_'
    export counto=1
}

@test "make clean" {
  make clean
}
@test "make" {
  make
}
@test "make test" {
  make test
}
@test "test loopster at 15" {
  result="$(./loopster -t 'sleep 0.00000000001' -l 'echo 15')"
  echo $result
  [[ "$result" -eq 15 ]]
}
@test "test loopster at 11 loops" {
  result="$(./loopster -t 'test/fail.sh' -l 'echo 11'|wc -l)"
  [[ "$result" -eq 11 ]]
}
@test "test loopster at 33 loops" {
  result="$(./loopster -c 33 -t 'test/fail.sh' -l 'echo 11'|wc -l)"
  [[ "$result" -eq 33 ]]
}
@test "test loopster at 33 loops env vars negate" {
  result="$(COUNT=33 TEST='echo 1' LOOP='echo 33' ./loopster -c 33 -t 'test/fail.sh' -l 'echo 11'|wc -l)"
  echo $result
  [[ "$result" -eq 33 ]]
}
@test "test loopster at 33 loops env vars" {
  result="$(COUNT=33 TEST='test/fail.sh' LOOP='echo 33' ./loopster |wc -l)"
  echo $result
  [[ "$result" -eq 33 ]]
}
@test "test loopster at 1 loop env vars" {
  result="$(COUNT=1 TEST='test/fail.sh' LOOP='echo treesitter' ./loopster)"
  echo $result
  [[ "$result" == "treesitter" ]]
}
@test "sudo make install" {
  sudo make install
}
