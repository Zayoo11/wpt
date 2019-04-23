// META: global=jsshell
// META: script=/wasm/core/harness.js

// func.wast:3
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xe7\x80\x80\x80\x00\x13\x60\x00\x00\x60\x00\x00\x60\x00\x01\x7f\x60\x01\x7f\x00\x60\x03\x7f\x7c\x7f\x01\x7f\x60\x00\x00\x60\x03\x7f\x7c\x7e\x00\x60\x02\x7f\x7c\x00\x60\x05\x7f\x7d\x7e\x7f\x7c\x00\x60\x04\x7f\x7d\x7e\x7f\x01\x7f\x60\x00\x01\x7e\x60\x00\x01\x7d\x60\x00\x01\x7c\x60\x02\x7f\x7f\x01\x7f\x60\x02\x7e\x7e\x01\x7e\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x60\x06\x7d\x7f\x7e\x7f\x7c\x7f\x01\x7c\x60\x01\x7f\x01\x7f\x03\xd0\x80\x80\x80\x00\x4f\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\x03\x06\x07\x08\x02\x01\x02\x03\x04\x02\x03\x04\x00\x05\x09\x00\x02\x0a\x0b\x0c\x02\x0a\x0b\x0c\x0c\x0d\x0e\x0f\x10\x0d\x0e\x0f\x10\x11\x00\x00\x02\x0a\x0b\x0c\x00\x02\x00\x02\x0a\x0b\x0c\x02\x00\x02\x0a\x0b\x0c\x02\x03\x12\x03\x12\x03\x12\x02\x0a\x0b\x0c\x07\x88\x87\x80\x80\x00\x39\x01\x66\x00\x02\x01\x67\x00\x04\x0a\x74\x79\x70\x65\x2d\x75\x73\x65\x2d\x31\x00\x14\x0a\x74\x79\x70\x65\x2d\x75\x73\x65\x2d\x32\x00\x15\x0a\x74\x79\x70\x65\x2d\x75\x73\x65\x2d\x33\x00\x16\x0a\x74\x79\x70\x65\x2d\x75\x73\x65\x2d\x34\x00\x17\x0a\x74\x79\x70\x65\x2d\x75\x73\x65\x2d\x35\x00\x18\x0a\x74\x79\x70\x65\x2d\x75\x73\x65\x2d\x36\x00\x19\x0a\x74\x79\x70\x65\x2d\x75\x73\x65\x2d\x37\x00\x1a\x0f\x6c\x6f\x63\x61\x6c\x2d\x66\x69\x72\x73\x74\x2d\x69\x33\x32\x00\x1f\x0f\x6c\x6f\x63\x61\x6c\x2d\x66\x69\x72\x73\x74\x2d\x69\x36\x34\x00\x20\x0f\x6c\x6f\x63\x61\x6c\x2d\x66\x69\x72\x73\x74\x2d\x66\x33\x32\x00\x21\x0f\x6c\x6f\x63\x61\x6c\x2d\x66\x69\x72\x73\x74\x2d\x66\x36\x34\x00\x22\x10\x6c\x6f\x63\x61\x6c\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x69\x33\x32\x00\x23\x10\x6c\x6f\x63\x61\x6c\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x69\x36\x34\x00\x24\x10\x6c\x6f\x63\x61\x6c\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x66\x33\x32\x00\x25\x10\x6c\x6f\x63\x61\x6c\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x66\x36\x34\x00\x26\x0b\x6c\x6f\x63\x61\x6c\x2d\x6d\x69\x78\x65\x64\x00\x27\x0f\x70\x61\x72\x61\x6d\x2d\x66\x69\x72\x73\x74\x2d\x69\x33\x32\x00\x28\x0f\x70\x61\x72\x61\x6d\x2d\x66\x69\x72\x73\x74\x2d\x69\x36\x34\x00\x29\x0f\x70\x61\x72\x61\x6d\x2d\x66\x69\x72\x73\x74\x2d\x66\x33\x32\x00\x2a\x0f\x70\x61\x72\x61\x6d\x2d\x66\x69\x72\x73\x74\x2d\x66\x36\x34\x00\x2b\x10\x70\x61\x72\x61\x6d\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x69\x33\x32\x00\x2c\x10\x70\x61\x72\x61\x6d\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x69\x36\x34\x00\x2d\x10\x70\x61\x72\x61\x6d\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x66\x33\x32\x00\x2e\x10\x70\x61\x72\x61\x6d\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x66\x36\x34\x00\x2f\x0b\x70\x61\x72\x61\x6d\x2d\x6d\x69\x78\x65\x64\x00\x30\x05\x65\x6d\x70\x74\x79\x00\x31\x0a\x76\x61\x6c\x75\x65\x2d\x76\x6f\x69\x64\x00\x32\x09\x76\x61\x6c\x75\x65\x2d\x69\x33\x32\x00\x33\x09\x76\x61\x6c\x75\x65\x2d\x69\x36\x34\x00\x34\x09\x76\x61\x6c\x75\x65\x2d\x66\x33\x32\x00\x35\x09\x76\x61\x6c\x75\x65\x2d\x66\x36\x34\x00\x36\x10\x76\x61\x6c\x75\x65\x2d\x62\x6c\x6f\x63\x6b\x2d\x76\x6f\x69\x64\x00\x37\x0f\x76\x61\x6c\x75\x65\x2d\x62\x6c\x6f\x63\x6b\x2d\x69\x33\x32\x00\x38\x0c\x72\x65\x74\x75\x72\x6e\x2d\x65\x6d\x70\x74\x79\x00\x39\x0a\x72\x65\x74\x75\x72\x6e\x2d\x69\x33\x32\x00\x3a\x0a\x72\x65\x74\x75\x72\x6e\x2d\x69\x36\x34\x00\x3b\x0a\x72\x65\x74\x75\x72\x6e\x2d\x66\x33\x32\x00\x3c\x0a\x72\x65\x74\x75\x72\x6e\x2d\x66\x36\x34\x00\x3d\x10\x72\x65\x74\x75\x72\x6e\x2d\x62\x6c\x6f\x63\x6b\x2d\x69\x33\x32\x00\x3e\x0b\x62\x72\x65\x61\x6b\x2d\x65\x6d\x70\x74\x79\x00\x3f\x09\x62\x72\x65\x61\x6b\x2d\x69\x33\x32\x00\x40\x09\x62\x72\x65\x61\x6b\x2d\x69\x36\x34\x00\x41\x09\x62\x72\x65\x61\x6b\x2d\x66\x33\x32\x00\x42\x09\x62\x72\x65\x61\x6b\x2d\x66\x36\x34\x00\x43\x0f\x62\x72\x65\x61\x6b\x2d\x62\x6c\x6f\x63\x6b\x2d\x69\x33\x32\x00\x44\x11\x62\x72\x65\x61\x6b\x2d\x62\x72\x5f\x69\x66\x2d\x65\x6d\x70\x74\x79\x00\x45\x0f\x62\x72\x65\x61\x6b\x2d\x62\x72\x5f\x69\x66\x2d\x6e\x75\x6d\x00\x46\x14\x62\x72\x65\x61\x6b\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x65\x6d\x70\x74\x79\x00\x47\x12\x62\x72\x65\x61\x6b\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x6e\x75\x6d\x00\x48\x1b\x62\x72\x65\x61\x6b\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x6e\x65\x73\x74\x65\x64\x2d\x65\x6d\x70\x74\x79\x00\x49\x19\x62\x72\x65\x61\x6b\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x6e\x65\x73\x74\x65\x64\x2d\x6e\x75\x6d\x00\x4a\x0e\x69\x6e\x69\x74\x2d\x6c\x6f\x63\x61\x6c\x2d\x69\x33\x32\x00\x4b\x0e\x69\x6e\x69\x74\x2d\x6c\x6f\x63\x61\x6c\x2d\x69\x36\x34\x00\x4c\x0e\x69\x6e\x69\x74\x2d\x6c\x6f\x63\x61\x6c\x2d\x66\x33\x32\x00\x4d\x0e\x69\x6e\x69\x74\x2d\x6c\x6f\x63\x61\x6c\x2d\x66\x36\x34\x00\x4e\x0a\x8f\x87\x80\x80\x00\x4f\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x84\x80\x80\x80\x00\x01\x01\x7f\x0b\x84\x80\x80\x80\x00\x01\x01\x7f\x0b\x88\x80\x80\x80\x00\x03\x01\x7f\x01\x7c\x01\x7e\x0b\x86\x80\x80\x80\x00\x02\x01\x7f\x01\x7c\x0b\x8c\x80\x80\x80\x00\x05\x01\x7f\x01\x7d\x01\x7e\x01\x7f\x01\x7c\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x83\x80\x80\x80\x00\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x84\x80\x80\x80\x00\x00\x41\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x84\x80\x80\x80\x00\x00\x41\x00\x0b\x84\x80\x80\x80\x00\x00\x41\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x84\x80\x80\x80\x00\x00\x41\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x90\x80\x80\x80\x00\x06\x01\x7d\x01\x7f\x01\x7e\x01\x7f\x01\x7c\x01\x7f\x00\x00\x0b\x90\x80\x80\x80\x00\x06\x01\x7d\x01\x7f\x01\x7e\x01\x7f\x01\x7c\x01\x7f\x00\x00\x0b\x86\x80\x80\x80\x00\x01\x02\x7f\x20\x00\x0b\x86\x80\x80\x80\x00\x01\x02\x7e\x20\x00\x0b\x86\x80\x80\x80\x00\x01\x02\x7d\x20\x00\x0b\x86\x80\x80\x80\x00\x01\x02\x7c\x20\x00\x0b\x86\x80\x80\x80\x00\x01\x02\x7f\x20\x01\x0b\x86\x80\x80\x80\x00\x01\x02\x7e\x20\x01\x0b\x86\x80\x80\x80\x00\x01\x02\x7d\x20\x01\x0b\x86\x80\x80\x80\x00\x01\x02\x7c\x20\x01\x0b\xa8\x80\x80\x80\x00\x06\x01\x7d\x01\x7f\x01\x7e\x01\x7f\x01\x7c\x01\x7f\x20\x00\x8c\x1a\x20\x01\x45\x1a\x20\x02\x50\x1a\x20\x03\x45\x1a\x20\x04\x9a\x1a\x20\x05\x45\x1a\x20\x04\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x84\x80\x80\x80\x00\x00\x20\x01\x0b\x84\x80\x80\x80\x00\x00\x20\x01\x0b\x84\x80\x80\x80\x00\x00\x20\x01\x0b\x84\x80\x80\x80\x00\x00\x20\x01\x0b\x9c\x80\x80\x80\x00\x00\x20\x00\x8c\x1a\x20\x01\x45\x1a\x20\x02\x50\x1a\x20\x03\x45\x1a\x20\x04\x9a\x1a\x20\x05\x45\x1a\x20\x04\x0b\x82\x80\x80\x80\x00\x00\x0b\x84\x80\x80\x80\x00\x00\x10\x00\x0b\x85\x80\x80\x80\x00\x00\x41\xcd\x00\x0b\x85\x80\x80\x80\x00\x00\x42\xe1\x3c\x0b\x87\x80\x80\x80\x00\x00\x43\x66\x66\x9b\x42\x0b\x8b\x80\x80\x80\x00\x00\x44\xe1\x7a\x14\xae\x47\x71\x53\x40\x0b\x89\x80\x80\x80\x00\x00\x02\x40\x10\x00\x10\x00\x0b\x0b\x8a\x80\x80\x80\x00\x00\x02\x7f\x10\x00\x41\xcd\x00\x0b\x0b\x83\x80\x80\x80\x00\x00\x0f\x0b\x86\x80\x80\x80\x00\x00\x41\xce\x00\x0f\x0b\x86\x80\x80\x80\x00\x00\x42\xc6\x3d\x0f\x0b\x88\x80\x80\x80\x00\x00\x43\x66\x66\x9d\x42\x0f\x0b\x8c\x80\x80\x80\x00\x00\x44\x52\xb8\x1e\x85\xeb\xb1\x53\x40\x0f\x0b\x8b\x80\x80\x80\x00\x00\x02\x7f\x10\x00\x41\xcd\x00\x0b\x0f\x0b\x84\x80\x80\x80\x00\x00\x0c\x00\x0b\x87\x80\x80\x80\x00\x00\x41\xcf\x00\x0c\x00\x0b\x87\x80\x80\x80\x00\x00\x42\xab\x3e\x0c\x00\x0b\x89\x80\x80\x80\x00\x00\x43\xcd\xcc\x9f\x42\x0c\x00\x0b\x8d\x80\x80\x80\x00\x00\x44\xc3\xf5\x28\x5c\x8f\xf2\x53\x40\x0c\x00\x0b\x8c\x80\x80\x80\x00\x00\x02\x7f\x10\x00\x41\xcd\x00\x0b\x0c\x00\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x0d\x00\x0b\x8b\x80\x80\x80\x00\x00\x41\x32\x20\x00\x0d\x00\x1a\x41\x33\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x0e\x02\x00\x00\x00\x0b\x8c\x80\x80\x80\x00\x00\x41\x32\x20\x00\x0e\x01\x00\x00\x41\x33\x0b\x8c\x80\x80\x80\x00\x00\x02\x40\x20\x00\x0e\x02\x00\x01\x00\x0b\x0b\x93\x80\x80\x80\x00\x00\x02\x7f\x41\x32\x20\x00\x0e\x02\x00\x01\x00\x41\x33\x0b\x41\x02\x6a\x0b\x86\x80\x80\x80\x00\x01\x01\x7f\x20\x00\x0b\x86\x80\x80\x80\x00\x01\x01\x7e\x20\x00\x0b\x86\x80\x80\x80\x00\x01\x01\x7d\x20\x00\x0b\x86\x80\x80\x80\x00\x01\x01\x7c\x20\x00\x0b");

