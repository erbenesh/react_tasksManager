import {useState, useCallback} from 'react'

export function useShowSome(mutShowCompletedTasks) {

    const [showCreateWindow, setShowCreateTaskWindow] = useState(false);
    const [showAbsoluteCreateWindow, setShowAbsoluteCreateWindow] = useState(false);
    const [showDisplayTasks, setShowDisplayTasks] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);

    const  onShowDisplayTasks = useCallback(() => {
        setShowDisplayTasks(!showDisplayTasks);
    }, [showDisplayTasks]);

    const onShowSidebar = useCallback(() => {
        setShowSidebar(!showSidebar);
    }, [showSidebar]);

    const onShowCreateWindow = useCallback(() => {
        setShowCreateTaskWindow(!showCreateWindow);
    }, [showCreateWindow]);

    const onShowAbsoluteCreateWindow = useCallback(() => {
        showCreateWindow && onShowCreateWindow();
        setShowAbsoluteCreateWindow(!showAbsoluteCreateWindow);
    }, [onShowCreateWindow, showAbsoluteCreateWindow, showCreateWindow]);

    const setCompletedTasksSetting = useCallback((value) => {

        mutShowCompletedTasks.mutate(value);

    }, [mutShowCompletedTasks]);

    const isClickOutside = useCallback(() => {
        setShowDisplayTasks(false);
    }, [setShowDisplayTasks]);


    const isClickOutsideCreateWindow = useCallback(() => {
        setShowAbsoluteCreateWindow(false);
    }, [setShowAbsoluteCreateWindow]);

    return {onShowDisplayTasks, onShowSidebar, onShowCreateWindow, onShowAbsoluteCreateWindow, 
            setShowDisplayTasks, setShowAbsoluteCreateWindow, showCreateWindow, showAbsoluteCreateWindow,
            showSidebar, showDisplayTasks, setCompletedTasksSetting, isClickOutside, isClickOutsideCreateWindow}
}