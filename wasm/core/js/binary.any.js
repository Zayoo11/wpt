// META: global=jsshell
// META: script=/wasm/core/harness.js

// binary.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:2
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:3
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");
let $M1 = $3;

// binary.wast:4
let $4 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");
let $M2 = $4;

// binary.wast:6
assert_malformed("");

// binary.wast:7
assert_malformed("\x01");

// binary.wast:8
assert_malformed("\x00\x61\x73");

// binary.wast:9
assert_malformed("\x61\x73\x6d\x00");

// binary.wast:10
assert_malformed("\x6d\x73\x61\x00");

// binary.wast:11
assert_malformed("\x6d\x73\x61\x00\x01\x00\x00\x00");

// binary.wast:12
assert_malformed("\x6d\x73\x61\x00\x00\x00\x00\x01");

// binary.wast:13
assert_malformed("\x61\x73\x6d\x01\x00\x00\x00\x00");

// binary.wast:14
assert_malformed("\x77\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:15
assert_malformed("\x7f\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:16
assert_malformed("\x80\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:17
assert_malformed("\x82\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:18
assert_malformed("\xff\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:21
assert_malformed("\x00\x00\x00\x01\x6d\x73\x61\x00");

// binary.wast:24
assert_malformed("\x61\x00\x6d\x73\x00\x01\x00\x00");

// binary.wast:25
assert_malformed("\x73\x6d\x00\x61\x00\x00\x01\x00");

// binary.wast:28
assert_malformed("\x00\x41\x53\x4d\x01\x00\x00\x00");

// binary.wast:31
assert_malformed("\x00\x81\xa2\x94\x01\x00\x00\x00");

// binary.wast:34
assert_malformed("\xef\xbb\xbf\x00\x61\x73\x6d\x01\x00\x00\x00");

// binary.wast:36
assert_malformed("\x00\x61\x73\x6d");

// binary.wast:37
assert_malformed("\x00\x61\x73\x6d\x01");

// binary.wast:38
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00");

// binary.wast:39
assert_malformed("\x00\x61\x73\x6d\x00\x00\x00\x00");

// binary.wast:40
assert_malformed("\x00\x61\x73\x6d\x0d\x00\x00\x00");

// binary.wast:41
assert_malformed("\x00\x61\x73\x6d\x0e\x00\x00\x00");

// binary.wast:42
assert_malformed("\x00\x61\x73\x6d\x00\x01\x00\x00");

// binary.wast:43
assert_malformed("\x00\x61\x73\x6d\x00\x00\x01\x00");

// binary.wast:44
assert_malformed("\x00\x61\x73\x6d\x00\x00\x00\x01");

// binary.wast:47
let $5 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x04\x01\x00\x82\x00");

// binary.wast:52
let $6 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x07\x01\x00\x82\x80\x80\x80\x00");

// binary.wast:59
let $7 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x07\x01\x7f\x00\x41\x80\x00\x0b");

// binary.wast:66
let $8 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x07\x01\x7f\x00\x41\xff\x7f\x0b");

// binary.wast:73
let $9 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\x80\x80\x80\x80\x00\x0b");

// binary.wast:80
let $10 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\xff\xff\xff\xff\x7f\x0b");

// binary.wast:88
let $11 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x07\x01\x7e\x00\x42\x80\x00\x0b");

// binary.wast:95
let $12 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x07\x01\x7e\x00\x42\xff\x7f\x0b");

// binary.wast:102
let $13 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x00\x0b");

// binary.wast:109
let $14 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\xff\xff\xff\xff\xff\xff\xff\xff\xff\x7f\x0b");

// binary.wast:118
let $15 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x03\x01\x00\x00\x0b\x07\x01\x80\x00\x41\x00\x0b\x00");

// binary.wast:128
let $16 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x04\x04\x01\x70\x00\x00\x09\x07\x01\x80\x00\x41\x00\x0b\x00");

// binary.wast:138
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x08\x01\x00\x82\x80\x80\x80\x80\x00");

// binary.wast:146
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x28\x02\x82\x80\x80\x80\x80\x00\x1a\x0b");

// binary.wast:165
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x28\x82\x80\x80\x80\x80\x00\x00\x1a\x0b");

// binary.wast:184
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x12\x01\x10\x01\x01\x7f\x41\x00\x41\x03\x36\x82\x80\x80\x80\x80\x00\x03\x0b");

// binary.wast:203
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x12\x01\x10\x01\x01\x7f\x41\x00\x41\x03\x36\x02\x82\x80\x80\x80\x80\x00\x0b");

// binary.wast:224
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0b\x01\x7f\x00\x41\x80\x80\x80\x80\x80\x00\x0b");

// binary.wast:234
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0b\x01\x7f\x00\x41\xff\xff\xff\xff\xff\x7f\x0b");

// binary.wast:245
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x10\x01\x7e\x00\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x80\x00\x0b");

// binary.wast:255
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x10\x01\x7e\x00\x42\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x7f\x0b");

// binary.wast:267
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x07\x01\x00\x82\x80\x80\x80\x70");

// binary.wast:275
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x07\x01\x00\x82\x80\x80\x80\x40");

// binary.wast:283
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x10\x01\x0e\x01\x01\x7f\x41\x00\x28\x02\x82\x80\x80\x80\x10\x1a\x0b");

// binary.wast:302
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x10\x01\x0e\x01\x01\x7f\x41\x00\x28\x02\x82\x80\x80\x80\x40\x1a\x0b");

// binary.wast:321
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x10\x01\x0e\x01\x01\x7f\x41\x00\x28\x82\x80\x80\x80\x10\x00\x1a\x0b");

// binary.wast:339
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x10\x01\x0e\x01\x01\x7f\x41\x00\x28\x82\x80\x80\x80\x40\x00\x1a\x0b");

// binary.wast:358
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x41\x03\x36\x82\x80\x80\x80\x10\x03\x0b");

// binary.wast:377
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x41\x03\x36\x82\x80\x80\x80\x40\x03\x0b");

// binary.wast:396
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x41\x03\x36\x03\x82\x80\x80\x80\x10\x0b");

// binary.wast:415
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x41\x03\x36\x02\x82\x80\x80\x80\x40\x0b");

// binary.wast:437
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\x80\x80\x80\x80\x70\x0b");

// binary.wast:447
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\xff\xff\xff\xff\x0f\x0b");

// binary.wast:457
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\x80\x80\x80\x80\x1f\x0b");

// binary.wast:467
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\xff\xff\xff\xff\x4f\x0b");

// binary.wast:478
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7e\x0b");

// binary.wast:488
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x0b");

// binary.wast:498
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x02\x0b");

// binary.wast:508
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\xff\xff\xff\xff\xff\xff\xff\xff\xff\x41\x0b");

// binary.wast:520
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x09\x01\x07\x00\x41\x00\x11\x00\x01\x0b");

// binary.wast:539
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x0a\x01\x07\x00\x41\x00\x11\x00\x80\x00\x0b");

// binary.wast:558
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x0b\x01\x08\x00\x41\x00\x11\x00\x80\x80\x00\x0b");

// binary.wast:576
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x0c\x01\x09\x00\x41\x00\x11\x00\x80\x80\x80\x00\x0b");

// binary.wast:594
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x04\x04\x01\x70\x00\x00\x0a\x0d\x01\x0a\x00\x41\x00\x11\x00\x80\x80\x80\x80\x00\x0b");

// binary.wast:613
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x09\x01\x07\x00\x41\x00\x40\x01\x1a\x0b");

// binary.wast:633
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0a\x01\x08\x00\x41\x00\x40\x80\x00\x1a\x0b");

// binary.wast:653
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0b\x01\x09\x00\x41\x00\x40\x80\x80\x00\x1a\x0b");

// binary.wast:672
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0c\x01\x0a\x00\x41\x00\x40\x80\x80\x80\x00\x1a\x0b");

// binary.wast:691
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0d\x01\x0b\x00\x41\x00\x40\x80\x80\x80\x80\x00\x1a\x0b");

// binary.wast:711
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x07\x01\x05\x00\x3f\x01\x1a\x0b");

// binary.wast:730
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x08\x01\x06\x00\x3f\x80\x00\x1a\x0b");

// binary.wast:749
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x09\x01\x07\x00\x3f\x80\x80\x00\x1a\x0b");

// binary.wast:767
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0a\x01\x08\x00\x3f\x80\x80\x80\x00\x1a\x0b");

// binary.wast:785
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x00\x0a\x0b\x01\x09\x00\x3f\x80\x80\x80\x80\x00\x1a\x0b");

// binary.wast:804
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0c\x01\x0a\x02\xff\xff\xff\xff\x0f\x7f\x02\x7e\x0b");

// binary.wast:821
let $17 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0a\x01\x08\x03\x00\x7f\x00\x7e\x02\x7d\x0b");

// binary.wast:836
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x03\x02\x00\x00");

// binary.wast:846
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x0a\x04\x01\x02\x00\x0b");

// binary.wast:855
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x03\x02\x00\x00\x0a\x04\x01\x02\x00\x0b");

// binary.wast:866
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x07\x02\x02\x00\x0b\x02\x00\x0b");

// binary.wast:877
let $18 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x03\x01\x00");

// binary.wast:883
let $19 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x0a\x01\x00");