// func.wast:171
assert_return(() => call($1, "type-use-1", []));

// func.wast:172
assert_return(() => call($1, "type-use-2", []), 0);

// func.wast:173
assert_return(() => call($1, "type-use-3", [1]));

// func.wast:174
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x00\x00\x60\x03\x7f\x7c\x7f\x01\x7f\x02\x91\x80\x80\x80\x00\x01\x02\x24\x31\x0a\x74\x79\x70\x65\x2d\x75\x73\x65\x2d\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x41\x01\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x41\x01\x10\x00\x01\x41\x00\x01\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "type-use-4", [1, 1., 1]), 0)

// func.wast:178
assert_return(() => call($1, "type-use-5", []), 0);

// func.wast:179
assert_return(() => call($1, "type-use-6", [1]));

// func.wast:180
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x00\x00\x60\x03\x7f\x7c\x7f\x01\x7f\x02\x91\x80\x80\x80\x00\x01\x02\x24\x31\x0a\x74\x79\x70\x65\x2d\x75\x73\x65\x2d\x37\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x41\x01\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x41\x01\x10\x00\x01\x41\x00\x01\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "type-use-7", [1, 1., 1]), 0)

// func.wast:185
assert_return(() => call($1, "local-first-i32", []), 0);

// func.wast:186
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x96\x80\x80\x80\x00\x01\x02\x24\x31\x0f\x6c\x6f\x63\x61\x6c\x2d\x66\x69\x72\x73\x74\x2d\x69\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "local-first-i64", []), int64("0"))

