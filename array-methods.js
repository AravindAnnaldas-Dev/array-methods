// push
const array_push = [1, 2, 3, 4, 5];
array_push.push(9);
console.log(array_push, "array_push");

// pop
const array_pop = [1, 2, 3, 4, 5];
array_pop.pop();
console.log(array_pop, "array_pop");

// shift
const array_shift = [1, 2, 3, 4, 5];
array_shift.shift();
console.log(array_shift, "array_shift");

// shift
const array_unShift = [1, 2, 3, 4, 5];
array_unShift.unshift(9);
console.log(array_unShift, "array_unShift");

// splice
const array_splice = [1, 2, 3, 4, 5];
array_splice.splice(2, 1); // having of three parameters startIndex, count and no.of items to add
console.log(array_splice, "array_splice");

// sort
const array_sort = [7, 9, 4, 1, 5, 8];
array_sort.sort((a, b) => a - b); // ascending order
array_sort.sort((a, b) => b - a); // descending order
console.log(array_sort, "array_sort");

// reverse
const array_reverse = [1, 2, 3, 4, 5];
array_reverse.reverse();
console.log(array_reverse, "array_reverse");

// fill
const array_fill = [1, 2, 3, 4, 5];
array_fill.fill("hi", 1, 4); // having of three parameters value, startIndex and endIndex
console.log(array_fill, "array_fill");

// copyWithIn
const array_copyWithIn = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array_copyWithIn.copyWithin(1, 4, 9); // having of three parameters targetIndex, StartIndex and endIndex
console.log(array_copyWithIn, "array_copyWithIn");

// concat
const array_concat1 = [1, 2, 3];
const array_concat2 = [4, 5, 6];
const array_concat_resut = array_concat1.concat(array_concat2);
console.log(array_concat_resut, "array_concat_resut");

// slice
const array_slice = [1, 2, 3, 4, 5];
const array_slice_result = array_slice.slice(2, 3); // having two parameters startIndex and endIndex
console.log(array_slice_result, "array_slice_result");

// includes
const array_includes = [1, 2, 3, 4, 5];
array_includes.includes(4, 4); // having of two parameters value and fromIndex
console.log(array_includes.includes(4, 4));

// indexOf
const array_indexOf = [1, 2, 3, 4, 3, 6];
array_indexOf.indexOf(3); // having of two parameters value and fromIndex
console.log(array_indexOf.indexOf(3));

// lastIndexOf
const array_lastIndexOf = [1, 2, 3, 4, 3, 6];
array_lastIndexOf.lastIndexOf(3);
console.log(array_lastIndexOf.lastIndexOf(3));

// join
const array_join = [1, 2, 3, 4, 5];
const array_join_result = array_join.join(""); // having of one parameter is seperator
console.log(array_join_result, "array_join_result");

// toString
const array_toString = [1, 2, 3, 4, 5];
const array_toString_result = array_toString.toString();
console.log(array_toString_result, "array_toString_result");

// toLocalString
const array_toLocalString = [100000, 100000];
const array_toLocalString_result = array_toLocalString.toLocaleString("en-IN", {
  style: "currency",
  currency: "INR",
});
console.log(array_toLocalString_result, "array_toLocalString_result");

// flat
const array_flat = [1, [2, [3, [4]]]];
const array_flat_result = array_flat.flat(Infinity); // default as 1
console.log(array_flat_result, "array_flat_result");

// flatMap
const array_flatMap = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
const array_flatMap_result = array_flatMap.flatMap((item) => item);
console.log(array_flatMap_result, "array_flatMap_result");

// forEach
const array_forEach = [1, 2, 3, 4, 5];
const array_forEach_result = array_forEach.forEach((item) => {
  return item;
});
console.log(array_forEach_result, "array_forEach_result"); // assigning to a variable will return undefined value

// map
const array_map = [1, 2, 3, 4, 5];
const array_map_result = array_map.map((item) => item * 2);
console.log(array_map_result, "array_map_result");

// filter
const array_filter = [1, 2, 3, 4, 5];
const array_filter_result = array_filter.filter((item) => item > 3);
console.log(array_filter_result, "array_filter_result");

// reduce
const array_reduce = [1, 2, 3, 4, 5];
const array_reduce_result = array_reduce.reduce((acc, item) => acc + item, 0);
console.log(array_reduce_result, "array_reduce_result"); // having one special property called accumulator

// reduceRight
const array_reduceRight = [1, 2, 3, 4, 5];
const array_reduceRight_result = array_reduceRight.reduceRight(
  (acc, item) => acc + item,
  0
);
console.log(array_reduceRight_result, "array_reduceRight_result");

// some
const array_some = [1, 2, 3, 4, 5];
const array_some_result = array_some.some((item) => item > 3);
console.log(array_some_result, "array_some_result");

// every
const array_every = [1, 2, 3, 4, 5];
const array_every_result = array_every.every((item) => item > 1);
console.log(array_every_result, "array_every_result");

// find
const array_find = [1, 2, 3, 4, 5];
const array_find_result = array_find.find((item) => item > 3);
console.log(array_find_result, "array_find_result");

// findIndex
const array_findIndex = [1, 2, 3, 4, 5];
const array_findIndex_result = array_findIndex.findIndex((item) => item > 3);
console.log(array_findIndex_result, "array_findIndex_result");

// keys
const array_keys = [1, 2, 3, 4, 5];
const array_keys_result = array_keys.keys();
console.log(array_keys_result, "array_keys_result");
array_keys_result.forEach((item) => console.log(item, "item_indexes")); // which will return indexes values

// values
const array_values = [1, 2, 3, 4, 5];
const array_values_result = array_values.values();
console.log(array_values_result, "array_values_result");
array_values_result.forEach((item) => console.log(item, "item_values")); // which will return element values

// entries
const array_entries = [1, 2, 3, 4, 5];
const array_entries_result = array_entries.entries();
console.log(array_entries_result, "array_entries_result");
array_entries_result.forEach(([key, value]) => console.log(key, value)); // which will return both keys and values

// Array.isArray
const array_isArray = [1, , 2, 3, 4, 5];
const aray_isArray_result = Array.isArray(array_isArray);
console.log(aray_isArray_result, "aray_isArray_result");

// Array.from
const array_from = "12345";
const array_from_result = Array.from(array_from);
console.log(array_from_result, "array_from_result");

// Array.of
const array_of1 = Array.of(5);
const array_of2 = Array.of(1, 2, 3, 4, 5);
console.log(array_of1, "array_of1");
console.log(array_of2, "array_of2");
