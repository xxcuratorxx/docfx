// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.
var mrefCommon = require('./ManagedReference.common.js');
var util = require('./statictoc.util.js');

exports.transform = function (model) {
  model = mrefCommon.transform(model);
  model._disableToc = model._disableToc || !model._tocPath || (model._navPath === model._tocPath);
  model = util.setToc(model);

  return { item: model };
}