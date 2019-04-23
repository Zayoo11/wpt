// META: global=jsshell
// META: script=/wasm/core/harness.js

// float_memory.wast:5
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x03\x60\x00\x01\x7d\x60\x00\x01\x7f\x60\x00\x00\x03\x86\x80\x80\x80\x00\x05\x00\x01\x02\x02\x02\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\xb7\x80\x80\x80\x00\x05\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x00\x08\x69\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x09\x66\x33\x32\x2e\x73\x74\x6f\x72\x65\x00\x02\x09\x69\x33\x32\x2e\x73\x74\x6f\x72\x65\x00\x03\x05\x72\x65\x73\x65\x74\x00\x04\x0a\xca\x80\x80\x80\x00\x05\x87\x80\x80\x80\x00\x00\x41\x00\x2a\x02\x00\x0b\x87\x80\x80\x80\x00\x00\x41\x00\x28\x02\x00\x0b\x8c\x80\x80\x80\x00\x00\x41\x00\x43\x00\x00\xa0\x7f\x38\x02\x00\x0b\x8d\x80\x80\x80\x00\x00\x41\x00\x41\x80\x80\x80\xfd\x07\x36\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x00\x41\x00\x36\x02\x00\x0b\x0b\x8a\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x04\x00\x00\xa0\x7f");

// float_memory.wast:15
assert_return(() => call($1, "i32.load", []), 2141192192);

// float_memory.wast:16
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x31\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\xa0\x7f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "f32.load", []), NaN)

// float_memory.wast:17
run(() => call($1, "reset", []));

// float_memory.wast:18
assert_return(() => call($1, "i32.load", []), 0);

// float_memory.wast:19
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x31\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "f32.load", []), 0.)

// float_memory.wast:20
run(() => call($1, "f32.store", []));

// float_memory.wast:21
assert_return(() => call($1, "i32.load", []), 2141192192);

// float_memory.wast:22
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x31\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\xa0\x7f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "f32.load", []), NaN)

// float_memory.wast:23
run(() => call($1, "reset", []));

// float_memory.wast:24
assert_return(() => call($1, "i32.load", []), 0);

// float_memory.wast:25
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x31\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "f32.load", []), 0.)

// float_memory.wast:26
run(() => call($1, "i32.store", []));

// float_memory.wast:27
assert_return(() => call($1, "i32.load", []), 2141192192);

// float_memory.wast:28
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x31\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\xa0\x7f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "f32.load", []), NaN)

// float_memory.wast:30
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x03\x60\x00\x01\x7c\x60\x00\x01\x7e\x60\x00\x00\x03\x86\x80\x80\x80\x00\x05\x00\x01\x02\x02\x02\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\xb7\x80\x80\x80\x00\x05\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x00\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x09\x66\x36\x34\x2e\x73\x74\x6f\x72\x65\x00\x02\x09\x69\x36\x34\x2e\x73\x74\x6f\x72\x65\x00\x03\x05\x72\x65\x73\x65\x74\x00\x04\x0a\xd3\x80\x80\x80\x00\x05\x87\x80\x80\x80\x00\x00\x41\x00\x2b\x03\x00\x0b\x87\x80\x80\x80\x00\x00\x41\x00\x29\x03\x00\x0b\x90\x80\x80\x80\x00\x00\x41\x00\x44\x00\x00\x00\x00\x00\x00\xf4\x7f\x39\x03\x00\x0b\x92\x80\x80\x80\x00\x00\x41\x00\x42\x80\x80\x80\x80\x80\x80\x80\xfa\xff\x00\x37\x03\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x00\x42\x00\x37\x03\x00\x0b\x0b\x8e\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x08\x00\x00\x00\x00\x00\x00\xf4\x7f");

// float_memory.wast:40
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x32\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa0\x80\x80\x80\x00\x01\x9a\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x80\x80\x80\x80\x80\x80\x80\xfa\xff\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_return(() => call($2, "i64.load", []), int64("9219994337134247936"))

// float_memory.wast:41
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x32\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\xf4\x7f\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_return(() => call($2, "f64.load", []), NaN)

// float_memory.wast:42
run(() => call($2, "reset", []));

// float_memory.wast:43
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x32\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_return(() => call($2, "i64.load", []), int64("0"))

// float_memory.wast:44
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x32\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x00\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_return(() => call($2, "f64.load", []), 0.)

// float_memory.wast:45
run(() => call($2, "f64.store", []));

