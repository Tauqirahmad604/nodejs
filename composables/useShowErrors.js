export function useShowErrors(errors, place) {
  const backendErrors = ref([]);
  for (const [key, errorsArray] of Object.entries(errors)) {
    if (errorsArray.length > 0) {
      if (place === "translation") {
        backendErrors.value.push({
          message: errorsArray[0],
          path: key
        });
      }
    }
  }

  return {
    backendErrors
  };
}

