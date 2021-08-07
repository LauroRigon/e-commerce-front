export function errorsToList(errors) {
  let errorsFlatten = []
  for (const errorsKey in errors) {
    // eslint-disable-next-line no-prototype-builtins
    if (!errors.hasOwnProperty(errorsKey)) {
      continue
    }

    errorsFlatten = [...errorsFlatten, errors[errorsKey].flat()]
  }

  return errorsFlatten.join("<br>")
}