// float_memory.wast:46
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x32\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa0\x80\x80\x80\x00\x01\x9a\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x80\x80\x80\x80\x80\x80\x80\xfa\xff\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_return(() => call($2, "i64.load", []), int64("9219994337134247936"))

// float_memory.wast:47
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x32\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\xf4\x7f\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_return(() => call($2, "f64.load", []), NaN)

// float_memory.wast:48
run(() => call($2, "reset", []));

// float_memory.wast:49
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x32\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_return(() => call($2, "i64.load", []), int64("0"))

// float_memory.wast:50
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x32\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x00\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_return(() => call($2, "f64.load", []), 0.)

// float_memory.wast:51
run(() => call($2, "i64.store", []));

// float_memory.wast:52
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x32\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa0\x80\x80\x80\x00\x01\x9a\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x80\x80\x80\x80\x80\x80\x80\xfa\xff\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_return(() => call($2, "i64.load", []), int64("9219994337134247936"))

// float_memory.wast:53
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x32\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\xf4\x7f\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_return(() => call($2, "f64.load", []), NaN)

// float_memory.wast:57
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x03\x60\x00\x01\x7d\x60\x00\x01\x7f\x60\x00\x00\x03\x86\x80\x80\x80\x00\x05\x00\x01\x02\x02\x02\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\xb7\x80\x80\x80\x00\x05\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x00\x08\x69\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x09\x66\x33\x32\x2e\x73\x74\x6f\x72\x65\x00\x02\x09\x69\x33\x32\x2e\x73\x74\x6f\x72\x65\x00\x03\x05\x72\x65\x73\x65\x74\x00\x04\x0a\xca\x80\x80\x80\x00\x05\x87\x80\x80\x80\x00\x00\x41\x01\x2a\x02\x00\x0b\x87\x80\x80\x80\x00\x00\x41\x01\x28\x02\x00\x0b\x8c\x80\x80\x80\x00\x00\x41\x01\x43\x00\x00\xa0\x7f\x38\x02\x00\x0b\x8d\x80\x80\x80\x00\x00\x41\x01\x41\x80\x80\x80\xfd\x07\x36\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x01\x41\x00\x36\x02\x00\x0b\x0b\x8b\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x05\x00\x00\x00\xa0\x7f");

// float_memory.wast:67
assert_return(() => call($3, "i32.load", []), 2141192192);

// float_memory.wast:68
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x33\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\xa0\x7f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "f32.load", []), NaN)

// float_memory.wast:69
run(() => call($3, "reset", []));

// float_memory.wast:70
assert_return(() => call($3, "i32.load", []), 0);

// float_memory.wast:71
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x33\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "f32.load", []), 0.)

// float_memory.wast:72
run(() => call($3, "f32.store", []));

// float_memory.wast:73
assert_return(() => call($3, "i32.load", []), 2141192192);

// float_memory.wast:74
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x33\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\xa0\x7f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "f32.load", []), NaN)

// float_memory.wast:75
run(() => call($3, "reset", []));

// float_memory.wast:76
assert_return(() => call($3, "i32.load", []), 0);

// float_memory.wast:77
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x33\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "f32.load", []), 0.)

// float_memory.wast:78
run(() => call($3, "i32.store", []));

// float_memory.wast:79
assert_return(() => call($3, "i32.load", []), 2141192192);

// float_memory.wast:80
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x33\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\xa0\x7f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_return(() => call($3, "f32.load", []), NaN)

// float_memory.wast:82
let $4 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x03\x60\x00\x01\x7c\x60\x00\x01\x7e\x60\x00\x00\x03\x86\x80\x80\x80\x00\x05\x00\x01\x02\x02\x02\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\xb7\x80\x80\x80\x00\x05\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x00\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x09\x66\x36\x34\x2e\x73\x74\x6f\x72\x65\x00\x02\x09\x69\x36\x34\x2e\x73\x74\x6f\x72\x65\x00\x03\x05\x72\x65\x73\x65\x74\x00\x04\x0a\xd3\x80\x80\x80\x00\x05\x87\x80\x80\x80\x00\x00\x41\x01\x2b\x03\x00\x0b\x87\x80\x80\x80\x00\x00\x41\x01\x29\x03\x00\x0b\x90\x80\x80\x80\x00\x00\x41\x01\x44\x00\x00\x00\x00\x00\x00\xf4\x7f\x39\x03\x00\x0b\x92\x80\x80\x80\x00\x00\x41\x01\x42\x80\x80\x80\x80\x80\x80\x80\xfa\xff\x00\x37\x03\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x01\x42\x00\x37\x03\x00\x0b\x0b\x8f\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x09\x00\x00\x00\x00\x00\x00\x00\xf4\x7f");

