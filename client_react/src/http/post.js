const post = async (URL, body = {}) => {
  console.log("testing 1");
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  console.log(" testiing");
  return response;
};

export default post;
