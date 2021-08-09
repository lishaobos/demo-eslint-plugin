/**
 * @fileoverview 佐助的自定义规则
 * @author 佐助
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  // 引入所有的规则
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    // 自定义配置
    recommed: {
      plugins: ['zz-rule'],
      rules: {
        'zz-rule/await-to-next-tick': 2
      }
    }
  },
}



