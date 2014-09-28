'use strict'
describe("BlogPostCtrl", function () {
    beforeEach(module('exerciseApp'));
    var blogPostCtrl;
    beforeEach(inject(function ($controller) {
        blogPostCtrl = $controller('BlogPostCtrl', {})
    }));
    describe("variable  posts", function () {
        it("should exist", function () {
            expect(blogPostCtrl.posts).not.toBe(undefined);
        });
        it("should be an array", function () {
            expect(blogPostCtrl.posts instanceof Array).toBe(true);
        });
        it("should have properties id, name, pets", function () {
            expect(blogPostCtrl.posts[0]['id']).not.toBe(undefined);
            expect(blogPostCtrl.posts[0]['name']).not.toBe(undefined);
            expect(blogPostCtrl.posts[0]['pets']).not.toBe(undefined);
        });
        it("pets property should be an array", function() {
            expect(blogPostCtrl.posts[0]['pets'] instanceof Array).toBe(true);
        });
    });
});