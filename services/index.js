export const register_user = async (formData) => {
  try {
    const res = await fetch(
      "https://book-crud-service-6dmqxfovfq-et.a.run.app/api/register",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log("Error in register_user (service) => ", error);
    return error.message;
  }
};

export const login_user = async (formData) => {
  try {
    const res = await fetch(
      "https://book-crud-service-6dmqxfovfq-et.a.run.app/api/login",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log("Error in login_user (service) => ", error);
    return error.message;
  }
};