// func.wast:187
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x96\x80\x80\x80\x00\x01\x02\x24\x31\x0f\x6c\x6f\x63\x61\x6c\x2d\x66\x69\x72\x73\x74\x2d\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "local-first-f32", []), 0.)

// func.wast:188
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x96\x80\x80\x80\x00\x01\x02\x24\x31\x0f\x6c\x6f\x63\x61\x6c\x2d\x66\x69\x72\x73\x74\x2d\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x00\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "local-first-f64", []), 0.)

// func.wast:189
assert_return(() => call($1, "local-second-i32", []), 0);

// func.wast:190
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x97\x80\x80\x80\x00\x01\x02\x24\x31\x10\x6c\x6f\x63\x61\x6c\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x69\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "local-second-i64", []), int64("0"))

// func.wast:191
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x97\x80\x80\x80\x00\x01\x02\x24\x31\x10\x6c\x6f\x63\x61\x6c\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "local-second-f32", []), 0.)

// func.wast:192
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x97\x80\x80\x80\x00\x01\x02\x24\x31\x10\x6c\x6f\x63\x61\x6c\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x00\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "local-second-f64", []), 0.)

// func.wast:193
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x92\x80\x80\x80\x00\x01\x02\x24\x31\x0b\x6c\x6f\x63\x61\x6c\x2d\x6d\x69\x78\x65\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x00\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "local-mixed", []), 0.)

