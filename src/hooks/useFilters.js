export function useFilters () {

    const filtersCategories = [
        {
            key: 'projects',
            name: 'Проекты',
        },
        {
            key: 'marks',
            name: 'Метки',
        },
        {
            key: 'filters',
            name: 'Фильтры',
        }
    ];

    return { filtersCategories }
}