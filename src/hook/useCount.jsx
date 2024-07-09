import * as React from 'react'

import { useState } from "react";

/**
 * A custom hook that manages a count state and an increment function.
 *
 * @return {Object} Object containing the count state and the increment function.
 */
function useCount() {
    const [count, setcount] = useState(0)

    function increment() {
        setcount(count + 1)
    }


    return {
        count,
        increment,
    }
}

export { useCount };