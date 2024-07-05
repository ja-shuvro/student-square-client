const BASE_URL = `http://studentsquare.org/`;

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

async function displaySelectedImage(
  event,
  imageId,
  link,
  name,
  db_value,
  newData
) {
  const input = event.target;
  const image = document.getElementById(imageId);
  const imageRef = document.getElementById(db_value);
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);

    // Upload image to server
    const formData = new FormData();
    formData.append(name, input.files[0]);
    const token = getCookie("token");

    try {
      const response = await fetch(
        `${BASE_URL}/ss-admin/p2/api/admin/${link}`,
        {
          // Replace 'upload_endpoint_url' with your actual endpoint URL
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      imageRef.value = data[newData].id;
      // console.log(imageRef.value);
      // console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

// Function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Function to handle form submission
async function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const form = document.getElementById("blogForm");
  const formData = new FormData(form);

  // Build the JSON object
  const data = {
    thumb: formData.get("thumbnails"),
    title: formData.get("title"),
    category_id: formData.get("category_id"),
    reading_time: formData.get("reading_time"),
    short_dis: formData.get("short_dis"),
    pera_one: {
      dis: formData.get("dis_one"),
      img: formData.get("midea_one"),
      img_ref: formData.get("img_ref_one"),
    },
    pera_two: {
      dis: formData.get("dis_two"),
      img: formData.get("midea_two"),
      img_ref: formData.get("img_ref_two"),
    },
    pera_three: {
      dis: formData.get("dis_three"),
      img: formData.get("midea_three"),
      img_ref: formData.get("img_ref_three"),
    },
    quotation: formData.get("quotation"),
    tags: formData.get("tags"),
  };

  const token = getCookie("token"); // Replace 'token' with the actual cookie name

  try {
    const response = await fetch(`${BASE_URL}/ss-admin/p2/api/admin/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    alert("Blog add successfully, Wait for approval!");
    form.reset();
  } catch (error) {
    console.error("Error:", error);
    // Handle error response
  }
}

// Add event listener to the form
document.getElementById("blogForm").addEventListener("submit", submitForm);