// func.wast:195
assert_return(() => call($1, "param-first-i32", [2, 3]), 2);

// func.wast:198
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7e\x7e\x01\x7e\x02\x96\x80\x80\x80\x00\x01\x02\x24\x31\x0f\x70\x61\x72\x61\x6d\x2d\x66\x69\x72\x73\x74\x2d\x69\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x02\x40\x42\x02\x42\x03\x10\x00\x01\x42\x02\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "param-first-i64", [int64("2"), int64("3")]), int64("2"))

// func.wast:201
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x96\x80\x80\x80\x00\x01\x02\x24\x31\x0f\x70\x61\x72\x61\x6d\x2d\x66\x69\x72\x73\x74\x2d\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x00\x40\x43\x00\x00\x40\x40\x10\x00\xbc\x43\x00\x00\x00\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "param-first-f32", [2., 3.]), 2.)

// func.wast:204
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7c\x7c\x01\x7c\x02\x96\x80\x80\x80\x00\x01\x02\x24\x31\x0f\x70\x61\x72\x61\x6d\x2d\x66\x69\x72\x73\x74\x2d\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xb0\x80\x80\x80\x00\x01\xaa\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\x00\x40\x44\x00\x00\x00\x00\x00\x00\x08\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x40\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "param-first-f64", [2., 3.]), 2.)

