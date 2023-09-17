export const handleApiError = (error) => {
  let errorMessage = 'An error occurred. Please try again later.';

  if (error.response) {
    const { status, data } = error.response;

    if (status === 404) {
      errorMessage = 'Resource not found.';
    } else if (status === 403) {
      errorMessage = 'Forbidden. You do not have permission to access this resource.';
    } else if (status === 500) {
      errorMessage = 'Internal server error. Please try again later.';
    } else if (data && data.message) {
      errorMessage = data.message;
    }
  } else if (error.request) {
    errorMessage = 'No response received from the server. Please try again later.';
  }

  console.error(error);
  console.error(errorMessage);

  return errorMessage;
};
