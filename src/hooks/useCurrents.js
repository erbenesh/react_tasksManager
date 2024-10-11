import {useState, useCallback} from 'react'

export function useCurrents() {

    const [currentCategory, setCurrentCategory] = useState('incomingTasks');
    const [currentFilter, setCurrentFilter] = useState('');

    const chooseTasksCategory = useCallback((category) => {
        setCurrentCategory(category);
        setCurrentFilter('');
    }, []);

    const chooseFiltersCategory = useCallback((filter) => {
        setCurrentFilter(filter);
    }, []);

    return { chooseTasksCategory, chooseFiltersCategory, currentCategory, currentFilter }
}