// func.wast:207
assert_return(() => call($1, "param-second-i32", [2, 3]), 3);

// func.wast:210
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7e\x7e\x01\x7e\x02\x97\x80\x80\x80\x00\x01\x02\x24\x31\x10\x70\x61\x72\x61\x6d\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x69\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x02\x40\x42\x02\x42\x03\x10\x00\x01\x42\x03\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "param-second-i64", [int64("2"), int64("3")]), int64("3"))

// func.wast:213
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x97\x80\x80\x80\x00\x01\x02\x24\x31\x10\x70\x61\x72\x61\x6d\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x00\x40\x43\x00\x00\x40\x40\x10\x00\xbc\x43\x00\x00\x40\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "param-second-f32", [2., 3.]), 3.)

// func.wast:216
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7c\x7c\x01\x7c\x02\x97\x80\x80\x80\x00\x01\x02\x24\x31\x10\x70\x61\x72\x61\x6d\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xb0\x80\x80\x80\x00\x01\xaa\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\x00\x40\x44\x00\x00\x00\x00\x00\x00\x08\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x08\x40\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "param-second-f64", [2., 3.]), 3.)

// func.wast:220
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8e\x80\x80\x80\x00\x02\x60\x00\x00\x60\x06\x7d\x7f\x7e\x7f\x7c\x7f\x01\x7c\x02\x92\x80\x80\x80\x00\x01\x02\x24\x31\x0b\x70\x61\x72\x61\x6d\x2d\x6d\x69\x78\x65\x64\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xb4\x80\x80\x80\x00\x01\xae\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x80\x3f\x41\x02\x42\x03\x41\x04\x44\x00\x00\x00\x00\x00\x00\x16\x40\x41\x06\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x16\x40\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "param-mixed", [1., 2, int64("3"), 4, 5.5, 6]), 5.5)

