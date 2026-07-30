import { useEffect, useState } from "react";

export function useAsync(asyncFn, deps = []) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let active = true
        setLoading(true)
        asyncFn().then((result) => {
            if (active) {
                setData(result)
                setLoading(false)
            }
        })
        return () => {active = false}
    }, deps)

    return {data, loading}
}