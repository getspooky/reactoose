"use strict";
exports.__esModule = true;
var reactooseCLI = require('vorpal')();
var fs = require('fs');
var path = require('path');
var randomstring = require('randomstring');
var generateFile = function (fileFrom, fileTo, replaceValue) {
    fs.readFile(fileFrom, 'utf8', function (err, data) {
        if (err)
            throw err;
        var result = data.replace(/FileName/, replaceValue);
        fs.writeFile(fileTo, result, 'utf8', function (err) {
            if (err)
                throw err;
        });
    });
};
var kernel = function () {
    return reactooseCLI
        .delimiter('reactoose$').show()
        .command('create', '(reactoose 1.0.0 — cli) by Yasser Ameur')
        .option('--action [value]')
        .option('--reducer [value]')
        .option('--component [value]')
        .option('--cfunction [value]')
        .action(function (args, callback) {
        switch (true) {
            case (typeof args.options.action !== "undefined"):
                // code
                var newActionValue = args.options.action.length > 0 ? args.options.action :
                    randomstring.generate(8);
                generateFile(path.resolve(__dirname, '../../../', 'stubs', 'Action.stub'), path.resolve(__dirname, '../../', 'actions', newActionValue + ".tsx"), newActionValue);
                break;
            case (typeof args.options.reducer !== "undefined"):
                // code
                var newReducerValue = args.options.reducer.length > 0 ? args.options.reducer :
                    randomstring.generate(8);
                generateFile(path.resolve(__dirname, '../../../', 'stubs', 'Reducer.stub'), path.resolve(__dirname, '../../', 'reducers', newReducerValue + ".tsx"), newReducerValue);
                break;
            case (typeof args.options.component !== "undefined"):
                // code
                var newComponentClassValue = args.options.component.length > 0 ? args.options.component :
                    randomstring.generate(8);
                generateFile(path.resolve(__dirname, '../../../', 'stubs', 'ClassComponent.stub'), path.resolve(__dirname, '../../', 'components', 'pages', newComponentClassValue + ".tsx"), newComponentClassValue);
                break;
            case (typeof args.options.cfunction !== "undefined"):
                // code
                var newcFunctionClassValue = args.options.cfunction.length > 0 ? args.options.cfunction :
                    randomstring.generate(8);
                generateFile(path.resolve(__dirname, '../../../', 'stubs', 'FunComponent.stub'), path.resolve(__dirname, '../../', 'components', 'layouts', newcFunctionClassValue + ".tsx"), newcFunctionClassValue);
                break;
            default:
                console.log('run --help');
        }
        callback();
    });
};
exports["default"] = kernel;
