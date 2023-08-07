const post = async (URL, body = {}) => {
  console.log("this is in post");
  const response = await fetch(URL, {
    // Corrected 'await' statement here by adding 'fetch' function
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const error = await response.json();
    console.log("response.error", error.error);
    throw new Error(`Status: ${response.status} Details: ${JSON.stringify(error.error)}`);
  }

  return response;
};

export default post;
