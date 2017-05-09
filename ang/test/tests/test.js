var assert=require('assert');
describe("when new song needs to be added", function() {
beforeEach(function() {
var url="https://www.youtube.com/watch?v=JLuf28p8Ne0";
            var video_id = url.split('v=')[1];
});

it("should indicate that video_id length is 11", function() {
    var url="https://www.youtube.com/watch?v=JLuf28p8Ne0";
    var video_id = url.split('v=')[1];
assert.equal(video_id.length, 11, "kaka");
});
});