// func.wast:228
assert_return(() => call($1, "empty", []));

// func.wast:229
assert_return(() => call($1, "value-void", []));

// func.wast:230
assert_return(() => call($1, "value-i32", []), 77);

// func.wast:231
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x90\x80\x80\x80\x00\x01\x02\x24\x31\x09\x76\x61\x6c\x75\x65\x2d\x69\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\xe1\x3c\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "value-i64", []), int64("7777"))

// func.wast:232
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x90\x80\x80\x80\x00\x01\x02\x24\x31\x09\x76\x61\x6c\x75\x65\x2d\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x66\x66\x9b\x42\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "value-f32", []), 77.6999969482)

// func.wast:233
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x90\x80\x80\x80\x00\x01\x02\x24\x31\x09\x76\x61\x6c\x75\x65\x2d\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\xe1\x7a\x14\xae\x47\x71\x53\x40\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "value-f64", []), 77.77)

// func.wast:234
assert_return(() => call($1, "value-block-void", []));

// func.wast:235
assert_return(() => call($1, "value-block-i32", []), 77);

// func.wast:237
assert_return(() => call($1, "return-empty", []));

// func.wast:238
assert_return(() => call($1, "return-i32", []), 78);

// func.wast:239
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x91\x80\x80\x80\x00\x01\x02\x24\x31\x0a\x72\x65\x74\x75\x72\x6e\x2d\x69\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\xc6\x3d\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "return-i64", []), int64("7878"))

// func.wast:240
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x91\x80\x80\x80\x00\x01\x02\x24\x31\x0a\x72\x65\x74\x75\x72\x6e\x2d\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x66\x66\x9d\x42\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "return-f32", []), 78.6999969482)

// func.wast:241
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x91\x80\x80\x80\x00\x01\x02\x24\x31\x0a\x72\x65\x74\x75\x72\x6e\x2d\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x52\xb8\x1e\x85\xeb\xb1\x53\x40\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "return-f64", []), 78.78)

// func.wast:242
assert_return(() => call($1, "return-block-i32", []), 77);

// func.wast:244
assert_return(() => call($1, "break-empty", []));

// func.wast:245
assert_return(() => call($1, "break-i32", []), 79);

// func.wast:246
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x90\x80\x80\x80\x00\x01\x02\x24\x31\x09\x62\x72\x65\x61\x6b\x2d\x69\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\xab\x3e\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "break-i64", []), int64("7979"))

// func.wast:247
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x90\x80\x80\x80\x00\x01\x02\x24\x31\x09\x62\x72\x65\x61\x6b\x2d\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\xcd\xcc\x9f\x42\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "break-f32", []), 79.9000015259)

// func.wast:248
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x90\x80\x80\x80\x00\x01\x02\x24\x31\x09\x62\x72\x65\x61\x6b\x2d\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\xc3\xf5\x28\x5c\x8f\xf2\x53\x40\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "break-f64", []), 79.79)

// func.wast:249
assert_return(() => call($1, "break-block-i32", []), 77);

// func.wast:251
assert_return(() => call($1, "break-br_if-empty", [0]));

// func.wast:252
assert_return(() => call($1, "break-br_if-empty", [2]));

// func.wast:253
assert_return(() => call($1, "break-br_if-num", [0]), 51);

// func.wast:254
assert_return(() => call($1, "break-br_if-num", [1]), 50);

// func.wast:256
assert_return(() => call($1, "break-br_table-empty", [0]));

// func.wast:257
assert_return(() => call($1, "break-br_table-empty", [1]));

// func.wast:258
assert_return(() => call($1, "break-br_table-empty", [5]));

// func.wast:259
assert_return(() => call($1, "break-br_table-empty", [-1]));

// func.wast:260
assert_return(() => call($1, "break-br_table-num", [0]), 50);

// func.wast:261
assert_return(() => call($1, "break-br_table-num", [1]), 50);

// func.wast:262
assert_return(() => call($1, "break-br_table-num", [10]), 50);

// func.wast:263
assert_return(() => call($1, "break-br_table-num", [-100]), 50);