// float_memory.wast:92
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x34\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa0\x80\x80\x80\x00\x01\x9a\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x80\x80\x80\x80\x80\x80\x80\xfa\xff\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$4", $4)),  "run", []));  // assert_return(() => call($4, "i64.load", []), int64("9219994337134247936"))

// float_memory.wast:93
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x34\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\xf4\x7f\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$4", $4)),  "run", []));  // assert_return(() => call($4, "f64.load", []), NaN)

// float_memory.wast:94
run(() => call($4, "reset", []));

// float_memory.wast:95
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x34\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$4", $4)),  "run", []));  // assert_return(() => call($4, "i64.load", []), int64("0"))

// float_memory.wast:96
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x34\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x00\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$4", $4)),  "run", []));  // assert_return(() => call($4, "f64.load", []), 0.)

// float_memory.wast:97
run(() => call($4, "f64.store", []));

// float_memory.wast:98
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x34\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa0\x80\x80\x80\x00\x01\x9a\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x80\x80\x80\x80\x80\x80\x80\xfa\xff\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$4", $4)),  "run", []));  // assert_return(() => call($4, "i64.load", []), int64("9219994337134247936"))

// float_memory.wast:99
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x34\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\xf4\x7f\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$4", $4)),  "run", []));  // assert_return(() => call($4, "f64.load", []), NaN)

// float_memory.wast:100
run(() => call($4, "reset", []));

// float_memory.wast:101
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x34\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$4", $4)),  "run", []));  // assert_return(() => call($4, "i64.load", []), int64("0"))

// float_memory.wast:102
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x34\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x00\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$4", $4)),  "run", []));  // assert_return(() => call($4, "f64.load", []), 0.)

// float_memory.wast:103
run(() => call($4, "i64.store", []));

// float_memory.wast:104
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x34\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa0\x80\x80\x80\x00\x01\x9a\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x80\x80\x80\x80\x80\x80\x80\xfa\xff\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$4", $4)),  "run", []));  // assert_return(() => call($4, "i64.load", []), int64("9219994337134247936"))

// float_memory.wast:105
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x34\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\xf4\x7f\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$4", $4)),  "run", []));  // assert_return(() => call($4, "f64.load", []), NaN)

// float_memory.wast:109
let $5 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x03\x60\x00\x01\x7d\x60\x00\x01\x7f\x60\x00\x00\x03\x86\x80\x80\x80\x00\x05\x00\x01\x02\x02\x02\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\xb7\x80\x80\x80\x00\x05\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x00\x08\x69\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x09\x66\x33\x32\x2e\x73\x74\x6f\x72\x65\x00\x02\x09\x69\x33\x32\x2e\x73\x74\x6f\x72\x65\x00\x03\x05\x72\x65\x73\x65\x74\x00\x04\x0a\xca\x80\x80\x80\x00\x05\x87\x80\x80\x80\x00\x00\x41\x00\x2a\x02\x00\x0b\x87\x80\x80\x80\x00\x00\x41\x00\x28\x02\x00\x0b\x8c\x80\x80\x80\x00\x00\x41\x00\x43\x01\x00\xd0\x7f\x38\x02\x00\x0b\x8d\x80\x80\x80\x00\x00\x41\x00\x41\x81\x80\xc0\xfe\x07\x36\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x00\x41\x00\x36\x02\x00\x0b\x0b\x8a\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x04\x01\x00\xd0\x7f");

// float_memory.wast:119
assert_return(() => call($5, "i32.load", []), 2144337921);

// float_memory.wast:120
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x35\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x01\x00\xd0\x7f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$5", $5)),  "run", []));  // assert_return(() => call($5, "f32.load", []), NaN)

// float_memory.wast:121
run(() => call($5, "reset", []));

// float_memory.wast:122
assert_return(() => call($5, "i32.load", []), 0);

// float_memory.wast:123
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x35\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$5", $5)),  "run", []));  // assert_return(() => call($5, "f32.load", []), 0.)

// float_memory.wast:124
run(() => call($5, "f32.store", []));

// float_memory.wast:125
assert_return(() => call($5, "i32.load", []), 2144337921);

