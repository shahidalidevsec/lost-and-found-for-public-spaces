import dotenv from "dotenv";

dotenv.config();

const sendOTP = async (email, otp) => {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },

      body: JSON.stringify({
        from: "Lost & Found <onboarding@resend.dev>",
        to: [email],
        subject: "Lost & Found - Email Verification OTP",

        html: `
          <div style="font-family: Arial; max-width: 600px; margin: auto;">
            <h2>Lost & Found</h2>

            <p>Hello,</p>

            <p>Your email verification OTP is:</p>

            <h1 style="
              text-align: center;
              letter-spacing: 8px;
              background: #f3f4f6;
              padding: 20px;
            ">
              ${otp}
            </h1>

            <p>This OTP will expire in 10 minutes.</p>

            <p>If you did not create this account, ignore this email.</p>

            <hr>

            <p>Lost & Found Platform</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend error:", data);
      return false;
    }

    console.log("OTP sent to:", email);

    return true;

  } catch (error) {
    console.error("Email error:", error);
    return false;
  }
};

export default sendOTP;