// func.wast:264
assert_return(() => call($1, "break-br_table-nested-empty", [0]));

// func.wast:265
assert_return(() => call($1, "break-br_table-nested-empty", [1]));

// func.wast:266
assert_return(() => call($1, "break-br_table-nested-empty", [3]));

// func.wast:267
assert_return(() => call($1, "break-br_table-nested-empty", [-2]));

// func.wast:268
assert_return(() => call($1, "break-br_table-nested-num", [0]), 52);

// func.wast:271
assert_return(() => call($1, "break-br_table-nested-num", [1]), 50);

// func.wast:274
assert_return(() => call($1, "break-br_table-nested-num", [2]), 52);

// func.wast:277
assert_return(() => call($1, "break-br_table-nested-num", [-3]), 52);

// func.wast:281
assert_return(() => call($1, "init-local-i32", []), 0);

// func.wast:282
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7e\x02\x95\x80\x80\x80\x00\x01\x02\x24\x31\x0e\x69\x6e\x69\x74\x2d\x6c\x6f\x63\x61\x6c\x2d\x69\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x02\x40\x10\x00\x01\x42\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "init-local-i64", []), int64("0"))

// func.wast:283
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7d\x02\x95\x80\x80\x80\x00\x01\x02\x24\x31\x0e\x69\x6e\x69\x74\x2d\x6c\x6f\x63\x61\x6c\x2d\x66\x33\x32\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "init-local-f32", []), 0.)

// func.wast:284
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7c\x02\x95\x80\x80\x80\x00\x01\x02\x24\x31\x0e\x69\x6e\x69\x74\x2d\x6c\x6f\x63\x61\x6c\x2d\x66\x36\x34\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9e\x80\x80\x80\x00\x01\x98\x80\x80\x80\x00\x00\x02\x40\x10\x00\xbd\x44\x00\x00\x00\x00\x00\x00\x00\x00\xbd\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "init-local-f64", []), 0.)

// func.wast:289
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x03\x60\x01\x7f\x00\x60\x00\x01\x7c\x60\x00\x00\x03\x86\x80\x80\x80\x00\x05\x01\x00\x00\x01\x02\x0a\xbd\x80\x80\x80\x00\x05\x8b\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x8b\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x00\x10\x02\x10\x03\x1a\x0b");

// func.wast:302
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x01\x7f\x00\x60\x00\x01\x7c\x03\x85\x80\x80\x80\x00\x04\x01\x00\x01\x02\x0a\xaf\x80\x80\x80\x00\x04\x8b\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x8b\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x0b\x82\x80\x80\x80\x00\x00\x0b");

// func.wast:315
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x9d\x80\x80\x80\x00\x04\x60\x00\x00\x60\x00\x00\x60\x08\x7e\x7e\x7c\x7e\x7c\x7e\x7d\x7f\x00\x60\x08\x7c\x7e\x7c\x7e\x7c\x7e\x7d\x7f\x00\x03\x8c\x80\x80\x80\x00\x0b\x00\x03\x00\x03\x03\x02\x02\x00\x00\x00\x00\x04\x85\x80\x80\x80\x00\x01\x70\x01\x07\x07\x07\xf7\x80\x80\x80\x00\x04\x19\x73\x69\x67\x6e\x61\x74\x75\x72\x65\x2d\x65\x78\x70\x6c\x69\x63\x69\x74\x2d\x72\x65\x75\x73\x65\x64\x00\x07\x19\x73\x69\x67\x6e\x61\x74\x75\x72\x65\x2d\x69\x6d\x70\x6c\x69\x63\x69\x74\x2d\x72\x65\x75\x73\x65\x64\x00\x08\x1c\x73\x69\x67\x6e\x61\x74\x75\x72\x65\x2d\x65\x78\x70\x6c\x69\x63\x69\x74\x2d\x64\x75\x70\x6c\x69\x63\x61\x74\x65\x00\x09\x1c\x73\x69\x67\x6e\x61\x74\x75\x72\x65\x2d\x69\x6d\x70\x6c\x69\x63\x69\x74\x2d\x64\x75\x70\x6c\x69\x63\x61\x74\x65\x00\x0a\x09\x8d\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x07\x04\x02\x01\x04\x00\x05\x06\x0a\xb0\x82\x80\x80\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x82\x80\x80\x80\x00\x00\x0b\x8c\x80\x80\x80\x00\x00\x41\x01\x11\x00\x00\x41\x04\x11\x00\x00\x0b\x89\x81\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x43\x00\x00\x00\x00\x41\x00\x41\x00\x11\x03\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x43\x00\x00\x00\x00\x41\x00\x41\x02\x11\x03\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x43\x00\x00\x00\x00\x41\x00\x41\x03\x11\x03\x00\x0b\x87\x80\x80\x80\x00\x00\x41\x01\x11\x01\x00\x0b\xce\x80\x80\x80\x00\x00\x42\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x43\x00\x00\x00\x00\x41\x00\x41\x05\x11\x02\x00\x42\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x42\x00\x43\x00\x00\x00\x00\x41\x00\x41\x06\x11\x02\x00\x0b");

