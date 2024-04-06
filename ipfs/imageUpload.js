const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0Y2Y0Y2I1MC1mNTk5LTRmNDMtYTgzMC1mZGUyOGYwMjUxMTIiLCJlbWFpbCI6ImpwcnNvbmkyMDE0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJhMTkzYTQ2NDE5NDllZDBlZDkxYiIsInNjb3BlZEtleVNlY3JldCI6Ijk3YjRkMjNkZGE0MDVkZmJmZmEzYzcwMjU5NmFkM2QwNjBlOTc1M2U0MDdiZDQyOWM4ZWY5ZmYzMDI2MWIxNzQiLCJpYXQiOjE3MTI0MjY4MTN9.STIHpvWIaUtELsTtVjiMJllyWfOsn53AeV6TbUCw5ao";

async function main() {
  try {
    const formData = new FormData();

    const file = fs.createReadStream("./assets/images/1.png");
    formData.append("file", file);

    const pinataMetadata = JSON.stringify({
      name: "File name",
    });
    formData.append("pinataMetadata", pinataMetadata);

    const pinataOptions = JSON.stringify({
      cidVersion: 1,
    });
    formData.append("pinataOptions", pinataOptions);

    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

main();
