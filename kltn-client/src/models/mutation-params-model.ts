interface MutationParamsModel<T> {
    page: number;
    pageSize?: number;
    searchCondition?: T;
}