/**
 * @fileoverview 使用 await 调用该函数
 * @author 佐助
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "使用 await 调用该函数",
            category: "Fill me in",
            recommended: false
        },
        fixable: 'code',  // 要修复的话就把这个改为 code
        schema: [
            // fill in your schema
        ]
    },

    create: function(ctx) {
        return {
            'CallExpression' (node) {
                if (
                    node?.arguments?.length &&
                    node?.callee?.object?.type === 'ThisExpression' &&
                    node?.callee?.property?.name === '$nextTick'
                ) {
                    // 返回一个SourceCode对象，你可以使用该对象处理传递给 ESLint 的源代码。
                    const sourceCode = ctx.getSourceCode()
                    
                    // node.arguments 就是我们 this.$nextTick(我是参数函数) 里面的参数
                    // .body 就是参数函数体
                    // .body.body 就是参数函数体里面的具体代码
                    let content = `\n${Array.from(node.arguments[0].body.body)
                        .map(item => sourceCode.getText(item))
                        .join('\n')}`
                 
                    ctx.report({
                        node,
                        message: '使用 await 调用该函数',
                        fix(fixer) {
                            return [
                                // 给函数前面加个 await
                                fixer.insertTextBefore(node, 'await '),
                                // 删除 this.$nextTick(我是参数函数) 里面的参数
                                fixer.remove(node.arguments[0]),
                                // 把用户写的代码放到函数下面去
                                fixer.insertTextAfter(node , content)
                            ]
                        }
                    })
                }
            }
        }
    }
};
