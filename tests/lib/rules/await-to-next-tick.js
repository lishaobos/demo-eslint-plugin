/**
 * @fileoverview 使用 await 调用该函数
 * @author 佐助
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/await-to-next-tick"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("await-to-next-tick", rule, {

    valid: [
        `this.$nextTick()`
    ],

    invalid: [
        {
            code: `this.$nextTick(() => console.log(123))`,
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