// func.wast:378
assert_return(() => call($3, "signature-explicit-reused", []));

// func.wast:379
assert_return(() => call($3, "signature-implicit-reused", []));

// func.wast:380
assert_return(() => call($3, "signature-explicit-duplicate", []));

// func.wast:381
assert_return(() => call($3, "signature-implicit-duplicate", []));

// func.wast:386
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:393
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:400
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:407
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:414
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:421
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:428
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:435
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:442
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:449
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:460
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x01\x01\x7f\x20\x00\x0b");

// func.wast:464
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x01\x01\x7d\x20\x00\x45\x0b");

// func.wast:468
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x02\x01\x7c\x01\x7e\x20\x01\x9a\x0b");

// func.wast:476
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x20\x00\x0b");

// func.wast:480
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x7d\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x20\x00\x45\x0b");

// func.wast:484
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x02\x7c\x7e\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x20\x01\x9a\x0b");

// func.wast:492
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x00\x02\x7f\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x89\x80\x80\x80\x00\x01\x83\x80\x80\x80\x00\x00\x00\x0b");

// func.wast:496
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x00\x02\x7f\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x89\x80\x80\x80\x00\x01\x83\x80\x80\x80\x00\x00\x00\x0b");

// func.wast:505
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b");

// func.wast:509
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b");

// func.wast:513
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b");

// func.wast:517
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b");

// func.wast:522
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x89\x80\x80\x80\x00\x01\x83\x80\x80\x80\x00\x00\x01\x0b");

// func.wast:528
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x41\x00\x0b");

// func.wast:534
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\x0b");

// func.wast:541
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x89\x80\x80\x80\x00\x01\x83\x80\x80\x80\x00\x00\x0f\x0b");

// func.wast:547
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x01\x0f\x0b");

// func.wast:553
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\x0f\x0b");

// func.wast:560
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x0f\x41\x01\x0b");

// func.wast:566
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x01\x0f\x41\x01\x0b");

// func.wast:572
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x42\x01\x0f\x41\x01\x0b");

// func.wast:578
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x42\x01\x0f\x41\x01\x0f\x0b");

// func.wast:585
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x0c\x00\x0b");

// func.wast:591
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\x0c\x00\x0b");

// func.wast:597
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x0c\x00\x41\x01\x0b");

// func.wast:603
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x42\x01\x0c\x00\x41\x01\x0b");

// func.wast:609
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x42\x01\x0c\x00\x41\x01\x0c\x00\x0b");

// func.wast:616
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x02\x40\x0c\x01\x0b\x41\x01\x0c\x00\x0b");

// func.wast:622
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x92\x80\x80\x80\x00\x01\x8c\x80\x80\x80\x00\x00\x02\x40\x01\x0c\x01\x0b\x41\x01\x0c\x00\x0b");

// func.wast:628
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x42\x01\x0c\x01\x0b\x41\x01\x0c\x00\x0b");

// func.wast:638
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:642
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:646
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:650
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:654
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// func.wast:658
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");
