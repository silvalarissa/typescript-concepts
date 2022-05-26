type numberOrStr = number | string

function useState<S extends numberOrStr = string>() {
    let state: S

    function getState() {
        return state
    }

    function setState(newState: S) {
        state = newState
    }

    return { getState, setState }
}

const newState = useState()
newState.setState('1')