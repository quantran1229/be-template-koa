"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paging = paging;

// Write all util functions here
// Paging function to set default list
function paging(ctx) {
  var pager = {
    limit: 20,
    offset: 0
  };

  if (ctx.query['getAll'] && ctx.query['getAll'].toString() === 'true') {
    return {};
  }

  var page = ctx.query['page'] ? parseInt(ctx.query['page'].toString(), 10) : 1;
  var limit = ctx.query['limit'] ? parseInt(ctx.query['limit'].toString(), 10) : 20;
  pager.limit = limit;
  pager.offset = (page - 1) * limit;
  return pager;
}