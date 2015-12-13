/**
 Objective
 Your friend is terrible at naming objects. We can see that from looking at the three she's created here:
 var widget = {
  foo: "bar"
}
 var gadget = {
  bar: "foo"
}
 var thingamabob = {
  bar: "food"
}
 Without changing the objects you want to add a description property to each object with a default value
 of "TODO: GIVE ME A DESCRIPTION" (the entire string), to eventually attach some explanation to these objects. The
 three objects have already been pre-loaded for you, so they will be available in your main code editor.
 Note: This is a contrived example for learning purposes. This actual example is not encouraged in practice,
 while the concept is worthwhile to understand.
 */

var widget = {
    foo: "bar"
};
var gadget = {
    bar: "foo"
};
var thingamabob = {
    bar: "food"
};

Object.prototype.description = "TODO: GIVE ME A DESCRIPTION";

var obj = {};
console.log(obj.description);