const post = async (URL, body = {}) => {
  console.log("this is in post");
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  console.log(response, "this is post response");

  if (!response.ok) {
    const error = await response.json();

    // Split the error string into an array

    throw {
      status: response.status,
      error: error.error, // Assuming error.error is already an array
    };
  }

  const data = await response.json();
  return data;
};

export default post;
