// Write all util functions here

// Paging function to set default list
export function paging(ctx) {
    let pager = {
        limit: 20,
        offset: 0
    }
    if (ctx.query['getAll'] && ctx.query['getAll'].toString() === 'true') {
        return {}
    }
    let page = ctx.query['page'] ? parseInt(ctx.query['page'].toString(), 10) : 1;
    let limit = ctx.query['limit'] ? parseInt(ctx.query['limit'].toString(), 10) : 20;
    pager.limit = limit;
    pager.offset = (page - 1) * limit;
    return pager;
}