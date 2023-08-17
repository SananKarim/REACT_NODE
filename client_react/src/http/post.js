const post = async (URL, body = {}) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const error = await response.json();
    throw {
      status: response.status,
      error: error.error, 
    };
  }
  const data = await response.json();
  return data;
};

export default post;
