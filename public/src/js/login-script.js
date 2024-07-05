const BASE_URL = `http://studentsquare.org/ss-admin/p1`;

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Example usage
const token = getCookie("token");
if (token) {
  window.location.href = "/dashboard";
}

document
  .getElementById("login-action")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission

    const submitButton = document.getElementById("submit-button");
    const spinner = document.getElementById("spinner");

    spinner.classList.remove("hidden");

    const formData = new FormData(this);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch(BASE_URL + "/auth/users/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 403) {
        alert("Verify your email first");
        window.location.href = `/verify/${
          document.getElementById("email").value
        }`;
      }
      if (response.status === 401) {
        alert("Invalid credentials, please check your email or password!");
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      document.cookie = `token=${result.token}; path=/; max-age=3600`;
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error:", error);
    } finally {
      spinner.classList.add("hidden");
    }
  });
