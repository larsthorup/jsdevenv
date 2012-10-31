/*global require,sinon,QUnit*/
require([
    "util/random"
], function () {
    "use strict";
    QUnit.module("util/random", {
        setup: function () {
            sinon.stub(Math, "random").returns(0.85);
        },
        teardown: function () {
            Math.random.restore();
        }
    });

    QUnit.test("randomBelow", function () {
        QUnit.equal(Math.randomBelow(6), 5, "6");
        QUnit.equal(Math.randomBelow(1), 0, "1");
        QUnit.throws(function () { Math.randomBelow(0); }, "invalid argument: 0", "0");
    });
});