// float_memory.wast:126
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x35\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x01\x00\xd0\x7f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$5", $5)),  "run", []));  // assert_return(() => call($5, "f32.load", []), NaN)

// float_memory.wast:127
run(() => call($5, "reset", []));

// float_memory.wast:128
assert_return(() => call($5, "i32.load", []), 0);

// float_memory.wast:129
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x35\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$5", $5)),  "run", []));  // assert_return(() => call($5, "f32.load", []), 0.)

// float_memory.wast:130
run(() => call($5, "i32.store", []));

// float_memory.wast:131
assert_return(() => call($5, "i32.load", []), 2144337921);

// float_memory.wast:132
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x35\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x01\x00\xd0\x7f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$5", $5)),  "run", []));  // assert_return(() => call($5, "f32.load", []), NaN)

// float_memory.wast:134
let $6 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x03\x60\x00\x01\x7c\x60\x00\x01\x7e\x60\x00\x00\x03\x86\x80\x80\x80\x00\x05\x00\x01\x02\x02\x02\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\xb7\x80\x80\x80\x00\x05\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x00\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x09\x66\x36\x34\x2e\x73\x74\x6f\x72\x65\x00\x02\x09\x69\x36\x34\x2e\x73\x74\x6f\x72\x65\x00\x03\x05\x72\x65\x73\x65\x74\x00\x04\x0a\xd3\x80\x80\x80\x00\x05\x87\x80\x80\x80\x00\x00\x41\x00\x2b\x03\x00\x0b\x87\x80\x80\x80\x00\x00\x41\x00\x29\x03\x00\x0b\x90\x80\x80\x80\x00\x00\x41\x00\x44\x01\x00\x00\x00\x00\x00\xfc\x7f\x39\x03\x00\x0b\x92\x80\x80\x80\x00\x00\x41\x00\x42\x81\x80\x80\x80\x80\x80\x80\xfe\xff\x00\x37\x03\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x00\x42\x00\x37\x03\x00\x0b\x0b\x8e\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x08\x01\x00\x00\x00\x00\x00\xfc\x7f");

// float_memory.wast:144
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x36\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa0\x80\x80\x80\x00\x01\x9a\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x81\x80\x80\x80\x80\x80\x80\xfe\xff\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$6", $6)),  "run", []));  // assert_return(() => call($6, "i64.load", []), int64("9222246136947933185"))

// float_memory.wast:145
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x36\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x01\x00\x00\x00\x00\x00\xfc\x7f\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$6", $6)),  "run", []));  // assert_return(() => call($6, "f64.load", []), NaN)

// float_memory.wast:146
run(() => call($6, "reset", []));

// float_memory.wast:147
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x36\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$6", $6)),  "run", []));  // assert_return(() => call($6, "i64.load", []), int64("0"))

// float_memory.wast:148
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x36\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x00\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$6", $6)),  "run", []));  // assert_return(() => call($6, "f64.load", []), 0.)

// float_memory.wast:149
run(() => call($6, "f64.store", []));

// float_memory.wast:150
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x36\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa0\x80\x80\x80\x00\x01\x9a\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x81\x80\x80\x80\x80\x80\x80\xfe\xff\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$6", $6)),  "run", []));  // assert_return(() => call($6, "i64.load", []), int64("9222246136947933185"))

// float_memory.wast:151
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x36\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x01\x00\x00\x00\x00\x00\xfc\x7f\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$6", $6)),  "run", []));  // assert_return(() => call($6, "f64.load", []), NaN)

// float_memory.wast:152
run(() => call($6, "reset", []));

// float_memory.wast:153
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x36\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$6", $6)),  "run", []));  // assert_return(() => call($6, "i64.load", []), int64("0"))

// float_memory.wast:154
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x36\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x00\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$6", $6)),  "run", []));  // assert_return(() => call($6, "f64.load", []), 0.)

// float_memory.wast:155
run(() => call($6, "i64.store", []));

// float_memory.wast:156
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x36\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa0\x80\x80\x80\x00\x01\x9a\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x81\x80\x80\x80\x80\x80\x80\xfe\xff\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$6", $6)),  "run", []));  // assert_return(() => call($6, "i64.load", []), int64("9222246136947933185"))

// float_memory.wast:157
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x8f\x80\x80\x80\x00\x01\x02\x24\x36\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x01\x00\x00\x00\x00\x00\xfc\x7f\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$6", $6)),  "run", []));  // assert_return(() => call($6, "f64.load", []), NaN)
