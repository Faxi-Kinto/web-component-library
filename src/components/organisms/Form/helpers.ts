export const convertObjToFormData = (
  obj: Record<string, any>,
  stringifyObjects = true,
  path = '',
  formData = new FormData()
) => {
  if (obj === undefined) return;

  for (const prop in obj) {
    const newPath = path ? `${path}[${prop}]` : prop;
    if (typeof obj[prop] !== 'object') {
      if (obj[prop] instanceof File) {
        const file: File = obj[prop];
        // removed file.name (3rd param) due to tests failing for unknown reason
        formData.append(newPath, file);
      } else {
        formData.append(newPath, obj[prop]);
      }
    } else if (obj[prop] === null) {
      formData.append(newPath, obj[prop]);
    } else {
      if (stringifyObjects) {
        formData.append(newPath, JSON.stringify(obj[prop]));
      } else {
        convertObjToFormData(obj[prop], stringifyObjects, newPath, formData);
      }
    }
  }

  return formData;
};
