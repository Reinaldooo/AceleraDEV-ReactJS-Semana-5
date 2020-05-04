export const sortBy = (arr, by) => {
  if(!by) {
    return arr.sort((a,b) => a.name > b.name)
  }
}

export const searchFilter = (arr, value) => {
  if(!value) return sortBy(arr)
  return sortBy(arr.filter(({ name }) => name.toLowerCase().includes(value)))
}