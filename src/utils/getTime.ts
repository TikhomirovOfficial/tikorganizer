export const getTime = (utime: number) => {
    const d = new Date(utime * 1000)
    const timeSplitted = d.toTimeString().split(':')
    return [timeSplitted[0], timeSplitted[1]].join(':')
}