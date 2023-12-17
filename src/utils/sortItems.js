const sortItems = (items, arg = 'id') => {
    return items.slice().sort((a, b) => b[arg] - a[arg])
}

export default sortItems